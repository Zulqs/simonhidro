// Import beberapa icon dari Heroicons untuk digunakan pada keunggulan dan alasan memilih
import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  FunnelIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
  HomeIcon,
} from "@heroicons/react/24/solid";

// Import gambar yang akan digunakan pada keunggulan pertama dan kedua
import benefitOneImg from "../public/img/benefit-one.png";
import benefitTwoImg from "../public/img/benefit-two.png";

// Objek benefitOne berisi informasi tentang keunggulan hidroponik
const benefitOne = {
  title: "Keunggulan Hidroponik",
  desc: "Hidroponik memungkinkan pengelolaan sumber daya yang lebih efisien. Tanaman yang tumbuh dalam larutan nutrisi cair dapat mengakses nutrisi dengan lebih mudah.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Keunggulan 1",
      desc: "Hidroponik menggunakan air dan nutrisi secara lebih efisien dibandingkan dengan sistem tanam tradisional.",
      icon: <FunnelIcon />,
    },
    {
      title: "Keunggulan 2",
      desc: "Tanaman hidroponik umumnya tumbuh lebih cepat dibandingkan dengan tanaman yang ditanam di tanah.",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Keunggulan 3",
      desc: "Hidroponik dapat dilakukan di lahan yang sempit, bahkan di dalam ruangan.",
      icon: <HomeIcon />,
    },
    {
      title: "Keunggulan 4",
      desc: "Dalam hidroponik, faktor-faktor seperti pH air, nutrisi, dan pencahayaan dapat dikontrol dengan mudah.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Keunggulan 5",
      desc: "Hidroponik dapat menjadi kegiatan yang menyenangkan dan edukatif bagi semua orang.",
      icon: <FaceSmileIcon />,
    },
  ],
};

// Objek benefitTwo berisi informasi tentang mengapa memilih pertanian tersebut
const benefitTwo = {
  title: "Mengapa Memilih Kami?",
  desc: "Berikut beberapa alasan yang bisa menjadi daya tarik untuk memilih pertanian kami:",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Sertifikasi Organik atau Berkelanjutan",
      desc: "Memiliki sertifikasi organik atau sertifikasi berkelanjutan dapat memberikan keyakinan tambahan pada konsumen yang mencari produk dengan peduli lingkungan.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Praktik Pertanian Berkelanjutan",
      desc: "Produk pertanian kami memiliki reputasi untuk kualitas yang tinggi, baik dari segi rasa, nutrisi, atau metode produksi yang berkelanjutan, ini bisa menjadi alasan utama untuk dipilih.",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Transparansi dan Keterbukaan",
      desc: "Memberikan informasi transparan tentang asal usul produk, proses produksi, dan praktik pertanian dapat membangun kepercayaan konsumen.",
      icon: <SunIcon />,
    },
    {
      title: "Harga yang Bersaing",
      desc: "Menawarkan harga yang bersaing atau memberikan nilai tambahan dalam bentuk bundel atau promosi khusus juga dapat menjadi faktor penentu.",
      icon: <FaceSmileIcon />,
    },
  ],
};

// Ekspor objek benefitOne dan benefitTwo untuk digunakan di komponen lain
export { benefitOne, benefitTwo };
