import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AccessDetails } from '../accessDetails';
import { AccessService } from '../access.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    model: any = {};
    loading = false;
	accessDetails:AccessDetails[]=[];
	router:Router;
  constructor( private route: ActivatedRoute,
         _router: Router,private access: AccessService) {
		this.router=_router;
		}

  ngOnInit() {
  }
 login() {
        this.loading = true;
		
		
		localStorage.setItem('loggedVZID',this.model.username));
		
	   this.router.navigate(['/Home']);
    }
}
