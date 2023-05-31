import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InquiryComponent } from './components/inquiry/inquiry.component';
import { SharedModule } from '../shared/shared.module';
import { FormComponent } from './components/form/form.component';
import { ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    InquiryComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule
  ],
  exports:[
    InquiryComponent,
    FormComponent
  ]
})
export class InquiryModule { }
