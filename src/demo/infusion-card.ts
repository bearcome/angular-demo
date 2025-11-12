import { Component, signal,input } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';

@Component({
  selector: 'app-infusion-card',
  imports: [MatSlideToggleModule,MatCardModule,MatChipsModule],
  templateUrl: './infusion-card.html',
  styleUrl:'infusion-card.css'
})
export class InfusionCard {
    patientName='Tom';
    bedName = 'bed03';
    gender = 'male';

    totalMedicine = 100;
    finishedMedicine = 60;
    leftMedicine = 30;
    leftPercent = 30;

    
    dropSpeed = 0;
    trueSpeed = 0;

    mode = 'drop';
    heal = 'L1';
    powerOn = false;

    status = 'stop';
    exceptionName = 'normal';

}
