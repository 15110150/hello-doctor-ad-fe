import {CourseCategory} from './course-category';

export class Course {
  id: number;
  name: string;
  description: string;
  content: string;
  longTermCourse: boolean;
  courseCategory: number;
}
