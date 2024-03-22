// Import modul yang diperlukan dari Next.js dan NextAuth
import { useRef } from "react";
import Head from "next/head";
import Link from "next/link";
import { getProviders, getSession, signIn, signOut, useSession } from "next-auth/react";

// Komponen Signin sebagai functional component
const Signin = ({ providers }) => {
    // Mendeklarasikan useRef untuk email dan password
    const email = useRef("");
    const password = useRef("");
    
    // Mendapatkan session menggunakan useSession dari NextAuth
    const { data: session } = useSession()
    const user = session?.user;

    // Jika pengguna bukan admin, tampilkan halaman login
    if (user?.role !== "admin") {
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
                {/* Tampilan form login */}
                <div className="flex items-center min-h-screen p-4 bg-gray-100 lg:justify-center">
                    <div className="flex flex-col overflow-hidden bg-white rounded-md shadow-lg max md:flex-row md:flex-1 lg:max-w-screen-md">
                        {/* Bagian sidebar */}
                        <div className="p-4 py-6 text-white bg-green-600 md:w-80 md:flex-shrink-0 md:flex md:flex-col md:items-center md:justify-evenly">
                            {/* Logo dan judul */}
                            <div className="my-3 text-4xl font-bold tracking-wider text-center">
                                <a href="#">SIMONHIDRO</a>
                            </div>
                            {/* Deskripsi */}
                            <p className="mt-6 font-normal text-center text-white-700 md:mt-0">
                                Masuk dengan akun SimonHidro Monitoring.
                            </p>
                        </div>
                        {/* Bagian form login */}
                        <div className="p-5 bg-white md:flex-1">
                            <h3 className="my-4 text-2xl font-semibold text-gray-500">Masuk Akun</h3>
                            <form action="#" className="flex flex-col space-y-5">
                                {/* Input email */}
                                <div className="flex flex-col space-y-1">
                                    <label htmlFor="email" className="text-sm font-semibold text-gray-500">Alamat Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        autoFocus
                                        className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-gray-200"
                                        onChange={(e) => (email.current = e.target.value)}
                                    />
                                </div>
                                {/* Input password */}
                                <div className="flex flex-col space-y-1">
                                    <div className="flex items-center justify-between">
                                        <label htmlFor="password" className="text-sm font-semibold text-gray-500">Password</label>
                                    </div>
                                    <input
                                        type="password"
                                        id="password"
                                        className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                                        onChange={(e) => (password.current = e.target.value)}
                                    />
                                </div>
                                {/* Tombol untuk melakukan login */}
                                <div>
                                    <button
                                        type="button"
                                        className="w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-green-500 rounded-md shadow hover:bg-green-700 focus:outline-none focus:ring-blue-200 focus:ring-4"
                                        onClick={() => signIn("credentials", {
                                            email: email.current, password: password.current,
                                        })}
                                    >
                                        Log in
                                    </button>
                                </div>
                                {/* Tautan kembali dan tautan login dengan provider lainnya */}
                                <div className="flex flex-col space-y-5">
                                    <span className="flex items-center justify-center space-x-2">
                                        <span className="h-px bg-gray-400 w-14"></span>
                                        <Link href="/" className="font-bold text-gray-600">Kembali</Link>
                                        <span className="h-px bg-gray-400 w-14"></span>
                                    </span>
                                    <div className="flex flex-col space-y-4">
                                        {/* Tampilkan tautan login dengan provider lainnya */}
                                        {providers &&
                                            Object.values(providers).map(provider => {
                                                if (provider.name !== "Credentials") {
                                                    return (
                                                        <div key={provider.name} style={{ marginBottom: 0 }}>
                                                            <a
                                                                href="#"
                                                                className="flex items-center justify-center px-4 py-2 space-x-2 transition-colors duration-300 border border-gray-800 rounded-md group hover:bg-green-600 focus:outline-none"
                                                                onClick={() => signIn(provider.id)}
                                                            >
                                                                <span>
                                                                    <svg
                                                                        className="w-5 h-5 text-gray-800 fill-current group-hover:text-white"
                                                                        viewBox="0 0 16 16"
                                                                        version="1.1"
                                                                        aria-hidden="true"
                                                                    >
                                                                        <path
                                                                            d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.20-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
                                                                        ></path>
                                                                    </svg>
                                                                </span>
                                                                <span className="text-sm font-medium text-gray-800 group-hover:text-white">Sign in with{' '} {provider.name}</span>
                                                            </a>
                                                        </div>
                                                    )
                                                }
                                            })}
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </>
        );
    }

    // Jika pengguna adalah admin, tampilkan pesan bahwa pengguna sudah masuk
    return (
        <section className="grid h-screen place-items-center">
            <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Halo, {session?.user?.name}</h2><br />
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Saat ini kamu sudah masuk sebagai, {session?.user?.email}.</p>
                <Link href="/monitoring"
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                    Lanjut
                </Link>
            </div>
        </section>
    );
}

// Eksport komponen Signin sebagai default
export default Signin;

// Fungsi getServerSideProps untuk mengatur proses server-side rendering
export async function getServerSideProps(context) {
    const { req } = context;
    
    // Mendapatkan sesi pengguna
    const session = await getSession({ req });
    
    // Mendapatkan daftar provider autentikasi
    const providers = await getProviders()

    // Jika sesi pengguna sudah ada, redirect ke halaman monitoring
    if (session) {
        return {
            redirect: { destination: "/monitoring" },
        };
    }

    // Jika belum ada sesi pengguna, kembalikan daftar provider
    return {
        props: {
            providers,
        },
    }
}
