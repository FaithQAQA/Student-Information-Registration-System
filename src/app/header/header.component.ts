import { Component, Input } from '@angular/core';
import { MyInfo } from '../Classes/Myinfo';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input() myInfo!: MyInfo; 
}
