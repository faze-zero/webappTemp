import { Component, OnInit, EventEmitter, Output} from '@angular/core';

import { ServiceItemComponent } from './service-item.component';
import { Service } from '../service';

@Component({
  selector: 'f0-service-list',
  templateUrl: './service-list.component.html'
})
export class ServiceListComponent implements OnInit {

  services: Service[] = [];
  @Output() serviceSelected = new EventEmitter<Service>();
  service = new Service('Computer fixing','Fixing your computer','http://www.gladesvillecomputers.com.au/wp-content/uploads/2015/11/computer-repair7.jpg');

  constructor() { }

  ngOnInit() {
  }

  onSelected( service: Service ) {
    this.serviceSelected.emit(service);
  }

}
