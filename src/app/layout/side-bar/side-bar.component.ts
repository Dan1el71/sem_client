import { Component } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css',
})
export class SideBarComponent {
  elements = [
    {
      name: 'Agenda del dia',
      icon: 'bi bi-journal-medical',
      ref: '/',
    },
    {
      name: 'Lista de pacientes',
      icon: 'bi bi-people',
      ref: '/pacientes',
    },
    {
      name: 'Ver informes',
      icon: 'bi bi-file-earmark-text',
      ref: '/informes',
    },
  ];
}
