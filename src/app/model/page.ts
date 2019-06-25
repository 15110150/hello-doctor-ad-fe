import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';

export class Page<T> {
  content: Array<T>;  // items for the current page
  totalPages: number;
  last: boolean;
  totalElements: number;
  size: number;
  number: number;
  numberOfElements: number;
  first: boolean;
}

