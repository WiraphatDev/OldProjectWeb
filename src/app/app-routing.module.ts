import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { Page2menuComponent } from './page2menu/page2menu.component';
import { Page3editmemberComponent } from './page3editmember/page3editmember.component';
import { Page3managememberComponent } from './page3managemember/page3managemember.component';
import { Page4systemrankComponent } from './page4systemrank/page4systemrank.component';
import { Page5reportmemberweekComponent } from './page5reportmemberweek/page5reportmemberweek.component';
import { Page6reportmembermonthComponent } from './page6reportmembermonth/page6reportmembermonth.component';



const routes: Routes = [
  {
    path:'loginpage',
    component:LoginpageComponent,
  },
  {
    path:'page2menu',
    component:Page2menuComponent,
  },
  {
    path:'page3managemember',
    component:Page3managememberComponent,
  },
  { 
    path:'page4systemrank',
    component:Page4systemrankComponent, 
  },
  {
    path:'page5reportmemberweek',
    component:Page5reportmemberweekComponent,
  },
  {
    path:'page6reportmembermonth',
    component:Page6reportmembermonthComponent,
  },
  {
    path:'page3editmember',
    component:Page3editmemberComponent,
  }
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
