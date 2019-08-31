import { Component } from '@angular/core';
import {IMenu} from './interfaces/menu.interface';
import { menu } from './mock-db/menu';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Trinity.ic';
  menuOpts: IMenu[] = menu;
}
