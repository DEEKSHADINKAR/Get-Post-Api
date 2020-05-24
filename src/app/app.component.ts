import { Component, OnInit } from '@angular/core';
import {freeApiService} from './services/freeapi.service';


import { User } from './classes/users';
import { Info } from './classes/info';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  title = 'getpostapi';

  constructor(private _freeApiService: freeApiService)
  { }

  lstusers:User[];
  UserSelected:Number;
  lstinfo:Info[];
  objPosts:Info;

  ngOnInit() {
    this._freeApiService.getusers()
    .subscribe
    (
      data=>
      {
          this.lstusers = data;
      }
    );
  }

onUserSelected(selectedUserId:any):void{
this._freeApiService.getinfoForselectedUserbyparameter(selectedUserId)
.subscribe
(
  data=>
  {
    this.lstinfo = data;
  }
);

var opost = new Info();

opost.Id = 5;
opost.Title = 'testtitle';
opost.Body = 'testbody';

this._freeApiService.post(opost)
.subscribe(
  data=>
  {
    this.objPosts = data;
  }
)
}

}

