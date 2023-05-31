import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { INavigation } from 'src/app/navigation/interfaces/i-navigation';
import { NavigationService } from 'src/app/navigation/services/navigation.service';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  radius:number=17;
  centered:boolean=true;
  menuList:INavigation[]=[];
  subscribedTrue:boolean=false;
  itemsLength:number=0;

  constructor(private menuItems:NavigationService, private scrollTo:ViewportScroller) { }
  newsLetterForm=new FormGroup({
    'emailTS': new FormControl('',[Validators.required, Validators.email])
  });

  ngOnInit(): void {
    this.menuItems.getMenuData().subscribe({
      next: data=> {this.menuList=data},
      error: er=>{console.error(er)}
    })
  }

  scrollToSection(divId:string):void{
    this.scrollTo.scrollToAnchor(divId);
  }

  subscribed():void{
    this.subscribedTrue=!this.subscribedTrue
    this.itemsLength=this.menuList.length;


  }

}
