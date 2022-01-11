import { Component, OnInit,ViewChild } from '@angular/core';
import { Chart } from 'chart.js'

@Component({
  selector: 'app-chartweek',
  templateUrl: './chartweek.component.html',
  styleUrls: ['./chartweek.component.css']
})
export class ChartweekComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {}
  canvas: any;
  ctx: any;
  @ViewChild('mychart') mychart:any;

  ngAfterViewInit() {
    this.canvas = this.mychart.nativeElement; 
    this.ctx = this.canvas.getContext('2d');
    new Chart(this.ctx, {

      
      type: 'bar',
      
       data : {
       labels: ['Monday', 'Thuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday','Sunday'],
       datasets: [{
       label: 'Week', 
       data: [7, 10, 20, 30, 40, 50, 70],
       backgroundColor: [

      'rgba(255, 205, 86, 0.2)',
      'rgba(255, 102, 255, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(255, 159, 64, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(255, 0, 0, 0.2)',
      
       ],
       borderColor: [
      'rgb(255, 205, 86)',
      'rgb(255, 102, 255)',
      'rgb(75, 192, 192)',
      'rgb(255, 159, 64)',
      'rgb(54, 162, 235)',
      'rgb(153, 102, 255)',
      'rgb(255, 0, 0)'
      
       ],
       borderWidth: 1
  }]
}


    });
  }
}