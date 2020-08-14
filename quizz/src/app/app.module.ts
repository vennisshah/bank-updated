import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UserService } from './user.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TakequizComponent } from './takequiz/takequiz.component';
import { ReviewComponent } from './review/review.component';
import { ResultsComponent } from './results/results.component';
import { SubmitquizComponent } from './submitquiz/submitquiz.component';
import {FormsModule} from '@angular/forms'
import { HttpClientModule ,HTTP_INTERCEPTORS } from '@angular/common/http';
import { QuizService } from './quiz.service';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { SavingComponent } from './saving/saving.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { IcinBankComponent } from './icin-bank/icin-bank.component';
import { MyprofileComponent } from './myprofile/myprofile.component';

@NgModule({
  declarations: [
    AppComponent,
    TakequizComponent,
    ReviewComponent,
    ResultsComponent,
    SubmitquizComponent,
    ProfileComponent,
    SavingComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    IcinBankComponent,
    MyprofileComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
