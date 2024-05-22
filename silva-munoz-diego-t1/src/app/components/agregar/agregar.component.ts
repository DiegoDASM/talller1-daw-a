import { Component } from '@angular/core';
import { Solicitudes } from '../../models/solicitudes';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-agregar',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './agregar.component.html',
  styleUrl: './agregar.component.css'
})

export class AgregarComponent {
  solicitud: Solicitudes[] = [];
  solicitu!: Solicitudes;

  selectedEquipo: number = 0; // Corregido: inicialización de 'selectedEquipo'
  cedula!: string;
  nombre!: string;
  fechaSoli!: Date;
  fechaFin!: Date;
  equipoSolicitado!: number;
  razon!: string;

  Equipos = [
    { id: 1, nombre: 'Computadoras de escritorio' },
    { id: 2, nombre: 'Laptops' },
    { id: 3, nombre: 'Tabletas' },
    { id: 4, nombre: 'Dispositivos móviles' },
    { id: 5, nombre: 'Servidores' },
  ];

  agregarSolicitud() {
    const solicitu: Solicitudes = {
      cedula: this.cedula,
      nombre: this.nombre,
      fechaSoli: this.fechaSoli,
      fechaFin: this.fechaFin,
      equipos: this.Equipos[this.selectedEquipo].nombre,
      equipoSolicitado: this.equipoSolicitado,
      razon: this.razon,
    };
    this.solicitud.push(solicitu);
    console.log(this.solicitud);
  }
  
  onOptionSelected() {
    console.log('Opción seleccionada:', this.selectedEquipo);
    console.log('Opción:', this.Equipos[this.selectedEquipo].nombre);
  }
}