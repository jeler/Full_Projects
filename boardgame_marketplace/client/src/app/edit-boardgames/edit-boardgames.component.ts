import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap, Params } from '@angular/router';
import { HttpService } from '../http.service';


@Component({
  selector: 'app-edit-boardgames',
  templateUrl: './edit-boardgames.component.html',
  styleUrls: ['./edit-boardgames.component.css']
})
export class EditBoardgamesComponent implements OnInit {

  constructor(
    private _httpService: HttpService, 
    private _route: ActivatedRoute
  ) { }
  saveSuccess: boolean;
  game: 
  {
    title: "",
    description:"",
    price: 0,
    location: "",
    condition: ""
  }
  game_id: string;

  ngOnInit() {
    // this._route.paramMap.subscribe((paramMap: Params) => {
    //   console.log(paramMap, "params in edit")
    //   this.game_id = paramMap['id']
    //   console.log(this.game_id, "game id!")
    // })
    this._route.params.subscribe(params => {
      this.game_id = params['id']
      console.log(this.game_id)
    })
    this.getGame()
  }

  getGame(): void {
    let chosenGame = this._httpService.getGame(this.game_id).subscribe(data => {
      this.game = data["game"]
      console.log(this.game, "this is this.game")
    })
  }

  editBoardgame(game): void
  {
    console.log(this.game, "this is bg in editBoardgame")
    let edited_game = this._httpService.editGame(this.game)
    .subscribe(edited_game => {
      console.log(edited_game)
      if(edited_game)
      {
        this.saveSuccess = true;
        this.getGame()
      }
      else
      {
        this.saveSuccess = false;
      }
    })
  }
}
