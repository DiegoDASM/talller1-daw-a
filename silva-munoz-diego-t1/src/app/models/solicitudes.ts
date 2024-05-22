export class Solicitudes {
    cedula: string;
    nombre: string;
    fechaSoli: Date | null = null;
    fechaFin: Date | null = null;
    equipos: string;
    equipoSolicitado: number;
    razon: string;

    constructor(cedula:string, nombre:string, fechaSoli: Date, fechaFin: Date, equipos: string, equipoSolicitado: number, razon: string){
        this.cedula = cedula;
        this.nombre = nombre;
        this.fechaSoli = fechaSoli;
        this.fechaFin = fechaFin;
        this.equipos = equipos;
        this.equipoSolicitado = equipoSolicitado;
        this.razon = razon;
    }
}
