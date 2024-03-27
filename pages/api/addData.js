import { sql } from '@vercel/postgres';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Metode ditolak!' });
  }

  const {
    lubang,
    suhu,
    pH,
    ec,
    berat,
    tinggi,
    daun,
    warnadaun,
    tanggal,
  } = req.body;

  let property = '-';
  let minus = '';
  let anomaly = false;
  // Check for threshold conditions
  if (parseFloat(suhu) < 22 || parseFloat(suhu) > 25) {
    anomaly = true;
    minus = minus+'suhu';
  }
  if (parseFloat(pH) < 6.0 || parseFloat(pH) > 6.5) {
    anomaly = true;
    if (minus !== '') {
      minus = minus+', pH';
    } else {
    minus = minus+'pH';}
  }
  if (parseFloat(ec) < 1.0 || parseFloat(ec) > 2.0) {
    anomaly = true;
    if (minus !== '') {
      minus = minus+', EC';
    } else {
    minus = minus+'EC';}  
  }

  if (anomaly === true) {
    property = `Nilai ${minus} di luar ambang batas`;
  }

  try {
    // Insert data into the "monitoring" table
    await sql`
      INSERT INTO monitoring (lubang, suhu, pH, ec, berat, tinggi, daun, warnadaun, tanggal, property)
      VALUES (${lubang}, ${suhu}, ${pH}, ${ec}, ${berat}, ${tinggi}, ${daun}, ${warnadaun}, ${tanggal}, ${property})
    `;
    return res.status(201).json({ message: 'Berhasil menambah data!' });
  } catch (error) {
    console.error('Error adding data:', error);
    return res.status(500).json({ message: 'Error pada saat memasukkan data!' });
  }
}
