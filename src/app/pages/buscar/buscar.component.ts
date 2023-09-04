import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/interfaces/cartelera.response';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

  public movies:Movie[]=[];
  texto:string='';

  // @HostListener('window:scroll',['$event'])
  // onScroll(){
  //   const pos = (document.documentElement.scrollTop || document.body.scrollTop) + 1000;
  //   const max = (document.documentElement.scrollHeight ||document.body.scrollHeight)
    
  //   if ( pos > max) {
  //     if( this.peliculasService.cargando) { return; }
  //     //TODO: llamar al servicio
  //     console.log('scrolling');
  //     this.peliculasService.buscarPeliculas(this.texto).subscribe(resp => {
  //       this.movies.push(...resp);
  //      // console.log(this.movies);
  //     });
  //   }
  // }

  constructor( private activatedRoute:ActivatedRoute, private peliculasService:PeliculasService) {
    
  }

  ngOnInit(): void {
    
    this.activatedRoute.params.subscribe( params => {
      console.log(params);
      this.texto=params["texto"];
      //TODO: llamar el servico
      this.peliculasService.buscarPeliculas(params["texto"]).subscribe( movs => {
        console.log(movs);
        this.movies=movs
      })
      
    })
    
  }

  

}
