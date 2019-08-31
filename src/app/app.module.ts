import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';

//Animations
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
//Material
import { MaterialModule } from './material-angular';
import { ContentComponent } from './components/content/content.component';
import { FooterComponent } from './components/footer/footer.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { ProductoComponent } from './pages/producto/producto.component';
import { ProductoIndustrialComponent } from './pages/producto-industrial/producto-industrial.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    InicioComponent,
    NosotrosComponent,
    ProductoComponent,
    ProductoIndustrialComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
