import { Component, Input } from '@angular/core';

@Component({
  selector: 'start-rating',
  templateUrl: './start-rating.component.html',
  styleUrls: ['./start-rating.component.css']
})
export class StartRatingComponent {

  @Input()
  stars!: number;

  @Input()
  size: number = 1;

  get styles() {
    return {
      'width.rem': this.size,
      'height.rem': this.size,
      'marginRight.rem': this.size / 6,
    }
  }

  getStarImage(current: number): string{

    this.stars=parseFloat(this.stars.toFixed(1))

    
 
    const previousHalf = current - 0.5;
    const imageName =
    this.stars >= current
    ? 'star-full'
    : this.stars > previousHalf
    ? 'star-full-half'
    : this.stars == previousHalf 
    ?'star-half'
    :this.stars < previousHalf && this.stars > previousHalf - 0.5
    ?'star-half-half'
    : 'star-empty';
    return `assets/stars/${imageName}.png`;
    
    // const previousHalf = current - 0.5;
    // const imageName =
    // this.stars >= current
    // ? 'star-full'
    // : this.stars >= previousHalf
    // ? 'star-half'
    // : 'star-empty';
    // return `/assets/stars/${imageName}.png`;
  }

}
