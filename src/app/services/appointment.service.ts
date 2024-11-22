import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppointmentService {
  mockedData = [
    {
      id: 1,
      patient: 'Juan Perez',
      date: '2021-09-01',
      time: '10:00',
      reason: 'Consulta general',
    },
    {
      id: 2,
      patient: 'Maria Rodriguez',
      date: '2021-09-01',
      time: '11:00',
      reason: 'Consulta general',
    },
    {
      id: 3,
      patient: 'Pedro Gomez',
      date: '2021-09-01',
      time: '12:00',
      reason: 'Consulta general',
    },
    {
      id: 4,
      patient: 'Ana Martinez',
      date: '2021-09-01',
      time: '13:00',
      reason: 'Consulta general',
    },
  ];

  getAppointments() {
    return this.mockedData;
  }

  addAppointment(appointment: any) {
    this.mockedData.push(appointment);
  }
}
