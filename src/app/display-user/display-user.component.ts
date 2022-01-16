import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UsersHttpRequestService } from '../users-http-request.service';
import { Repository } from '../repository';
import { RepoRequestService } from '../repo-request.service';

@Component({
  selector: 'app-display-user',
  templateUrl: './display-user.component.html',
  styleUrls: ['./display-user.component.css']
})
export class DisplayUserComponent implements OnInit {

  user!:User;
  repos!:Repository[];

  searchUserName(username:string){
    this._usersRequest.userRequest(username);
    this.user = this._usersRequest.user;
    this._repoRequest.repoRequest(username).subscribe(data=>{
      this.repos = data
    })
    
  }

  constructor( private _usersRequest:UsersHttpRequestService, private _repoRequest:RepoRequestService) { }


  ngOnInit(): void {}

}
