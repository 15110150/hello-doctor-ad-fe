import {Audit} from './audit';

export class CourseCategory {

  id: number;
  name: string;
  description: string;
  parent: number;
  children?: CourseCategory[];
  audit: Audit;
  status: boolean;

  constructor() {
    this.id = 0;
    this.name = '';
    this.description = '';
    this.parent = 0;
   this.children = new Array();
  }

}
