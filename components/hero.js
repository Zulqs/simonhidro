import Image from "next/image";
import Container from "./container";
import heroImg from "../public/img/hero.png";
import Typewriter from 'typewriter-effect';

// Komponen Hero: Bagian utama halaman dengan gambar dan teks deskripsi
const Hero = () => {
  return (
    <>
      {/* Container untuk mengatur tata letak */}
      <Container className="flex flex-wrap ">
        
        {/* Bagian kiri: Teks deskripsi dan tombol */}
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            
            {/* Judul dengan efek typewriter */}
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
              <Typewriter
                options={{
                  strings: ['SIMONHIDRO'],  // Teks yang akan ditampilkan
                  delay: 300,                // Waktu jeda antar karakter
                  autoStart: true,           // Mulai secara otomatis
                  pauseFor: 2000,            // Waktu jeda setelah selesai mengetik
                  loop: true,               // Ulangi terus-menerus
                }}
              />
            </h1>
            
            {/* Paragraf deskripsi aplikasi */}
            <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
              Sistem Monitoring Pertanian Hidroponik berbasis website
              menggunakan metode waterfall (studi kasus PT. Horti Jaya Lestari Dokan)
            </p>
            
            {/* Tombol dan tautan */}
            <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
              {/* Tombol Download Aplikasi */}
              <a
                href="/"
                target="_blank"
                rel="noopener"
                className="px-8 py-4 text-lg font-medium text-center text-white bg-green-600 rounded-md ">
                Download Aplikasi
              </a>
              
              {/* Tautan Baca Lebih Lanjut */}
              <a
                href="/panduan"
                className="flex items-center space-x-2 text-gray-500 dark:text-gray-400">
                <span> Baca lebih lanjut</span>
              </a>
            </div>
          </div>
        </div>
        
        {/* Bagian kanan: Gambar ilustrasi */}
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="">
            {/* Komponen gambar dari Next.js */}
            <Image
              src={heroImg}                   // Sumber gambar
              width="616"                     // Lebar gambar
              height="617"                    // Tinggi gambar
              className={"object-cover"}     // Gaya pemosisian gambar
              alt="Hero Illustration"        // Teks alternatif gambar
              loading="eager"                // Menggunakan teknik eager loading
              placeholder="blur"             // Efek blur pada loading gambar
            />
          </div>
        </div>
      </Container>
    </>
  );
}

export default Hero;
