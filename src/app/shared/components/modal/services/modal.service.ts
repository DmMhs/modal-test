import { Injectable } from '@angular/core';
import { BehaviorSubject, merge } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

@Injectable()
export class ModalService {
  visible = new BehaviorSubject(false);
  title = new BehaviorSubject('');
  queryKey = new BehaviorSubject(null);
  openingMode: 'queryParam' | 'default' = 'default';

  constructor(private router: Router, private route: ActivatedRoute) {}

  setTitle(title: string) {
    this.title.next(title);
    return this;
  }

  closeModal() {
    if (this.openingMode === 'queryParam') {
      this.router.navigate([], {
        queryParams: { [this.queryKey.getValue().key]: null },
        queryParamsHandling: 'merge'
      });
    }
    this.visible.next(false);
  }

  openModal() {
    if (this.openingMode === 'queryParam') {
      this.router.navigate([], {
        queryParams: {
          [this.queryKey.getValue().key]: this.queryKey.getValue().value
        },
        queryParamsHandling: 'merge'
      });
    }
    this.visible.next(true);
  }

  setQueryParamKey(key: { key: string; value: any }) {
    if (key !== null && key !== undefined) {
      this.setOpeningMode('queryParam');
      this.queryKey.next(key);
      return this;
    }
  }

  private setOpeningMode(mode: 'queryParam' | 'default') {
    this.openingMode = mode;
  }
}
