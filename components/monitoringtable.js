import React from 'react';
import Table, { SelectColumnFilter } from './Table';  // new

const getData = () => {
    const data = [
      {
        tanggal: '07-01-2024',
        suhu: '23',
        pH: '6.2',
        ec: '1.2 mS/cm',
        berat: '-',
        tinggi: '1 cm',
        daun: '<2 Daun',
        warnadaun: 'Hijau Muda',
      },
      {
        tanggal: '08-01-2024',
        suhu: '22',
        pH: '6.3',
        ec: '1.5 mS/cm',
        berat: '-',
        tinggi: '3 cm',
        daun: '<4 Daun',
        warnadaun: 'Hijau Muda',
      },
      {
        tanggal: '09-01-2024',
        suhu: '24',
        pH: '6.1',
        ec: '1.6 mS/cm',
        berat: '-',
        tinggi: '6 cm',
        daun: '<6 Daun',
        warnadaun: 'Hijau Muda',
      },
      {
        tanggal: '10-01-2024',
        suhu: '23',
        pH: '6.2',
        ec: '1.7 mS/cm',
        berat: '-',
        tinggi: '13 cm',
        daun: '<9 Daun',
        warnadaun: 'Hijau Cerah',
      },
      {
        tanggal: '11-01-2024',
        suhu: '24',
        pH: '6.4',
        ec: '1.7 mS/cm',
        berat: '<100 g',
        tinggi: '17 cm',
        daun: '<6 Daun',
        warnadaun: 'Hijau Cerah',
      },
      {
        tanggal: '12-01-2024',
        suhu: '22',
        pH: '6.3',
        ec: '1.8 mS/cm',
        berat: '<150 g',
        tinggi: '20 cm',
        daun: '<25 Daun',
        warnadaun: 'Hijau Cerah',
      },
      {
        tanggal: '13-01-2024',
        suhu: '22',
        pH: '6.3',
        ec: '1.5 mS/cm',
        berat: '<200 g',
        tinggi: '28 cm',
        daun: '<32 Daun',
        warnadaun: 'Hijau Cerah',
      },
    ]
    return [...data]
  }

function Montab() {

  const columns = React.useMemo(() => [
    {
        Header: "Tanggal",
        accessor: 'tanggal',
        Filter: SelectColumnFilter,  // new
        filter: 'includes',
    },
    {
      Header: "Suhu ℃",
      accessor: 'suhu',
    },
    {
      Header: "pH",
      accessor: 'pH',
    },
    {
      Header: "EC",
      accessor: 'ec',
    },
    {
      Header: "Berat",
      accessor: 'berat',
    },
    {
      Header: "Tinggi tanaman",
      accessor: 'tinggi',
    },
    {
      Header: "Jumlah daun",
      accessor: 'daun',
    },
    {
      Header: "Warna Daun",
      accessor: 'warnadaun',
    },
  ], [])

  const data = React.useMemo(() => getData(), [])

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
