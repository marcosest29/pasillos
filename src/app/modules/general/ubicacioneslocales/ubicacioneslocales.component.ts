import { Component, OnInit } from '@angular/core';
import {NodeService} from "../nodeservice";
import {MyMsgService} from "../msgservice";
import {Router} from "@angular/router";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-ubicacioneslocales',
  templateUrl: './ubicacioneslocales.component.html',
  styleUrls: ['./ubicacioneslocales.component.css']
})
export class UbicacioneslocalesComponent implements OnInit {

  constructor(
    private nodeService: NodeService,
    private mymsgservice: MyMsgService,
    private router: Router,
    private messageService: MessageService) {
    this.loadListas();
  }
  codlocal:any;
  articulos:any[];
  estados:any[];
  picking:any;

  clasificacion: Array<any> = [];
  selectedClasificacion: any = null;
  subclasificacion: Array<any> = [];
  selectedSubclasificacion: any = null;
  ngOnInit(): void {
    this.mymsgservice.publishMessage('pantalla-ubicaciones');
  }
  doSearch(){
    this.nodeService.getUbicaciones().then(t => {
      this.articulos = t;
    });
  }

  loadListas(){
    this.nodeService.getEstados().then(est => {
      this.estados = est;
    });
    this.nodeService.getClasificacion().then(clasificacion => {
      this.clasificacion = clasificacion;
    });
    this.nodeService.getSubclasificacion().then(subclasificacion => {
      this.subclasificacion = subclasificacion;
    });
  }

  gotoEdit(){
    this.router.navigate(['ubicaciones'], {});

  }

  gotoNone(){
  }

}
