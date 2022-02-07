import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'Welcome to TAN Stack';

    hello$ = this.http.get<string>('/api');

    constructor(
        private http: HttpClient,
    ) { }

}
