import { Injectable } from '@angular/core';
import { IPortfolio } from '../interfaces/i-portfolio';
import { PortfolioService } from './portfolio.service';

@Injectable({
  providedIn: 'root'
})
export class PortfolioFilterService {

  

  constructor() {
    // this.portfolioData.getItems()?.subscribe({
    //   next : data=> {this.allPortfolioImages=data},
    //   error: er=> {console.error(er)}
    // })
   }

  

  filterImages(id:number,imagesData:IPortfolio[]):IPortfolio[]{
    let filteredImages:IPortfolio[]=[];
    console.log("Proslednje slike su: ");
     console.log(imagesData);
    console.log("id je:" +id);
    for(let portfolioImage of imagesData){
      // console.log("Jedna slika je:");
      // console.log(portfolioImage);
      let portfolioImageNow=portfolioImage;
      let categoryIdNow=portfolioImage.category[0].categoryid;
      if(categoryIdNow==id){
          console.log(portfolioImageNow);
          filteredImages.push(portfolioImageNow);
        }
    }
    console.log(filteredImages);
    return filteredImages;
  }
}

    
    





   
      
    
