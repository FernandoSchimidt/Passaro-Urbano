import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pedido } from './shared/pedido';
import { map, catchError, retry } from 'rxjs/operators';
import { URL_API, URL_API2 } from './app.api'

@Injectable({
  providedIn: 'root'
})
export class OrdemCompraService {

  constructor(private http: HttpClient) { }

  public efetivarCompra(pedido: Pedido): Observable<number> {
    let headers: HttpHeaders = new HttpHeaders();
    headers.append('Content-type', 'application/json');

    return this.http.post<any>(
      `${URL_API2}/pedidos`,
      (pedido),
      ({ headers: headers })
    )
      .pipe(map((resposta: Response) => resposta['id']));
  }
}
