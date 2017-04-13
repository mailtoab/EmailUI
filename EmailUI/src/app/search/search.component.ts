import { Component, OnInit,ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MyValidators } from '../myValidators';
import { SearchService } from '../search.service';
import { OrderDetails } from '../orderDetails';
import { GtConfig } from 'angular2-generic-table';
import { Observable } from 'rxjs/Observable';
import { HomeComponent } from '../home/home.component';
import { Overlay, overlayConfigFactory } from 'angular2-modal';
import { Modal, BSModalContext } from 'angular2-modal/plugins/bootstrap';
import { ModalComponent, AdditionCalculateWindowData} from '../modal/modal.component';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
   providers: [Modal]
})
export class SearchComponent{
	orderId="";
	isSubmitted=false;
    form: FormGroup;
	orderDetails: OrderDetails[];
	configObject;
	ishtmlContent=false;
	htmlContent:string;
	loading=false;
	
    constructor( private fb: FormBuilder, private search: SearchService,public modal: Modal) {
		
		this.loading=false;
		this.isSubmitted=false;
		this.ishtmlContent=false;
		this.form = fb.group( {
            orderId: ['', Validators.compose( [
                Validators.required, Validators.minLength(3),
                MyValidators.cannotContainSpace
            ] )]
        });
		
		
		    };
			
	
    
    fetchOrderDetails(){
		this.loading=true;
		this.ishtmlContent=false;
		this.orderDetails=[];
		this.search.fetchorderDetails(this.orderId).subscribe(response=>this.orderDetails=response);
		setTimeout(() => this.loading=false, 3000);
		this.isSubmitted=true;
		}
	
	fetchHTMLContent(emailContent : string){
		this.ishtmlContent=true;
		this.htmlContent=emailContent;
		
	}
	onClick(emailContent : string) {
	this.ishtmlContent=true;
	this.htmlContent=emailContent;
    this.modal.alert()
        .size('lg')
        .showClose(true)
        .title('Email Content')
        .body(`
            <div>this.htmlContent</div> `)
        .open();
  }

  openCustom(emailContent : string) {
  	return this.modal.open(ModalComponent, overlayConfigFactory({ content: emailContent}, BSModalContext));
  }
	
}
