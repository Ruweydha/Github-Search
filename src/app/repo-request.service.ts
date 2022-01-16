import { Injectable } from '@angular/core';
import { Repository } from './repository';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RepoRequestService {


  repoRequest(username:string):Observable<Repository[]>{
    return this.http.get<Repository[]>(environment.apiUrl +/users/ + username + "/repos")
   }

  constructor(private http:HttpClient) { }
}
