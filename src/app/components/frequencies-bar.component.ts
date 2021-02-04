import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

/**
 * Frequency Bar component
*/

@Component({
    selector: 'frequencies-bar',
    templateUrl: './frequencies-bar.component.html',
    styleUrls: ['./frequencies-bar.component.css'],
})
export class FrequenciesBarComponent implements OnInit {
    constructor(private modalService: NgbModal) { }

    ngOnInit(): void {
        this.providers && this.providers.forEach((element: any) => {
            this.totalBandwidth += element.frequency[this.linkType].end - element.frequency[this.linkType].start;
        });
    }

    /**
     * Modal Opening
     * @param content 
     */
    open(content: any) {
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
    }
    /** Provider Name */
    @Input() providers: any;
    /** LinkType, downLink or Uplink */
    @Input() linkType: any;
    /** Frequency */
    @Input() frequencyBand: any;
    /** Total Bandwidth, default 0 */
    totalBandwidth = 0;
    /** Modal close result */
    closeResult = '';
}