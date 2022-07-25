import { Component } from '@angular/core';
import { GifsServiceService } from '../../gifs/services/gifs-service.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent{
  constructor( private gifsService: GifsServiceService){

  }

  get historial(){
    return this.gifsService.historial
  }
  
  buscar(termino:string){
    this.gifsService.buscarGifs(termino)
  }
}
