import {Component} from '@angular/core';
import {LowerCasePipe,DecimalPipe, DatePipe, CurrencyPipe} from '@angular/common';

@Component({
  selector: 'app-pip-demo',
  templateUrl:'./pip-demo.html',
  imports: [LowerCasePipe, DecimalPipe, DatePipe, CurrencyPipe],
})

export class PipDemo {
  username = 'yOunGTECh';
  birthday = new Date(2000,5,20);
  cash = 2000000;
  pi:number = 2.14159261111111;
}
