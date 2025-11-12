import { Component, signal,input } from '@angular/core';
import {User} from '../user/app-user'
import {Tech} from '../tech/app-tech'
import {Parent} from '../parent/app-parent'
import {Img} from '../img/app-img'
import { PipDemo } from "../pip-demo/pip-demo";
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { InfusionCard } from "../demo/infusion-card";

@Component({
  selector: 'app-index',
  imports: [User, Tech, Parent, Img, PipDemo, MatSlideToggleModule, InfusionCard],
  templateUrl: './app-index.html',
})
export class Index {
  protected readonly title = signal('my-app');
  city = 'Zibo City';
  starNum = 0;


  followUp(){
    this.starNum++ ;//update(value=>value+1);
    console.log(this.starNum + "people are following you!");
  }
}
