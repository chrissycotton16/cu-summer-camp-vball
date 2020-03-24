import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Ng2CarouselamosModule} from 'ng2-carouselamos';
import { AppHeaderComponent } from './app-header/app-header.component';
import { AppSlideshowComponent } from './app-slideshow/app-slideshow.component';
import { AppDocumentsComponent } from './app-documents/app-documents.component';
import {PdfViewerModule} from 'ng2-pdf-viewer';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule} from '@angular/material';
import { AppContactsComponent } from './app-contacts/app-contacts.component';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppSlideshowComponent,
    AppDocumentsComponent,
    AppContactsComponent
    
  ],
  imports: [
    BrowserModule,
    Ng2CarouselamosModule,
    PdfViewerModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
