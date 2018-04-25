import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { SlicePipe } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _httpService: HttpService, private _router: Router) { }
  UserReg: any;
  UserLog: any;
  RegError;
  LogError;
  Lockout;
  games: any;

  ngOnInit()
  {
    this.UserReg = 
    {
      email: "",
      first_name: "",
      last_name: "",
      password: "",
      password_confirm:"",
    }
    this.UserLog = 
    {
      email: "",
      password: ""
    }
    this.retrievepopularGame();
  }
    onSubmit(UserReg)
    {
      let newUser = this._httpService.createNewUser(this.UserReg);
      newUser.subscribe(data => {
        if(data["err"])
        {
          this.RegError = data['err'];
          this._router.navigateByUrl("/")
        }
        else{
          this._router.navigateByUrl("/dashboard")
        }
      });
    }
    onLogin(UserLog)
    {
      let User = this._httpService.loginUser(this.UserLog);
      User.subscribe(data => {
        if(data["err"] || data["pw_error"] || data["lockout"])
        {
          this.LogError= data["err"] || data["pw_error"]
          
            if(data["lockout"] === true)
            {
              
              this.Lockout = data["lockout"];
              console.log(this.Lockout)
              this._router.navigateByUrl("/") 
            }     
        }
        else
        {
          this._router.navigateByUrl("/dashboard")          
        }
      })
    }
    retrievepopularGame(): void
    {
      let game_list = this._httpService.retrievePopularGames()
      game_list.subscribe(games => {
        this.games = games
      })
    }

  }