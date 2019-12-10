import { Component } from '@angular/core';
import { ShowService } from '../tvShows/shows.service';
import { MovieService } from '../movies/movies.service';
import { IShow } from '../tvShows/shows';
import { IMovie } from '../movies/movies';

@Component({
  selector: 'pm-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {
  public pageTitle = 'Welcome';
  shows: IShow[] = [];
  movies: IMovie[] = []
  constructor(private ShowService: ShowService, private MovieService: MovieService){}
  ngOnInit():void{
    this.movies = this.GetMovies();
    this.shows = this.GetShows();
  }
  GetMovies():any{
    this.MovieService.getMovies().subscribe(movieObserved => {
      this.movies = movieObserved})
  }
  GetShows():any{
    this.ShowService.getShows().subscribe(showObserved => {
      this.shows = showObserved})
  }
}
