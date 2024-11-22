import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MedicLoginService {
  getMedicData() {
    return {
      name: 'Dr. Juan Perez',
      speciality: 'Medicina general',
      email: 'email@email.com',
    };
  }
}
