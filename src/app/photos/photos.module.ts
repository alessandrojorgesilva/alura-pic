import { FilterByDescription } from './photos-list/photos/filter-by-description.pipe';

import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { PhotoComponent } from './photo/photo.component';
import { PhotosListComponent } from './photos-list/photos-list.component';
import { PhotosFormComponent } from './photos-form/photos-form.component';
import { PhotosComponent } from './photos-list/photos/photos.component';
import { LoadButtonComponent } from './photo-list/load-button/load-button.component';

@NgModule({
  declarations: [
     PhotoComponent,
     PhotosListComponent,
     PhotosFormComponent,
     PhotosComponent,
     FilterByDescription,
     LoadButtonComponent
  ],
  imports: [
    HttpClientModule,
    CommonModule
  ]
})


export class PhotosModule {}
