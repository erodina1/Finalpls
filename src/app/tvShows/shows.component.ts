import { Component } from '@angular/core';
import { IShow } from './shows';
import { ShowService } from './shows.service';

@Component({
    selector: 'pm-shows',
    templateUrl: './shows.component.html'
})
export class ShowsListComponent{
    pageTitle: 'Shows';
    shows: IShow[] = [];
    constructor(private ShowService: ShowService){}
    ngOnInit():void{
        this.shows = this.GetShows();
    }
    GetShows():any{
        this.ShowService.getShows().subscribe(showObserved => {
            this.shows = showObserved})
    }
}