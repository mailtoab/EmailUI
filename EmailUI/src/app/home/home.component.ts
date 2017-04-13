import { Component, OnInit } from '@angular/core';
import { AccessDetails } from '../accessDetails';
import { AccessService } from '../access.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
accessDetails:AccessDetails[]=[];
loggedVZID:string;
loading=false;
  constructor(private access: AccessService) { 
  
  }

  ngOnInit() {
	
	 this.loggedVZID=localStorage.getItem("loggedVZID");
	 this.access.fetchAccessDetails(this.loggedVZID).subscribe(response=>this.accessDetails=response);
	 setTimeout(() => this.loading=true, 3000);
  }

}
