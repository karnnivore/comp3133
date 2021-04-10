import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../network/data.service';
import { Mission } from '../model/mission';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-missionlist',
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.css']
})
export class MissionlistComponent implements OnInit {

  constructor(private dataService: DataService,
    private route: ActivatedRoute,
    private router: Router) {
    this.mission = [];
  }

  mission: Mission[];

  ngOnInit(): void {
    this.dataService.getData()
    .subscribe(
      data => {
        this.mission = data
      }
    )
  }

  showDetails(mis: Mission){
    this.router.navigate(['/mission-details'])
  }

}
