// Import modul yang diperlukan dari Next.js dan komponen-komponen lokal
import Head from "next/head";
import Link from "next/link";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";
import Footer from "../components/footer";
import PopupWidget from "../components/popupWidget";
import Montab from "../components/monitoringtable";
import { signOut, useSession } from "next-auth/react"
import Suhuchart from "../components/suhuchart";
import Phchart from "../components/phchart";
import Container from "../components/container";

// Komponen Monitoring sebagai functional component
const Monitoring = () => {
  // Mendapatkan session menggunakan useSession dari NextAuth
  const { data: session } = useSession()
  const user = session?.user;

  // Jika pengguna bukan admin, tampilkan pesan akses tidak dikenal
  if (user?.role !== "admin") {
    return (
        <>
        {/* Tampilkan navbar */}
        <Navbar/>
        {/* Tampilkan pesan akses tidak dikenal dan tautan untuk login */}
        <SectionTitle title="Akses tidak dikenal!">
          <Link href={"/auth/signin"} className="underline inline-block px-4 py-2 text-lg font-normal text-green-800 rounded-md dark:text-gray-200 hover:text-green-800 focus:text-green-800 focus:bg-green-100 focus:outline-none dark:focus:bg-gray-800">
            Silahkan masuk terlebih dahulu
          </Link>
        </SectionTitle>
        </>
    )
  }

  /* Jika pengguna adalah admin, tampilkan halaman monitoring */
  return (
    <>
      {/* Konfigurasi head tag, termasuk title, description, dan icon */}
      <Head>
        <title>Monitoring</title>
        <meta
          name="description"
          content="SIMONHIDRO"
        />
        <link rel="icon" href="/img/logo.png" />
      </Head>

      {/* Tampilkan navbar */}
      <Navbar />

      {/* Tampilkan footer dan popup widget */}
      <Container>
        <p className="font-semibold my-3 text-2xl">Monitoring Suhu</p>
        <div className="h-[300px] bg-gray-100 rounded-xl pt-14 pr-7 pb-3"><Suhuchart/></div>
        <p className="font-semibold my-3 text-2xl mt-7">Monitoring pH</p>
        <div className="h-[300px] bg-gray-100 rounded-xl pt-14 pr-7 pb-3"><Phchart/></div>
      
      
      </Container>
      <Container>
        <AddForm />
      </Container>
      <Montab/>
      <Footer />
      <PopupWidget />
    </>
  );
}

// Ekspor komponen Monitoring sebagai default
export default Monitoring;
