import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../Ofertas.service';
import { Oferta } from '../shared/oferta.model';

@Component({
  selector: 'app-restaurantes',
  templateUrl: './restaurantes.component.html',
  styleUrls: ['./restaurantes.component.css'],
  providers: [OfertasService]
})
export class RestaurantesComponent implements OnInit {

  public ofertas: Oferta[]

  // public dataTest: any = new Date(2020, 10, 30)

  constructor(private ofertaService: OfertasService) { }

  ngOnInit(): void {
    this.ofertaService.getOfertasCategoria('restaurante')
      .then((ofertas: Oferta[]) => {
        console.log(ofertas);
        this.ofertas = ofertas;
      })
      .catch((param: any) => {

      })
  }

}
