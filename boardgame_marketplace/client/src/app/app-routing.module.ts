import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { CreateBoardgameComponent } from './create-boardgame/create-boardgame.component';
import { AllboardgamesComponent } from './allboardgames/allboardgames.component';
import { EditBoardgamesComponent } from './edit-boardgames/edit-boardgames.component';
import { PopularGameInfoComponent } from './popular-game-info/popular-game-info.component';

 
const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: "createboardgame", component: CreateBoardgameComponent},
  {path: "dashboard", component: UserDashboardComponent},
  {path: "edit/:id", component: EditBoardgamesComponent},
  {path: "popular/:id", component: PopularGameInfoComponent},
  {path: "", pathMatch: 'full', redirectTo: '/'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


