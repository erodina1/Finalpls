import { Component } from '@angular/core';
import { IMovie } from './movies';
import { MovieService } from './movies.service'

@Component({
    selector: 'pm-movies',
    templateUrl: './movies.component.html'
})
export class MovieListComponent{
    pageTitle: 'Movies';
    movies: IMovie[] = [];
    constructor(private MovieService: MovieService){
        //this.movies = this.MovieService.getMovies();
        this.MovieService.getMovies().subscribe(movieObserved => {
            this.movies = movieObserved
        })
    }
}