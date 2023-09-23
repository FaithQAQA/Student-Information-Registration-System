import { Component, Input } from '@angular/core';
import { SelfInfo } from '../Classes/SelfInfo';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  @Input() footerInfo!: SelfInfo; 

}
