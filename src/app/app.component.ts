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
  constructor(private webService : WebService){}
     title = 'AngularApp';
     

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

    /***************************************** */
    onSubmit(form : NgForm)
    {
     //set form data   
        this.values.input = form.value.input
        this.values.input2 = form.value.input2

            console.log(this.values)
    
       this.grabResults();
    }

    /**************************************** */
    //below function send the request to the webservice and gets the result
    grabResults()
    {
      this.webService.calculate(this.values)
      .subscribe(
        (result => this.finalAns(result)  
      ))
      
    };
    

    /*********************************** */
    //Result is assigned  to app component
    finalAns(result: any){
      console.log(result)  
      return  this.result =result.message;
    }
    
    
    /****************************************** */
    //Get the value of the button 
    btnClicked(target : any)
    {
      this.values.operator =target.target.innerHTML
    }
    
}
