import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CarrinhoService } from '../carrinho.service';
import { OrdemCompraService } from '../ordem-compra.service'
import { ItemCarrinho } from '../shared/itemCarrinho.model';
import { Pedido } from '../shared/pedido';


@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css'],
  providers: [OrdemCompraService]
})
export class OrdemCompraComponent implements OnInit {

  public formulario: FormGroup = new FormGroup({
    'endereco': new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(120)]),
    'numero': new FormControl(null, [Validators.required, Validators.minLength(1), Validators.maxLength(20)]),
    'complemento': new FormControl(null),
    'formaPagamento': new FormControl(null, [Validators.required])
  });

  constructor(
    private ordemCompraService: OrdemCompraService,
    public carrinhoService: CarrinhoService
  ) { }

  public idPedidoCompra: number
  public itemcarrinho: ItemCarrinho[] = []

  ngOnInit() {
    this.itemcarrinho = this.carrinhoService.exibirItens()
  }

  public confirmarCompra(): void {

    if (this.formulario.status === 'INVALID') {

      this.formulario.get('endereco').markAsTouched()
      this.formulario.get('numero').markAsTouched()
      this.formulario.get('complemento').markAsTouched()
      this.formulario.get('formaPagamento').markAsTouched()

    } else {

      if (this.carrinhoService.exibirItens().length === 0) {
        alert('Você não selecionou nenhum item')
      } else {

        let pedido: Pedido = new Pedido(
          this.formulario.value.endereco,
          this.formulario.value.numero,
          this.formulario.value.complemento,
          this.formulario.value.formaPagamento,
          this.carrinhoService.exibirItens()
        )
        this.ordemCompraService.efetivarCompra(pedido)
          .subscribe((id: number) => {
            this.idPedidoCompra = id
          })
        this.carrinhoService.limpaCarrinho()
      }
    }
  }
  public addQtde(item: ItemCarrinho): void {
    this.carrinhoService.adicionarQuantidade(item)
  }

  public removeQtde(item: ItemCarrinho): void {
    this.carrinhoService.subtrairQuantidade(item)
  }
}
