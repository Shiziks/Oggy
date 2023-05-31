import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { IPortfolio } from '../../interfaces/i-portfolio';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  
  @Input() filteredImages:IPortfolio[]=[];

  constructor(public activeModal: NgbActiveModal, private modalService: NgbModal) {}

  ngOnInit(): void {
  }

  
}
