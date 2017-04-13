import { Component, OnInit } from '@angular/core';
import { DialogRef, ModalComponent, CloseGuard } from 'angular2-modal';
import { BSModalContext } from 'angular2-modal/plugins/bootstrap';


export class AdditionCalculateWindowData extends BSModalContext {
    public content: string;
  	
}

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements CloseGuard,ModalComponent<AdditionCalculateWindowData>  {
context: AdditionCalculateWindowData;
public wrongAnswer: boolean;

  constructor(public dialog: DialogRef<AdditionCalculateWindowData>) {
    this.context = dialog.context;
     this.wrongAnswer = true;
   	dialog.setCloseGuard(this);
    
  }

  onKeyUp(value) {
  this.wrongAnswer = value != 5;
    this.dialog.close();
  }


  beforeDismiss(): boolean {
    return true;
  }

  beforeClose(): boolean {
   return this.wrongAnswer;
  }


}
