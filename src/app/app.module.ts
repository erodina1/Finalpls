import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { MovieListComponent } from './movies/movies.component';
import { ShowsListComponent } from './tvShows/shows.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    ShowsListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
