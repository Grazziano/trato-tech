import Header from 'components/Header';
import Item from 'components/Item';
import React from 'react';
import { useSelector } from 'react-redux';
import styles from './Carrinho.modules.scss';

export default function Carrinho() {
  const carrinho = useSelector((state) => {
    const carrinhoReduce = state.carrinho.reduce((itens, itemNoCarrinho) => {
      const item = state.itens.find((item) => item.id === itemNoCarrinho.id);
      itens.push({
        ...item,
        quantidate: itemNoCarrinho.quantidate,
      });
      return itens;
    }, []);
    return carrinhoReduce;
  });

  return (
    <div>
      <Header
        titulo="Carrinho de Compras"
        descricao="Confira produtos que você adicionou ao carrinho"
      />
      <div className={styles.carrinho}>
        {carrinho.map((item) => (
          <Item key={item.id} {...item} />
        ))}

        <div className={styles.total}>
          <strong>Resumo da compra</strong>
          <span>
            Subtotal: <strong>R$ {(0.0).toFixed(2)}</strong>
          </span>
        </div>
      </div>
    </div>
  );
}
