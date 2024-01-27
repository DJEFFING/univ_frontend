import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UiversityDetailsComponent } from './uiversity/uiversity-details/uiversity-details.component';
import { UiversityListComponent } from './uiversity/uiversity-list/uiversity-list.component';

export const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'university-list',component:UiversityListComponent},
  {path:'university/:id',component:UiversityDetailsComponent},
  {path: '', component:HomeComponent, pathMatch:'full'},

];

export const routing = RouterModule.forRoot(routes);
