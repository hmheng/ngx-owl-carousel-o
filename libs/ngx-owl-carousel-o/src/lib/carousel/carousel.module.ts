import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  CarouselComponent,
  CarouselSlideDirective
} from './carousel.component';
import { WINDOW_PROVIDERS } from '../services/window-ref.service';
import { ResizeService } from '../services/resize.service';
import { DraggableDirective } from './draggable.directive';

export {
  CarouselComponent,
  CarouselSlideDirective,
  SlidesOutputData
} from './carousel.component';

@NgModule({
  imports: [CommonModule],
  declarations: [CarouselComponent, CarouselSlideDirective, DraggableDirective],
  exports: [CarouselComponent, CarouselSlideDirective],
  providers: [WINDOW_PROVIDERS, ResizeService]
})
export class CarouselModule {}
