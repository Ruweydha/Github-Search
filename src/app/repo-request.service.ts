import { Injectable } from '@angular/core';
import { Repository } from './repository';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RepoRequestService {


  repoRequest(username:string):Observable<Repository[]>{
    return this.http.get<Repository[]>("https://api.github.com/users/" + username + "/repos")
   }

  constructor(private http:HttpClient) { }
}
