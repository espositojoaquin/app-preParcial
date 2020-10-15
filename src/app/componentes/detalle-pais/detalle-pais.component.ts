import { Component, Input, OnInit } from '@angular/core';
import { Nacionalidad } from 'src/app/modelos/model';

@Component({
  selector: 'app-detalle-pais',
  templateUrl: './detalle-pais.component.html',
  styleUrls: ['./detalle-pais.component.css']
})
export class DetallePaisComponent implements OnInit {
  @Input() pais:Nacionalidad;
  constructor() { }

  ngOnInit(): void {
  }

}
