import { sql } from '@vercel/postgres';

export default async function handler(req, res) {
  if (req.method !== 'DELETE') {
    return res.status(405).json({ message: 'Metode ditolak!' });
  }

  const { id } = req.query;

  try {
    // Delete data from the "monitoring" table based on the provided ID
    await sql`
      DELETE FROM monitoring
      WHERE id = ${id}
    `;
    return res.status(200).json({ message: 'Berhasil menghapus data!' });
  } catch (error) {
    console.error('Error deleting data:', error);
    return res.status(500).json({ message: 'Error pada saat menghapus data!' });
  }
}
