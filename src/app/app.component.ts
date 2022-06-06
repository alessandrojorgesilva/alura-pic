import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { PhotoComponent } from './photos/photo/photo.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  photos: any[] = [] 

  constructor(http: HttpClient){
    
    http.get<any[]>('http://localhost:3000/flavio/photos').subscribe(photos => this.photos = photos)
    
  }
  
 }
