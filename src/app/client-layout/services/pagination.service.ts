import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaginationService {
  private currentPageSubject = new BehaviorSubject<number>(1);
  private itemsPerPageSubject = new BehaviorSubject<number>(4);
  private allItems = new BehaviorSubject<number>(0);

  currentPage$ = this.currentPageSubject.asObservable();
  itemsPerPage$ = this.itemsPerPageSubject.asObservable();
  allItems$ = this.allItems.asObservable();

  setCurrentPage(page: number): void {
    this.currentPageSubject.next(page);
    if (page) {
      localStorage.setItem('page_num', JSON.stringify(page));
    }
  }

  setItemsPerPage(count: number): void {
    this.itemsPerPageSubject.next(count);
  }

  setAllItems(count: number): void {
    this.allItems.next(count);
  }

  getCurrentPage(): number {
    return this.currentPageSubject.value;
  }

  getItemsPerPage(): number {
    return this.itemsPerPageSubject.value;
  }

  getAllItems(): number {
    return this.allItems.value;
  }
}