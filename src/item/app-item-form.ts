import {Component, inject} from '@angular/core';
import {FormControl, FormGroup, FormsModule, Validators} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import { GenderService } from '../services/gender.services';

@Component({
    selector:'app-item-form',
    templateUrl:'./app-item-form.html',
    imports: [ReactiveFormsModule],
})

export class Skill{
    skillForm = new FormGroup({
        name : new FormControl(''),
        favoriteFramework : new FormControl('',Validators.maxLength(8)),
        skillLevel : new FormControl(1, [Validators.max(5),Validators.min(1)]),
        startDate : new FormControl(new Date()),
        gender : new FormControl('0')
    });
    
    genderService = inject(GenderService);

    submit(){
        console.log(this);
    }
}
