import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { combineLatest } from 'rxjs';
import { Cast } from 'src/app/interfaces/creditos.response';
import { PeliculaDetalleResponse } from 'src/app/interfaces/peliculaDetalle.response';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {

  movieDetails!: PeliculaDetalleResponse;
  cast:Cast[]=[];

  constructor( private activatedRoute: ActivatedRoute, 
               private peliculaService:PeliculasService,
               private location:Location,
               private router:Router) {
    
  }

  ngOnInit(): void {
    const {id} = this.activatedRoute.snapshot.params;
    console.log(id);

    combineLatest([
      this.peliculaService.PeliculaDetalle(id),
      this.peliculaService.getCreditosPelicula(id)

    ]).subscribe(([pelicula, cast])=>{

      if(!pelicula){
        this.router.navigateByUrl('/home');
        return;
      }
      this.movieDetails = pelicula;
      this.cast = cast;

    })
   
    // this.peliculaService.PeliculaDetalle(id).subscribe( movie => {
    //   if(!movie){
    //     this.router.navigateByUrl('/home');
    //     return;
    //   }
    //   this.movieDetails= movie});
    // this.peliculaService.getCreditosPelicula(id).subscribe( resp => this.cast = resp);
  }
  RegresarBusqueda(){
    this.location.back();
    
  }
}
