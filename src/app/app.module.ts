import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { NavigationComponent } from './navigation/navigation.component';
import { SignModalComponent } from './sign-modal/sign-modal.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterModalComponent } from './register-modal/register-modal.component';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { CoursesPageComponent } from './courses-page/courses-page.component';
import { TestsComponent } from './tests/tests.component';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatGridListModule } from '@angular/material/grid-list';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap';
import { FootModalsComponent } from './foot-modals/foot-modals.component';
import { DashboardComponent } from './dashboard-page/dashboard/dashboard.component';
import { ProfileComponent } from './dashboard-page/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavigationComponent,
    SignModalComponent,
    WelcomePageComponent,
    RegisterModalComponent,
    DashboardPageComponent,
    CoursesPageComponent,
    TestsComponent,
    FootModalsComponent,
    DashboardComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatDialogModule,
    MatSelectModule,
    MatGridListModule,
    NgbModule,
    NgbProgressbarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
