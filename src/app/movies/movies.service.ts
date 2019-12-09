import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { IMovie } from './movies';

@Injectable({
    providedIn:'root'
})
export class MovieService{
    constructor(private http: HttpClient){

    }
    movieUrl:string = 'https://api.themoviedb.org/3/movie/now_playing?api_key=3e10d7f3f79c11b4421becd92e8b722f&language=en-US&page=1'
    getMovies(): Observable<IMovie[]>{
        return this.http.get<IMovie[]>(this.movieUrl)
    }
}