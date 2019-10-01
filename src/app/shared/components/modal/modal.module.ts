import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal.component';
import { ModalService } from './services/modal.service';
import { DxPopupModule } from 'devextreme-angular';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, DxPopupModule, RouterModule],
  declarations: [ModalComponent],
  exports: [ModalComponent],
  providers: [ModalService]
})
export class ModalModule {}
