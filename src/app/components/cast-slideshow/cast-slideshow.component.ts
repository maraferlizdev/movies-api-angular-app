import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Cast } from 'src/app/interfaces/creditos.response';
import Swiper from 'swiper';

@Component({
  selector: 'app-cast-slideshow',
  templateUrl: './cast-slideshow.component.html',
  styleUrls: ['./cast-slideshow.component.css']
})
export class CastSlideshowComponent implements OnInit, AfterViewInit {

  @Input() cast!:Cast[];
  public swiper!: Swiper;
  
  ngOnInit(): void {
    console.log(this.cast);
    
  }

  ngAfterViewInit(): void {
      this.swiper = new Swiper('.mySwiper', {

        slidesPerView:5.3,
        freeMode: true,
        spaceBetween: 8,
      //speed: 400,
      //spaceBetween: 100,
      pagination: {
        bulletActiveClass:'swiper-pagination-bullet-active',
        bulletClass:	'swiper-pagination-bullet',
        bulletElement:	'span',

        el: '.swiper-pagination',
        // clickable: true
        enabled:true
      },
      
    });
  }

  

}
