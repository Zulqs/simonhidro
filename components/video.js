// Import library React dan useState hook dari React
import { useState } from "react";

// Import komponen Container dari file "./container"
import Container from "./container";

// Definisikan komponen Video
const Video = () => {
  // State untuk mengontrol apakah video sedang diputar atau tidak
  const [playVideo, setPlayVideo] = useState(false);

  return (
    // Gunakan komponen Container untuk mengatur layout
    <Container>
      {/* Container untuk video dengan lebar maksimal 4xl */}
      <div className="w-full max-w-4xl mx-auto overflow-hidden lg:mb-20 rounded-2xl">
        {/* Container untuk video, dengan memanfaatkan gradient warna */}
        <div
          // Saat diklik, toggle nilai playVideo antara true dan false
          onClick={() => setPlayVideo(!playVideo)}
          className="relative bg-green-300 cursor-pointer aspect-w-16 aspect-h-9 bg-gradient-to-tr from-green-400 to-green-700">

          {/* Tampilkan tombol play jika video belum diputar */}
          {!playVideo && (
            <button className="absolute inset-auto w-16 h-16 text-white transform -translate-x-1/2 -translate-y-1/2 lg:w-28 lg:h-28 top-1/2 left-1/2">
              {/* Icon play menggunakan SVG */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-16 h-16 lg:w-28 lg:h-28"
                viewBox="0 0 20 20"
                fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">Play Video</span>
            </button>
          )}

          {/* Jika video sedang diputar, tampilkan iframe YouTube */}
          {playVideo && (
            <iframe
              src="https://www.youtube-nocookie.com/embed/3zV0HvGvH80?controls=0&autoplay=1"
              title="YouTube video player"
              frameBorder="0"
              // Memperbolehkan beberapa fitur pada iframe
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen>
            </iframe>
          )}
        </div>
      </div>
    </Container>
  );
}

// Ekspor komponen Video agar dapat digunakan di tempat lain
export default Video;
