import { ItemCarrinho } from "./itemCarrinho.model";

export class Pedido {
  constructor(
    // public id: any,
    public endereco: string,
    public numero: string,
    public complemento: string,
    public formaPagamento: string,
    public itens: ItemCarrinho[]
  ) { }
}
