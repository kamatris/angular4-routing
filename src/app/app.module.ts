/*Package Angugit push -u origin masterlar*/
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule , Routes } from '@angular/router';

/*Custom Component*/
import { AppComponent }  from './app.component';
import { FormationComponent }  from './formation.component';
import { BookComponent }  from './book.component';
import { CoursComponent }  from './cours.component';
import { HomeComponent }  from './home.component';
import { NotFoundComponent }  from './notfound.component';
/*declarations Routing*/
const appRoutes: Routes = [
  { path : '' , component : HomeComponent },
  { path : 'cours' , component : CoursComponent },
  { path : 'formation' , component : FormationComponent },
  { path : 'book' , component : BookComponent },
  { path : '**' , component : NotFoundComponent }

];

@NgModule({
  imports:      [ BrowserModule , RouterModule.forRoot(appRoutes)],
  declarations: [ AppComponent , HomeComponent , NotFoundComponent , FormationComponent , BookComponent , CoursComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
