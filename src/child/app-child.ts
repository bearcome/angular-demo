import { Component,output } from '@angular/core';

@Component({
    selector:'app-child',
    templateUrl:'./app-child.html'
})

export class Child{
    readonly addItemEvent = output<string>();

    addItem(){
        this.addItemEvent.emit("🐢")
    }
}