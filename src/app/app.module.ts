import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Ng2CarouselamosModule} from 'ng2-carouselamos';
import { AppHeaderComponent } from './app-header/app-header.component';
import { AppSlideshowComponent } from './app-slideshow/app-slideshow.component'

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppSlideshowComponent
  ],
  imports: [
    BrowserModule,
    Ng2CarouselamosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
