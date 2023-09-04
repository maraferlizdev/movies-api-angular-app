import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/cartelera.response';
import { Swiper} from "swiper";
import { Navigation, Pagination } from 'swiper/modules';


@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})
export class SlideshowComponent implements OnInit, AfterViewInit{
@Input() movies!:Movie[];
 public swiper!: Swiper;

ngOnInit(): void {
  //console.log(this.movies);
}

ngAfterViewInit(): void {
   this.swiper = new Swiper('.swiper', {
    // Optional parameters
    // direction: 'horizontal',
      loop: true,
      spaceBetween: 30,
      effect: "fade",
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
}

swipControl(act:string){
  if (act==='next') {
    this.swiper.slideNext();
  }else if(act ==='prev'){
    this.swiper.slidePrev();
  }
}

}
