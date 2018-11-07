
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Comentario} from './comentario';
import { Observable } from 'rxjs';
import {ComentarioDetail} from './comentario-detail'
import {environment} from '../../environments/environment';
const API_URL = environment.apiURL;
const comentarios = '/comentarios';

/**
* The service provider for everything related to editorials
*/
@Injectable()
export class ComentarioService {
    
    /**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
    constructor(private http: HttpClient) { }
    
  /**
   * devuelve todos los comentarios
   */
    getComentarios() : Observable<Comentario[]> {
        return this.http.get<Comentario[]>(API_URL + comentarios);
    }
    
    /**
     * devuelve el detalle de los comentarios
     */
    getComentarioDetail(comentarioId): Observable<ComentarioDetail>{
        return this.http.get<ComentarioDetail>(API_URL + comentarios + '/' + comentarioId)
    }

    /**
     * Crear de un comentario
     * @param comentario el nuevo comentario
     * @returns la confirmacion que el comentario fue creado
     */
      createBComentario(comentario): Observable<Comentario> {
        return this.http.post<Comentario>(API_URL + comentarios, comentario);
    }
}
