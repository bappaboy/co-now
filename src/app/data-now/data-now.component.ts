import { Component, OnInit } from '@angular/core';
import { BedResponse, BedSvcResponse, CovidResponse, CovidSvcResponse, RegionalBedInfo } from '../models/regionalData';
import { CovidDataService } from '../services/covid-data.service';

@Component({
  selector: 'app-data-now',
  templateUrl: './data-now.component.html',
  styleUrls: ['./data-now.component.css']
})
export class DataNowComponent implements OnInit {
  covidSvcResponse: CovidSvcResponse | undefined;
  covidResponse: CovidResponse | undefined;
  bedSvcResponse: BedSvcResponse | undefined;
  bedResponse: BedResponse | undefined;

  constructor(private covidDataService: CovidDataService) {
   }

  ngOnInit(): void {
    this.covidDataService.getCases()
      .subscribe((item: CovidSvcResponse) => {
        // console.log(item);
        this.covidSvcResponse = item;
        this.covidResponse = this.covidSvcResponse.data;
        // console.log('final ', this.covidResponse);
      }, err => console.log(err));
    
    this.covidDataService.getBedInfo()
      .subscribe((item: BedSvcResponse) => {
        this.bedSvcResponse = item;
        this.bedResponse = this.bedSvcResponse.data;
        console.log('bed response ', this.bedResponse);
      }, err => console.log(err));
  }

  getBedInfoByState(stateName: string): RegionalBedInfo {
    console.log('State ', stateName);
    if (this.bedResponse) {
      console.log('regional', this.bedResponse.regional);
      const bedInfo1 = this.bedResponse.regional.filter(x => x.state === stateName);
      if (bedInfo1.length > 0) {
        
      const bedInfo = this.bedResponse.regional.filter(x => x.state === stateName)[0];
      console.log('BedInfo', bedInfo);
      return bedInfo;
      } else {
        let emptyBedInfo = <RegionalBedInfo>({ 
          asOn: '',
          ruralBeds: 0,
          ruralHospitals: 0,
          state: stateName,
          totalBeds: 0,
          totalHospitals: 0,
          urbanBeds: 0,
          urbanHospitals: 0
         });
        return emptyBedInfo;
      }
    } else {
      let emptyBedInfo = <RegionalBedInfo>({ 
        asOn: '',
        ruralBeds: 0,
        ruralHospitals: 0,
        state: stateName,
        totalBeds: 0,
        totalHospitals: 0,
        urbanBeds: 0,
        urbanHospitals: 0
       });
      return emptyBedInfo;
    }
    
  }

}
