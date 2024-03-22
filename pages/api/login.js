// Import modul Users dari file data/users.js
import { Users } from "../../data/users";

// Handler untuk endpoint login
export default function handler(req, res) {
    try {
        // Memeriksa jenis metode HTTP, hanya mendukung POST
        if (req.method !== 'POST') {
            res.status(405).send({ message: 'Only POST requests allowed' });
            return;
        }

        // Mendapatkan data dari body permintaan
        const body = JSON.parse(JSON.stringify(req.body));

        // Mencari pengguna berdasarkan email dan password yang sesuai
        const user = Users.find((user) => user.email === body.email && user.password === parseInt(body.password));

        // Jika pengguna tidak ditemukan, kirim respons dengan status 404
        if (!user) {
            res.status(404).send({ message: 'User does not exist!' });
            return;
        }

        // Jika pengguna ditemukan, kirim respons dengan status 200 dan data pengguna
        res.status(200).json(user);
    } catch (error) {
        // Menangani kesalahan dan mengirim respons dengan status 405 dan pesan kesalahan
        res.status(405).send({ message: `${error.message}` });
        return;
    }
};
