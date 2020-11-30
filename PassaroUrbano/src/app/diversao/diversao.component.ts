import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../Ofertas.service';
import { Oferta } from '../shared/oferta.model';

@Component({
  selector: 'app-diversao',
  templateUrl: './diversao.component.html',
  styleUrls: ['./diversao.component.css']
})
export class DiversaoComponent implements OnInit {

  public ofertas: Oferta[]

  constructor(private ofertaService: OfertasService) { }

  ngOnInit(): void {
    this.ofertaService.getOfertasCategoria('diversao')
      .then((ofertas: Oferta[]) => {
        this.ofertas = ofertas;
      })
      .catch((param: any) => {

      })
  }

}
