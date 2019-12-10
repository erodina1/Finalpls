import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IShow } from './shows';

@Injectable({
    providedIn: 'root'
})

export class ShowService{
    constructor(private http:HttpClient){}
    showUrl:string = "https://api.themoviedb.org/3/tv/popular?api_key=3e10d7f3f79c11b4421becd92e8b722f&language=en-US&page=1"
    getShows(): Observable<IShow[]>{
        return this.http.get<IShow[]>(this.showUrl)
    }
}