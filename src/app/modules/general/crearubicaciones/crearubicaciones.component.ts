import { Component, OnInit } from '@angular/core';
import {NodeService} from "../nodeservice";
import {MyMsgService} from "../msgservice";
import {Router} from "@angular/router";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-crearubicaciones',
  templateUrl: './crearubicaciones.component.html',
  styleUrls: ['./crearubicaciones.component.css']
})
export class CrearubicacionesComponent implements OnInit {

  constructor(
    private nodeService: NodeService,
    private mymsgservice: MyMsgService,
    private router: Router,
    private messageService: MessageService) {
    this.loadListas();
  }
  clasificacion: Array<any> = [];
  selectedClasificacion: any = null;
  subclasificacion: Array<any> = [];
  selectedSubclasificacion: any = null;
  ubicadoSelected:any;
  ubicados: Array<any> = [];
  ubicadosdetalle: Array<any> = [];
  ubicadodetalleSelected:any;
  referenciasSelected:any;
  referencias: Array<any> = [];
  referenciasdetalle: Array<any> = [];
  referenciasdetalleSelected:any;
  picking:any;
  ngOnInit(): void {
    this.mymsgservice.publishMessage('pantalla-crearubicaciones');
  }

  loadListas(){
    this.nodeService.getClasificacion().then(clasificacion => {
      this.clasificacion = clasificacion;
    });
    this.nodeService.getSubclasificacion().then(subclasificacion => {
      this.subclasificacion = subclasificacion;
    });
    this.nodeService.getUbicados().then(ubicados => {
      this.ubicados = ubicados;
    });
    this.nodeService.getUbicadosDetalle().then(ubicadosdetalle => {
      this.ubicadosdetalle = ubicadosdetalle;
    });
    this.nodeService.getReferencias().then(referencias => {
      this.referencias = referencias;
    });
    this.nodeService.getReferenciasDetalle().then(referenciasdetalle => {
      this.referenciasdetalle = referenciasdetalle;
    });
  }

  gotoNone(){
  }
}
