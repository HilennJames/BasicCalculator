import { Component } from '@angular/core';
import { WebService } from './web.service';
import { NgForm } from '@angular/forms';
import { Injectable } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html',
  styleUrls: ['./app.component.sass']
})

@Injectable({
  providedIn: 'any'
})

export class AppComponent {

     title = 'AngularApp';

     constructor(private webService : WebService){}

  //Variables
          values = {
                    input : '',
                    input2 : '' ,
                    operator : ''
                  } 
          result = '';
 /*********************************** */

    ngOnInit()
    {
      this.webService.connect();
    }

    onSubmit(form : NgForm)
    {
     //set form data   
        this.values.input = form.value.input
        this.values.input2 = form.value.input2

            console.log(this.values)

    //post request to backend 
    this.webService.calculate(this.values);
    }

    btnClicked(btn : any)
    {
      this.values.operator = btn.name
    }
    
}
