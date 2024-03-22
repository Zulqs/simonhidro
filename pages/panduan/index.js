// Import modul yang diperlukan dari Next.js
import Head from "next/head";
import Navbar from "../../components/navbar";
import SectionTitle from "../../components/sectionTitle";
import Footer from "../../components/footer";
import PopupWidget from "../../components/popupWidget";

// Komponen Panduan sebagai functional component
const Panduan = () => {
  return (
    <>
      {/* Konfigurasi head tag, termasuk title, description, dan icon */}
      <Head>
        <title>PANDUAN</title>
        <meta
          name="description"
          content="SIMONHIDRO"
        />
        <link rel="icon" href="/img/logo.png" />
      </Head>

      {/* Komponen Navbar */}
      <Navbar />
      
      {/* Komponen SectionTitle untuk bagian Panduan Hidroponik */}
      <SectionTitle
        pretitle="PANDUAN"
        title=" Jadi apa itu Hidroponik?"
      >
        <p className="text-left">
          Hidroponik atau istilah asingnya hydroponics adalah istilah yang digunakan untuk menjelaskan berbagai 
          cara <Mark>menanam tanaman tanpa menggunakan tanah</Mark> sebagai tempat bercocok tanam. 
          Hidroponik lahir dari gabungan kata Latin hydro, yang berarti air, dan kata ponos yang artinya kerja. 
          Hidroponik adalah sistem produksi pangan yang bertujuan menyokong pembangunan berkelanjutan dalam menghadapi keterbatasan lahan. 
          Bercocok tanam dengan sistem hidroponik tidak membutuhkan lahan yang luas dalam praktiknya. 
        </p>
        <br/><br/>
        <p className="text-left">
          Pengaruh teknologi dalam bidang pertanian sangat besar dan dapat membantu meningkatkan efisiensi, produktivitas, dan kualitas hasil pertanian.
          Salah satu teknologi yang patut disebarluaskan adalah teknologi hidroponik. Pengembangan teknologi dalam budidaya dengan sistem
          hidroponik menjadi salah satu alternatif yang dapat diterapkan untuk meningkatkan
          produktivitas cocok tanam dan sebagai upaya konservasi lahan di Indonesia. 
        </p>
      </SectionTitle>
      
      {/* Komponen SectionTitle untuk bagian Penanaman Selada Hidroponik */}
      <SectionTitle
        pretitle="PENANAMAN"
        title="Cara penanaman selada Hidroponik">
        Berikut langkah yang dapat dilakukan
        <SectionTitle title2="1. Persiapan"/>
        {/* List langkah-langkah persiapan */}
        <ul className="list-disc text-left">
          <li>Pilih varietas selada yang cocok untuk hidroponik, seperti selada daun hijau.</li>
          <li>Siapkan media tanam.</li>
          <li>Persiapan larutan nutrisi yang sesuai untuk selada hidroponik.</li>
        </ul>

        <SectionTitle title2="2. Penyemaian"/>
        {/* List langkah-langkah penyemaian */}
        <ul className="list-disc text-left">
          <li>Siapkan biji selada yang berkualitas.</li>
          <li>Sebarkan biji selada di atas media tanam yang telah disiapkan.</li>
          <li>Tutup biji dengan lapisan tipis media tanam.</li>
          <li>Pastikan media tetap lembab dengan menyiraminya secara perlahan.</li>
        </ul>

        <SectionTitle title2="3. Penanaman"/>
        {/* List langkah-langkah penanaman */}
        <ul className="list-disc text-left">
          <li>Setelah bibit tumbuh dengan baik, pindahkan bibit selada ke sistem hidroponik yang telah disiapkan.</li>
          <li>Pastikan akar bibit terendam dalam larutan nutrisi.</li>
          <li>Jaga agar suhu dan kelembaban lingkungan tetap optimal untuk pertumbuhan selada.</li>
        </ul>

        <SectionTitle title2="4. Perawatan"/>
        {/* List langkah-langkah perawatan */}
        <ul className="list-disc text-left">
          <li>Monitor dan atur pH dan kekuatan larutan nutrisi secara teratur.</li>
          <li>Pastikan selada mendapatkan cahaya cukup, baik dari sinar matahari langsung atau lampu tumbuh.</li>
          <li>Jaga kebersihan sistem hidroponik dengan membersihkan alat dan mengganti larutan nutrisi secara berkala.</li>
          <li>Perhatikan pertumbuhan tanaman dan lakukan pemangkasan jika diperlukan.</li>
        </ul>

        <SectionTitle title2="5. Panen"/>
        {/* List langkah-langkah panen */}
        <ul className="list-disc text-left">
          <li>Selada biasanya dapat dipanen sekitar 35-45 hari setelah penanaman, tergantung pada varietasnya.</li>
          <li>Potong daun selada yang matang dengan pisau tajam atau gunting.</li>
          <li>Biarkan tanaman tetap hidup dan terus tumbuh untuk panen berikutnya.</li>
        </ul>
      </SectionTitle>
      
      {/* Komponen Footer */}
      <Footer />
      
      {/* Komponen PopupWidget */}
      <PopupWidget />
    </>
  );
}

// Komponen Mark untuk menandai teks dengan warna dan efek tertentu
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

// Eksport komponen Panduan sebagai default
export default Panduan;
