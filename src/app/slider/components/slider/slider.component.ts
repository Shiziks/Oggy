import { Component, OnInit } from '@angular/core';
import { IPortfolio } from 'src/app/portfolio/interfaces/i-portfolio';
import { PortfolioService } from 'src/app/portfolio/services/portfolio.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  allImageData:IPortfolio[]=[];
  sliderImageData:IPortfolio[]=[];

  constructor(private imageData:PortfolioService) { }

  ngOnInit(): void {
    this.imageData.getItems().subscribe({
      next: data=>{this.allImageData=data},
      error: er=>{console.error(er)}
    });

    console.log(this.allImageData);
    
    }
    

    
  }

 

  

