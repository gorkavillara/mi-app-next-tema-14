import React from "react";

const Info = ({ searchParams }) => {
  if (!searchParams || !searchParams.nombre)
    return <span>No hay ningún nombre en los parámetros</span>;

  return <div>Tu nombre es: {searchParams.nombre}</div>;
};

export default Info;
