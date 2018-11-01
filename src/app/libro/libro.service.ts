
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Libro} from './libro';
import { Observable } from 'rxjs';

const API_URL = "http://localhost:8080/sX_biblioteca-api/";
const libros = "/libros.json";

/**
* The service provider for everything related to editorials
*/
@Injectable()
export class LibroService {
    
    /**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
    constructor(private http: HttpClient) { }
    
  
    getLibros() : Observable<Libro[]> {
        return this.http.get<Libro[]>(API_URL + libros);
    }
    
}