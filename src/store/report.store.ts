import { create } from "zustand";
import { persist } from "zustand/middleware";
import api from "../api";
import { Report, ReportStatus, ReportCategory } from "../types/report.type";

export interface ReportState {
    reports: Report[];
    currentReport: Report | null;
    loading: boolean;
    error: string | null;
    message: string | null;
    total: number;
    page: number;
    totalPages: number;
    filters: ReportFilters;
    stats: ReportStats | null;
}

export interface ReportActions {
    createReport: (reportData: any) => Promise<Report | undefined>;
    getReport: (id: string) => Promise<Report | undefined>;
    getReports: (filters?: ReportFilters) => Promise<void>;
    updateReport: (id: string, updateData: UpdateReportData) => Promise<Report | undefined>;
    deleteReport: (id: string) => Promise<void>;

    // Filtered operations
    getUserReports: (userId: string, filters?: Omit<ReportFilters, 'submittedById'>) => Promise<void>;
    getReportStats: () => Promise<void>;
    bulkUpdateReports: (ids: string[], status: ReportStatus, notes?: string) => Promise<{ updatedCount: number }>;

    // UI helpers
    setFilters: (filters: Partial<ReportFilters>) => void;
    clearFilters: () => void;
    clearError: () => void;
    clearMessage: () => void;
    setCurrentReport: (report: Report | null) => void;
}

export interface CreateReportData {
    url?: string;
    description: string;
    evidence?: string;
    categories: ReportCategory[];
    screenshotPaths?: string[];
    submittedById: string;
}

export interface UpdateReportData {
    status?: ReportStatus;
    reviewerNotes?: string;
}

export interface ReportFilters {
    status?: ReportStatus;
    categories?: ReportCategory[];
    dateFrom?: Date | null;
    dateTo?: Date | null;
    search?: string;
    submittedById?: string;
    reviewedById?: string;
    page?: number;
    limit?: number;
}

export interface ReportStats {
    total: number;
    byStatus: Record<ReportStatus, number>;
    byCategory: Record<ReportCategory, number>;
}

type Store = ReportState & ReportActions;

export const useReportStore = create<Store>()(
    persist(
        (set, get) => ({
            // Initial state
            reports: [],
            currentReport: null,
            loading: false,
            error: null,
            message: null,
            total: 0,
            page: 1,
            totalPages: 1,
            filters: {
                page: 1,
                limit: 20,
                dateFrom: null,
                dateTo: null,
            },
            stats: null,

            createReport: async (formData:any) => {
                set({ loading: true, error: null, message: null });
                try {
                    const response = await api.post('/reports', formData, {
                        headers: {
                            'Content-Type': 'multipart/form-data',
                        },
                    });

                    const report = response.data.data;

                    set((state) => ({
                        reports: [report, ...state.reports],
                        loading: false,
                        message: "Report created successfully",
                        total: state.total + 1,
                    }));

                    return report;
                } catch (error: any) {
                    const errorMessage = error.response?.data?.message || "Failed to create report";
                    set({
                        error: errorMessage,
                        loading: false,
                    });
                    throw new Error(errorMessage);
                }
            },
            getReport: async (id) => {
                set({ loading: true, error: null });
                try {
                    const response = await api.get(`/reports/${id}`);
                    const report = response.data.data;

                    set({
                        currentReport: report,
                        loading: false,
                    });

                    return report;
                } catch (error: any) {
                    const errorMessage = error.response?.data?.message || "Failed to fetch report";
                    set({
                        error: errorMessage,
                        loading: false,
                    });
                    throw new Error(errorMessage);
                }
            },

            getReports: async (filters = {}) => {
                set({ loading: true, error: null });
                try {
                    const currentFilters = get().filters;
                    const mergedFilters = { ...currentFilters, ...filters };

                    // Convert Date objects to ISO strings for query params
                    const queryParams: any = {
                        ...mergedFilters,
                        dateFrom: mergedFilters.dateFrom?.toISOString(),
                        dateTo: mergedFilters.dateTo?.toISOString(),
                        categories: mergedFilters.categories?.join(','),
                    };

                    // Remove undefined values
                    Object.keys(queryParams).forEach(key =>
                        queryParams[key] === undefined && delete queryParams[key]
                    );

                    const response = await api.get('/reports', { params: queryParams });
                    const { reports, total, page, totalPages } = response.data.data;

                    set({
                        reports,
                        total,
                        page,
                        totalPages,
                        filters: mergedFilters,
                        loading: false,
                    });
                } catch (error: any) {
                    const errorMessage = error.response?.data?.message || "Failed to fetch reports";
                    set({
                        error: errorMessage,
                        loading: false,
                    });
                    throw new Error(errorMessage);
                }
            },

            updateReport: async (id, updateData) => {
                set({ loading: true, error: null, message: null });
                try {
                    const response = await api.put(`/reports/${id}`, updateData);
                    const updatedReport = response.data.data;

                    set((state) => ({
                        reports: state.reports.map(report =>
                            report.id === id ? updatedReport : report
                        ),
                        currentReport: state.currentReport?.id === id ? updatedReport : state.currentReport,
                        loading: false,
                        message: "Report updated successfully",
                    }));

                    return updatedReport;
                } catch (error: any) {
                    const errorMessage = error.response?.data?.message || "Failed to update report";
                    set({
                        error: errorMessage,
                        loading: false,
                    });
                    throw new Error(errorMessage);
                }
            },

            deleteReport: async (id) => {
                set({ loading: true, error: null, message: null });
                try {
                    await api.delete(`/reports/${id}`);

                    set((state) => ({
                        reports: state.reports.filter(report => report.id !== id),
                        currentReport: state.currentReport?.id === id ? null : state.currentReport,
                        loading: false,
                        message: "Report deleted successfully",
                        total: state.total - 1,
                    }));
                } catch (error: any) {
                    const errorMessage = error.response?.data?.message || "Failed to delete report";
                    set({
                        error: errorMessage,
                        loading: false,
                    });
                    throw new Error(errorMessage);
                }
            },

            getUserReports: async (userId, filters = {}) => {
                set({ loading: true, error: null });
                try {
                    const queryParams: any = {
                        ...filters,
                        dateFrom: filters.dateFrom?.toISOString(),
                        dateTo: filters.dateTo?.toISOString(),
                        categories: filters.categories?.join(','),
                    };

                    Object.keys(queryParams).forEach(key =>
                        queryParams[key] === undefined && delete queryParams[key]
                    );

                    const response = await api.get(`/reports/user/${userId}`, { params: queryParams });
                    const { reports, total, page, totalPages } = response.data.data;

                    set({
                        reports,
                        total,
                        page,
                        totalPages,
                        loading: false,
                    });
                } catch (error: any) {
                    const errorMessage = error.response?.data?.message || "Failed to fetch user reports";
                    set({
                        error: errorMessage,
                        loading: false,
                    });
                    throw new Error(errorMessage);
                }
            },

            getReportStats: async () => {
                set({ loading: true, error: null });
                try {
                    const response = await api.get('/reports/stats');
                    const stats = response.data.data;

                    set({
                        stats,
                        loading: false,
                    });
                } catch (error: any) {
                    const errorMessage = error.response?.data?.message || "Failed to fetch report statistics";
                    set({
                        error: errorMessage,
                        loading: false,
                    });
                    throw new Error(errorMessage);
                }
            },

            bulkUpdateReports: async (ids, status, notes) => {
                set({ loading: true, error: null, message: null });
                try {
                    const response = await api.post('/reports/bulk-update', {
                        ids,
                        status,
                        notes,
                    });

                    const result = response.data.data;

                    // Refresh reports to get updated data
                    await get().getReports(get().filters);

                    set({
                        loading: false,
                        message: `${result.updatedCount} reports updated successfully`,
                    });

                    return result;
                } catch (error: any) {
                    const errorMessage = error.response?.data?.message || "Failed to bulk update reports";
                    set({
                        error: errorMessage,
                        loading: false,
                    });
                    throw new Error(errorMessage);
                }
            },

            setFilters: (newFilters) => {
                set((state) => ({
                    filters: { ...state.filters, ...newFilters },
                }));
            },

            clearFilters: () => {
                set({
                    filters: {
                        page: 1,
                        limit: 20,
                        dateFrom: null,
                        dateTo: null,
                    },
                });
            },

            clearError: () => {
                set({ error: null });
            },

            clearMessage: () => {
                set({ message: null });
            },

            setCurrentReport: (report) => {
                set({ currentReport: report });
            },
        }),
        {
            name: "report-storage",
            partialize: (state) => ({
                filters: state.filters,
                stats: state.stats,
            }),
        }
    )
);