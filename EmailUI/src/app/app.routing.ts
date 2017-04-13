import { Router, RouterModule, Routes } from '@angular/router';

import { EmailHCComponent } from './email-hc/email-hc.component';
import { SearchComponent } from './search/search.component';
import { RuleTestComponent } from './rule-test/rule-test.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './_guards/index';


const appRoutes: Routes=[
	 { path: '', component: HomeComponent,canActivate: [AuthGuard] },
	 { path: 'Home', component: HomeComponent },
    { path: 'Login', component: LoginComponent },
   { path: 'HealthCheck', component: EmailHCComponent },
    { path: 'Search', component: SearchComponent },
    { path: 'ruleTest', component: RuleTestComponent },
	// otherwise redirect to Not Found
	{ path: '**',  redirectTo: '' }

];

export const routing = RouterModule.forRoot(appRoutes);