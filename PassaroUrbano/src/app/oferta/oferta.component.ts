import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { Observable, Observer } from 'rxjs';
import { OfertasService } from '../Ofertas.service';
import { Oferta } from '../shared/oferta.model';
import { interval } from "rxjs"

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [OfertasService]
})
export class OfertaComponent implements OnInit, OnDestroy {

  public oferta: Oferta

  constructor(
    private route: ActivatedRoute,
    private service: OfertasService
  ) {
  }

  ngOnInit(): void {


    this.service.getOfertaId(this.route.snapshot.params['id'])
      .then((oferta: Oferta) => {
        this.oferta = oferta;
      })


  }
  ngOnDestroy() {

  }

}
