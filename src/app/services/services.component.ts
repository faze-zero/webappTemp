import { Component, OnInit } from '@angular/core';

import { ServiceListComponent } from './service-list';
import { ServiceDetailComponent } from './service-detail';
import { Service } from './service';

@Component({
  selector: 'f0-services',
  templateUrl: './services.component.html'
})
export class ServicesComponent implements OnInit {

  selectedService: Service;

  constructor() { }

  ngOnInit() {
  }

}
