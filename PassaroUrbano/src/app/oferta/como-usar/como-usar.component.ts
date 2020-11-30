import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OfertasService } from 'src/app/Ofertas.service';

@Component({
  selector: 'app-como-usar',
  templateUrl: './como-usar.component.html',
  styleUrls: ['./como-usar.component.css']
})
export class ComoUsarComponent implements OnInit {

  public comoUsar: string= "";

  constructor(
    private route: ActivatedRoute,
    private service: OfertasService) { }

  ngOnInit(): void {
    this.service.getComoUusarOfertaPorId(this.route.parent.snapshot.params['id'])
      .then((res) => {
        this.comoUsar = res[0]
      })
  }

}
