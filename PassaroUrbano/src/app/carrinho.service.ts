import { Injectable } from '@angular/core';
import { ItemCarrinho } from './shared/itemCarrinho.model';
import { Oferta } from './shared/oferta.model';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {

  public itens: ItemCarrinho[] = []

  constructor() { }

  public limpaCarrinho(): ItemCarrinho[] {
    return this.itens = []
  }

  public exibirItens(): ItemCarrinho[] {
    return this.itens
  }
  public addItem(oferta: Oferta): void {
    let itemCarrinho: ItemCarrinho = new ItemCarrinho(
      oferta.id,
      oferta.imagens[0],
      oferta.titulo,
      oferta.descricao_oferta,
      oferta.valor,
      1
    )
    let itemCarrinhoEncontrado = this.itens.find((item: ItemCarrinho) => item.id === itemCarrinho.id)

    if (itemCarrinhoEncontrado) {
      itemCarrinhoEncontrado.quantidade += 1;
    } else {
      this.itens.push(itemCarrinho)
    }

  }
  public totalCarrinhocompras(): number {
    let total: number = 0

    this.itens.map((item: ItemCarrinho) => {
      total = total + (item.valor * item.quantidade)
    })
    return total
  }
  public adicionarQuantidade(item: ItemCarrinho): void {
    let itemCarrinhoEncontrado = this.itens.find((item: ItemCarrinho) => item.id === item.id)

    if (itemCarrinhoEncontrado) {
      itemCarrinhoEncontrado.quantidade += 1;
    }
  }
  public subtrairQuantidade(item: ItemCarrinho): void {
    let itemCarrinhoEncontrado = this.itens.find((item: ItemCarrinho) => item.id === item.id)

    if (itemCarrinhoEncontrado) {
      if (itemCarrinhoEncontrado.quantidade) {
        itemCarrinhoEncontrado.quantidade -= 1;
        if (itemCarrinhoEncontrado.quantidade === 0) {
          this.itens.splice(this.itens.indexOf(itemCarrinhoEncontrado), 1)
        }
      }

    }
  }
}
