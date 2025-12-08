export interface Exam {
  slug: string;
  name: string;
  category: string;
  description: string;
  nextExamDate?: string;
  registrationTime?: string;
  heat?: number;
}
