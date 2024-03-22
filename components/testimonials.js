// Import library Next.js untuk menangani gambar dan library React
import Image from "next/image";
import React from "react";

// Import komponen Container dari file "./container"
import Container from "./container";

// Import gambar avatar untuk testimonial
import userOneImg from "../public/img/user1.jpg";
import userTwoImg from "../public/img/user2.jpg";
import userThreeImg from "../public/img/user3.jpg";

// Definisikan komponen Testimonials
const Testimonials = () => {
  return (
    // Gunakan komponen Container untuk mengatur layout
    <Container>
      {/* Grid dengan jumlah kolom berbeda untuk tampilan layar yang berbeda */}
      <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
        {/* Testimonial Pertama */}
        <div className="lg:col-span-2 xl:col-auto">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal ">
              Sayuran dari pertanian ini sungguh <Mark>luar biasa!</Mark>.
              Setiap kali saya membeli produk dari mereka, saya selalu terkesan dengan kebersihan dan kualitasnya.
            </p>

            {/* Gunakan komponen Avatar untuk menampilkan avatar dan informasi pengguna */}
            <Avatar
              image={userOneImg}
              name="Chef Juna"
              title="Juri Master Chef"
            />
          </div>
        </div>

        {/* Testimonial Kedua */}
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal ">
              Tidak hanya soal <Mark>rasa</Mark>,
              tetapi penampilannya yang begitu cantik dan menggoda selera. Dengan warna-warna yang begitu mencolok.
            </p>

            {/* Gunakan komponen Avatar untuk menampilkan avatar dan informasi pengguna */}
            <Avatar
              image={userTwoImg}
              name="Deddy Corbuzier"
              title="Bapak Podcast Indonesia"
            />
          </div>
        </div>

        {/* Testimonial Ketiga */}
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal ">
              Sayuran ini menjadi salah satu <Mark>menu favorit</Mark> saya yang sangat sehat
            </p>

            {/* Gunakan komponen Avatar untuk menampilkan avatar dan informasi pengguna */}
            <Avatar
              image={userThreeImg}
              name="Sugeng"
              title="Orang Desa"
            />
          </div>
        </div>
      </div>
    </Container>
  );
}

// Definisikan komponen Avatar
function Avatar(props) {
  return (
    <div className="flex items-center mt-8 space-x-3">
      {/* Tampilkan avatar dalam lingkaran menggunakan Image dari Next.js */}
      <div className="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
        <Image
          src={props.image}
          width="40"
          height="40"
          alt="Avatar"
          placeholder="blur"
        />
      </div>
      <div>
        {/* Tampilkan nama dan judul pengguna */}
        <div className="text-lg font-medium">{props.name}</div>
        <div className="text-gray-600 dark:text-gray-400">{props.title}</div>
      </div>
    </div>
  );
}

// Definisikan komponen Mark untuk menyoroti teks dengan warna tertentu
function Mark(props) {
  return (
    <>
      {" "}
      <mark className="text-green-800 bg-green-100 rounded-md ring-green-100 ring-4 dark:ring-green-900 dark:bg-green-900 dark:text-green-200">
        {props.children}
      </mark>{" "}
    </>
  );
}

// Ekspor komponen Testimonials agar dapat digunakan di tempat lain
export default Testimonials;
