import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of, tap } from 'rxjs';
import { CarteleraResponse, Movie } from '../interfaces/cartelera.response';
import { PeliculaDetalleResponse } from '../interfaces/peliculaDetalle.response';
import { Cast, CreditsResponse } from '../interfaces/creditos.response';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  private apiMovieUrl: string = 'https://api.themoviedb.org/3'
  private carteleraPAge = 1;
  public cargando: boolean = false;


  constructor( private http:HttpClient) { }

  get params() {
    return{
      api_key:'8a0407a354d54004ac1e78562a2b1958',
      language: 'es',
      page: this.carteleraPAge.toString()
    }
  }
   getCartelera():Observable<CarteleraResponse>{
    
    if (this.cargando){
      //cargando peliculas
      return of();
    }
    
    this.cargando=true;

    return this.http.get<CarteleraResponse>(`${this.apiMovieUrl}/movie/now_playing`,{params: this.params}).pipe(
      tap( ()=> {
        this.carteleraPAge +=1;
        this.cargando=false;
      })
    );
  }

  buscarPeliculas( texto:string): Observable<Movie[]>{
    
    const params = {...this.params,query:texto, page:'1',include_adult:false};
    //https://api.themoviedb.org/3/search/movie?query=${texto}&include_adult=false&language=es&page=1 {params:params}
    return this.http.get<CarteleraResponse>(`${this.apiMovieUrl}/search/movie`,{params}).pipe(
      map(resp => resp.results)
    )
  }

  resertCarteleraPAge(){
    this.carteleraPAge = 1;
  }

  PeliculaDetalle(idPelicula:string){
    // https://api.themoviedb.org/3/movie/346698?language=es
    return this.http.get<PeliculaDetalleResponse>(`${this.apiMovieUrl}/movie/${idPelicula}`,{params: this.params}).pipe(
      catchError(err=> of(null))
    )
    
  }
  //:Observable<Cast[]>
  getCreditosPelicula(idPelicula:string):Observable<Cast[]>{
    
    return this.http.get<CreditsResponse>(`${this.apiMovieUrl}/movie/${idPelicula}/credits`,{params: this.params}).pipe(
      map( resp => resp.cast),
      catchError( err => of([]))
    )
  }
}
