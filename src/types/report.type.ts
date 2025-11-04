import { User } from "./user.type";

export interface Report {
  id: string;
  url?: string;
  description: string;
  evidence?: string;
  categories: ReportCategory[];
  screenshotPaths?: string[];
  status: ReportStatus;
  reviewerNotes?: string;
  submittedById?: string;
  reviewedById?: string;
  reviewedBy?: User;
  createdAt?: Date;
  updatedAt?: Date;
  reviewedAt?: Date;
}

export enum ReportStatus {
  PENDING = 'PENDING',
  UNDER_REVIEW = 'UNDER_REVIEW',
  RESOLVED = 'RESOLVED',
  REJECTED = 'REJECTED',
  DUPLICATE = 'DUPLICATE',
}

export enum ReportCategory {
  FALSE_INFORMATION = 'false_information',
  MISLEADING_CONTENT = 'misleading_content',
  MANIPULATED_MEDIA = 'manipulated_media',
  HARMFUL_ADVICE = 'harmful_advice',
  OTHER = 'other',
}
