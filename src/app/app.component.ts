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
  corkOnHeart: boolean = true;

  killGarbage(): void {
    this.garbageAlive = false;
  }

  killBottle(): void {
    this.bottleAlive = false;
  }

  uncork(): void {
    this.corkOnHeart = false;
  }

}
