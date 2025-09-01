
export const UserStatus = {
  Pending: "pending",
  Rejected: "rejected",
  Verified: "verified",
} as const;

export type UserStatus = typeof UserStatus[keyof typeof UserStatus];

export const UserAccountStatus = {
  Active: "active",
  Suspended: "suspended",
  Banned: "banned",
  Deactivated: "deactivated",
} as const;

export type UserAccountStatus =
  typeof UserAccountStatus[keyof typeof UserAccountStatus];

export const UserRole = {
  PATIENT: "patient",
  PHYSICIAN: "physician",
  ADMIN: "admin",
  SUPERADMIN: "superadmin",
} as const;

export type UserRole = typeof UserRole[keyof typeof UserRole];


export type UserRoleType =
  | 'patient'
  | 'physician'
  | 'admin'
  | 'superadmin';

export type UserStatusType =
  | 'pending'
  | 'rejected'
  | 'verified';

export type UserAccountStatusType =
  | 'active'
  | 'suspended'
  | 'banned'
  | 'deactivated';



// Updated User type to match API response
export type User = {
  id: string;
  createdAt: string;
  updatedAt: string;
  fullName: string;
  email: string;
  phone: string;
  deviceToken: string | null;
  accountStatus: "active" | "inactive" | "suspended";
  status: "verified" | "pending" | "rejected";
  isVerified: boolean;
  profilePicture: string;
  bannerUrl: string | null;
  addressLine1: string | null;
  addressLine2: string | null;
  city: string | null;
  postalCode: string | null;
  country: string | null;
  lastLoginAt: string | null;
  emailVerificationToken: string | null;
  emailVerificationTokenExpiry: string | null;
  emailVerified: boolean;
  isTwoFactorEnabled: boolean;
  twoFactorSecret: string | null;
  referralCode: string | null;
  referredBy: string | null;
  passwordResetToken: string | null;
  dateOfBirth: string | null;
  passwordResetTokenExpiry: string | null;
  roles: "user" | "superadmin" | "admin" | "expert";
  role: "user" | "superadmin" | "admin" | "expert";
};