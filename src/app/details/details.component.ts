import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ApiService } from '../api.service';

import { User } from '../user';

@Component({
	selector: 'app-details',
	templateUrl: './details.component.html',
	styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
	user: Partial<User> = {};

	constructor(
		private route: ActivatedRoute,
		private location: Location,
		private api: ApiService
	) {}

	ngOnInit(): void {
		this.getUser();
	}

	getUser(): void {
		const id = Number(this.route.snapshot.paramMap.get('id'));
		this.api.getUser(id).subscribe((user) => {
			this.user = user;
		});
	}

	goBack(): void {
		this.location.back();
	}
}
