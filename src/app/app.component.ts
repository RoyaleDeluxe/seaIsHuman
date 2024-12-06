import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importez CommonModule

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title: string = 'seaIsHuman';
  garbageAlive: boolean = true;
  bottleAlive: boolean = true;

  killGarbage(): void {
    this.garbageAlive = false;
    console.log(this.garbageAlive);
    console.log(this.bottleAlive);
  }

  killBottle(): void {
    this.bottleAlive = false;
    console.log(this.bottleAlive);
    console.log(this.garbageAlive);
  }

}
