import { HttpClient, HttpHeaders, } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, } from 'rxjs/operators';

@Injectable()
export class WebService{
    public result = '';


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
 
        //pipe to send result back to app component
      let observable =   this.http.post('http://localhost:4300/api/calculate', values ,{
            observe:'body',
            reportProgress: true
        }).pipe(
            map(( result) =>{  
                console.log(result ) 
                return result

        }),)
        return observable;
        }


} 