import { Routes } from '@angular/router';
import {Index} from '../index/app-index'
import {User} from '../user/app-user'
import {Parent} from '../parent/app-parent'
import { Skill } from '../item/app-item-form';

export const routes: Routes = [
    {
        path: 'index',
        title: 'App Index Page',
        component: Index,
    },{
        path: 'user',
        title: 'App User Home',
        component: User,
    },
    {
        path: 'parent',
        title: 'App Parent Page',
        component: Parent,
    },
      {
        path: 'skillform',
        title: 'Skill Form Page',
        component: Skill,
    },
    
];
