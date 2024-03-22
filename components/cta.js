import React from "react";
import Container from "./container";

// Komponen Cta sebagai functional component
const Cta = () => {
  return (
    // Menggunakan komponen Container untuk menyusun elemen-elemen CTA dalam suatu container
    <Container>
      <div className="flex flex-wrap items-center justify-between w-full max-w-4xl gap-5 mx-auto text-white bg-green-600 px-7 py-7 lg:px-12 lg:py-12 lg:flex-nowrap rounded-xl">
        <div className="flex-grow text-center lg:text-left">
          {/* Judul CTA */}
          <h2 className="text-2xl font-medium lg:text-3xl">
            Siap untuk memulai pertanian masa depan?
          </h2>
          {/* Deskripsi CTA */}
          <p className="mt-2 font-medium text-white text-opacity-90 lg:text-xl">
            Aplikasi kami tersedia di Play Store.
          </p>
        </div>
        {/* Tombol Download Aplikasi */}
        <div className="flex-shrink-0 w-full text-center lg:w-auto">
          <a
            href="/"
            target="_blank"
            rel="noopener"
            className="inline-block py-3 mx-auto text-lg font-medium text-center text-green-600 bg-white rounded-md px-7 lg:px-10 lg:py-5">
            Download Aplikasi
          </a>
        </div>
      </div>
    </Container>
  );
}

// Ekspor komponen Cta
export default Cta;
