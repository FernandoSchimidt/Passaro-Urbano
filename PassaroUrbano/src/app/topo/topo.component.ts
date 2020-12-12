import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { OfertasService } from '../Ofertas.service';
import { Oferta } from '../shared/oferta.model';


import { of } from 'rxjs';
import { switchMap, debounceTime, distinctUntilChanged, catchError } from 'rxjs/operators'
@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css']
})
export class TopoComponent implements OnInit {

  public ofertas: Observable<Oferta[]>

  private subjectPesquisa: Subject<string> = new Subject<string>()

  constructor(private service: OfertasService) { }

  ngOnInit(): void {
    this.ofertas = this.subjectPesquisa.pipe(
      debounceTime(1000),
      distinctUntilChanged(),
      switchMap((termo: string) => {
        if (termo.trim() === '') return of<Oferta[]>()
        return this.service.pesquisaOfertas(termo);
      }),
      catchError(
        (erro: any, observable: Observable<Oferta[]>) => {
          return of<Oferta[]>([]);
        }
      )
    );

  }
  public pesquisa(termoDaBuusca: string): void {
    this.subjectPesquisa.next(termoDaBuusca)

  }
  public limpaPesquisa(): void {
    this.ofertas = null
  }

}
