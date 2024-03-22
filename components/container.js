import React from "react";

// Komponen Container sebagai functional component
const Container = (props) => {
  return (
    // Menggunakan div sebagai container dengan class dinamis
    <div
      className={`container p-8 mx-auto xl:px-0 ${
        props.className ? props.className : ""
      }`}>
      {/* Menampilkan konten yang berada di dalam komponen Container */}
      {props.children}
    </div>
  );
}

// Ekspor komponen Container
export default Container;
