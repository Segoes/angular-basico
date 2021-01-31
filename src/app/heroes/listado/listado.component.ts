import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {
  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor'];
  heroeBorrado: string = '';

  borrarHeroe(): void {
    const heroeBorrado: string = this.heroes.pop() || '';
    this.heroeBorrado = heroeBorrado;
  }
}
