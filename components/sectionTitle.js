// Import library React dan komponen Container dari file "./container"
import React from "react";
import Container from "./container";

// Definisikan komponen SectionTitle dengan menerima props
const SectionTitle = (props) => {
  return (
    // Gunakan komponen Container dengan menambahkan beberapa prop
    <Container
      // Gunakan kelas fleksibel berdasarkan prop "align" untuk penataan elemen
      className={`flex w-full flex-col mt-4 ${
        props.align === "left" ? "" : "items-center justify-center text-center"
      }`}>
      {props.pretitle && (
        // Tampilkan pretitle jika prop "pretitle" ada
        <div className="text-sm font-bold tracking-wider text-green-600 uppercase">
          {props.pretitle}
        </div>
      )}

      {props.title && (
        // Tampilkan title jika prop "title" ada
        <h2 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
          {props.title}
        </h2>
      )}

      {props.title2 && (
        // Tampilkan title2 jika prop "title2" ada
        <h2 className="max-w-2xl text-2xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-3xl dark:text-white">
          {props.title2}
        </h2>
      )}

      {props.children && (
        // Tampilkan children (konten tambahan) jika prop "children" ada
        <div className="max-w-6xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300 text-center">
          {props.children}
        </div>
      )}
    </Container>
  );
}

// Ekspor komponen SectionTitle agar dapat digunakan di tempat lain
export default SectionTitle;
