import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { GameScenario, UserGameProgress, Category } from '../types/game';
import api from '../api';
import { useAuthStore } from './auth.store';

interface GameState {
    // State
    scenarios: GameScenario[];
    currentScenario: GameScenario | null;
    userProgress: UserGameProgress[];
    guestProgress: any[]; // Store guest progress separately
    categories: Category[];
    gameStats: any;
    leaderboard: any[];
    isLoading: boolean;
    error: string | null;

    // Actions
    fetchScenarios: (filters?: {
        categoryId?: string;
        keyword?: string;
        difficultyLevel?: number;
        page?: number;
        limit?: number;
    }) => Promise<void>;

    fetchScenario: (id: string) => Promise<void>;

    createScenario: (data: {
        title: string;
        icon: string;
        post: any;
        choices: any[];
        tip: string;
        feedback: any;
        difficultyLevel: number;
        categoryId: string;
    }) => Promise<void>;

    updateGuestQuestionResult: (data: {
        sessionId: string;
        categoryId: string;
        score: number;
        isCorrect: boolean;
        scenarioId?: string;
        questionId?: string;
    }) => Promise<void>;

    completeGuestScenario: (data: {
        sessionId: string;
        categoryId: string;
        scenarioId: string;
    }) => Promise<void>;

    getGuestProgress: () => Promise<void>;

    transferGuestProgress: (registeredUserId: string) => Promise<void>;

    updateScenario: (id: string, data: Partial<GameScenario>) => Promise<void>;

    deleteScenario: (id: string) => Promise<void>;

    fetchScenariosByCategory: (categoryId: string) => Promise<void>;

    fetchUserProgress: (userId: string, filters?: {
        categoryId?: string;
        page?: number;
        limit?: number;
    }) => Promise<void>;

    createProgress: (data: {
        sessionId: string;
        userId: string;
        scenarioId: string;
        categoryId: string;
        score: number;
        currentState?: any;
    }) => Promise<void>;

    updateProgress: (id: string, data: Partial<UserGameProgress>) => Promise<void>;

    deleteProgress: (id: string) => Promise<void>;

    getProgressSummary: (userId: string) => Promise<void>;

    updateQuestionResult: (data: {
        userId: string;
        categoryId: string;
        score: number;
        isCorrect: boolean;
    }) => Promise<void>;

    completeScenario: (data: {
        userId: string;
        categoryId: string;
        scenarioId: string;
    }) => Promise<void>;

    getUserStats: (userId: string) => Promise<void>;

    getCategoryLeaderboard: (category: string, limit?: number) => Promise<void>;

    getOverallLeaderboard: (limit?: number) => Promise<void>;

    fetchCategories: () => Promise<void>;

    setLoading: (loading: boolean) => void;

    clearError: () => void;
}

export const useGameStore = create<GameState>()(
    persist(
        (set, get) => ({
            // Initial state
            scenarios: [],
            currentScenario: null,
            userProgress: [],
            guestProgress: [],
            categories: [],
            gameStats: null,
            leaderboard: [],
            isLoading: false,
            error: null,

            // Missing methods that were causing the error
            fetchScenario: async (id: string) => {
                set({ isLoading: true, error: null });
                try {
                    const response = await api.get(`/game/scenarios/${id}`);
                    set({ currentScenario: response.data.data || response.data, isLoading: false });
                } catch (error: any) {
                    set({ error: error.response?.data?.message || error.message, isLoading: false });
                }
            },

            createScenario: async (data) => {
                set({ isLoading: true, error: null });
                try {
                    const response = await api.post('/game/scenarios', data);
                    set(state => ({
                        scenarios: [...state.scenarios, response.data.data || response.data],
                        isLoading: false
                    }));
                } catch (error: any) {
                    set({ error: error.response?.data?.message || error.message, isLoading: false });
                }
            },

            updateScenario: async (id: string, data: Partial<GameScenario>) => {
                set({ isLoading: true, error: null });
                try {
                    const response = await api.put(`/game/scenarios/${id}`, data);
                    set(state => ({
                        scenarios: state.scenarios.map(scenario =>
                            scenario.id === id ? { ...scenario, ...(response.data.data || response.data) } : scenario
                        ),
                        currentScenario: state.currentScenario?.id === id
                            ? { ...state.currentScenario, ...(response.data.data || response.data) }
                            : state.currentScenario,
                        isLoading: false
                    }));
                } catch (error: any) {
                    set({ error: error.response?.data?.message || error.message, isLoading: false });
                }
            },

            deleteScenario: async (id: string) => {
                set({ isLoading: true, error: null });
                try {
                    await api.delete(`/game/scenarios/${id}`);
                    set(state => ({
                        scenarios: state.scenarios.filter(scenario => scenario.id !== id),
                        currentScenario: state.currentScenario?.id === id ? null : state.currentScenario,
                        isLoading: false
                    }));
                } catch (error: any) {
                    set({ error: error.response?.data?.message || error.message, isLoading: false });
                }
            },

            fetchScenariosByCategory: async (categoryId: string) => {
                set({ isLoading: true, error: null });
                try {
                    const response = await api.get(`/game/scenarios/category/${categoryId}`);
                    set({ scenarios: response.data.data || response.data, isLoading: false });
                } catch (error: any) {
                    set({ error: error.response?.data?.message || error.message, isLoading: false });
                }
            },

            // Modified actions to handle guest users
            fetchScenarios: async (filters = {}) => {
                set({ isLoading: true, error: null });
                try {
                    // Ensure guest session exists for unauthenticated users
                    const { isAuthenticated, isGuest } = useAuthStore.getState();
                    if (!isAuthenticated && !isGuest) {
                        await useAuthStore.getState().initGuestSession();
                    }

                    const response = await api.get('/game/scenarios', { params: filters });
                    const scenariosData = response.data?.data?.data || response.data?.data || response.data;
                    set({ scenarios: scenariosData, isLoading: false });
                    return scenariosData;
                } catch (error: any) {
                    set({ error: error.response?.data?.message || error.message, isLoading: false });
                    throw error;    
                }
            },

            // Update other data-fetching methods similarly
            fetchUserProgress: async (userId: string, filters = {}) => {
                set({ isLoading: true, error: null });
                try {
                    const { isAuthenticated } = useAuthStore.getState();

                    if (isAuthenticated) {
                        // Regular user progress
                        const response = await api.get(`/game/progress/user/${userId}`, { params: filters });
                        set({ userProgress: response.data.data || response.data, isLoading: false });
                    } else {
                        // Guest user progress
                        await get().getGuestProgress();
                    }
                } catch (error: any) {
                    set({ error: error.response?.data?.message || error.message, isLoading: false });
                }
            },

            // Guest-specific methods
            updateGuestQuestionResult: async (data) => {
                set({ isLoading: true, error: null });
                try {
                    const response = await api.post('/guest/progress', data);

                    set(state => ({
                        guestProgress: [...state.guestProgress, response.data.data || response.data],
                        isLoading: false
                    }));
                } catch (error: any) {
                    set({ error: error.response?.data?.message || error.message, isLoading: false });
                }
            },

            completeGuestScenario: async (data) => {
                set({ isLoading: true, error: null });
                try {
                    await api.post('/guest/scenario/complete', data);
                    set({ isLoading: false });
                } catch (error: any) {
                    set({ error: error.response?.data?.message || error.message, isLoading: false });
                }
            },

            getGuestProgress: async () => {
                set({ isLoading: true, error: null });
                try {
                    const response = await api.get('/guest/progress');
                    set({
                        guestProgress: response.data.data || response.data,
                        isLoading: false
                    });
                } catch (error: any) {
                    set({ error: error.response?.data?.message || error.message, isLoading: false });
                }
            },

            transferGuestProgress: async (registeredUserId: string) => {
                set({ isLoading: true, error: null });
                try {
                    await api.post('/guest/transfer-progress', { registeredUserId });

                    // Clear guest progress after successful transfer
                    set({
                        guestProgress: [],
                        isLoading: false
                    });
                } catch (error: any) {
                    set({ error: error.response?.data?.message || error.message, isLoading: false });
                }
            },

            // Keep all your existing methods but add guest support where needed
            createProgress: async (data) => {
                set({ isLoading: true, error: null });
                try {
                    const { isAuthenticated } = useAuthStore.getState();

                    if (isAuthenticated) {
                        const response = await api.post('/game/progress', data);
                        set(state => ({
                            userProgress: [...state.userProgress, response.data.data || response.data],
                            isLoading: false
                        }));
                    } else {
                        // For guests, use the guest progress endpoint
                        await get().updateGuestQuestionResult({
                            sessionId: data.sessionId,
                            categoryId: data.categoryId,
                            score: data.score,
                            isCorrect: true, // You might need to adjust this
                            scenarioId: data.scenarioId
                        });
                    }
                } catch (error: any) {
                    set({ error: error.response?.data?.message || error.message, isLoading: false });
                }
            },

            updateProgress: async (id: string, data: Partial<UserGameProgress>) => {
                set({ isLoading: true, error: null });
                try {
                    const response = await api.put(`/game/progress/${id}`, data);
                    set(state => ({
                        userProgress: state.userProgress.map(progress =>
                            progress.id === id ? { ...progress, ...(response.data.data || response.data) } : progress
                        ),
                        isLoading: false
                    }));
                } catch (error: any) {
                    set({ error: error.response?.data?.message || error.message, isLoading: false });
                }
            },

            deleteProgress: async (id: string) => {
                set({ isLoading: true, error: null });
                try {
                    await api.delete(`/game/progress/${id}`);
                    set(state => ({
                        userProgress: state.userProgress.filter(progress => progress.id !== id),
                        isLoading: false
                    }));
                } catch (error: any) {
                    set({ error: error.response?.data?.message || error.message, isLoading: false });
                }
            },

            getProgressSummary: async (userId: string) => {
                set({ isLoading: true, error: null });
                try {
                    const response = await api.get(`/game/progress/summary/${userId}`);
                    set({ gameStats: response.data.data || response.data, isLoading: false });
                } catch (error: any) {
                    set({ error: error.response?.data?.message || error.message, isLoading: false });
                }
            },

            updateQuestionResult: async (data) => {
                set({ isLoading: true, error: null });
                try {
                    await api.post('/game/stats/question-result', data);
                    set({ isLoading: false });
                } catch (error: any) {
                    set({ error: error.response?.data?.message || error.message, isLoading: false });
                }
            },

            completeScenario: async (data) => {
                set({ isLoading: true, error: null });
                try {
                    await api.post('/game/stats/complete-scenario', data);
                    set({ isLoading: false });
                } catch (error: any) {
                    set({ error: error.response?.data?.message || error.message, isLoading: false });
                }
            },

            getUserStats: async (userId: string) => {
                set({ isLoading: true, error: null });
                try {
                    const response = await api.get(`/game/stats/user/${userId}`);
                    set({ gameStats: response.data.data || response.data, isLoading: false });
                } catch (error: any) {
                    set({ error: error.response?.data?.message || error.message, isLoading: false });
                }
            },

            getCategoryLeaderboard: async (category: string, limit = 10) => {
                set({ isLoading: true, error: null });
                try {
                    const response = await api.get(`/game/stats/leaderboard/${category}`, {
                        params: { limit }
                    });
                    set({ leaderboard: response.data.data || response.data, isLoading: false });
                } catch (error: any) {
                    set({ error: error.response?.data?.message || error.message, isLoading: false });
                }
            },

            getOverallLeaderboard: async (limit = 10) => {
                set({ isLoading: true, error: null });
                try {
                    const response = await api.get('/game/stats/leaderboard', {
                        params: { limit }
                    });
                    set({ leaderboard: response.data.data || response.data, isLoading: false });
                } catch (error: any) {
                    set({ error: error.response?.data?.message || error.message, isLoading: false });
                }
            },

            fetchCategories: async () => {
                set({ isLoading: true, error: null });
                try {
                    const response = await api.get('/categories');
                    set({ categories: response.data.data || response.data, isLoading: false });
                } catch (error: any) {
                    set({ error: error.response?.data?.message || error.message, isLoading: false });
                }
            },

            setLoading: (loading: boolean) => {
                set({ isLoading: loading });
            },

            clearError: () => {
                set({ error: null });
            },
        }),
        {
            name: 'game-storage',
            partialize: (state) => ({
                scenarios: state.scenarios,
                currentScenario: state.currentScenario,
                userProgress: state.userProgress,
                guestProgress: state.guestProgress,
                categories: state.categories,
                gameStats: state.gameStats,
                leaderboard: state.leaderboard
            })
        }
    )
);