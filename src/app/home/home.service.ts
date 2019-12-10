import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IShow } from '../tvShows/shows';
import { IMovie } from '../movies/movies';

@Injectable({
    providedIn: 'root'
})

export class HomeService {
    constructor(private http:HttpClient){}
    showUrl:string = "https://api.themoviedb.org/3/tv/popular?api_key=3e10d7f3f79c11b4421becd92e8b722f&language=en-US&page=1"
    getShows(): Observable<IShow[]>{
        return this.http.get<IShow[]>(this.showUrl)
    }
    movieUrl:string = 'https://api.themoviedb.org/3/movie/now_playing?api_key=3e10d7f3f79c11b4421becd92e8b722f&language=en-US&page=1'
    getMovies(): Observable<IMovie[]>{
        return this.http.get<IMovie[]>(this.movieUrl)
    }
}