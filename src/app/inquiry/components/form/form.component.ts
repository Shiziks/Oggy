import { Component, ElementRef, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IInquiry } from '../../interfaces/i-inquiry';
import { InquiryService } from '../../services/inquiry.service';
import { NgModel } from '@angular/forms';



@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  
  value:any;
  formAll=new FormGroup({
    nameTS: new FormControl('',
    [
      Validators.required, 
      Validators.minLength(2),
      Validators.pattern("[A-Z][a-z]{2,14}")
    ]),
    emailTS: new FormControl('',[Validators.required, Validators.email]),
    selectTS: new FormControl('',[Validators.required])
  });

  
  formValid:boolean=false;
  inquiryList:IInquiry[]=[];

  selectedIndexNumber:number=-1;
  selectedIndexSections:any=[];
  constructor(private inquiryData:InquiryService) { }

  ngOnInit(): void {
    this.inquiryData.getExpertises().subscribe({
      next: data =>{this.inquiryList=data},
      error: er=>{console.error(er)}
    });
    //console.log(this.inquiryList);
    let nesto:any;
    console.log(this.formAll);
    console.log("***********");
    console.log(this.formAll.get('checkTS'));
  
  }

  expertiseChoosen(e:any):void{
    this.selectedIndexNumber=e.target.selectedIndex+1;
    console.log("--------------------------------");
    console.log(this.selectedIndexNumber);
    
    if(this.selectedIndexNumber>0){
    let idnumb=this.inquiryList.findIndex(item=>item.id==this.selectedIndexNumber);
    this.selectedIndexSections=this.inquiryList[idnumb].fieldsections;
    console.log(this.selectedIndexSections);
    }
  }

  submitThis():void{
    console.log(this.formAll);
    this.formValid=!this.formValid;
    setTimeout(()=>{
      this.formValid=!this.formValid;
    }, 2500)
  }


  

}
