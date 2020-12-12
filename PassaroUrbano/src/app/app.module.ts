import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common'
import localePtBr from '@angular/common/locales/pt'
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TopoComponent } from './topo/topo.component';
import { HomeComponent } from './home/home.component';
import { RodapeComponent } from './rodape/rodape.component';
import { OfertasService } from './Ofertas.service';
import { HttpClientModule } from "@angular/common/http";
import { DiversaoComponent } from './diversao/diversao.component';
import { RestaurantesComponent } from './restaurantes/restaurantes.component'
import { RouterModule } from '@angular/router';

import { DescricaoReduzida } from './util/descricao-reduzida.pipe';

import { ROUTES } from './app.routes';
import { OfertaComponent } from './oferta/oferta.component';
import { OndeFicaComponent } from './oferta/onde-fica/onde-fica.component';
import { ComoUsarComponent } from './oferta/como-usar/como-usar.component';
import { OrdemCompraComponent } from './ordem-compra/ordem-compra.component';
import { OrdemCompraSucessoComponent } from './ordem-compra/ordem-compra-sucesso/ordem-compra-sucesso.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CarrinhoService } from './carrinho.service';
import { ToastrModule } from 'ngx-toastr';

registerLocaleData(localePtBr);

@NgModule({
  declarations: [
    AppComponent,
    TopoComponent,
    HomeComponent,
    RodapeComponent,
    DiversaoComponent,
    RestaurantesComponent,
    OfertaComponent,
    OndeFicaComponent,
    ComoUsarComponent,
    DescricaoReduzida,
    OrdemCompraComponent,
    OrdemCompraSucessoComponent,



  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(ROUTES),
    ToastrModule.forRoot({ preventDuplicates: true, positionClass: 'toast-bottom-right'	 }),
    BrowserAnimationsModule,
  ],
  exports: [
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt-Br' },
    CarrinhoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
