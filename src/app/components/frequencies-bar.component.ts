import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
 
@Component({
  selector: 'frequencies-bar',
  templateUrl: './frequencies-bar.component.html',
  styleUrls: ['./frequencies-bar.component.css'],
})
export class FrequenciesBarComponent implements OnInit {
    constructor(private modalService: NgbModal) {} 
    
    ngOnInit(): void {
        this.providers && this.providers.forEach((element: any) => {
            this.totalBandwidth += element.frequency[this.linkType].end - element.frequency[this.linkType].start;
        });
    }

    open(content: any) {
        this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}); 
    } 

    @Input() providers: any;
    @Input() linkType: any;
    @Input() frequencyBand: any;
    totalBandwidth = 0;
    closeResult = '';
}