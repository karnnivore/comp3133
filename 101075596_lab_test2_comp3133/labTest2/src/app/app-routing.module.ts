import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MissionlistComponent } from './missionlist/missionlist.component';
import { MissiondetailsComponent } from './missiondetails/missiondetails.component';

const routes: Routes = [
  { path: 'mission-list', component: MissionlistComponent },
  { path: 'mission-details/:id', component: MissiondetailsComponent },
  { path: '**', component: MissionlistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
