import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cargaarchivo',
  templateUrl: './cargaarchivo.component.html',
  styleUrls: ['./cargaarchivo.component.css']
})
export class CargaarchivoComponent {

  modalVisible = false;
  selected:any;

  toggleModal() {
    this.modalVisible = !this.modalVisible;
  }
}
