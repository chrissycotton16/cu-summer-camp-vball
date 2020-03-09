import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Ng2CarouselamosModule} from 'ng2-carouselamos';
import { AppHeaderComponent } from './app-header/app-header.component';
import { AppSlideshowComponent } from './app-slideshow/app-slideshow.component';
import { AppDocumentsComponent } from './app-documents/app-documents.component';
import {PdfViewerModule} from 'ng2-pdf-viewer';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppSlideshowComponent,
    AppDocumentsComponent
  ],
  imports: [
    BrowserModule,
    Ng2CarouselamosModule,
    PdfViewerModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
