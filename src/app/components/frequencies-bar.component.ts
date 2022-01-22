import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

export interface Bands {
  /**
   * Band Number
   */
  band: number;
  /**
   * Band Type
   */
  type: 'FDD' | 'TDD' | 'SDL' | 'SUL';
  /**
   * Band Frequency
   */
  startARFCN: number;
  endARFCN: number;
  duplexSpacing: number;
  startFrequency: number;
  endFrequency: number;
}
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
        this.providersFinal=[];
        this.previousProvider={};
        let counter=0;
        let fullLength=this.providers.length;
        let bandType = this.band.find((item) => item.band == this.frequencyBand);
        let startFrequency = bandType?.startFrequency as number;
        let endFrequency = bandType?.endFrequency as number;
        let duplexSpacing = bandType?.duplexSpacing as number;
        this.providers && this.providers.forEach((element: any) => {;
            if(counter==0){
                if(element.frequency[this.linkType].start>startFrequency){
                    this.providers.push(JSON.parse('{"provider": {"name": "Unallocated","longName":"Unallocated Spectrum","backgroundColor":"#3d3d3d","sharedBackgroundColor":"#a3a3a3","homePage":"#"},"frequency":{"downLink": {"start": '+startFrequency.toFixed(3)+',"end": '+element.frequency["downLink"].start.toFixed(3)+'},"upLink": {"start": '+(startFrequency-duplexSpacing).toFixed(3)+',"end": '+(element.frequency["downLink"].start-duplexSpacing).toFixed(3)+'}}}'));
                }
            }
            if(counter!=0){
                if(this.previousProvider.name!="Unallocated"){
                    if(this.previousProvider.frequency["downLink"].end!=element.frequency["downLink"].start){
                        this.providers.push(JSON.parse('{"provider": {"name": "Unallocated","longName":"Unallocated Spectrum","backgroundColor":"#3d3d3d","sharedBackgroundColor":"#a3a3a3","homePage":"#"},"frequency":{"downLink": {"start": '+this.previousProvider.frequency["downLink"].end.toFixed(3)+',"end": '+element.frequency["downLink"].start.toFixed(3)+'},"upLink": {"start": '+(this.previousProvider.frequency["downLink"].end-duplexSpacing).toFixed(3)+',"end": '+(element.frequency["downLink"].start-duplexSpacing).toFixed(3)+'}}}'));
                    }
                }
            }
            this.providersFinal.push(this.providers[counter]);
            if(counter==(fullLength-1)){
                if(element.frequency[this.linkType].end<endFrequency){
                    this.providers.push(JSON.parse('{"provider": {"name": "Unallocated","longName":"Unallocated Spectrum","backgroundColor":"#3d3d3d","sharedBackgroundColor":"#a3a3a3","homePage":"#"},"frequency":{"downLink": {"start": '+element.frequency["downLink"].end.toFixed(1)+',"end": '+endFrequency+'},"upLink": {"start": '+(element.frequency["downLink"].end-duplexSpacing).toFixed(1)+',"end": '+(endFrequency-duplexSpacing).toFixed(1)+'}}}'));
                }
            }
            this.previousProvider=this.providers[counter];
            counter=counter+1;
        });
        this.totalBandwidth = endFrequency-startFrequency;
    }

    /**
     * Modal Opening
     * @param content 
     */
    open(content: any) {
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
    }
        /**
    * List of Bands in Array
    */

    band: Bands[] = [
        { band: 1, type: 'FDD', startARFCN:0, endARFCN: 599, duplexSpacing: 190, startFrequency: 2110 , endFrequency: 2170},
        { band: 2, type: 'FDD', startARFCN:600, endARFCN: 1199, duplexSpacing: 80, startFrequency: 1930 , endFrequency: 1990},
        { band: 3, type: 'FDD', startARFCN:1200, endARFCN: 1949, duplexSpacing: 95, startFrequency: 1805 , endFrequency: 1880},
        { band: 4, type: 'FDD', startARFCN:1950, endARFCN: 2399, duplexSpacing: 400, startFrequency: 2110 , endFrequency: 2155},
        { band: 5, type: 'FDD', startARFCN:2400, endARFCN: 2649, duplexSpacing: 45, startFrequency: 869 , endFrequency: 894},
        { band: 7, type: 'FDD', startARFCN:2750, endARFCN: 3449, duplexSpacing: 120, startFrequency: 2620 , endFrequency: 2690},
        { band: 8, type: 'FDD', startARFCN:3450, endARFCN: 3799, duplexSpacing: 45, startFrequency: 925 , endFrequency: 960},
        { band: 9, type: 'FDD', startARFCN:3800, endARFCN: 4149, duplexSpacing: 95, startFrequency: 1844.9 , endFrequency: 1879.9},
        { band: 11, type: 'FDD', startARFCN:4750, endARFCN: 4949, duplexSpacing: 48, startFrequency: 1475.9 , endFrequency: 1495.9},
        { band: 12, type: 'FDD', startARFCN:5010, endARFCN: 5179, duplexSpacing: 30, startFrequency: 729 , endFrequency: 746},
        { band: 13, type: 'FDD', startARFCN:5180, endARFCN: 5279, duplexSpacing: -31, startFrequency: 746 , endFrequency: 756},
        { band: 14, type: 'FDD', startARFCN:5280, endARFCN: 5379, duplexSpacing: -30, startFrequency: 758 , endFrequency: 768},
        { band: 17, type: 'FDD', startARFCN:5730, endARFCN: 5849, duplexSpacing: 30, startFrequency: 734 , endFrequency: 746},
        { band: 18, type: 'FDD', startARFCN:5850, endARFCN: 5999, duplexSpacing: 45, startFrequency: 860 , endFrequency: 875},
        { band: 19, type: 'FDD', startARFCN:6000, endARFCN: 6149, duplexSpacing: 45, startFrequency: 875 , endFrequency: 890},
        { band: 20, type: 'FDD', startARFCN:6150, endARFCN: 6449, duplexSpacing: -41, startFrequency: 791 , endFrequency: 821},
        { band: 21, type: 'FDD', startARFCN:6450, endARFCN: 6599, duplexSpacing: 48, startFrequency: 1495.9 , endFrequency: 1510.9},
        { band: 25, type: 'FDD', startARFCN:8040, endARFCN: 8689, duplexSpacing: 80, startFrequency: 1930 , endFrequency: 1995},
        { band: 26, type: 'FDD', startARFCN:8690, endARFCN: 9039, duplexSpacing: 45, startFrequency: 859 , endFrequency: 894},
        { band: 28, type: 'FDD', startARFCN:9210, endARFCN: 9659, duplexSpacing: 55, startFrequency: 758 , endFrequency: 803},
        { band: 29, type: 'SDL', startARFCN:9660, endARFCN: 9769, duplexSpacing: 0, startFrequency: 717 , endFrequency: 728},
        { band: 31, type: 'FDD', startARFCN:9870, endARFCN: 9919, duplexSpacing: 10, startFrequency: 462.5 , endFrequency: 467.5},
        { band: 32, type: 'SDL', startARFCN:9920, endARFCN: 10359, duplexSpacing: 0, startFrequency: 1452 , endFrequency: 1496},
        { band: 38, type: 'TDD', startARFCN:37750, endARFCN: 38249, duplexSpacing: 0, startFrequency: 2570 , endFrequency: 2620},
        { band: 39, type: 'TDD', startARFCN:38250, endARFCN: 38649, duplexSpacing: 0, startFrequency: 1880 , endFrequency: 1920},
        { band: 40, type: 'TDD', startARFCN:38650, endARFCN: 39649, duplexSpacing: 0, startFrequency: 2300 , endFrequency: 2400},
        { band: 41, type: 'TDD', startARFCN:39650, endARFCN: 41589, duplexSpacing: 0, startFrequency: 2496 , endFrequency: 2690},
        { band: 42, type: 'TDD', startARFCN:41590, endARFCN: 43589, duplexSpacing: 0, startFrequency: 3400 , endFrequency: 3600},
        { band: 43, type: 'TDD', startARFCN:43590, endARFCN: 45589, duplexSpacing: 0, startFrequency: 3600 , endFrequency: 3800},
        { band: 66, type: 'FDD', startARFCN:66436, endARFCN: 67335, duplexSpacing: 400, startFrequency: 2110 , endFrequency: 2200},
        { band: 67, type: 'SDL', startARFCN:67336, endARFCN: 67535, duplexSpacing: 0, startFrequency: 738 , endFrequency: 758},
        { band: 71, type: 'FDD', startARFCN:68586, endARFCN: 68935, duplexSpacing: -46, startFrequency: 617 , endFrequency: 652},
        { band: 72, type: 'FDD', startARFCN:68936, endARFCN: 68985, duplexSpacing: 10, startFrequency: 461 , endFrequency: 466},
        { band: 75, type: 'SDL', startARFCN:69466, endARFCN: 70315, duplexSpacing: 0, startFrequency: 1432 , endFrequency: 1517},
        { band: 77, type: 'TDD', startARFCN:999999, endARFCN: 999999, duplexSpacing: 0, startFrequency: 3300 , endFrequency: 4200},
        { band: 78, type: 'TDD', startARFCN:999999, endARFCN: 999999, duplexSpacing: 0, startFrequency: 3300 , endFrequency: 3800},
        { band: 79, type: 'TDD', startARFCN:999999, endARFCN: 999999, duplexSpacing: 0, startFrequency: 4400 , endFrequency: 5000},
        { band: 257, type: 'TDD', startARFCN:999999, endARFCN: 999999, duplexSpacing: 0, startFrequency: 26500 , endFrequency: 29500},
        { band: 258, type: 'TDD', startARFCN:999999, endARFCN: 999999, duplexSpacing: 0, startFrequency: 24250 , endFrequency: 27500},
        { band: 259, type: 'TDD', startARFCN:999999, endARFCN: 999999, duplexSpacing: 0, startFrequency: 39500 , endFrequency: 43500},
        { band: 260, type: 'TDD', startARFCN:999999, endARFCN: 999999, duplexSpacing: 0, startFrequency: 37000 , endFrequency: 40000},
        { band: 261, type: 'TDD', startARFCN:999999, endARFCN: 999999, duplexSpacing: 0, startFrequency: 27500 , endFrequency: 28350},
        { band: 262, type: 'TDD', startARFCN:999999, endARFCN: 999999, duplexSpacing: 0, startFrequency: 47200 , endFrequency: 48200}
    ]
    getFrequencyLTE(arfcn: number) {
        //let bandName = this.band.find((item) => item.band == band)
        //return bandName?.name;
        let bandType = this.band.find((item) => item.startARFCN <= arfcn&&item.endARFCN >= arfcn);
        //console.log(bandType);
        let type = bandType?.type as any;
        let startFrequency = bandType?.startFrequency as number;
        let duplexSpacing = bandType?.duplexSpacing as number;
        let startARFCN = bandType?.startARFCN as number;
        if(type=="FDD"){
            let offset=arfcn-startARFCN;
            let DLFreq=startFrequency+(0.1*offset);
            let ULFreq=startFrequency-duplexSpacing+(0.1*offset);
            return "(↓: "+DLFreq.toFixed(1)+" MHz/↑: "+ULFreq.toFixed(1)+" MHz)";
        }
        else if(type=="TDD"){
            let offset=arfcn-startARFCN;
            let Freq=startFrequency+(0.1*offset);
            return "(↓/↑: "+Freq.toFixed(1)+" MHz)";
        }
        else if(type=="SDL"){
            let offset=arfcn-startARFCN;
            let Freq=startFrequency+(0.1*offset);
            return "(↓: "+Freq.toFixed(1)+" MHz)";
        }
        else{
            return "()";
        }
    }
    getFrequencyNR(arfcn: number) {
        //let bandName = this.band.find((item) => item.band == band)
        //return bandName?.name;
        let bandType = this.band.find((item) => item.startARFCN <= arfcn&&item.endARFCN >= arfcn);
        console.log(bandType);
        let duplexSpacing = bandType?.duplexSpacing as number;
        if(arfcn<600000){
            let Freq=(0.005*arfcn);
            return "(SSB: "+Freq.toFixed(3)+" MHz)";
        }
        else if(arfcn>=600000&&arfcn<2016667){
            let Freq=3000+(0.015*(arfcn-600000));
            return "(SSB: "+Freq.toFixed(3)+" MHz)";
        }
        else if(arfcn>2016667){
            let Freq=24250.08+(0.060*(arfcn-2016667));
            return "(SSB: "+Freq.toFixed(3)+" MHz)";
        }
        else{
            return "()";
        }
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
    providersFinal: any;
    previousProvider: any;
}  
