import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class WebService{
    result : number = 0 ;

    httpHeaders= new HttpHeaders
    ({
        "Access-Contro-Allow-Origin": "*", 
        "Access-Control-Allow-Headers": "Origin, X-Requested-Width, Content-Type, Accept"
    })

    constructor(private http: HttpClient ){}  

    connect(){
        return  this.http.get('http://localhost:4300/api/calculate');
    }

    calculate(values : any){
        this.http.post('http://localhost:4300/api/calculate', values)
        .subscribe(
            (response) => {

                        //turn Object to string it , could not access the object directly 
                        let data = JSON.stringify(response)
                
                        //parse the string to be able to access the property 
                        let answer = JSON.parse(data)
                        this.result = answer.message;
                            
                        console.log(this.result);  
            },
            (error)    => {console.log(error)
            })
    }
} 