import { Injectable } from '@angular/core';
import { User } from './user';
import {HttpClient} from '@angular/common/http';
// import { resolve } from 'dns';
import { environment } from 'src/environments/environment';

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
      this.http.get<ApiResponse>("https://api.github.com/users/" +username).toPromise().then(response =>{
        this.user.login = response!.login;
        this.user.followers = response!.followers;
        this.user.following = response!.following;
        this.user.avatar_url = response!.avatar_url;
        this.user.created_at = response!.created_at

      }, error=>{
        // this.user.login = "Ruweydha";
        // this.user.followers = 0;
        // this.user.following = 0;
        // this.user.avatar_url = "";
        // this.user.created_at = new Date();
        console.log("Page not found")
      })

      return promise

    })
  }

  constructor(private http:HttpClient) {
    this.user = new User ("", 0, 0,"",new Date())
   }

   ngOnInit(): void {
  }
}
