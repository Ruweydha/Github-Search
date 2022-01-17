import { Injectable } from '@angular/core';
import { User } from './user';
import {HttpClient} from '@angular/common/http';
// import { resolve } from 'dns';
import { environment } from 'src/environments/environment';
import { Repository } from './repository';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersHttpRequestService {
  user!:User

  userRequest(username:string){
    interface ApiResponse{
      login:string,  
      followers:number, 
      following:number, 
      avatar_url:string,
      created_at:Date
    }
    let promise: any= new Promise<void>((resolve, reject)=>{
      this.http.get<ApiResponse>(environment.apiUrl +/users/ +username).toPromise().then(response =>{
        this.user.login = response!.login;
        this.user.followers = response!.followers;
        this.user.following = response!.following;
        this.user.avatar_url = response!.avatar_url;
        this.user.created_at = response!.created_at

      }, error=>{
        
        console.log("Page not found")
      })

      return promise

    })
  }

  repoRequest(username:string):Observable<Repository[]>{
    return this.http.get<Repository[]>(environment.apiUrl +/users/ + username + "/repos")
   }

  constructor(private http:HttpClient) {
    this.user = new User ("", 0, 0,"",new Date())
   }

   ngOnInit(): void {
  }
}
