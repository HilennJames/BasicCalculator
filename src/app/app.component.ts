import { Component , OnInit} from '@angular/core';
import { WebService } from './web.service';
import { NgForm } from '@angular/forms';
import { Injectable } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})

export class AppComponent {
  values: any;
  result: string;
  constructor(private webService: WebService){
    this.values = {
      input : '',
      input2 : '' ,
      operator : ''
    };
    this.result = '';
  }
     title = 'AngularApp';
 /*********************************** */

    OnInit(): void
    {
      this.webService.connect();
    }

    /***************************************** */
    onSubmit(form: NgForm): any
    {
        this.values.input = form.value.input;
        this.values.input2 = form.value.input2;
        console.log(this.values);
        this.grabResults();
    }
    /******************************************* */
    reset(form: NgForm): void {
      this.result = '';
      this.values = {};
      form.resetForm();
    }
    /**************************************** */
    // below function send the request to the webservice and gets the result
    grabResults(): any
    {
      this.webService.calculate(this.values)
      .subscribe(
        (result => this.finalAns(result)
      ));

    }

    /*********************************** */
    // Result is assigned  to app component
    finalAns(result: any): number {
      console.log(result);
      return  this.result = result.message;
    }


    /****************************************** */
    btnClicked(target: any): void
    {
      this.values.operator = target.target.innerHTML;
    }

}
