import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EncabezadoComponent } from "./components/encabezado/encabezado.component";
import { PieComponent } from "./components/pie/pie.component";
import { CuerpoComponent } from "./components/cuerpo/cuerpo.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, EncabezadoComponent, PieComponent, CuerpoComponent]
})
export class AppComponent {
  title = 'silva-munoz-diego-t1';
}
