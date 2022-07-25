import { Component } from '@angular/core';
import { GifsServiceService } from '../services/gifs-service.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
})
export class ResultadosComponent {

  get resultados(){
    return this.gifsService.resultados;
  }

  constructor(private gifsService: GifsServiceService){
  }

}
