// Import modul dan komponen yang diperlukan dari Next.js dan komponen internal
import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";

import { benefitOne, benefitTwo } from "../components/data"; // Import data manfaat dari komponen data
import Video from "../components/video";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
import Cta from "../components/cta";
import Faq from "../components/faq";
import PopupWidget from "../components/popupWidget";

// Komponen Home sebagai functional component
const Home = () => {
  return (
    <>
      {/* Konfigurasi head tag, termasuk title, description, dan icon */}
      <Head>
        <title>SIMONHIDRO</title>
        <meta
          name="description"
          content="SIMONHIDRO"
        />
        <link rel="icon" href="/img/logo.png" />
      </Head>

      {/* Komponen Navbar */}
      <Navbar />
      
      {/* Komponen Hero */}
      <Hero />
      
      {/* Komponen SectionTitle untuk deskripsi singkat tentang Hidroponik */}
      <SectionTitle
        pretitle="SIMONHIDRO"
        title=" Jadi apa itu Hidroponik?">
        Hidroponik atau istilah asingnya hydroponics adalah istilah yang digunakan untuk 
        menjelaskan berbagai cara menanam tanaman tanpa menggunakan tanah sebagai tempat bercocok tanam. 
        Hidroponik lahir dari gabungan kata latin yaitu hydro, yang berarti air, dan 
        kata ponos yang artinya kerja.
      </SectionTitle>
      
      {/* Komponen Benefits untuk menampilkan manfaat Hidroponik */}
      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />
      
      {/* Komponen SectionTitle untuk bagian Cuplikan Singkat */}
      <SectionTitle
        pretitle="Cuplikan Singkat"
        title="Bagaimana Menanam Hidroponik?">
        *Video tentang hidroponik
      </SectionTitle>
      
      {/* Komponen Video untuk menampilkan video tutorial hidroponik */}
      <Video />
      
      {/* Komponen SectionTitle untuk testimonial */}
      <SectionTitle
        pretitle="testimonial"
        title="Ini yang mereka katakan">
        Kami telah menjadi pelanggan setia produk pertanian karena kualitas yang luar biasa.
      </SectionTitle>
      
      {/* Komponen Testimonials untuk menampilkan testimoni pelanggan */}
      <Testimonials />
      
      {/* Komponen SectionTitle untuk FAQ */}
      <SectionTitle pretitle="FAQ" title="PERTANYAAN">
        Pertanyaan yang umum ditanyakan.
      </SectionTitle>
      
      {/* Komponen Faq untuk menampilkan pertanyaan-pertanyaan umum */}
      <Faq />
      
      {/* Komponen Cta untuk call-to-action */}
      <Cta />
      
      {/* Komponen Footer */}
      <Footer />
      
      {/* Komponen PopupWidget */}
      <PopupWidget />
    </>
  );
}

// Eksport komponen Home sebagai default
export default Home;
