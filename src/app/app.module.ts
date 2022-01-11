import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { Page2menuComponent } from './page2menu/page2menu.component';
import { Page3managememberComponent } from './page3managemember/page3managemember.component';
import { Page4systemrankComponent } from './page4systemrank/page4systemrank.component';
import { ChartComponent } from './chart/chart.component';
import { ChartweekComponent } from './chartweek/chartweek.component';
import { Page5reportmemberweekComponent } from './page5reportmemberweek/page5reportmemberweek.component';
import { Page6reportmembermonthComponent } from './page6reportmembermonth/page6reportmembermonth.component';
import { Page3editmemberComponent } from './page3editmember/page3editmember.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginpageComponent,
    Page2menuComponent,
    Page3managememberComponent,
    Page4systemrankComponent,
    ChartComponent,
    ChartweekComponent,
    Page5reportmemberweekComponent,
    Page6reportmembermonthComponent,
    Page3editmemberComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
