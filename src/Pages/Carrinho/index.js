import Header from 'components/Header';
import Item from 'components/Item';
import React from 'react';
import { useSelector } from 'react-redux';
import styles from './Carrinho.modules.scss';

export default function Carrinho() {
  const { carrinho, total } = useSelector((state) => {
    let total = 0;
    const carrinhoReduce = state.carrinho.reduce((itens, itemNoCarrinho) => {
      const item = state.itens.find((item) => item.id === itemNoCarrinho.id);
      total += (item.preco * itemNoCarrinho.quantidate);
      itens.push({
        ...item,
        quantidate: itemNoCarrinho.quantidate,
      });
      return itens;
    }, []);
    return {
      carrinho: carrinhoReduce,
      total,
    };
  });

  return (
    <div>
      <Header
        titulo="Carrinho de Compras"
        descricao="Confira produtos que você adicionou ao carrinho"
      />
      <div className={styles.carrinho}>
        {carrinho.map((item) => (
          <Item key={item.id} {...item} carrinho />
        ))}

        <div className={styles.total}>
          <strong>Resumo da compra</strong>
          <span>
            Subtotal: <strong>R$ {total.toFixed(2)}</strong>
          </span>
        </div>
      </div>
    </div>
  );
}
