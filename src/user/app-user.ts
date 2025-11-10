import { Component,input } from '@angular/core';

@Component({
    selector:'app-user',
    templateUrl:'./app-user.html',
    styleUrl:'./app-user.css'
})

export class User{
    readonly userId = input<string>();
    username = 'youngTech';
    isLogin = true;
    isDivEditable = true;

}