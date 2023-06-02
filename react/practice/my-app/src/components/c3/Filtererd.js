import React from "react";
import students from "./students.json";
const Filtered = () => {
  //!listeye yasi 25den kucuk olanlarin isimlerini ekleyelim
  return (
    <div>
      <ul>
        {students
          .filter((student) => student.yas < 25)
          .map((std, index) => (
            <li key={index}>{std.isim} </li>
          ))}
      </ul>
    </div>
  );
};
export default Filtered;