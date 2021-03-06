import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { PhotoComponent } from './photo/photo.component';
import { PhotosListComponent } from './photos-list/photos-list.component';
import { PhotosFormComponent } from './photos-form/photos-form.component';
import { PhotosComponent } from './photos-list/photos/photos.component';
import { LoadButtonComponent } from './photos-list/load-button/load-button.component';
import { FilterByDescription } from './photos-list/filter-by-description.pipe';


@NgModule({
  declarations: [
     PhotoComponent,
     PhotosListComponent,
     PhotosFormComponent,
     PhotosComponent,
     LoadButtonComponent,
     FilterByDescription

  ],
  imports: [
    HttpClientModule,
    CommonModule
  ]
})


export class PhotosModule {}
