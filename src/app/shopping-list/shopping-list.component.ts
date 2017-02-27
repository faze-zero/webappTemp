import { Component, OnInit } from '@angular/core';
import { ShoppingListAddComponent} from './shopping-list-add.component';
import { ServiceDescription } from '../shared/service-description'
@Component({
  selector: 'f0-shopping-list',
  templateUrl: './shopping-list.component.html'
})
export class ShoppingListComponent implements OnInit {

  items: ServiceDescription[] = [];
  constructor() { }

  ngOnInit() {
  }

}
