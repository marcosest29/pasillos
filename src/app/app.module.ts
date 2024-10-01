import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MyMsgService } from './modules/general/msgservice';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartComponent } from './modules/general/start/start.component';
import { MessageService } from 'primeng/api';
import {DialogModule} from 'primeng/dialog';
import {ContextMenuModule} from 'primeng/contextmenu';
import { PaginatorModule } from 'primeng/paginator';
import { RadioButtonModule } from 'primeng/radiobutton';
import {GalleriaModule} from 'primeng/galleria';
import { HttpClientModule } from '@angular/common/http';
import {TableModule} from 'primeng/table';
import {DropdownModule} from 'primeng/dropdown';
import {MultiSelectModule} from 'primeng/multiselect';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FileUploadModule } from 'primeng/fileupload';
import { FormsModule } from '@angular/forms';
import {TreeModule} from 'primeng/tree';
import {ToastModule} from 'primeng/toast';
import { NodeService } from './modules/general/nodeservice';
import { CalendarModule } from 'primeng/calendar';
import { CheckboxModule } from 'primeng/checkbox';
import { FieldsetModule } from 'primeng/fieldset';
import { StepsModule } from 'primeng/steps';
import { CardModule } from 'primeng/card';
import { MenuModule } from 'primeng/menu';
import { LocalesComponent } from './modules/general/locales/locales.component';
import { UbicacioneslocalesComponent } from './modules/general/ubicacioneslocales/ubicacioneslocales.component';
import { CrearubicacionesComponent } from './modules/general/crearubicaciones/crearubicaciones.component';
import { CargaarchivoComponent } from './modules/general/cargaarchivo/cargaarchivo.component';


@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    LocalesComponent,
    UbicacioneslocalesComponent,
    CrearubicacionesComponent,
    CargaarchivoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DropdownModule,
    BrowserAnimationsModule,
    DropdownModule,
    FormsModule,
    TreeModule,
    ToastModule,
    TableModule,
    DialogModule,
    ContextMenuModule,
    MultiSelectModule,
    FileUploadModule,
    PaginatorModule,
    GalleriaModule,
    RadioButtonModule,
    CalendarModule,
    CheckboxModule,
    FieldsetModule,
    StepsModule,
    CardModule,
    MenuModule
  ],

  providers: [NodeService,MessageService,MyMsgService],
  bootstrap: [AppComponent]
})
export class AppModule { }
