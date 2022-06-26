import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Photo } from '../photo/photo';

@Component({
  selector: 'ap-photos-list',
  templateUrl: './photos-list.component.html',
  styleUrls: ['./photos-list.component.css']
})
export class PhotosListComponent implements OnInit {

  photos: Photo[] = [];
  filter: string = '';

  constructor(
    private activateRoute: ActivatedRoute
    ){}

  ngOnInit(){

    this.photos = this.activateRoute.snapshot.data['photos'];
  }

}
