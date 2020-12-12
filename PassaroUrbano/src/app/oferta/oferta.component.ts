import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router'
import { Observable, Observer } from 'rxjs';
import { OfertasService } from '../Ofertas.service';
import { Oferta } from '../shared/oferta.model';
import { interval } from "rxjs"
import { CarrinhoService } from '../carrinho.service';
import { ToastrService } from 'ngx-toastr';

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
    private service: OfertasService,
    private carrinhoService: CarrinhoService,
    private toastr: ToastrService
  ) {
  }

  ngOnInit(): void {

    this.route.params.subscribe((parametros: Params) => {
      parametros.id

      this.service.getOfertaId(parametros.id)
        .then((oferta: Oferta) => {
          this.oferta = oferta;
        })
    })


  }
  ngOnDestroy() {

  }
  public addItemCarrinho(): void {
    this.carrinhoService.addItem(this.oferta)
    this.showToastr(this.oferta)
  }

  showToastr(oferta: Oferta) {
    this.toastr.info('Oferta ' + oferta.titulo + '  adicionada ao carrinho!', 'Passaro Urbano', { timeOut: 3000 })
  }

}
