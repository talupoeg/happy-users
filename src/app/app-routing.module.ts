import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OverviewComponent } from './overview/overview.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
	{ path: '', redirectTo: '/overview', pathMatch: 'full' },
	{ path: 'overview', component: OverviewComponent },
	{ path: 'user/:id', component: DetailsComponent },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
