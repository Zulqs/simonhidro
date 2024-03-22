import { sql } from '@vercel/postgres';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Metode ditolak!' });
  }

  const {
    suhu,
    pH,
    ec,
    berat,
    tinggi,
    daun,
    warnadaun,
    tanggal,
  } = req.body;

  try {
    // Insert data into the "monitoring" table
    await sql`
      INSERT INTO monitoring (suhu, pH, ec, berat, tinggi, daun, warnadaun, tanggal)
      VALUES (${suhu}, ${pH}, ${ec}, ${berat}, ${tinggi}, ${daun}, ${warnadaun}, ${tanggal})
    `;
    return res.status(201).json({ message: 'Berhasil menambah data!' });
  } catch (error) {
    console.error('Error adding data:', error);
    return res.status(500).json({ message: 'Error pada saat memasukkan data!' });
  }
}
