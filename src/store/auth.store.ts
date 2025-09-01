import { create } from "zustand";
import axios from "axios";
import { persist } from "zustand/middleware";
import api from "../api";
import { User, UserRole } from "../types/user.type";
import { GuestSessionManager } from "../config/guest-session";



export interface AuthState {
    user: User | null;
    token: string | null;
    isAuthenticated: boolean;
    isGuest: boolean;
    loading: boolean;
    error: string | null;
    message: string | null;
    isVerified: boolean | null;
}

export interface AuthActions {
    login: (emailOrPhone: string, password: string) => Promise<User | undefined>;
    register: (userData: RegisterData) => Promise<User | undefined>;
    logout: () => void;
    initiatePasswordReset: (email: string) => Promise<void>;
    verifyEmail: (token: string) => Promise<void>;
    forgotPassword: (email: string) => Promise<void>;
    resetPassword: (userId: string, token: string, newPassword: string) => Promise<void>;
    loadUser: () => Promise<void>;
    updateUser: (userData: Partial<User>) => Promise<void>;
    clearError: () => void;
    initGuestSession: () => Promise<string>; // Returns guest user ID
    convertGuestToUser: (userData: RegisterData) => Promise<User | undefined>;
}

type Store = AuthState & AuthActions;

export type RegisterData = {
    fullName: string;
    username?: string;
    email?: string;
    phone: string;
    password: string;
    role: UserRole;
};

const API_URL = import.meta.env.VITE_API_URL;

export const useAuthStore = create<Store>()(
    persist(
        (set, get) => ({
            user: null,
            token: null,
            isAuthenticated: false,
            isGuest: false,
            loading: false,
            isVerified: false,
            error: null,
            message: null,

            login: async (phone, password) => {
                set({ loading: true, error: null, message: null });
                try {
                    const response = await axios.post(`${API_URL}/login`, {
                        phone,
                        password,
                    });

                    const { token, user } = response.data.data;

                    // Clear guest session if exists
                    GuestSessionManager.clearSession();

                    set({
                        user,
                        token,
                        isAuthenticated: true,
                        isGuest: false,
                        loading: false,
                    });
                    return user;
                } catch (error: any) {
                    const errorMessage = error.response?.data?.message || "Login failed";
                    set({
                        error: errorMessage,
                        loading: false,
                    });
                    throw new Error(errorMessage);
                }
            },

            register: async (userData) => {
                set({ loading: true, error: null, message: null });
                try {
                    const response = await axios.post(`${API_URL}/register`, userData);
                    const { user, token } = response.data;

                    // Clear guest session if exists
                    GuestSessionManager.clearSession();

                    set({
                        user,
                        token,
                        isAuthenticated: true,
                        isGuest: false,
                        loading: false,
                        message: "Registration successful",
                    });
                    return user;
                } catch (error: any) {
                    const errorMessage = error.response?.data?.message || "Registration failed";
                    set({
                        error: errorMessage,
                        loading: false,
                    });
                    throw new Error(errorMessage);
                }
            },

            logout: () => {
                GuestSessionManager.clearSession();
                set({
                    user: null,
                    token: null,
                    isAuthenticated: false,
                    isGuest: false,
                    message: "Logged out successfully",
                });
            },

            initGuestSession: async () => {
                set({ loading: true, error: null });
                try {
                    // Check if we already have a valid guest session
                    let sessionId = GuestSessionManager.getSessionId();
                    let userId = GuestSessionManager.getGuestUserId();

                    if (!sessionId || !GuestSessionManager.isSessionValid()) {
                        // Create new guest session
                        const newSession = GuestSessionManager.createSession();
                        sessionId = newSession.sessionId;
                        userId = newSession.userId;

                        // Initialize guest session with backend
                        await api.post('/guest/session', {
                            sessionId,
                            userId
                        });
                    }

                    set({
                        isGuest: true,
                        loading: false
                    });

                    return userId!;
                } catch (error: any) {
                    const errorMessage = error.response?.data?.message || "Failed to initialize guest session";
                    set({
                        error: errorMessage,
                        loading: false,
                    });
                    throw new Error(errorMessage);
                }
            },

            convertGuestToUser: async (userData: RegisterData) => {
                set({ loading: true, error: null });
                try {
                    const guestUserId = GuestSessionManager.getGuestUserId();
                    if (!guestUserId) {
                        throw new Error("No guest session found");
                    }

                    const response = await api.post('/guest/convert', {
                        ...userData,
                        guestUserId
                    });

                    const { user, token } = response.data;

                    // Clear guest session
                    GuestSessionManager.clearSession();

                    set({
                        user,
                        token,
                        isAuthenticated: true,
                        isGuest: false,
                        loading: false,
                        message: "Account created successfully"
                    });

                    return user;
                } catch (error: any) {
                    const errorMessage = error.response?.data?.message || "Failed to convert guest account";
                    set({
                        error: errorMessage,
                        loading: false,
                    });
                    throw new Error(errorMessage);
                }
            },

            initiatePasswordReset: async (email: string) => {
                set({ loading: true, error: null, message: null });
                try {
                    await api.post(`${API_URL}/users/forgot-password`, { email });
                    set({
                        loading: false,
                        message: "If an account with that email exists, a password reset link has been sent"
                    });
                } catch (error: any) {
                    const errorMessage = error.response?.data?.message || "Password reset initiation failed";
                    set({
                        error: errorMessage,
                        loading: false,
                    });
                    throw new Error(errorMessage);
                }
            },

            checkResetToken: async (userId: string, token: string) => {
                set({ loading: true, error: null });
                try {
                    const response = await api.get(`${API_URL}/users/check-reset-token`, {
                        params: { userId, token }
                    });
                    set({ loading: false });
                    return response.data.valid;
                } catch (error: any) {
                    const errorMessage = error.response?.data?.message || "Token validation failed";
                    set({
                        error: errorMessage,
                        loading: false,
                    });
                    throw new Error(errorMessage);
                }
            },

            resetPassword: async (userId: string, token: string, newPassword: string) => {
                set({ loading: true, error: null, message: null });
                try {
                    await api.post(`${API_URL}/users/reset-password`, {
                        userId,
                        token,
                        newPassword
                    });
                    set({
                        loading: false,
                        message: "Password reset successfully. You can now login with your new password."
                    });
                } catch (error: any) {
                    const errorMessage = error.response?.data?.message || "Password reset failed";
                    set({
                        error: errorMessage,
                        loading: false,
                    });
                    throw new Error(errorMessage);
                }
            },

            // Email verification flow
            sendVerificationEmail: async () => {
                set({ loading: true, error: null, message: null });
                try {
                    const token = get().token;
                    await api.post(`${API_URL}/users/send-verification-email`, {}, {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    });
                    set({
                        loading: false,
                        message: "Verification email sent successfully"
                    });
                } catch (error: any) {
                    const errorMessage = error.response?.data?.message || "Failed to send verification email";
                    set({
                        error: errorMessage,
                        loading: false,
                    });
                    throw new Error(errorMessage);
                }
            },

            verifyEmail: async (token) => {
                set({ loading: true, error: null, message: null });
                try {
                    const userToken = get().token;
                    const response = await api.get(`${API_URL}/users/verify-email`, {
                        params: { token },
                        headers: {
                            Authorization: `Bearer ${userToken}`,
                        },
                    });

                    set({
                        user: response.data,
                        isVerified: true,
                        loading: false,
                        message: "Email verified successfully",
                    });
                    return response.data;
                } catch (error: any) {
                    const errorMessage = error.response?.data?.message || "Email verification failed";
                    set({
                        error: errorMessage,
                        loading: false,
                    });
                    throw new Error(errorMessage);
                }
            },

            loadUser: async () => {
                set({ loading: true, error: null });
                try {
                    const token = get().token;
                    if (!token) return;

                    const response = await api.get(`${API_URL}/users/me`, {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    });

                    set({
                        user: response.data.data,
                        isAuthenticated: true,
                        loading: false,
                    });
                    return response.data;
                } catch (error: any) {
                    const errorMessage = error.response?.data?.message || "Failed to load user";
                    set({
                        error: errorMessage,
                        loading: false,
                    });
                    // Auto-logout if token is invalid
                    if (error.response?.status === 401) {
                        get().logout();
                    }
                    throw new Error(errorMessage);
                }
            },

            forgotPassword: async (email) => {
                set({ loading: true, error: null });
                try {
                    await api.post(`${API_URL}/auth/forgot-password`, { email });
                    set({ loading: false });
                } catch (error: any) {
                    set({
                        error: error.response?.data?.message || "Password reset failed",
                        loading: false,
                    });
                    throw error;
                }
            },

            updateUser: async (data: Partial<User>) => {
                set({ loading: true, error: null });
                try {
                    const token = get().token;
                    const response = await api.put(`${API_URL}/users/profile`, data, {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    });

                    set({
                        user: response.data,
                        loading: false,
                        message: 'Profile updated successfully'
                    });
                    return response.data;
                } catch (error: any) {
                    const errorMessage = error.response?.data?.message || 'Failed to update profile';
                    set({ error: errorMessage, loading: false });
                    throw new Error(errorMessage);
                }

            },

            clearError: () => {
                set({ error: null });
            },
        }),
        {
            name: "auth-storage",
            partialize: (state) => ({
                token: state.token,
                isAuthenticated: state.isAuthenticated,
                user: state.user,
                isGuest: state.isGuest
            }),
        }
    )
);