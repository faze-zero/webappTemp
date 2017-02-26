import { Component, OnInit, Input } from '@angular/core';

import { Service } from '../service'

@Component({
  selector: 'f0-service-detail',
  templateUrl: './service-detail.component.html'
})
export class ServiceDetailComponent implements OnInit {

   @Input() selectedService: Service;

  constructor() { }

  ngOnInit() {
  }

}
