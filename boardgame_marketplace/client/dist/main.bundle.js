webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/allboardgames/allboardgames.component.css":
/***/ (function(module, exports) {

module.exports = ".right {\n    font-size: 16pt;\n}\n.game {\n    border: 2px solid black;\n    overflow: scroll;\n    z-index:-1\n}\n.row\n{\n    margin: 0px;\n    padding: 0px;\n}\n.search\n{\n    margin-top: 120px;\n    z-index:-1\n}\n/* input[type=text] {\n    width: 130px;\n    -webkit-transition: width 0.4s ease-in-out;\n    transition: width 0.4s ease-in-out;\n}\n\n/* When the input field gets focus, change its width to 100% */\n/* input[type=text]:focus {\n    width: 100%;\n} * */"

/***/ }),

/***/ "./src/app/allboardgames/allboardgames.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"container\">\n  <textarea rows=\"2\" cols=\"75\" class=\"search\" [(ngModel)]=\"searchText\" placeholder=\"Search for a Game!\"></textarea>\n  <br>\n  <h1>Welcome {{user_info?.first_name}}</h1>\n  <div class=\"game row mb-3\" *ngFor=\"let games of allGames | filter:'title':searchText\">\n    <div class=\"col-9\">\n      <h2>{{games.title}}</h2>\n      <p>{{games.description}}</p>\n      <p>Condition: {{games.condition}}</p>\n    </div>\n    <div class=\"col-3\">\n      <h2>${{games.price}}</h2>\n      <p>{{games.location}}</p>\n      <!-- <div class=\"buttons row\"> -->\n        <!-- <div class=\"col-6\"> -->\n          <button *ngIf=\"(games._user) === (session)\" class=\"btn btn-danger\" (click)=\"deleteGame(games._id)\">Delete</button> \n          <button *ngIf=\"(games._user) == (session)\" class=\"btn btn-info\" routerLink='/edit/{{games._id}}'>Edit Listing</button>\n          <button *ngIf=\"(games._user) != (session)\" class=\"btn btn-info\">Contect Seller</button>\n        <!-- </div> -->\n      <!-- </div> -->\n\n      <!-- <p-dialog header=\"Title\" [(visible)]=\"display\" *ngIf=\"games._user != session\">\n            <!-- <button type=\"button\" class=\"btn btn-primary\" >Placeholder</button> -->\n      <!-- <button type=\"text\" (click)=\"showDialog()\" pButton icon=\"fa-external-link-square\" label=\"Show\"></button> -->\n      <!-- </p-dialog> -->\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/allboardgames/allboardgames.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_service_1 = __webpack_require__("./src/app/http.service.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var AllboardgamesComponent = /** @class */ (function () {
    function AllboardgamesComponent(_httpService, _router) {
        this._httpService = _httpService;
        this._router = _router;
    }
    AllboardgamesComponent.prototype.ngOnInit = function () {
        this.getGames();
        this.checkSessionUserComponent();
    };
    AllboardgamesComponent.prototype.checkSessionUserComponent = function () {
        var _this = this;
        var session_data = this._httpService.checkSessionUser();
        session_data.subscribe(function (data) {
            if (data["session"] == false) {
                console.log("got here!");
                _this._router.navigateByUrl("/");
            }
            else {
                _this.user_info = data["user"];
                _this.session = data["session"];
            }
        });
    };
    AllboardgamesComponent.prototype.getGames = function () {
        var _this = this;
        var allGames = this._httpService.getAllGames().subscribe(function (data) {
            _this.allGames = data["games"];
        });
    };
    AllboardgamesComponent.prototype.deleteGame = function (id) {
        var _this = this;
        var deleteGame = this._httpService.deleteGame(id).subscribe(function (data) {
            _this.getGames();
        });
    };
    AllboardgamesComponent = __decorate([
        core_1.Component({
            selector: 'app-allboardgames',
            template: __webpack_require__("./src/app/allboardgames/allboardgames.component.html"),
            styles: [__webpack_require__("./src/app/allboardgames/allboardgames.component.css")]
        }),
        __metadata("design:paramtypes", [http_service_1.HttpService, router_1.Router])
    ], AllboardgamesComponent);
    return AllboardgamesComponent;
}());
exports.AllboardgamesComponent = AllboardgamesComponent;


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var home_component_1 = __webpack_require__("./src/app/home/home.component.ts");
var user_dashboard_component_1 = __webpack_require__("./src/app/user-dashboard/user-dashboard.component.ts");
var create_boardgame_component_1 = __webpack_require__("./src/app/create-boardgame/create-boardgame.component.ts");
var edit_boardgames_component_1 = __webpack_require__("./src/app/edit-boardgames/edit-boardgames.component.ts");
var routes = [
    { path: '', component: home_component_1.HomeComponent },
    { path: "createboardgame", component: create_boardgame_component_1.CreateBoardgameComponent },
    { path: "dashboard", component: user_dashboard_component_1.UserDashboardComponent },
    { path: "edit/:id", component: edit_boardgames_component_1.EditBoardgamesComponent },
    { path: "", pathMatch: 'full', redirectTo: '/' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;


/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ".bgmarketplace \n{\n    color: white;\n    background: #343a40;\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"fixed-top\">\n        <h1 class=\"bgmarketplace\">Board Game Marketplace</h1>\n    </div>\n</div>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_service_1 = __webpack_require__("./src/app/http.service.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var AppComponent = /** @class */ (function () {
    function AppComponent(_httpService, _router) {
        this._httpService = _httpService;
        this._router = _router;
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [http_service_1.HttpService, router_1.Router])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var app_routing_module_1 = __webpack_require__("./src/app/app-routing.module.ts");
var app_component_1 = __webpack_require__("./src/app/app.component.ts");
var http_service_1 = __webpack_require__("./src/app/http.service.ts");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var home_component_1 = __webpack_require__("./src/app/home/home.component.ts");
var user_dashboard_component_1 = __webpack_require__("./src/app/user-dashboard/user-dashboard.component.ts");
var navbar_component_1 = __webpack_require__("./src/app/navbar/navbar.component.ts");
var filter_pipe_1 = __webpack_require__("./src/app/filter.pipe.ts");
var create_boardgame_component_1 = __webpack_require__("./src/app/create-boardgame/create-boardgame.component.ts");
var allboardgames_component_1 = __webpack_require__("./src/app/allboardgames/allboardgames.component.ts");
var edit_boardgames_component_1 = __webpack_require__("./src/app/edit-boardgames/edit-boardgames.component.ts");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                home_component_1.HomeComponent,
                user_dashboard_component_1.UserDashboardComponent,
                navbar_component_1.NavbarComponent,
                filter_pipe_1.FilterPipe,
                create_boardgame_component_1.CreateBoardgameComponent,
                allboardgames_component_1.AllboardgamesComponent,
                edit_boardgames_component_1.EditBoardgamesComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                http_1.HttpClientModule,
                forms_1.FormsModule,
            ],
            providers: [http_service_1.HttpService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "./src/app/create-boardgame/create-boardgame.component.css":
/***/ (function(module, exports) {

module.exports = ".error {\n    color: red;\n}\n\n.right {\n    /* padding-left: 100px; */\n    font-size: 16pt;\n}\n\n.game {\n    border: 2px solid black;\n}\n\n.creategame \n{\n    margin-top: 64px;\n}"

/***/ }),

/***/ "./src/app/create-boardgame/create-boardgame.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<br><br>\n<div class=\"container\">\n  <div class=\"col creategame\">\n    <form #createbgform=\"ngForm\" (submit) = createNewBoardgame()>\n      <p>Title</p>\n      <input type=\"text\" \n      name=\"title\" \n      required\n      [(ngModel)]=\"BoardGameCreate.title\"\n      #title=\"ngModel\"\n      />\n      <div class=\"error\" *ngIf=\"!title.valid && (title.touched)\">Title is required!</div>  \n      <br><br>\n      <p><textarea rows=\"4\" cols=\"50\" \n      name=\"description\" \n      required\n      maxlength=\"200\"\n      [(ngModel)]=\"BoardGameCreate.description\"\n      #description =\"ngModel\"></textarea></p>\n      <div class=\"error\" *ngIf=\"!description.valid && (description.touched)\">Description is required!</div>\n      <p>Price</p>\n      <input type=\"number\"\n      name=\"price\"\n      required\n      [(ngModel)]=\"BoardGameCreate.price\"\n      #price =\"ngModel\"/>\n      <div class=\"error\" *ngIf=\"!price.valid && (price.touched)\">Price is required!</div> \n      <br><br>\n      <p>Location</p> \n      <p><input type=\"text\"\n      name=\"location\"\n      required\n      [(ngModel)]=\"BoardGameCreate.location\"\n      #location=\"ngModel\"/></p>\n      <div class=\"error\" *ngIf=\"!location.valid && (location.touched)\">Location is required!</div>\n      <p>Condition</p>\n      <p><select\n        name=\"BoardGameCreate.condition\"\n        [(ngModel)]=\"BoardGameCreate.condition\">\n          <option value=\"Used\">Used</option>\n          <option value=\"Like New\">Like New</option>\n          <option value=\"New\">New</option>\n      </select>\n      </p>\n      <input type=\"submit\"[disabled]=\"!createbgform.form.valid\">  \n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/create-boardgame/create-boardgame.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_service_1 = __webpack_require__("./src/app/http.service.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var CreateBoardgameComponent = /** @class */ (function () {
    function CreateBoardgameComponent(_httpService, _router) {
        this._httpService = _httpService;
        this._router = _router;
    }
    CreateBoardgameComponent.prototype.ngOnInit = function () {
        this.checkSessionUserComponent();
        this.BoardGameCreate = {
            title: "",
            description: "",
            price: 0,
            location: "",
            condition: ""
        };
    };
    CreateBoardgameComponent.prototype.checkSessionUserComponent = function () {
        var _this = this;
        var session_data = this._httpService.checkSessionUser();
        session_data.subscribe(function (data) {
            console.log(data, "this is data!");
            console.log(data["session"]);
            if (data["session"] == false) {
                console.log("got here!");
                _this._router.navigateByUrl("/");
            }
            else {
                console.log("got here to give user data!");
                _this.user_info = data["user"];
                console.log(_this.user_info);
            }
        });
    };
    CreateBoardgameComponent.prototype.createNewBoardgame = function (BoardGameCreate) {
        var newGame = this._httpService.createBoardGame(this.BoardGameCreate)
            .subscribe(function (data) {
            console.log(data, "this is bg data from form!");
        });
        console.log(this.BoardGameCreate);
        this._router.navigateByUrl("/dashboard");
    };
    CreateBoardgameComponent = __decorate([
        core_1.Component({
            selector: 'app-create-boardgame',
            template: __webpack_require__("./src/app/create-boardgame/create-boardgame.component.html"),
            styles: [__webpack_require__("./src/app/create-boardgame/create-boardgame.component.css")]
        }),
        __metadata("design:paramtypes", [http_service_1.HttpService, router_1.Router])
    ], CreateBoardgameComponent);
    return CreateBoardgameComponent;
}());
exports.CreateBoardgameComponent = CreateBoardgameComponent;


/***/ }),

/***/ "./src/app/edit-boardgames/edit-boardgames.component.css":
/***/ (function(module, exports) {

module.exports = ".error \n{\n    color: red;\n}\n.gameform \n{\n    border: 1px;\n}\n"

/***/ }),

/***/ "./src/app/edit-boardgames/edit-boardgames.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<br><br><br>\n<div class=\"container my-5\">\n  <div class=\"row\">\n    <div class=\"col-8 editgame\">\n      <div *ngIf=\"game\">\n          <form #editbgform=\"ngForm\" (submit)=editBoardgame()>\n            <p>Title</p>\n            <input name=\"title\" required [(ngModel)]=\"game.title\" #title=\"ngModel\" />\n            <div class=\"error\" *ngIf=\"!title.valid && (title.touched)\">Title is required!</div>\n            <p>Description</p>\n              <textarea rows=\"4\" cols=\"50\" name=\"description\" required maxlength=\"200\" [(ngModel)]=\"game.description\" #description=\"ngModel\"></textarea>\n            <div class=\"error\" *ngIf=\"!description.valid && (description.touched)\">Description is required!</div>\n            <p>Price</p>\n            <input type=\"number\" name=\"price\" required [(ngModel)]=\"game.price\" #price=\"ngModel\" />\n            <div class=\"error\" *ngIf=\"!price.valid && (price.touched)\">Price is required!</div>\n            <p>Location</p>\n              <input type=\"text\" name=\"location\" required [(ngModel)]=\"game.location\" #location=\"ngModel\" />\n            <div class=\"error\" *ngIf=\"!location.valid && (location.touched)\">Location is required!</div>\n            <p>Condition</p>\n              <select name=\"game.condition\" [(ngModel)]=\"game.condition\">\n                <option value=\"Used\">Used</option>\n                <option value=\"Like New\">Like New</option>\n                <option value=\"New\">New</option>\n              </select>\n              <br><br>\n            <p><input type=\"submit\" [disabled]=\"!editbgform.form.valid\"></p>\n          </form>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/edit-boardgames/edit-boardgames.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var http_service_1 = __webpack_require__("./src/app/http.service.ts");
var EditBoardgamesComponent = /** @class */ (function () {
    function EditBoardgamesComponent(_httpService, _route) {
        this._httpService = _httpService;
        this._route = _route;
    }
    EditBoardgamesComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this._route.paramMap.subscribe((paramMap: Params) => {
        //   console.log(paramMap, "params in edit")
        //   this.game_id = paramMap['id']
        //   console.log(this.game_id, "game id!")
        // })
        this._route.params.subscribe(function (params) {
            _this.game_id = params['id'];
            console.log(_this.game_id);
        });
        this.getGame();
    };
    EditBoardgamesComponent.prototype.getGame = function () {
        var _this = this;
        var chosenGame = this._httpService.getGame(this.game_id).subscribe(function (data) {
            _this.game = data["game"];
        });
    };
    EditBoardgamesComponent.prototype.editBoardgame = function (game) {
        var edited_game = this._httpService.editGame(this.game)
            .subscribe(function (edited_game) {
            console.log(edited_game);
        });
        // this.getGame()
    };
    EditBoardgamesComponent = __decorate([
        core_1.Component({
            selector: 'app-edit-boardgames',
            template: __webpack_require__("./src/app/edit-boardgames/edit-boardgames.component.html"),
            styles: [__webpack_require__("./src/app/edit-boardgames/edit-boardgames.component.css")]
        }),
        __metadata("design:paramtypes", [http_service_1.HttpService,
            router_1.ActivatedRoute])
    ], EditBoardgamesComponent);
    return EditBoardgamesComponent;
}());
exports.EditBoardgamesComponent = EditBoardgamesComponent;


/***/ }),

/***/ "./src/app/filter.pipe.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
// @Pipe({
//   name: 'filter'
// })
// export class FilterPipe implements PipeTransform {
//   transform(items: any[], searchText: string): any[] {
//     if(!items) return [];
//     if(!searchText) return items;
// searchText = searchText.toLowerCase();
// return items.filter( it => {
//       return it.toLowerCase().includes(searchText);
//     });
//    }
// }
var FilterPipe = /** @class */ (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (value, keys, term) {
        if (!term)
            return value;
        return (value || []).filter(function (item) { return keys.split(',').some(function (key) { return item.hasOwnProperty(key) && new RegExp(term, 'gi').test(item[key]); }); });
    };
    FilterPipe = __decorate([
        core_1.Pipe({
            name: 'filter'
        })
    ], FilterPipe);
    return FilterPipe;
}());
exports.FilterPipe = FilterPipe;


/***/ }),

/***/ "./src/app/home/home.component.css":
/***/ (function(module, exports) {

module.exports = ".row {\n    margin-right: 0px;\n    margin-left: 0px;\n}\n\n.bgoftheday {\n    color:blue;\n}\n\n.error {\n    color: red;\n}\n\n.randomGame\n{\n    border: 2px solid black;\n    background: lightgrey;\n}\n\n.register\n{\n    border: 2px solid black;    \n}\n\n.login\n{\n    border: 2px solid black;\n\n}\n\n#allcontent {\n    margin-top: 20px;\n}\n\n.badge {\n    display: inline-block;\n    font-size: medium;\n    color: white;\n    padding: 0.8em 0.7em 0 0.7em;\n    background-color: #607D8B;\n    position: relative;\n}\n\n.game_pic\n{\n    -o-object-fit: contain;\n       object-fit: contain;\n}\n"

/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n<br><br>\n    <div class=\"row justify-content-center\">\n        <h2 class=\"bgoftheday\">Popular Board Games!</h2>\n    </div>\n    <!-- <div class=\"row justify-content-center\">\n        <div class=\"randomGame col-8\" >\n            <div class=\"row justify-content-between\">\n                <div class=\"col-9\">\n                    <h2>{{random?.title}}</h2>\n                    <p>{{random?.description}}</p>\n                    <p>Condition: {{random?.condition}} </p>\n                </div>\n                <div class=\"col-4-sm\">\n                    <h2>${{random?.price}}</h2>\n                    <p>{{random?.location}}</p>\n                </div>\n            </div>\n        </div>\n    </div> -->\n    <div class=\"row\">\n        <div class=\"col\" *ngFor=\"let game of games\">\n            <div *ngIf=\"game.rank < 5\">\n                <div class=\"badge\">\n                    {{game?.rank}} {{game?.name}} \n                    <p><img class=\"game_pic\" src=\"{{game.thumbnail}}\"></p>\n                </div>\n            </div>\n        </div>\n    </div>\n        <br><br>\n    <div class=\"col forms\">\n        <div class= \"row\">\n            <div class=\"col-md-6 justify-content-center\">\n                <div class=\"col-2-sm register\">\n                    <form #registerform=\"ngForm\" (submit) = onSubmit()>\n                        <div class=\"form-group row my-2\">\n                            <label for=\"email_reg\" class=\"col-sm-4 col-form-label text-right\">Email</label>\n                            <div class=\"col-sm-8\">         \n                                <input type=\"text\" \n                                name=\"UserReg.email\" required [(ngModel)]=\"UserReg.email\" #email =\"ngModel\" class=\"col-md-12\"/>\n                                <div class=\"error\"*ngIf=\"!email.valid && email.touched\">Email is not valid!</div> \n                            </div>\n                        </div>\n                        <div class=\"form-group row my-2\">\n                            <label for=\"first_name\" class=\"col-sm-4 col-form-label text-right\">First Name</label>\n                            <div class=\"col-sm-8\"> \n                                <input type=\"text\" name=\"UserReg.first_name\" [(ngModel)]=\"UserReg.first_name\" required minlength=\"2\" #firstname =\"ngModel\" class=\"col-md-12\"/>\n                                <div class=\"error\"*ngIf=\"!firstname.valid && firstname.touched\">First name must contain 2 characters!</div>\n                            </div>                            \n                        </div>\n                        <div class=\"form-group row my-2\">\n                            <label for=\"last_name\" class=\"col-sm-4 col-form-label text-right\">Last Name</label>\n                            <div class=\"col-sm-8\">\n                                <input type=\"text\" name=\"UserReg.last_name\" [(ngModel)]=\"UserReg.last_name\"  required minlength=\"2\" #lastname=\"ngModel\" class=\"col-md-12\"/>\n                                <div class=\"error\"*ngIf=\"!lastname.valid && lastname.touched\">Last name must contain 2 characters!</div>\n                            </div>\n                        </div>   \n                        <div class=\"form-group row my-2\">\n                            <label for=\"password_reg\" class=\"col-sm-4 col-form-label text-right\">Password</label>\n                            <div class=\"col-sm-8\"> \n                                <input type=\"password\" name=\"UserReg.password\" [(ngModel)]=\"UserReg.password\" #passwordreg=\"ngModel\" required minlength=\"8\" class=\"col-md-12\"/>\n                                <div class=\"error\"*ngIf=\"!passwordreg.valid && passwordreg.touched\">Password must contain at least 8 characters!</div>  \n                            </div>   \n                        </div>   \n                        <div class=\"form-group row my-2\">\n                            <label for=\"pw_confirm\" class=\"col-sm-4 col-form-label text-right\">Password Confirmation</label>\n                            <div class=\"col-sm-8\"> \n                                <input type=\"password\" name=\"UserReg.password_confirm\" [(ngModel)]=\"UserReg.password_confirm\" class=\"col-md-12\" #passwordconfirm=\"ngModel\"/>\n                                <div class=\"error\" *ngIf=\"UserReg.password != UserReg.password_confirm\">Passwords do not match!</div>\n                            </div>\n                        </div>\n                        <div class=\"row justify-content-end my-2\">\n                            <div class=\"col-sm-3 mr-3\">\n                                <input type=\"submit\"[disabled]=\"!registerform.form.valid\" class=\"btn btn-success\" value=\"Register\">\n                            </div>\n                        </div>\n                    </form>\n                </div>\n            </div>\n            <div class=\"col-md-6 justify-content-center\"> \n                <div class=\"col-2-sm login\">     \n                    <form #loginform = \"ngForm\" (submit) = onLogin()>\n                        <div class=\"form-group row my-2\"> \n                            <label for=\"email_reg\" class=\"col-sm-4 col-form-label text-right\">Email</label>\n                            <div class=\"col-sm-8\">                   \n                                <input type=\"email\" name=\"UserLog.email\" [(ngModel)]=\"UserLog.email\" required #logemail=\"ngModel\" class=\"col-md-12\">\n                                <div class=\"error\"*ngIf=\"!logemail.valid && logemail.touched\">You need to enter an email!</div>\n                                <div class=\"error\" *ngIf=\"LogError\">{{LogError}}</div>\n                            </div>\n                        </div>     \n                        <div class=\"form-group row my-2\"> \n                            <label for=\"password_reg\" class=\"col-sm-4 col-form-label text-right\">Password</label>\n                            <div class=\"col-sm-8\"> \n                                <input type=\"password\" name=\"UserLog.password\" [(ngModel)]=\"UserLog.password\" #passwordlog=\"ngModel\"required class=\"col-md-12\">\n                                <div class=\"error\" *ngIf=\"!passwordlog.valid &&passwordlog.touched\">You need to enter a password!</div>\n                                <div class=\"error\" *ngIf=\"PwError\">{{PwError}}</div>\n                            </div>\n                        </div>\n                        <div class=\"row justify-content-end my-2\">\n                            <div class=\"col-sm-3 mr-3\">\n                                <input class=\"btn btn-primary\" type=\"submit\" [disabled] =\"!loginform.form.valid\" value=\"Login\">\n                            </div>\n                        </div>\n                    </form>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_service_1 = __webpack_require__("./src/app/http.service.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var HomeComponent = /** @class */ (function () {
    function HomeComponent(_httpService, _router) {
        this._httpService = _httpService;
        this._router = _router;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.UserReg =
            {
                email: "",
                first_name: "",
                last_name: "",
                password: "",
                password_confirm: "",
            };
        this.UserLog =
            {
                email: "",
                password: ""
            };
        this.getrandomGame();
        this.retrievepopularGame();
    };
    HomeComponent.prototype.onSubmit = function (UserReg) {
        var _this = this;
        var newUser = this._httpService.createNewUser(this.UserReg);
        newUser.subscribe(function (data) {
            console.log(data, "Got user!");
            if (data["err"]) {
                _this.RegError = data['err'];
                _this._router.navigateByUrl("/");
            }
            else {
                _this._router.navigateByUrl("/dashboard");
            }
        });
    };
    HomeComponent.prototype.onLogin = function (UserLog) {
        var _this = this;
        var User = this._httpService.loginUser(this.UserLog);
        User.subscribe(function (data) {
            console.log(data);
            if (data["err"] || data["pw_error"] || data["lockout"]) {
                _this.LogError = data["err"];
                _this.PwError = data["pw_error"];
                if (data["lockout"] === true) {
                    _this.Lockout = data["lockout"];
                    console.log(_this.Lockout);
                    _this._router.navigateByUrl("/");
                }
            }
            else {
                _this._router.navigateByUrl("/dashboard");
            }
        });
    };
    HomeComponent.prototype.getrandomGame = function () {
        var _this = this;
        var random = this._httpService.randomGame();
        random.subscribe(function (data) {
            console.log("this is data", data);
            _this.random = data["result"];
            console.log(_this.random);
        });
    };
    HomeComponent.prototype.retrievepopularGame = function () {
        var _this = this;
        var game_list = this._httpService.retrievePopularGames();
        game_list.subscribe(function (games) {
            console.log("this is data from bcg!", games);
            _this.games = games;
            console.log(_this.games);
        });
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'app-home',
            template: __webpack_require__("./src/app/home/home.component.html"),
            styles: [__webpack_require__("./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [http_service_1.HttpService, router_1.Router])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;


/***/ }),

/***/ "./src/app/http.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
__webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var HttpService = /** @class */ (function () {
    function HttpService(_http) {
        this._http = _http;
        this.popularBoardgameUrl = 'https://bgg-json.azurewebsites.net/hot'; // URL to web api
    }
    HttpService.prototype.createNewUser = function (UserReg) {
        return this._http.post('createnewuser', UserReg);
    };
    HttpService.prototype.loginUser = function (UserLog) {
        return this._http.post('loginuser', UserLog);
    };
    HttpService.prototype.checkSessionUser = function () {
        return this._http.get('check_session');
    };
    HttpService.prototype.userLogout = function () {
        return this._http.get('logout');
    };
    HttpService.prototype.createBoardGame = function (BoardGameCreate) {
        return this._http.post('creategame', BoardGameCreate);
    };
    HttpService.prototype.getAllGames = function () {
        return this._http.get('findgames');
    };
    HttpService.prototype.deleteGame = function (id) {
        return this._http.get('/delete/' + id);
    };
    HttpService.prototype.randomGame = function () {
        return this._http.get('random');
    };
    HttpService.prototype.getGame = function (id) {
        return this._http.get('/get_game/' + id);
    };
    HttpService.prototype.editGame = function (game) {
        console.log("here in editted game!");
        console.log(game.id);
        return this._http.post('/edit_game', game);
    };
    HttpService.prototype.retrievePopularGames = function () {
        return this._http
            .get(this.popularBoardgameUrl);
    };
    HttpService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], HttpService);
    return HttpService;
}());
exports.HttpService = HttpService;


/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid mt-5 position-fixed p-0\">\n  <nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n          <span class=\"navbar-toggler-icon\"></span>\n      </button>\n      <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n        <ul class=\"navbar-nav mr-auto\">\n          <li class=\"nav-item active\">\n            <a class=\"nav-link\" [routerLink]=\"['/dashboard']\">Home <span class=\"sr-only\">(current)</span></a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" [routerLink]=\"['/createboardgame']\">Create New Listing</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" [routerLink]=\"['/myboardgames']\">My Listings</a>\n          </li>\n        </ul>\n        <form class=\"form-inline my-2 my-lg-0\">\n          <button class =\"btn btn-primary mr-4\" (click)= \"goBack()\">Go Back</button>\n          <button class=\"btn btn-outline-success my-2 my-sm-0\" (click) = userLogout()>Logout</button>\n        </form>\n      </div>\n    </nav>\n</div>"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_service_1 = __webpack_require__("./src/app/http.service.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var common_1 = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(_httpService, _router, location) {
        this._httpService = _httpService;
        this._router = _router;
        this.location = location;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.userLogout = function () {
        var observable = this._httpService.userLogout();
        observable.subscribe(function (data) { return console.log(data, "this is data!"); });
        this._router.navigateByUrl("/");
    };
    NavbarComponent.prototype.goBack = function () {
        this.location.back();
    };
    NavbarComponent = __decorate([
        core_1.Component({
            selector: 'app-navbar',
            template: __webpack_require__("./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__("./src/app/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [http_service_1.HttpService,
            router_1.Router,
            common_1.Location])
    ], NavbarComponent);
    return NavbarComponent;
}());
exports.NavbarComponent = NavbarComponent;


/***/ }),

/***/ "./src/app/user-dashboard/user-dashboard.component.css":
/***/ (function(module, exports) {

module.exports = ".right {\n    font-size: 16pt;\n}\n.game {\n    border: 2px solid black;\n}"

/***/ }),

/***/ "./src/app/user-dashboard/user-dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<app-allboardgames></app-allboardgames>\n  <!-- <div class=\"container\">\n    <textarea rows=\"2\" cols=\"75\" class=\"search\" [(ngModel)]=\"searchText\" placeholder=\"Search...\"></textarea>\n    <br>\n    <h2>Welcome {{user_info?.first_name}}</h2> -->\n      <!-- <div [ngStyle]=\"{\n        'background-color': 'grey'}\"> -->\n      <!-- <div class=\"game\" *ngFor=\"let games of allGames | filter:'title':searchText\">\n        <div class=\"row\">\n          <div class=\"col\">\n              <h2>{{games.title}}</h2>\n              <p>{{games.description}}</p>\n              <p>Condition: {{games.condition}}</p>\n          </div> \n          <div class=\"col\">\n            <h2>{{games.price}}</h2>\n            <p>{{games.location}}</p>\n            <p *ngIf=\"(games._user) === (session)\">\n            <button>Delete</button></p>\n            <p *ngIf=\"games._user != session\">\n              <button>Placeholder</button>\n            </p>\n          </div>\n        </div>\n      </div>\n    </div> -->\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/user-dashboard/user-dashboard.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_service_1 = __webpack_require__("./src/app/http.service.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var UserDashboardComponent = /** @class */ (function () {
    function UserDashboardComponent(_httpService, _router) {
        this._httpService = _httpService;
        this._router = _router;
    }
    UserDashboardComponent.prototype.ngOnInit = function () {
        this.checkSessionUserComponent();
        this.getGames();
    };
    UserDashboardComponent.prototype.checkSessionUserComponent = function () {
        var _this = this;
        var session_data = this._httpService.checkSessionUser();
        session_data.subscribe(function (data) {
            console.log(data, "this is data!");
            console.log(data["session"]);
            if (data["session"] == false) {
                console.log("got here!");
                _this._router.navigateByUrl("/");
            }
            else {
                console.log("got here to give user data!");
                _this.user_info = data["user"];
                _this.session = data["session"];
                console.log(_this.user_info);
            }
        });
    };
    UserDashboardComponent.prototype.getGames = function () {
        var _this = this;
        var allGames = this._httpService.getAllGames().subscribe(function (data) {
            console.log(data, "all the data!");
            _this.allGames = data["games"];
            console.log(_this.allGames);
        });
    };
    UserDashboardComponent = __decorate([
        core_1.Component({
            selector: 'app-user-dashboard',
            template: __webpack_require__("./src/app/user-dashboard/user-dashboard.component.html"),
            styles: [__webpack_require__("./src/app/user-dashboard/user-dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [http_service_1.HttpService, router_1.Router])
    ], UserDashboardComponent);
    return UserDashboardComponent;
}());
exports.UserDashboardComponent = UserDashboardComponent;


/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__("./src/app/app.module.ts");
var environment_1 = __webpack_require__("./src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map