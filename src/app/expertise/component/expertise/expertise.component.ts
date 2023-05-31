import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-expertise',
  templateUrl: './expertise.component.html',
  styleUrls: ['./expertise.component.css']
})
export class ExpertiseComponent implements OnInit {

  centered:boolean=true;

  constructor(private scrollTo:ViewportScroller, private router:Router) { }

  ngOnInit(): void {
  }

  scrollToSection(divId:string):void{
    this.scrollTo.scrollToAnchor(divId);
  }

  navigate(value:number){
    this.router.navigate(['/portfolio', {filter:value}]);
  }

}
