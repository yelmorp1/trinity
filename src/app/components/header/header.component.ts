import { Component, OnInit, Input } from '@angular/core';
import {IMenu} from '../../interfaces/menu.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  @Input() options: IMenu[];
 // @Input() tittle: string;
  constructor() { }
  
  ngOnInit() {
  }

}
