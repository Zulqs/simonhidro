// Import modul dari Next.js dan React
import Image from "next/image";
import React from "react";
import Container from "./container";

// Deklarasi komponen Benefits sebagai functional component
const Benefits = (props) => {
  // Mendapatkan data dari props
  const { data } = props;

  // Mengembalikan atau menampilkan tampilan komponen Benefits
  return (
    <>
      {/* Container untuk mengatur tata letak */}
      <Container className="flex flex-wrap mb-20 lg:gap-10 lg:flex-nowrap ">
        
        {/* Bagian kiri dari container */}
        <div
          className={`flex items-center justify-center w-full lg:w-1/2 ${
            props.imgPos === "right" ? "lg:order-1" : ""
          }`}>
          <div>
            {/* Menampilkan gambar dengan komponen Image */}
            <Image
              src={data.image}
              width="521"
              height="auto"
              alt="Benefits"
              className={"object-cover"}
              placeholder="blur"
              blurDataURL={data.image.src}
            />
          </div>
        </div>

        {/* Bagian kanan dari container */}
        <div
          className={`flex flex-wrap items-center w-full lg:w-1/2 ${
            data.imgPos === "right" ? "lg:justify-end" : ""
          }`}>
          <div>
            {/* Bagian deskripsi dan judul */}
            <div className="flex flex-col w-full mt-4">
              <h3 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
                {data.title}
              </h3>

              <p className="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
                {data.desc}
              </p>
            </div>

            {/* Bagian daftar manfaat (bullets) */}
            <div className="w-full mt-5">
              {data.bullets.map((item, index) => (
                <Benefit key={index} title={item.title} icon={item.icon}>
                  {item.desc}
                </Benefit>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

// Komponen terpisah untuk menampilkan (benefit) dengan ikon
function Benefit(props) {
  return (
    <>
      <div className="flex items-start mt-8 space-x-3">
        <div className="flex items-center justify-center flex-shrink-0 mt-1 bg-indigo-500 rounded-md w-11 h-11 ">
          {/* Menampilkan ikon dengan menggunakan prop yang sudah diberikan */}
          {React.cloneElement(props.icon, {
            className: "w-7 h-7 text-indigo-50",
          })}
        </div>
        <div>
          {/* Menampilkan judul dan deskripsi benefit */}
          <h4 className="text-xl font-medium text-gray-800 dark:text-gray-200">
            {props.title}
          </h4>
          <p className="mt-1 text-gray-500 dark:text-gray-400">
            {props.children}
          </p>
        </div>
      </div>
    </>
  );
}

// Ekspor komponen Benefits sebagai default
export default Benefits;
