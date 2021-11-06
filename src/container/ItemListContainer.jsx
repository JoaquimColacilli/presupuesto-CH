import React, { useState, useEffect } from "react";
import ItemList from "../components/ItemList";
import data from "../data/data";
import { useParams } from "react-router-dom";

import "../index.css";
const ItemListContainer = (props) => {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);

  const { categoriaId } = useParams();

  console.log(categoriaId);

  useEffect(() => {
    setCargando(true);
    const listaProductos = new Promise((res, rej) => {
      setTimeout(() => {
        res(data);
      }, 1000);
    });
    listaProductos.then((data) => {
      categoriaId
        ? setProductos(data.filter((i) => i.categoria === categoriaId))
        : setProductos(data);
      setCargando(false);
    });
  }, [categoriaId]);

  return (
    <div>
      <h1>{props.titulo}</h1>
      {cargando ? (
        <div class="sk-circle">
          <div class="sk-circle1 sk-child"></div>
          <div class="sk-circle2 sk-child"></div>
          <div class="sk-circle3 sk-child"></div>
          <div class="sk-circle4 sk-child"></div>
          <div class="sk-circle5 sk-child"></div>
          <div class="sk-circle6 sk-child"></div>
          <div class="sk-circle7 sk-child"></div>
          <div class="sk-circle8 sk-child"></div>
          <div class="sk-circle9 sk-child"></div>
          <div class="sk-circle10 sk-child"></div>
          <div class="sk-circle11 sk-child"></div>
          <div class="sk-circle12 sk-child"></div>
        </div>
      ) : (
        <ItemList productos={productos} />
      )}
    </div>
  );
};

export default ItemListContainer;
