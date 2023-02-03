import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { User } from '../user';

@Component({
	selector: 'app-overview',
	templateUrl: './overview.component.html',
	styleUrls: ['./overview.component.scss'],
})
export class OverviewComponent implements OnInit {
	users: User[] = [];
	delay: ReturnType<typeof setTimeout> = setTimeout(() => {});
	constructor(private api: ApiService) {}

	ngOnInit(): void {
		this.getUsers();
	}

	getUsers(): void {
		this.api.getUsers().subscribe((users) => {
			this.users = users;
		});
	}

	getFiltered(term: string): void {
		this.api.getUsers().subscribe((users) => {
			this.users = users.filter(
				(ob: User) =>
					ob.name.toLowerCase().search(term.toLowerCase()) !== -1
			);
		});
	}

	onInputChange(term: string): void {
		clearTimeout(this.delay);
		this.delay = setTimeout(() => this.getFiltered(term), 300);
	}
}
