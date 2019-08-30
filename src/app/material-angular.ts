import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatToolbarModule} from '@angular/material/toolbar';
import { NgModule } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatToolbarModule, 
    MatIconModule, MatCardModule],
  exports: [MatButtonModule, MatCheckboxModule, MatToolbarModule, 
    MatIconModule, MatCardModule],
})
export class MaterialModule { }