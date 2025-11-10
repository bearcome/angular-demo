import { Component } from '@angular/core';

@Component({
    selector:'app-tech',
    templateUrl:'./app-tech.html',
    styleUrl:'./app-tech.css',
})

export class Tech{
    skills=[
        {id:0,skill:'angular'},
        {id:1,skill:'C#'},
        {id:2,skill:'Blazor'},
        {id:3,skill:'EF Core'},
    ];
}