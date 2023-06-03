import { Component, OnInit } from '@angular/core';
import { INavigation } from '../../interfaces/i-navigation';
import { NavigationService } from '../../services/navigation.service';
import { ViewportScroller } from '@angular/common';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  
  showMenu:boolean=false;
  radius:number=17;
  centered:boolean=true;
  menuItemsLength:number=0;
  sub:any;
  hide:boolean=false;
  responsive:boolean=false;

  constructor(private menuItems:NavigationService, 
    private scrollTo:ViewportScroller, 
    private router:Router
) { 
  router.events.subscribe((event:any)=>{
    if(event instanceof NavigationEnd){
      console.log(event.url)
      if(event.url==='/portfolio'){
        this.hide=true;
        console.log(event.url);
        console.log(this.hide);
      }
      else{
        this.hide=false;
        console.log(this.hide);
      }
    }
  });
}

  menuList:INavigation[]=[];

  ngOnInit(): void {

    this.sub=this.menuItems.getMenuData().subscribe({
      next: data=> {
        this.menuList=data;
      console.log(this.menuList)},
      error: er=>{console.error(er)}
    })
  }

  onMouseClick():void{
    this.showMenu=!this.showMenu;
    this.menuItemsLength=this.menuList.length;
  }

  scrollToSection(divId:string):void{
    if(divId=='home'){
      this.router.navigate(['/home']);
    }
    else if( divId=='portfolio'){
      this.router.navigate(['/portfolio']);
    }
    else{
      console.log(divId);
      this.scrollTo.scrollToAnchor(divId);
    }
  }

 onDestroy(){
  this.sub.unsubscribe();
 }

 openMenu(){
  console.log("It works");
  this.responsive=!this.responsive;
 }
  
}
