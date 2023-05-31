import { HttpClient } from '@angular/common/http';
import { Component, ComponentRef, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { IPortfolio } from '../../interfaces/i-portfolio';
import { ModalFilterService } from '../../services/modal-filter.service';
import { PortfolioFilterService } from '../../services/portfolio-filter.service';
import { PortfolioService } from '../../services/portfolio.service';
import { ModalComponent } from '../modal/modal.component';
import { ActivatedRoute } from '@angular/router';
import { ViewportScroller } from '@angular/common';


@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  showMore:boolean=true;
  buttonText1:string="Show more designs";
  someId:number=0;
  imagesFiltered:IPortfolio[]=[];
  modalFilterImages:IPortfolio[]=[];
  filter:number=0;
  title:string='';
  titles=['Editorials', 'Logos','Extras', 'Packaging','Visuals'];

  allImagesData:IPortfolio[]=[];

  constructor(
    private dataFromService:PortfolioService, 
    private filteredService:PortfolioFilterService,
    private modalService:NgbModal,
    private modalFilter:ModalFilterService,
    private activatedRoute:ActivatedRoute,
    private scroller: ViewportScroller) { }

  ngOnInit(): void {
    this.filter=Number(this.activatedRoute.snapshot.paramMap.get('filter'))>0?Number(this.activatedRoute.snapshot.paramMap.get('filter')):0;
    console.log(this.filter);
    console.log("FILTER JE");
    this.dataFromService.getItems().subscribe({
      next: data=>{this.allImagesData=data, 
        console.log(this.allImagesData);
        if(this.filter!=0 && this.allImagesData.length>0){
          this.title=this.titles[this.filter-1];
          console.log("Jeste filter vece od 0");
          this.filterImage(this.filter);
        }
      else{
        this.title='';
      }},
      error: er=>{console.error(er)}
    });
    
  


  
  }

  showMoreImages():void{
    if(this.showMore==true){
    this.buttonText1="Show less designs";
    }
    else this.buttonText1="Show more designs";
    this.showMore=!this.showMore;
    this.someId=0;
    this.title='';
    this.scroller.scrollToAnchor("portfolio");
  }

  filterImage(id:number):any{
    this.title=this.titles[id-1];
    console.log(this.filteredService.filterImages(id,this.allImagesData));
    this.buttonText1="Show all designs";
    this.showMore=true;
    this.someId=id;
    this.scroller.scrollToAnchor("portfolio");
    return this.imagesFiltered=this.filteredService.filterImages(id, this.allImagesData);
    
  }

  open(groupId:number):void{
    console.log("***********************");
    console.log(this.modalFilter.filterImages(groupId, this.allImagesData));
    console.log("***********************");
    //console.log(groupId);
    this.modalFilterImages=this.modalFilter.filterImages(groupId, this.allImagesData);
    console.log(this.modalFilterImages);
    const modalRef = this.modalService.open(ModalComponent, { windowClass : "myCustomModalClass"});
    modalRef.componentInstance.filteredImages=this.modalFilterImages;
    modalRef.componentInstance.name = 'World';

}
}
