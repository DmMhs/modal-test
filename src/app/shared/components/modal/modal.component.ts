import { Component, OnInit, Input } from '@angular/core';
import { ModalService } from './services/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  title = '';
  visible = false;

  constructor(private modalService: ModalService) {}

  ngOnInit() {
    this.modalService.visible.subscribe(val => (this.visible = val));
    this.modalService.title.subscribe(val => (this.title = val));
  }

  closeModal() {
    this.modalService.closeModal();
  }
}
