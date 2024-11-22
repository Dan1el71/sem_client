import { AppointmentService } from './../../services/appointment.service';
import { Component, inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-agenda',
  standalone: true,
  imports: [],
  templateUrl: './agenda.component.html',
  styleUrl: './agenda.component.css',
})
export class AgendaComponent implements OnInit {
  private appointments = inject(AppointmentService);

  appointmentList!: any[];

  getAppointments() {
    return this.appointments.getAppointments();
  }

  ngOnInit() {
    this.appointmentList = this.getAppointments();
  }
}
