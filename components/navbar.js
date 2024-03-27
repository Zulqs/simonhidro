import Link from "next/link";
import ThemeChanger from "./DarkSwitch";
import Image from "next/image"
import { Disclosure } from "@headlessui/react";
import { signOut, useSession } from "next-auth/react"
import styles from "./layout.module.css";

// Komponen Navbar: Menampilkan navigasi halaman sesuai peran pengguna
const Navbar = () => {
  const navigation = [
    "Panduan",
  ];

  // Mengambil data sesi pengguna
  const { data: session } = useSession()
  const user = session?.user;

  const handleDivClick = () => {
    <ThemeChanger/>};

  // Jika pengguna bukan admin, tampilkan menu standar
  if (user?.role !== "admin") {
    return (
      <div className="w-full">
        <nav className="container relative flex flex-wrap items-center justify-between p-8 mx-auto lg:justify-between xl:px-0">
          
          {/* Logo dan tombol menu tersembunyi pada perangkat mobile */}
          <Disclosure>
            {({ open }) => (
              <>
                <div className="flex flex-wrap items-center justify-between w-full lg:w-auto">
                  <Link href="/">
                    <span className="flex items-center space-x-2 text-2xl font-medium text-green-700 dark:text-gray-100">
                      <span>
                        <Image
                          src="/img/logo.png"
                          alt="s"
                          width="32"
                          height="32"
                          className="w-8"
                          items-center
                        />
                      </span>
                      <span>SIMONHIDRO</span>
                    </span>
                  </Link>

                  {/* Tombol toggle menu untuk perangkat mobile */}
                  <Disclosure.Button
                    aria-label="Toggle Menu"
                    className="px-2 py-1 ml-auto text-gray-500 rounded-md lg:hidden hover:text-green-500 focus:text-green-500 focus:bg-green-100 focus:outline-none dark:text-gray-300 dark:focus:bg-trueGray-700">
                    <svg
                      className="w-6 h-6 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24">
                      {open && (
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                        />
                      )}
                      {!open && (
                        <path
                          fillRule="evenodd"
                          d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                        />
                      )}
                    </svg>
                  </Disclosure.Button>
                  
                  {/* Menu navigasi pada perangkat mobile */}
                  <Disclosure.Panel className="flex flex-wrap w-full my-5 lg:hidden">
                    <>
                      {/* Tautan panduan */}
                      {navigation.map((item, index) => (
                        <Link key={index} href="/panduan" className="w-full px-4 py-2 -ml-4 text-gray-500 rounded-md dark:text-gray-300 hover:text-green-500 focus:text-green-500 focus:bg-green-100 dark:focus:bg-gray-800 focus:outline-none">
                            {item}
                        </Link>
                      ))}
                      {/* Tautan untuk masuk ke halaman monitoring */}
                      <Link href="/auth/signin" className="w-full px-6 py-2 mt-3 text-center text-white bg-green-600 rounded-md lg:ml-5">         
                          Monitoring
                      </Link>
                      <div className="flex justify-center px-6 py-3 my-3 text-white dark:bg-white bg-gray-200 rounded-md md:ml-5 w-full text-center"
                        onClick={handleDivClick}>
                        <ThemeChanger />
                      </div>
                    </>
                  </Disclosure.Panel>
                </div>
              </>
            )}
          </Disclosure>

          {/* Menu navigasi pada perangkat desktop */}
          <div className="hidden text-center lg:flex lg:items-center">
            <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
              {navigation.map((menu, index) => (
                <li className="mr-3 nav__item" key={index}>
                  <Link href="/panduan" className="inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-green-800 focus:text-green-800 focus:bg-green-100 focus:outline-none dark:focus:bg-gray-800">
                      {menu}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Tombol monitoring dan pengaturan tema pada perangkat desktop */}
          <div className="hidden mr-3 space-x-4 lg:flex nav__item">
            <Link href="/auth/signin" className="px-6 py-2 text-white bg-green-600 rounded-md md:ml-5">
                Monitoring
            </Link>
            <ThemeChanger />
          </div>
        </nav>
      </div>
    );
  } 
  // Jika pengguna adalah admin, tampilkan menu khusus admin
  else {
    return (
      <div className="w-full">
        <nav className="container relative flex flex-wrap items-center justify-between p-8 mx-auto lg:justify-between xl:px-0">
          
          {/* Logo dan tombol menu tersembunyi pada perangkat mobile */}
          <Disclosure>
            {({ open }) => (
              <>
                <div className="flex flex-wrap items-center justify-between w-full lg:w-auto">
                  <Link href="/">
                    <span className="flex items-center space-x-2 text-2xl font-medium text-green-700 dark:text-gray-100">
                      <span>
                        <Image
                          src="/img/logo.png"
                          alt="s"
                          width="32"
                          height="32"
                          className="w-8"
                          items-center
                        />
                      </span>
                      <span>SIMONHIDRO</span>
                    </span>
                  </Link>

                  {/* Tombol toggle menu untuk perangkat mobile */}
                  <Disclosure.Button
                    aria-label="Toggle Menu"
                    className="px-2 py-1 ml-auto text-gray-500 rounded-md lg:hidden hover:text-green-500 focus:text-green-500 focus:bg-green-100 focus:outline-none dark:text-gray-300 dark:focus:bg-trueGray-700">
                    <svg
                      className="w-6 h-6 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24">
                      {open && (
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                        />
                      )}
                      {!open && (
                        <path
                          fillRule="evenodd"
                          d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                        />
                      )}
                    </svg>
                  </Disclosure.Button>
                  
                  {/* Menu navigasi pada perangkat mobile */}
                  <Disclosure.Panel className="flex flex-wrap w-full my-5 lg:hidden">
                    <>
                      {/* Tautan panduan */}
                      {navigation.map((item, index) => (
                        <Link key={index} href="/panduan" className="w-full px-4 py-2 -ml-4 text-gray-500 rounded-md dark:text-gray-300 hover:text-green-500 focus:text-green-500 focus:bg-green-100 dark:focus:bg-gray-800 focus:outline-none">
                            {item}
                        </Link>
                      ))}
                      {/* Menampilkan nama pengguna dan tautan ke halaman monitoring */}
                      <p className="inline-block py-2 text-2xl font-bold text-gray-700 no-underline rounded-md dark:text-gray-200 hover:text-green-800 focus:text-green-800 focus:bg-green-100 focus:outline-none dark:focus:bg-gray-800">
                        <font className="text-xl">Halo,</font> {session.user.name}!
                      </p>
                      <Link href="/monitoring" className="px-6 py-3 my-3 text-white bg-green-600 rounded-md md:ml-5 w-full text-center" >
                        Monitoring Dashboard
                      </Link>
                      {/* Tombol keluar */}
                      <button type="button" onClick={() => signOut()} className="px-6 py-2 text-white bg-red-700 rounded-md md:ml-5 w-full">
                        Keluar
                      </button>
                      <div className="flex justify-center px-6 py-3 my-3 text-white dark:bg-white bg-gray-200 rounded-md md:ml-5 w-full text-center"
                      onClick={handleDivClick}>
                        <ThemeChanger />
                      </div>
                    </>
                  </Disclosure.Panel>
                </div>
              </>
            )}
          </Disclosure>

          {/* Menu navigasi pada perangkat desktop */}
          <div className="hidden text-center lg:flex lg:items-center">
            <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
              {navigation.map((menu, index) => (
                <li className="mr-3 nav__item" key={index}>
                  <Link href="/panduan" className="inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-green-800 focus:text-green-800 focus:bg-green-100 focus:outline-none dark:focus:bg-gray-800">
                      {menu}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Menampilkan nama pengguna dan tautan ke halaman monitoring pada perangkat desktop */}
          <div className="hidden mr-3 space-x-4 lg:flex nav__item">
            <p className="inline-block py-2 font-bold text-3xl text-gray-700 no-underline rounded-md dark:text-gray-200 hover:text-green-800 focus:text-green-800 focus:bg-green-100 focus:outline-none dark:focus:bg-gray-800">
              <font className="text-xl font-normal">Halo,</font> {session.user.name}!
            </p>
            <Link href="/monitoring" className="px-5 py-4 text-white bg-green-600 rounded-md md:ml-5 text-center" >
              Monitoring Dashboard
            </Link>
            {/* Tombol keluar */}
            <button type="button" onClick={() => signOut()} className="px-6 py-4 text-white bg-red-700 rounded-md md:ml-5">
              Keluar
            </button>

            {/* Tombol pengaturan tema */}
            <ThemeChanger />
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
