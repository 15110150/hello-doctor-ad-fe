export class Page<T> {
  content: Array<T>;  // items for the current page
  total: number;
  size: number;
  page: number;
  direction: string;
  sortColumn: string;
}

