import { Component, OnInit } from '@angular/core';
import { HighlightDirective } from './highlight.directive'
import { UnlessDirective } from './unless.directive'
@Component({
  selector: 'f0-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {
  private switch = true;
  private items = [1, 2, 3, 4, 5];
  private value = 10;

  onSwitch() {
    this.switch = !this.switch;
  }
}
