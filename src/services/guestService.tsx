// services/api/guest.service.ts
// import api from './api';

import api from "../api";

export const guestService = {
  createSession: async () => {
    const response = await api.post('/guest/session');
    return response.data;
  },

  validateSession: async (sessionId: string) => {
    const response = await api.get(`/guest/session/${sessionId}/validate`);
    return response.data;
  },

  updateProgress: async (sessionId: string, progressData: any) => {
    const response = await api.post(`/guest/session/${sessionId}/progress`, progressData);
    return response.data;
  },

  getProgress: async (sessionId: string) => {
    const response = await api.get(`/guest/session/${sessionId}/progress`);
    return response.data;
  },

  deleteSession: async (sessionId: string) => {
    const response = await api.delete(`/guest/session/${sessionId}`);
    return response.data;
  },

  cleanupSessions: async () => {
    const response = await api.post('/guest/cleanup');
    return response.data;
  }
};