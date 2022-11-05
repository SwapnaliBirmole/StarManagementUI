import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllStarsComponent } from './layouts/all-stars/all-stars.component';
import { HomePageComponent } from './layouts/home-page/home-page.component';
import { ReviewStarsComponent } from './layouts/review-stars/review-stars.component';
import { SubmitStarComponent } from './layouts/submit-star/submit-star.component';
import { UserManagementComponent } from './layouts/user-management/user-management.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'reviewstars', component: ReviewStarsComponent },
  { path: 'submitstar', component: SubmitStarComponent },
  { path: 'user', component: UserManagementComponent },
  { path: 'allstars', component: AllStarsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
