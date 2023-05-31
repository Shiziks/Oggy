import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpertiseComponent } from './component/expertise/expertise.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ExpertiseComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],
  exports:[
    ExpertiseComponent
  ]
})
export class ExpertiseModule { }
