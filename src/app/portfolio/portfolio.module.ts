import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { ModalComponent } from './components/modal/modal.component';



@NgModule({
  declarations: [
    PortfolioComponent,
    ModalComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    HttpClientModule
  ],
  exports: [
    PortfolioComponent
  ]
})
export class PortfolioModule { }
