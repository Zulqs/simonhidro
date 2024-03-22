// Import modul NextAuth dan modul otentikasi Credentials
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

// Ekspor opsi otentikasi
export const authOptions = {
    // Menyimpan secret key untuk otentikasi (dapat diatur pada konfigurasi lingkungan)
    secret: process.env.NEXTAUTH_SECRET,

    // Menentukan jenis otentikasi yang digunakan (Credentials)
    providers: [
        CredentialsProvider({
            // Konfigurasi untuk otentikasi dengan credentials (email dan password)
            name: "Credentials",
            credentials: {
                email: {
                    label: "Email",
                    type: "text",
                    placeholder: "Enter email",
                },
                password: {
                    label: "Password",
                    type: "password",
                    placeholder: "Enter Password",
                },
            },

            // Fungsi untuk mengotorisasi pengguna berdasarkan credentials
            async authorize(credentials, req) {
                const { email, password } = credentials;

                // Melakukan fetch ke endpoint login API
                const res = await fetch("https://simonhidro.vercel.app/api/login", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        email,
                        password,
                    }),
                });

                // Mendapatkan respons JSON dari API
                const user = await res.json();

                // Jika respons OK dan pengguna ditemukan, return informasi pengguna
                if (res.ok && user) {
                    return user;
                } else {
                    // Jika tidak, return null
                    return null;
                }
            },
        }),
    ],

    // Callbacks untuk mengelola token JWT dan sesi pengguna
    callbacks: {
        async jwt({ token, user }) {
            // Menyertakan informasi pengguna ke dalam token JWT
            return { ...token, ...user };
        },
        async session({ session, token, user }) {
            // Menyertakan informasi pengguna ke dalam sesi
            session.user = token;
            return session;
        },
    },

    // Menentukan halaman yang digunakan untuk proses signIn
    pages: {
        signIn: '/auth/signin',
    },
};

// Mengekspor modul NextAuth dengan opsi otentikasi yang telah dikonfigurasi
export default NextAuth(authOptions);
