import React from "react";
import Title from "../Title";

const makeup = [
    { id: 1, image: "https://www.pngegg.com/es/png-didcg"},
    { id: 2, image: "https://www.pngegg.com/es/png-ehtlc"},
    { id: 3, image: "https://www.pngegg.com/es/search?q=l%C3%A1piz+labial"},
];

export const ItemListContainer = ({ texto }) => {
    const data = pedido
    const onAdd = (quantity) => {
        console.log(`Compraste ${quantity} unidades`)};
    }

    return (
        <>
        <Title greeting={texto} />
        <ItemCount initial={3} stock={5} onAdd={onAdd} />
        <ItemList data={data} />
    );
}

export default ItemListContainer;