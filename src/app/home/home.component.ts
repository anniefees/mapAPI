import { Component } from '@angular/core';
import { MapComponent } from '../map/map.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MapComponent],
  templateUrl: './home.component.html',
})
export class HomeComponent {

}
