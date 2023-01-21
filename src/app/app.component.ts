import { Component, VERSION } from '@angular/core';
import { interval } from 'rxjs';
import { DailyCricketMatchDetails, Status } from './daily-cricket-match-details';
import { DailyCricketService } from './daily-cricket.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
 
  status_str = {
    fixture: 1,
    result: 2,
    live: 3
  }
  status_enum: Status = Status.live;
  token = "";
  isDataLoading = false
  readonly liveRefresh = interval(10000);
  dailyCricketMatchDetails!:DailyCricketMatchDetails;

  constructor(protected dailyCricketService: DailyCricketService){
    dailyCricketService.getToken().subscribe(res => {
      this.token = res.body;
      //console.info(this.token)
    })

    this.loadDailyCricketMatchDetails()

    this.liveRefresh.subscribe(_ => {
      if(this.status_enum === Status.live)
        this.loadDailyCricketMatchDetails()
    })

    
  }



  loadDailyCricketMatchDetails():void{
    this.isDataLoading = true
    console.info(this.status_enum)
    this.dailyCricketService.getDailyCricketMatchDetails(this.status_enum).subscribe(res => {
      this.isDataLoading = false
      this.dailyCricketMatchDetails = res.body;
      //console.info(this.dailyCricketMatchDetails)
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
