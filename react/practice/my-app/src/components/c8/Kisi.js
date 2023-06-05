import React from "react";
const Kisi = ({ student }) => {
  const { isim, yas, kurs, img } = student;
  return (
    <div className="kisi">
      <h1>{isim}</h1>
      <img src={img} alt="" width="150" height="150" />
      <h2>{yas}</h2>
      <h3>{kurs}</h3>
    </div>
  );
};
export default Kisi;