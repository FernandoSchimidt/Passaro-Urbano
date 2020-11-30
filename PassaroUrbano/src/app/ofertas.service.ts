import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Oferta } from './shared/oferta.model';

import 'rxjs'
import { URL_API } from './app.api'
import { Observable } from 'rxjs';
import { map, catchError, retry } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class OfertasService {

  constructor(private http: HttpClient) { }

  public getOfertas(): Promise<Oferta[]> {
    return this.http.get(`${URL_API}?destaque=true`)
      .toPromise()
      .then((resposta: any) => resposta)
  }

  public getOfertasCategoria(categoria: string): Promise<Oferta[]> {
    return this.http.get(`${URL_API}?categoria=${categoria}`)
      .toPromise()
      .then((res: any) => res)
  }
  getOfertaId(id: number): Promise<Oferta> {
    return this.http.get(`${URL_API}?id=${id}`)
      .toPromise()
      .then((res: Oferta) => {
        return res[0]
      })
  }
  public getComoUusarOfertaPorId(id: number): Promise<string> {
    return this.http.get(`http://localhost:3000/como-usar?id=${id}`)
      .toPromise()
      .then((res: string) => {
        return res
      })
  }
  public getOndeFicaOfertaPorId(id: number): Promise<string> {
    return this.http.get(`http://localhost:3000/onde-fica?id=${id}`)
      .toPromise()
      .then((res: string) => {
        return res
      })
  }

  public pesquisaOfertas(termo: string): Observable<Oferta[]> {
    return this.http.get(`${URL_API}?descricao_oferta_like=${termo}`)
      .pipe(retry(10), map((resposta: any) => resposta, retry(10)))
  }
}
