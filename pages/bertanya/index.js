// Import modul yang diperlukan dari Next.js
import Head from "next/head";
import SectionTitle from "../../components/sectionTitle";
import Container from "../../components/container";
import Botnav from "../../components/botnav";
import BackButton from "../../components/backbutton";

// Komponen Panduan sebagai functional component
const Bertanya = () => {
  return (
    <>
      {/* Konfigurasi head tag, termasuk title, description, dan icon */}
      <Head>
        <title>Bertanya</title>
        <meta
          name="description"
          content="SIMONHIDRO"
        />
        <link rel="icon" href="/img/logo.png" />
      </Head>
      <Container>
        <BackButton/>
      </Container>
      <div>
        <iframe className="w-full h-[500px] fixed bottom-5" src='https://webchat.botframework.com/embed/AquaSync-bot?s=DTQa4vThRvI.gLmCaYsBhoKWBxkOkOohk1GekZ0Im89sq39wVJtasw4'></iframe>
      </div>
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
export default Bertanya;
