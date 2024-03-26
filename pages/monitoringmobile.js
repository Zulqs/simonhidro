import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import SectionTitle from "../components/sectionTitle";
import { useSession } from "next-auth/react"
import BackButton from "../components/backbutton";
import Container from "../components/container";
import Suhuchart from "../components/suhuchart";
import Phchart from "../components/phchart";
import Montab from "../components/monitoringtable";
import AddForm from "../components/AddDataForm";

const Monitoringmobile = () => {
  const { data: session } = useSession()
  const user = session?.user;

  const [isAddFormVisible, setIsAddFormVisible] = useState(false);
  const [addFormButtonText, setAddFormButtonText] = useState("Tambah");

  const toggleAddForm = () => {
    setIsAddFormVisible(!isAddFormVisible);
    setAddFormButtonText(isAddFormVisible ? "Tambah" : "Tutup");
  };

  if (user?.role !== "admin") {
    return (
        <>
        <Container className="-mb-10">
          <BackButton/>
        </Container>
        <Container>
        <SectionTitle title="Akses tidak dikenal!">
          <Link href={"/auth/signinmobile"} className="underline inline-block px-4 py-2 text-lg font-normal text-green-800 rounded-md dark:text-gray-200 hover:text-green-800 focus:text-green-800 focus:bg-green-100 focus:outline-none dark:focus:bg-gray-800">
            Silahkan masuk terlebih dahulu
          </Link>
        </SectionTitle>
        </Container>
        </>
    )
  }

  return (
    <>
      <Head>
        <title>Monitoring</title>
        <meta
          name="description"
          content="SIMONHIDRO"
        />
        <link rel="icon" href="/img/logo.png" />
      </Head>
      <Container className="-mb-8"><BackButton/></Container>
      <Container>
        <div className="flex items-center justify-center">
          <button
            onClick={toggleAddForm}
            className={`my-6 focus:ring-4 focus:outline-non font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ${
              isAddFormVisible ? "bg-red-700 hover:bg-red-800 focus:ring-red-300" : "bg-green-600 hover:bg-green-700 focus:ring-green-300"
            } text-white`}
          >
            {addFormButtonText}
          </button>
        </div>

        {/* Popup modal form */}
        {isAddFormVisible && <AddForm onClose={toggleAddForm} />}
      </Container>
	  <Montab/>
    </>
  );
}

export default Monitoringmobile;
