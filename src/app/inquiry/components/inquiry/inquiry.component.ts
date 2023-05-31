import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inquiry',
  templateUrl: './inquiry.component.html',
  styleUrls: ['./inquiry.component.css']
})
export class InquiryComponent implements OnInit {

  constructor() { }

  formtrue:boolean=true;
  buttonText:string="Open inquiry form";

  ngOnInit(): void {
  }

  loadForm():void{
    this.formtrue=!this.formtrue;
    if(this.formtrue==false){
      this.buttonText="Close inquiry Form";
    }
    else this.buttonText="Open inquiry form";
    
    console.log("");
  }

}
