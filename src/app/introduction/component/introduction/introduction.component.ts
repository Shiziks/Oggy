import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.css']
})
export class IntroductionComponent implements OnInit {

  loadPortfolioTrue:boolean=false;
  buttonText:string="Show portfolio";
  constructor() { }

  ngOnInit(): void {
  }

  loadPortfolio():void{
    this.loadPortfolioTrue=!this.loadPortfolioTrue;
    if(this.loadPortfolioTrue==true){
      this.buttonText="Hide portfolio";
    }
    else this.buttonText="Show portfolio";
    
    console.log(this.loadPortfolioTrue);
  }

}
