import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { PeliculaComponent } from './pelicula/pelicula.component';
import { BuscarComponent } from './buscar/buscar.component';
import { ComponentsModule } from '../components/components.module';
import { PeliculaPosterGridComponent } from './pelicula-poster-grid/pelicula-poster-grid.component';
import { NgxStarRatingModule } from 'ngx-star-rating';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PipesModule } from '../pipes/pipes.module';




@NgModule({
  declarations: [
    HomeComponent,
    PeliculaComponent,
    BuscarComponent,
    PeliculaPosterGridComponent
  ],exports: [
    HomeComponent,
    PeliculaComponent,
    BuscarComponent,
    PeliculaPosterGridComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    NgxStarRatingModule,
    FormsModule,
    ReactiveFormsModule,
    PipesModule
  ]
})
export class PagesModule { }
