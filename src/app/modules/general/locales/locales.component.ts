import { Component, OnInit } from '@angular/core';
import {NodeService} from "../nodeservice";
import {MyMsgService} from "../msgservice";
import {MessageService} from "primeng/api";
import {Router} from "@angular/router";

@Component({
  selector: 'app-locales',
  templateUrl: './locales.component.html',
  styleUrls: ['./locales.component.css']
})
export class LocalesComponent implements OnInit {


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
  estado:any;
  selectedtareas:any[];
  formatos: Array<any> = [];
  selectedFormato: any = null;
  zonas: Array<any> = [];
  selectedZona: any = null;
  locales: Array<any> = [];
  selectedLocales: any = null;
  operativos: Array<any> = [];
  selectedoperativos: any = null;

  ngOnInit(): void {
    this.mymsgservice.publishMessage('pantalla-locales');
  }
  doSearch(){
    this.nodeService.getLocales().then(t => {
      this.articulos = t;
    });
    this.nodeService.getOperativos().then(t => {
      this.operativos = t;
    });
  }

  loadListas(){
    this.nodeService.getEstados().then(est => {
      this.estados = est;
    });
    this.nodeService.getFormatos().then(formatos => {
      this.formatos = formatos;
    });
    this.nodeService.getZonas().then(zonas => {
      this.zonas = zonas;
    });
    this.nodeService.getLocales().then(locales => {
      this.locales = locales;
    });
  }

  gotoEdit(){
    this.router.navigate(['ubicaciones'], {});

  }

  gotoNone(){
  }

}
