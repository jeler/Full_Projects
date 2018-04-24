import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap, Params } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-popular-game-info',
  templateUrl: './popular-game-info.component.html',
  styleUrls: ['./popular-game-info.component.css']
})
export class PopularGameInfoComponent implements OnInit {

  game_id: number;
  game_info: object;

  constructor(
    private _httpService: HttpService, 
    private _route: ActivatedRoute
  ) { }

  ngOnInit() {
    this._route.params.subscribe(params => {
      this.game_id = params['id']
      console.log(this.game_id)
    })
    this.retrieveIndvidualGame();
  }

  retrieveIndvidualGame()
  {
    let game_info = this._httpService.retrieveIndividualGame(this.game_id)
    game_info.subscribe(data => {
    this.game_info = data;
    })
  }

}
