import React, { useState } from "react";
import "./pedidos.css";

export function Pedidos() {
  const [products, setProducts] = useState([
    
  ]);
  const [nameInput, setNameInput] = useState("");
  const [priceInput, setPriceInput] = useState();

  function btnAdd() {
    let add = { name: nameInput, price: +priceInput };
    let iguais = products.filter((item) => item.name === add.name);
    if (iguais.length > 0) {
      alert("Produto já cadastrado");
    } else {
      setProducts([...products, add]);
    }
  }

  function btnUpdate() {
    let upd = products.filter((i) => i.name === nameInput)[0];
    upd.price = +priceInput;
    let newPrice = products.indexOf(upd);
    let copia = [...products];
    copia[newPrice].price = upd.price;
    setProducts(copia);
  }

  function btnDelete(nome) {
    const deleta = products.filter((i) => i.name !== nome)
    setProducts(deleta);
    
  }

  return (
    <div className="container">
      <div clas>
        <div className="containerInput">
          <div>
            <label htmlFor="input">
              Nome:
              <input
                type="text"
                placeholder="Maçã, Banana etc..."
                value={nameInput}
                onChange={(e) => setNameInput(e.target.value)}
              />
            </label>
          </div>
          <div>
            <label htmlFor="input">
              Preço:
              <input
                type="number"
                placeholder="2.46"
                value={priceInput}
                onChange={(e) => setPriceInput(e.target.value)}
              />
            </label>
          </div>
        </div>
        <div className="painelBtn">
          <button onClick={btnAdd} type="submit">
            Enviar
          </button>
          <button onClick={btnUpdate} type="submit">
            Atualizar
          </button>
        </div>
      </div>
      {products.map((prod) => {
        return (
          <div className="lista" key={prod.name}>
            <h2>
              {`${prod.name} --- R$ ${prod.price}`}{" "}
              <button onClick={() => btnDelete(prod.name)}>X</button>
            </h2>
          </div>
        );
      })}
    </div>
  );
}
