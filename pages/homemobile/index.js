// Import modul dan komponen yang diperlukan dari Next.js dan komponen internal
import Head from "next/head";
import Navbarmobile from "../../components/navbarmobile";
import Container from "../../components/container";
import Typewriter from 'typewriter-effect';
import Userdash from "../../components/userdash";
import Menu from "../../components/homebox";
import Botnav from "../../components/botnav";
import ThemeChanger from "../../components/DarkSwitch";

// Komponen Home sebagai functional component
const Home = () => {
  return (
    <>
      {/* Konfigurasi head tag, termasuk title, description, dan icon */}
      <Head>
        <title>SIMONHIDRO</title>
        <meta
          name="description"
          content="SIMONHIDRO" />
        <link rel="icon" href="/img/logo.png" />
      </Head>

      {/* Komponen Navbar */}
      <Container>
        <div className="bg-gray-100 shadow-md p-3 pl-4 w-14 rounded-2xl justify-center">
          <ThemeChanger/>
        </div>
        <div className="flex items-center w-full lg:w-1/2 mt-14">
            <div className="max-w-2xl -mb-4 -mt-9">
              
              {/* Judul dengan efek typewriter */}
              <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
                <Typewriter
                  options={{
                    strings: ['SIMONHIDRO'],  // Teks yang akan ditampilkan
                    delay: 300,                // Waktu jeda antar karakter
                    autoStart: true,           // Mulai secara otomatis
                    pauseFor: 5000,            // Waktu jeda setelah selesai mengetik
                    loop: true,               // Ulangi terus-menerus
                  }}
                />
              </h1>
            </div>
        </div>
      </Container>
      <Userdash />
      <Menu />
    </>
  );
}

// Eksport komponen Home sebagai default
export default Home;
