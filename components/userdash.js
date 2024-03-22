import React from "react";
import Container from "./container";
import { signOut, useSession } from "next-auth/react"
import ThemeChanger from "./DarkSwitch";

// Komponen Cta sebagai functional component
const Userdash = () => {
  const { data: session } = useSession()
  const user = session?.user

  if (user?.role !== "admin") {
  return (
    // Menggunakan komponen Container untuk menyusun elemen-elemen CTA dalam suatu container
    <Container className="-mb-16 -mt-7">
      <div className="grid grid-cols-1 items-center justify-between w-full mx-auto text-white bg-green-600 px-7 py-3 lg:px-12 lg:py-3 lg:flex-nowrap rounded-md">
        {/* Tombol Download Aplikasi */}
        <div className="flex-shrink-0 w-full text-center lg:w-auto">
          <a
            href="/auth/signinmobile"
            rel="noopener"
            className="inline-block py-3 mx-auto text-lg font-bold text-center text-green-600 bg-white rounded-md px-20 lg:px-10 lg:py-5">
            Masuk
          </a>
        </div>
      </div>
    </Container>
  );}
  else {
    return (
      <Container className="-mb-16 -mt-7">
      <div className="grid grid-cols-2 items-center justify-between w-full max-w-4xl gap-5 mx-auto text-white bg-green-600 px-7 py-4 lg:px-12 lg:py-12 lg:flex-nowrap rounded-md">
        <div className="text-left lg:text-left">
          {/* Judul CTA */}
          <p className="text-2xl font-medium lg:text-3xl">
            <font className="text-xl font-normal">Halo,</font> {session.user.name}!
          </p>
        </div>
        <button type="button" onClick={() => signOut()} className="px-6 py-3 bg-red-700 rounded-md md:ml-5 text-white font-bold border-2 border-white">
              Keluar
        </button>
      </div>
    </Container>
    );
  }
}

// Ekspor komponen Cta
export default Userdash;
