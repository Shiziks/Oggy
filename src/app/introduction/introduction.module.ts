import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntroductionComponent } from './component/introduction/introduction.component';
import { SharedModule } from '../shared/shared.module';
import { PortfolioModule } from '../portfolio/portfolio.module';



@NgModule({
  declarations: [
    IntroductionComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PortfolioModule
  ],
  exports: [
    IntroductionComponent
  ]
})
export class IntroductionModule { }
