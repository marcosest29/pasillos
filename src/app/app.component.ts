import { Component,OnInit } from '@angular/core';
import { Inject, PLATFORM_ID } from '@angular/core';
import { MyMsgService } from './modules/general/msgservice';
import { isPlatformBrowser } from '@angular/common';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  pantalla = 'home';
  titulo = 'Ubicacion de Pasillos';
  // items: MenuItem[] | undefined;
  isShowModalColaborators:boolean=false;
  constructor(
    @Inject(PLATFORM_ID) private platformId: object,
    private mymsgservice: MyMsgService,
    private router: Router) {
  }
  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const navMain = document.getElementById('navbarCollapse');
      if (navMain) {
        navMain.onclick = function onClick() {
          if (navMain) {
            navMain.classList.remove("show");
          }
        }
      }
    }

    // this.items = [
    //   {
    //     label: 'Asistida',
    //     icon: 'pi pi-fw pi-plus',
    //     command: () => {
    //       this.gotoCrearTarea();
    //     }
    //   }
    // ];

    this.mymsgservice.source.subscribe(msg => {
      if (msg.startsWith("pantalla")) {
        setTimeout(()=>{
          this.pantalla = msg.split("-")[1];
          if (this.pantalla === "locales") {
            setTimeout(()=>{
              this.titulo = "Administración de Ubicaciones en Locales";
            },1);
          }
        },1);
      }
    });
  }
  gotoUbi(){
    this.router.navigate(['crear'], {});
  }
}
