import { Component,output } from '@angular/core';
import {Child} from '../child/app-child'

@Component({
    selector:'app-parent',
    templateUrl:'./app-parent.html',
    imports:[Child]
})

export class Parent{
    items = new Array();

    addItem(item:string){
        this.items.push(item);
    }
}