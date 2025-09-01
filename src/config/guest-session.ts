// utils/guest-session.ts
import { v4 as uuidv4 } from 'uuid';

export class GuestSessionManager {
  private static readonly GUEST_SESSION_KEY = 'guest-session-id';
  private static readonly GUEST_USER_ID_KEY = 'guest-user-id';

  static getSessionId(): string | null {
    if (typeof window === 'undefined') return null;
    return localStorage.getItem(this.GUEST_SESSION_KEY);
  }

  static getGuestUserId(): string | null {
    if (typeof window === 'undefined') return null;
    return localStorage.getItem(this.GUEST_USER_ID_KEY);
  }

  static createSession(): { sessionId: string; userId: string } {
    if (typeof window === 'undefined') {
      throw new Error('Cannot create guest session on server');
    }

    const sessionId = uuidv4();
    const userId = `guest_${uuidv4()}`;

    localStorage.setItem(this.GUEST_SESSION_KEY, sessionId);
    localStorage.setItem(this.GUEST_USER_ID_KEY, userId);

    // Set expiration (24 hours)
    const expiration = Date.now() + 24 * 60 * 60 * 1000;
    localStorage.setItem(`${this.GUEST_SESSION_KEY}_exp`, expiration.toString());

    return { sessionId, userId };
  }

  static clearSession(): void {
    if (typeof window === 'undefined') return;
    
    localStorage.removeItem(this.GUEST_SESSION_KEY);
    localStorage.removeItem(this.GUEST_USER_ID_KEY);
    localStorage.removeItem(`${this.GUEST_SESSION_KEY}_exp`);
  }

  static isSessionValid(): boolean {
    if (typeof window === 'undefined') return false;
    
    const expiration = localStorage.getItem(`${this.GUEST_SESSION_KEY}_exp`);
    if (!expiration) return false;

    return Date.now() < parseInt(expiration);
  }

  static getAuthHeaders(): Record<string, string> {
    const sessionId = this.getSessionId();
    if (!sessionId) return {};

    return {
      'X-Guest-Session': sessionId
    };
  }
}