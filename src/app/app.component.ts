import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { DriverComponent } from './driver/driver.component';
import { DRIVERS } from '../Angular/db-data';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,DriverComponent], //mnogu prebitno
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'oweb';

  maks = DRIVERS[1];
  checo = DRIVERS[2];
  lewis = DRIVERS[3];
  vozaci = DRIVERS;
}
