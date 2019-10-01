import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DxButtonModule } from 'devextreme-angular';
import { AppComponent } from './app.component';
import { ModalModule } from './shared/components/modal/modal.module';
import { ModalService } from './shared/components/modal/services/modal.service';
import { RoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, DxButtonModule, ModalModule, RoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
