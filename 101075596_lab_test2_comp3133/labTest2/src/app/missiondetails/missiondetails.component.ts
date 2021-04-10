import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { DataService } from '../network/data.service';
import { Mission } from '../model/mission';

@Component({
  selector: 'app-missiondetails',
  templateUrl: './missiondetails.component.html',
  styleUrls: ['./missiondetails.component.css']
})
export class MissiondetailsComponent implements OnInit {

  constructor(private dataService: DataService) {
  }

  @Input()
  mission!: Mission;

  ngOnInit(): void {
  }
}
