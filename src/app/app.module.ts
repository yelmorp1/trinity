import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

//Animations
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
//Material
import { MaterialModule } from './material-angular';
import { ContentComponent } from './content/content.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent
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
