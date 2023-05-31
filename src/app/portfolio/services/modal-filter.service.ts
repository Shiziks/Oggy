import { Injectable } from '@angular/core';
import { IPortfolio } from '../interfaces/i-portfolio';

@Injectable({
  providedIn: 'root'
})
export class ModalFilterService {

  constructor() { }

  filterImages(id:number,imagesData:IPortfolio[]):IPortfolio[]{
    let filteredImages:IPortfolio[]=[];
    // console.log("Proslednje slike su: ");
    //   console.log(imagesData);
    //console.log("id je:" +id);
    for(let portfolioImage of imagesData){
      // console.log("Jedna slika je:");
      // console.log(portfolioImage);
      let portfolioImageNow=portfolioImage;
      let groupIdNow=portfolioImage.group[0].groupid;
      if(groupIdNow==id){
          console.log(portfolioImageNow);
          filteredImages.push(portfolioImageNow);
        }
    }
    console.log(filteredImages);
    return filteredImages;
  }
}

