import {TodoListComponent} from "./components/todo-list/todo-list.component";
import {LandingPageComponent} from "./components/landing-page/landing-page.component";
import {Routes} from "@angular/router";
import {LoginComponent} from "./components/login/login.component";
import {ImpressumComponent} from "./components/impressum/impressum.component";
import {DatenschutzComponent} from "./components/datenschutz/datenschutz.component";
import {NotFoundComponent} from "./components/not-found/not-found.component";


export const APP_ROUTES: Routes = [
  {
    // Standardroute: Landing Page
    path:"",
    redirectTo:"landing-page",
    pathMatch:"full"
  },
  {
    path:"landing-page",
    component: LandingPageComponent
  },
  {
    path:"login",
    component: LoginComponent
  },
  {
    path:"impressum",
    component: ImpressumComponent
  },
  {
    path:"datenschutz",
    component: DatenschutzComponent
  },
  {
    path:"todo-list",
    component: TodoListComponent
  },
  {
    path:"**",
    component: NotFoundComponent
  }

]
