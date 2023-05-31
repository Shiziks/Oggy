import { Pipe, PipeTransform } from '@angular/core';
import { IPortfolio } from '../portfolio/interfaces/i-portfolio';

@Pipe({
  name: 'sliderFilter'
})
export class SliderFilterPipe implements PipeTransform {

  transform(imageDataArray:IPortfolio[]): IPortfolio[] {
    
    return imageDataArray.filter(imageData=>imageData.slider==true);
      
    
  }

}
