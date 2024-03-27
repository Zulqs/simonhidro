import React, { useState } from 'react';
import axios from 'axios';

const AddForm = () => {
  const [formData, setFormData] = useState({
    lubang: '',
    suhu: '',
    pH: '',
    ec: '',
    berat: '',
    tinggi: '',
    daun: '',
    warnadaun: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const currentDate = new Date().toISOString().split('T')[0];
      let newData = { ...formData, tanggal: currentDate };
      if (formData.suhu === 'other') {
        newData = { ...newData, suhu: formData.otherSuhu };
      } 
      if (formData.pH === 'other') {
        newData = { ...newData, pH: formData.otherpH };
      } 
      if (formData.ec === 'other') {
        newData = { ...newData, ec: formData.otherec };
      } 
      await axios.post('/api/addData', newData);
      alert('Data added successfully!');
      setFormData({
        lubang: '',
        suhu: '',
        pH: '',
        ec: '',
        berat: '',
        tinggi: '',
        daun: '',
        warnadaun: '',
      }); window.location.reload();
    } catch (error) {
      console.error('Error adding data:', error);
      alert('Error adding data!');
    }
  };

  return (
    <div>
        <form class="max-w-md mx-auto" onSubmit={handleSubmit}>
        <h2 className='text-2xl font-medium lg:text-3xl'>Tambah Data</h2>
        <div class="grid md:grid-cols-2 md:gap-6 mt-6">
            <div class="relative z-0 w-full mb-5 group">
                <select
                name="lubang"
                id="lubang"
                value={formData.lubang}
                onChange={handleChange}
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
                required
                >
                <option value="">Pilih lubang</option>
                {[1, 2, 3, 4, 5].map((value) => (
                    <option key={value} value={value}>
                    {value}
                    </option>
                ))}
                </select>
                <label for="lubang" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Lubang</label>
            </div>
            <div class="relative z-0 w-full mb-5 group">
                <select
                  name="suhu"
                  id="suhu"
                  value={formData.suhu}
                  onChange={handleChange}
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
                  required
                >
                  <option value="">Pilih suhu</option>
                  <option value="22">22 ℃</option>
                  <option value="23">23 ℃</option>
                  <option value="24">24 ℃</option>
                  <option value="25">25 ℃</option>
                  <option value="other">Lainnya</option>
                </select>
                <label
                  for="suhu"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Suhu
                </label>
            </div>
        </div>
        {formData.suhu === "other" && (
          <div class="relative z-0 w-full mb-5 group">
            <input 
              type="text" 
              name="otherSuhu" 
              id="otherSuhu" 
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" 
              value={formData.otherSuhu}
              onChange={handleChange}
              placeholder=" " 
              required 
            />
            <label for="otherSuhu" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >Masukkan suhu lainnya (℃)
            </label>
          </div>
        )}

        <div class="grid md:grid-cols-2 md:gap-6">
            <div class="relative z-0 w-full mb-5 group">
                <select
                  name="pH"
                  id="pH"
                  value={formData.pH} onChange={handleChange}
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
                  required
                >
                  <option value="">Pilih pH</option>
                  <option value="6.0">6.0</option>
                  <option value="6.1">6.1</option>
                  <option value="6.2">6.2</option>
                  <option value="6.3">6.3</option>
                  <option value="6.4">6.4</option>
                  <option value="6.5">6.5</option>
                  <option value="other">Lainnya</option>
                </select>
                <label
                  for="pH"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  pH
                </label>
            </div>
            <div class="relative z-0 w-full mb-5 group">
                <select
                  name="ec"
                  id="ec"
                  value={formData.ec}
                  onChange={handleChange}
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
                  required
                >
                  <option value="">Pilih EC</option>
                  <option value="1.0">1.0 mS/cm</option>
                  <option value="1.1">1.1 mS/cm</option>
                  <option value="1.2">1.2 mS/cm </option>
                  <option value="1.3">1.3 mS/cm </option>
                  <option value="1.4">1.4 mS/cm </option>
                  <option value="1.5">1.5 mS/cm </option>
                  <option value="1.6">1.6 mS/cm </option>
                  <option value="1.7">1.7 mS/cm </option>
                  <option value="1.8">1.8 mS/cm </option>
                  <option value="1.9">1.9 mS/cm </option>
                  <option value="2.0">2.0 mS/cm </option>
                  <option value="other">Lainnya</option>
                </select>
                <label
                  htmlFor="ec"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  EC
                </label>
            </div>
        </div>
        {formData.pH === "other" && (
          <div class="relative z-0 w-full mb-5 group">
            <input 
              type="text" 
              name="otherpH" 
              id="otherpH" 
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" 
              value={formData.otherpH}
              onChange={handleChange}
              placeholder=" " 
              required 
            />
            <label for="otherpH" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >Masukkan pH *gunakan titik (.) sebagai pemisah desimal
            </label>
          </div>
        )}

        {formData.ec === "other" && (
          <div class="relative z-0 w-full mb-5 group">
            <input 
              type="text" 
              name="otherec" 
              id="otherec" 
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" 
              value={formData.otherec}
              onChange={handleChange}
              placeholder=" " 
              required 
            />
            <label for="otherec" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >Masukkan EC (mS/cm) *gunakan titik (.) sebagai pemisah desimal
            </label>
          </div>
        )}

        <div class="grid md:grid-cols-2 md:gap-6">
            <div class="relative z-0 w-full mb-5 group">
                <input 
                type="text" 
                name="berat" id="berat" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" 
                value={formData.berat}
                onChange={handleChange}
                placeholder=" " required />
                <label for="berat" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >Berat (gr)</label>
            </div>
            <div class="relative z-0 w-full mb-5 group">
                <input 
                type="text" 
                name="tinggi" id="tinggi" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" 
                value={formData.tinggi}
                onChange={handleChange}
                placeholder=" " required />
                <label for="tinggi" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >Tinggi tanaman (cm)</label>
            </div>
        </div>
        <div class="grid md:grid-cols-2 md:gap-6">
          <div class="relative z-0 w-full mb-5 group">
                <input 
                type="text" 
                name="daun" id="daun" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" 
                value={formData.daun}
                onChange={handleChange}
                placeholder=" " required />
                <label for="daun" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >Jumlah daun</label>
            </div>
            <div class="relative z-0 w-full mb-5 group">
                <input 
                type="text" 
                name="warnadaun" id="warnadaun" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" 
                value={formData.warnadaun}
                onChange={handleChange}
                placeholder=" " required />
                <label for="warnadaun" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >Warna daun</label>
            </div>
        </div>
        <button type="submit" class="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Tambah Data</button>
        </form>

    </div>

    
  );
};

export default AddForm;
