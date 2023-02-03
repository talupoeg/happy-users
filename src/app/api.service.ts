import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Log } from 'src/utils/log';

@Injectable({
	providedIn: 'root',
})
export class ApiService {
	private url = 'https://jsonplaceholder.typicode.com/users/';
	constructor(private http: HttpClient) {}

	getUsers(): Observable<any> {
		return this.http
			.get<any>(this.url)
			.pipe(catchError(Log.handleError<any>('getUsers', [])));
	}

	getUser(id: number): Observable<any> {
		return this.http
			.get<any>(this.url + id)
			.pipe(catchError(Log.handleError<any>('getUser', {})));
	}
}
