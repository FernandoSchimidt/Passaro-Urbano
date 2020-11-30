import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { OfertasService } from '../Ofertas.service';
import { Oferta } from '../shared/oferta.model';

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css']
})
export class TopoComponent implements OnInit {

  public ofertas: Observable<Oferta[]>

  constructor(private service: OfertasService) { }

  ngOnInit(): void {
  }
  public pesquisa(termoDaBuusca: string): void {
    this.ofertas = this.service.pesquisaOfertas(termoDaBuusca)
    this.ofertas.subscribe((ofertas: Oferta[]) => { console.log(ofertas) },
      (erro: any) => { console.log('Erro status' + erro.status) },
      () => { console.log('Fluxo de eventos completo') })
  }

}
