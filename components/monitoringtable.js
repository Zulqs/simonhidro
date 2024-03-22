import React, { useState, useEffect } from 'react';
import Table, { SelectColumnFilter } from './Table';

function Montab() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('https://simonhidro.vercel.app/api/getData');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const jsonData = await response.json();
        setData(jsonData.data.rows);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  const columns = React.useMemo(() => [
    {
      Header: 'Tanggal',
      accessor: 'tanggal',
      Filter: SelectColumnFilter,
      filter: 'includes',
    },
    {
      Header: 'Suhu ℃',
      accessor: 'suhu',
    },
    {
      Header: 'pH',
      accessor: 'ph',
    },
    {
      Header: 'EC',
      accessor: 'ec',
    },
    {
      Header: 'Berat',
      accessor: 'berat',
    },
    {
      Header: 'Tinggi tanaman',
      accessor: 'tinggi',
    },
    {
      Header: 'Jumlah daun',
      accessor: 'daun',
    },
    {
      Header: 'Warna Daun',
      accessor: 'warnadaun',
    },
  ], []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <div className="">
          <h1 className="text-xl font-semibold">Tabel monitoring</h1>
        </div>
        <div className="mt-6">
          <Table columns={columns} data={data} />
        </div>
      </main>
    </div>
  );
}

export default Montab;
