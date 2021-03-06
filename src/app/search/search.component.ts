import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor() { }
  searchedUser = new User("",0,0,"",new Date());

  @Output () searchForUser:EventEmitter<string> = new EventEmitter<string>();

  searchUser(){
    this.searchForUser.emit(this.searchedUser.login)
    this.searchedUser = new User("",0,0,"",new Date())
  }

  ngOnInit(): void {
  }

}
