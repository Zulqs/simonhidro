import React, { useState, useEffect } from 'react';
import Table, { SelectColumnFilter } from './Table';
import axios from 'axios';

function Montab() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('api/getData');
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
      Header: 'TANGGAL',
      accessor: 'tanggal',
      Filter: SelectColumnFilter,
      filter: 'includes',
    },
    {
      Header: 'JUMLAH LUBANG',
      accessor: 'lubang',
    },
    {
      Header: 'SUHU (℃)',
      accessor: 'suhu',
    },
    {
      Header: 'pH',
      accessor: 'ph',
    },
    {
      Header: 'EC (mS/cm)',
      accessor: 'ec',
    },
    {
      Header: 'BERAT (gr)',
      accessor: 'berat',
    },
    {
      Header: 'TINGGI TANAMAN (cm)',
      accessor: 'tinggi',
    },
    {
      Header: 'JUMLAH DAUN',
      accessor: 'daun',
    },
    {
      Header: 'WARNA DAUN',
      accessor: 'warnadaun',
    },
    {
      Header: 'STATUS',
      accessor: 'property',
      Cell: ({ value }) => (
        <span className={`text-sm ${value !== '-' ? 'text-orange-600' : 'text-gray-500'}`}>
          {value}
        </span>
      )
    },
    {
      Header: 'Hapus',
      Cell: ({ row }) => (
        <button onClick={() => handleDelete(row.original.id)} className="text-red-600 font-bold">
          Hapus
        </button>
      ),
    },
  ], []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/deleteData?id=${id}`);
      setData(data.filter(item => item.id !== id));
      alert('Data deleted successfully!');
    } catch (error) {
      console.error('Error deleting data:', error);
      alert('Error deleting data!');
    }
  };

  if (loading) {
    return <div>Memuat data table pada database... *refresh jika tidak berhasil</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <main className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
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
