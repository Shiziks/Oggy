import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent } from './components/slider/slider.component';
import { PortfolioModule } from '../portfolio/portfolio.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    SliderComponent
  ],
  imports: [
    CommonModule,
    PortfolioModule,
    SharedModule
  ],
  exports:[
    SliderComponent
  ]
})
export class SliderModule { }
