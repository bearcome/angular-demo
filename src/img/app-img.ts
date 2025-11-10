import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

@Component({
    selector: 'app-img',
    imports:[NgOptimizedImage],
    templateUrl:'./app-img.html'
})

export class Img{
    logoUrl = '/favicon.ico';
    logoAlt = '/favicon.ico';
}
