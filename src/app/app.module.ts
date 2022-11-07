import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HomePageComponent } from './layouts/home-page/home-page.component';
import { ReviewStarsComponent } from './layouts/review-stars/review-stars.component';
import { SubmitStarComponent } from './layouts/submit-star/submit-star.component';
import { UserManagementComponent } from './layouts/user-management/user-management.component';
import { AllStarsComponent } from './layouts/all-stars/all-stars.component';
import { MenuComponent } from './layouts/shared/menu/menu.component';
import { FooterComponent } from './layouts/shared/footer/footer.component';
//import { RouterModule } from '@angular/router';
import { routing } from './app-routing.module';

@NgModule({
  imports: [BrowserModule, FormsModule, routing],
  declarations: [
    AppComponent,
    HelloComponent,
    HomePageComponent,
    ReviewStarsComponent,
    SubmitStarComponent,
    UserManagementComponent,
    AllStarsComponent,
    MenuComponent,
    FooterComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
