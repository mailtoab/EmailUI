import { Http, Jsonp, URLSearchParams, Headers} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';



@Injectable()
export class AccessService {
	accessDetails;
	
    constructor(private http: Http, private jsonp: Jsonp ) {
		
		
    }
	
	
	fetchAccessDetails (term: string) {
    let url = './src/app/json/access.json';
    // TODO: Add error handling
		
		return this.http
               .get(url)
               .map(response =>  response.json());
			   
  }
	
    
}   