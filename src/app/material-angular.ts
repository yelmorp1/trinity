import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatToolbarModule} from '@angular/material/toolbar';
import { NgModule } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatToolbarModule, 
    MatIconModule, MatCardModule,MatGridListModule],
  exports: [MatButtonModule, MatCheckboxModule, MatToolbarModule, 
    MatIconModule, MatCardModule,MatGridListModule],
})
export class MaterialModule { }