import {Audit} from '../model/audit';
import {CourseCategory} from '../model/course-category';

export class CourseCategoryDto {

  id: number;
  name: string;
  description: string;
  parent: CourseCategory;
  children?: CourseCategory[];
  audit: Audit;
  status: boolean;

  constructor(parent: number) {
    this.parent = new CourseCategory();
    this.parent.id = parent;
  }

}
