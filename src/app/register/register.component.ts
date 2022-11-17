import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public user: any;

  constructor(private userService: UserService ) { }

  ngOnInit(): void {
  }

  public register(addForm: {userName: string, userPassword: string, userFirstName: string, userLastName: string}): void{
    console.log(addForm);
    this.userService.addUser(addForm).subscribe(
      (response: User) => {
        this.user = response;
        console.log(this.user);

      },
      (error: HttpErrorResponse) => {
        alert(error.message);

      }
    )
  }


}
