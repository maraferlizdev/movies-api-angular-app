import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/cartelera.response';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy{
  public movies:Movie[]=[];
  public moviesSlideshow:Movie[]=[];

  @HostListener('window:scroll',['$event'])
  onScroll(){
    const pos = (document.documentElement.scrollTop || document.body.scrollTop) + 1000;
    const max = (document.documentElement.scrollHeight ||document.body.scrollHeight)
    
    if ( pos > max) {
      if( this.peliculaService.cargando) { return; }
      //TODO: llamar al servicio
      console.log('scrolling');
      this.peliculaService.getCartelera().subscribe(resp => {
        this.movies.push(...resp.results);
       // console.log(this.movies);
      });
    }
  }
  constructor(private peliculaService:PeliculasService) {  
  }
  ngOnInit(): void {
    console.log('HomeComponent Cargado con éxito!');
    this.peliculaService.getCartelera().subscribe
    (mov => {
       console.log(mov.results)
      this.movies = mov.results;
      this.moviesSlideshow = mov.results;
    })
  }
  ngOnDestroy(): void {
    this.peliculaService.resertCarteleraPAge()
  }
}
