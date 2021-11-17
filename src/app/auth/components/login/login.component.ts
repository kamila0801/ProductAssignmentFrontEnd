import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../Shared/auth.service";
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {LoginUser} from "../../Shared/login.user";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private _auth: AuthService,
              private router: Router) {
    this.loginForm = new FormGroup({
      username: new FormControl(
        '',
        [
          Validators.required,
          Validators.minLength(2)
        ]
      ),
      password: new FormControl(
        '',
        Validators.required
      ),
    })
  }

  ngOnInit(): void {
  }

  login(){
    if (this.loginForm.valid){
      let userlogin = this.loginForm.value as LoginUser;
      console.log('Login info', userlogin)
      this._auth.login(userlogin)
        .subscribe(token=>{
          if (token && token.jwtToken){
            this.router.navigateByUrl('products')
          }
          else {
            console.log('Login Fail')
          }
        });
    }
  }

  get username() {return this.loginForm.get('username')}
  get password() {return this.loginForm.get('password')}


}
