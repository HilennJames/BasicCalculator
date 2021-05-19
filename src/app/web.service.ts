import { HttpClient, HttpHeaders, } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, } from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable()
export class WebService{
    public result = '';

    httpHeaders = new HttpHeaders
    ({
        'Access-Contro-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-Width, Content-Type, Accept'
    });

    constructor(private http: HttpClient ){}

    connect(): Observable<any>{
        return  this.http.get('http://localhost:4300/api/calculate');
    }

    calculate(values: any): Observable<any>{

        // pipe to send result back to app component
      const observable =   this.http.post('http://localhost:4300/api/calculate', values , {
            observe: 'body',
            reportProgress: true
        }).pipe(
            map(( result) => {
                return result;

        }), );
      return observable;
        }
}
