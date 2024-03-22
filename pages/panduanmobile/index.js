// Import modul yang diperlukan dari Next.js
import Head from "next/head";
import SectionTitle from "../../components/sectionTitle";
import Container from "../../components/container";
import Botnav from "../../components/botnav";
import BackButton from "../../components/backbutton";

// Komponen Panduan sebagai functional component
const Panduanmobile = () => {
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
      <Container>
        <BackButton/>
      </Container>
      <Container>
        <div className="border-4 border-green-800 rounded-xl">
          <div className="p-20 m-5 -mb-5 bg-[url('../public/img/foto/4.jpg')] bg-cover rounded-lg"></div>
          <div>
            <SectionTitle pretitle="PANDUAN" title="Jadi apa itu Hidroponik?">
            <p className="text-left">
              Hidroponik atau istilah asingnya hydroponics adalah istilah yang digunakan untuk menjelaskan berbagai 
              cara <Mark>menanam tanaman tanpa menggunakan tanah</Mark> sebagai tempat bercocok tanam. 
              Hidroponik lahir dari gabungan kata Latin hydro, yang berarti air, dan kata ponos yang artinya kerja. 
              Hidroponik adalah sistem produksi pangan yang bertujuan menyokong pembangunan berkelanjutan dalam menghadapi keterbatasan lahan. 
              Bercocok tanam dengan sistem hidroponik tidak membutuhkan lahan yang luas dalam praktiknya. 
            </p>
            </SectionTitle>
          </div>
        </div>
      </Container>
      
      <Container>
        <div className="border-4 border-green-800 rounded-xl">
          <div className="p-20 m-5 -mb-5 bg-[url('../public/img/foto/3(1).jpg')] bg-cover rounded-lg"></div>
          <div>
            <SectionTitle pretitle="PENANAMAN" title="Cara penanaman selada Hidroponik">
              <h1 className="font-bold text-gray-800 text-xl mt-2 mb-1">1. Persiapan</h1>
              <ul className="list-disc text-left mx-4">
                <li>Pilih varietas selada yang cocok untuk hidroponik, seperti selada daun hijau.</li>
                <li>Siapkan media tanam.</li>
                <li>Persiapan larutan nutrisi yang sesuai untuk selada hidroponik.</li>
              </ul>

              <h1 className="font-bold text-gray-800 text-xl mt-7 mb-1">2. Penyemaian</h1>
              <ul className="list-disc text-left mx-4">
                <li>Siapkan biji selada yang berkualitas.</li>
                <li>Sebarkan biji selada di atas media tanam yang telah disiapkan.</li>
                <li>Tutup biji dengan lapisan tipis media tanam.</li>
                <li>Pastikan media tetap lembab dengan menyiraminya secara perlahan.</li>
              </ul>

              <h1 className="font-bold text-gray-800 text-xl mt-7 mb-1">3. Penanaman</h1>
              <ul className="list-disc text-left mx-4">
                <li>Setelah bibit tumbuh dengan baik, pindahkan bibit selada ke sistem hidroponik yang telah disiapkan.</li>
                <li>Pastikan akar bibit terendam dalam larutan nutrisi.</li>
                <li>Jaga agar suhu dan kelembaban lingkungan tetap optimal untuk pertumbuhan selada.</li>
              </ul>

              <h1 className="font-bold text-gray-800 text-xl mt-7 mb-1">4. Perawatan</h1>
              <ul className="list-disc text-left mx-4">
                <li>Monitor dan atur pH dan kekuatan larutan nutrisi secara teratur.</li>
                <li>Pastikan selada mendapatkan cahaya cukup, baik dari sinar matahari langsung atau lampu tumbuh.</li>
                <li>Jaga kebersihan sistem hidroponik dengan membersihkan alat dan mengganti larutan nutrisi secara berkala.</li>
                <li>Perhatikan pertumbuhan tanaman dan lakukan pemangkasan jika diperlukan.</li>
              </ul>

              <h1 className="font-bold text-gray-800 text-xl mt-7 mb-1">5. Panen</h1>
              <ul className="list-disc text-left mx-4">
                <li>Selada biasanya dapat dipanen sekitar 35-45 hari setelah penanaman, tergantung pada varietasnya.</li>
                <li>Potong daun selada yang matang dengan pisau tajam atau gunting.</li>
                <li>Biarkan tanaman tetap hidup dan terus tumbuh untuk panen berikutnya.</li>
              </ul>
            </SectionTitle>
          </div>
        </div>
      </Container>
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
export default Panduanmobile;
