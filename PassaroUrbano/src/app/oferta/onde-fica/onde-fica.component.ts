import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { OfertasService } from 'src/app/Ofertas.service';

@Component({
  selector: 'app-onde-fica',
  templateUrl: './onde-fica.component.html',
  styleUrls: ['./onde-fica.component.css']
})
export class OndeFicaComponent implements OnInit {

  public ondeFica: string = "";

  constructor(
    private route: ActivatedRoute,
    private service: OfertasService) { }

  ngOnInit(): void {

    this.route.parent.params.subscribe((para: Params) => {
      this.service.getOndeFicaOfertaPorId(para.id)
        .then((res) => {
          this.ondeFica = res
        })
    })
  }

}
