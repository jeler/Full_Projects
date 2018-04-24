import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import { of } from 'rxjs/observable/of';


@Injectable()
export class HttpService {

  constructor(private _http: HttpClient) { }

  private popularBoardgameUrl = 'https://bgg-json.azurewebsites.net/hot';  // URL to web api

  createNewUser(UserReg)
  {
    return this._http.post('createnewuser', UserReg)
  }

  loginUser(UserLog)
  {
    return this._http.post('loginuser', UserLog)
    
  }
  checkSessionUser()
  {
    return this._http.get('check_session')
  }
  userLogout()
  {
    return this._http.get('logout')
  }
  createBoardGame(BoardGameCreate)
  {
    return this._http.post('creategame', BoardGameCreate)
  }

  getAllGames()
  {
    return this._http.get('findgames')
  }

  deleteGame(id)
  {
    return this._http.get('/delete/' + id)
  }
  randomGame()
  {
    return this._http.get('random')
  }

  getGame(id) {
    return this._http.get('/get_game/' + id)
  }

  editGame(game)
  {
    console.log("here in editted game!")
    console.log(game._id)
    return this._http.post('/edit_game/' + game._id, game)
  }

  retrievePopularGames()
  {
    return this._http
    .get(this.popularBoardgameUrl)
  }

  retrieveIndividualGame(id)
  {
    return this._http.get('https://bgg-json.azurewebsites.net/thing/' + id)
  }
}
