import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { StartRatingComponent } from './start-rating/start-rating.component';
import { CastSlideshowComponent } from './cast-slideshow/cast-slideshow.component';
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
  declarations: [NavbarComponent, SlideshowComponent, StartRatingComponent, CastSlideshowComponent],
  exports:[NavbarComponent,
    SlideshowComponent,
    StartRatingComponent,
    CastSlideshowComponent
   ],
  imports: [
    CommonModule,
    RouterModule,
    PipesModule
  ]
})
export class ComponentsModule { }
