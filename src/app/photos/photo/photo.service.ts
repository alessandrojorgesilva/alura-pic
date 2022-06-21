import { HttpClient } from '@angular/common/http';

export class PhotoService{
    const API   = 'http://localhost:3000';
    constructor(private http: HttpClient){ }
    
    listFromUser(userName : string){
      this.http.
      get<any[]>(this.API + 'flavio/photos').
      
    }
}
