import { Component, VERSION } from '@angular/core';
import { DailyCricketMatchDetails, Status } from './daily-cricket-match-details';
import { DailyCricketService } from './daily-cricket.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  status = 2;
  status_str = {
    fixture: 1,
    live: 2,
    result: 3
  }
  status_enum: Status = Status.live;
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
    this.dailyCricketService.getDailyCricketMatchDetails(this.status_enum).subscribe(res => {
      this.isDataLoading = false
      this.dailyCricketMatchDetails = res.body;
      console.info(this.dailyCricketMatchDetails)
    })
  }

  showLiveMatch(status:Status):void{
    this.status_enum = status ?? Status.live;
    this.loadDailyCricketMatchDetails()
  }

  convertTimeStamptoDate(timeStamp: number):Date{
    return new Date(timeStamp);
  }


}
