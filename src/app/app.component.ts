import { Component, VERSION } from '@angular/core';
import { DailyCricketMatchDetails } from './daily-cricket-match-details';
import { DailyCricketService } from './daily-cricket.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  status = 2;
  token = "";
  isDataLoading = false
  dailyCricketMatchDetails!:DailyCricketMatchDetails;

  

  constructor(protected dailyCricketService: DailyCricketService){
    dailyCricketService.getToken().subscribe(res => {
      this.token = res.body;
      console.info(this.token)
    })

    this.loadDailyCricketMatchDetails()
  }



  loadDailyCricketMatchDetails():void{
    this.isDataLoading = true
    this.dailyCricketService.getDailyCricketMatchDetails(this.status).subscribe(res => {
      this.isDataLoading = false
      this.dailyCricketMatchDetails = res.body;
      console.info(this.dailyCricketMatchDetails)
    })
  }

  showLiveMatch(status:number):void{
    this.status = status ?? 3;
    this.loadDailyCricketMatchDetails()
  }

  convertTimeStamptoDate(timeStamp: number):Date{
    return new Date(timeStamp);
  }


}
