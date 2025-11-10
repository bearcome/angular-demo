import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class GenderService {
  genders = ['Male', 'Famale', 'Other'];

  getGenders(): string[] {
    return this.genders;
  }

  getGender(id: number) {
    return this.genders[id];
  }
}
