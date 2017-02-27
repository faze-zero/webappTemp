import { Component, OnInit, EventEmitter, Output} from '@angular/core';
import { Service } from '../service';
import { ServiceItemComponent } from './service-item.component';


@Component({
  selector: 'f0-service-list',
  templateUrl: './service-list.component.html'
})
export class ServiceListComponent implements OnInit {

  services: Service[] = [
  new Service('Computer fixing','Fixing your computer','http://www.gladesvillecomputers.com.au/wp-content/uploads/2015/11/computer-repair7.jpg',[]),
  new Service('Cable organizing','Organizing your cables','http://www.idsforward.com/wp-content/uploads/2011/12/Final-Cable-Picture1.jpg',[])
  ];

  @Output() serviceSelected = new EventEmitter<Service>();

  constructor() { }

  ngOnInit() {
  }

  onSelected( service: Service ) {
     this.serviceSelected.emit(service);
  }

}
