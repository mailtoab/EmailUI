import { Http, Jsonp, URLSearchParams, Headers} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { OrderDetails } from './orderDetails';


@Injectable()
export class SearchService {
	orderDetails;
	
    constructor(private http: Http, private jsonp: Jsonp ) {
		
		
    }
	
	
	fetchorderDetails (term: string) {
    let url = 'http://localhost:8080/EmailDashboardBackend/getEmailList/';
   
    // TODO: Add error handling
		
		return this.http
               .get(url+term)
               .map(response =>  response.json());
			   
  }
	
    
}   