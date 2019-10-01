import { Component } from '@angular/core';
import { ModalService } from './shared/components/modal/services/modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'change-detection';
  key = { key: 'testId', value: '12345' };
  
  constructor(private modalService: ModalService) {
    this.modalService.setQueryParamKey(this.key);
  }

  onOpenModal() {
    this.modalService.setTitle('SUPER TITLE').openModal();
  }

  onOpenEdit() {
    this.modalService.setTitle('EDIT TITLE').openModal();
  }
}
