import { Component, OnInit , Input} from '@angular/core';

import { Service } from '../service';

@Component({
  selector: 'f0-service-item',
  templateUrl: './service-item.component.html'
})
export class ServiceItemComponent implements OnInit {

  @Input() service: Service;
  serviceId;

  constructor() { }

  ngOnInit() {
  }

}
