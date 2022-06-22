import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Photo } from '../photo/photo';
import { PhotoService } from '../photo/photo.service';

@Component({
  selector: 'ap-photos-list',
  templateUrl: './photos-list.component.html',
  styleUrls: ['./photos-list.component.css']
})
export class PhotosListComponent implements OnInit {

  photos: Photo[] = [];

  constructor(
    private photoService: PhotoService,
    private activateRoute: ActivatedRoute
    ){}

  ngOnInit(){

    const userName = this.activateRoute.snapshot.params['userName'];

    this.photoService
      .listFromUser(userName)
      .subscribe(photos =>this.photos = photos);

  }

}
