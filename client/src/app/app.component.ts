import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Dating App';
  users : any = [];
  displayedColumns: string[] = ['id', 'userName'];
  dataSource = this.users;

  constructor(private user: UserService){

  }

ngOnInit(){
    this.getUsers();
}

getUsers(){
this.user.getUsers().subscribe(
  response => {
    this.users = response
  },
  error => {
    console.log('Error Occured while fetching Users');
  }
)
}

}
