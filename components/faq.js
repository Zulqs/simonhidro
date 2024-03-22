import React from "react";
import Container from "./container";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

// Komponen Faq
const Faq = () => {
  return (
    // Menggunakan komponen Container untuk membatasi lebar dan memberikan padding
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {/* Mapping data FAQ untuk menampilkan pertanyaan dan jawaban */}
        {faqdata.map((item, index) => (
          <div key={item.question} className="mb-5">
            {/* Komponen Disclosure untuk membuat pertanyaan dan jawaban dapat dibuka dan ditutup */}
            <Disclosure>
              {({ open }) => (
                <>
                  {/* Button untuk membuka dan menutup panel pertanyaan dan jawaban */}
                  <Disclosure.Button className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-green-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200">
                    <span>{item.question}</span>
                    {/* Icon panah yang berubah arah ketika panel dibuka atau ditutup */}
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-green-500`}
                    />
                  </Disclosure.Button>
                  {/* Panel yang menampilkan jawaban ketika panel dibuka */}
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
                    {item.answer}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  );
}

// Data FAQ yang berisi pertanyaan dan jawaban
const faqdata = [
  {
    question: "Apa itu hidroponik?",
    answer: "Hidroponik adalah metode budidaya tanaman tanpa menggunakan media tanah. Dalam hidroponik, tanaman ditanam di media inert, seperti kerikil, pasir, atau busa, dan diberi nutrisi yang terlarut dalam air.",
  },
  {
    question: "Berapa lama waktu yang dibutuhkan untuk panen hidroponik?",
    answer: "Waktu panen hidroponik tergantung pada jenis tanaman dan sistem yang digunakan. Namun, umumnya tanaman hidroponik dapat dipanen lebih cepat daripada tanaman yang ditanam di tanah.",
  },
  {
    question: "Apakah hidroponik berbahaya bagi kesehatan? ",
    answer: "Hidroponik tidak berbahaya bagi kesehatan, bahkan dapat memberikan manfaat kesehatan yang lebih baik daripada tanaman yang ditanam di tanah. Hal ini karena tanaman hidroponik tidak terkontaminasi oleh pestisida dan herbisida.",
  },
  {
    question: "Apakah hidroponik cocok untuk pemula?",
    answer: "Hidroponik dapat dipelajari oleh siapa saja, termasuk pemula. Namun, untuk mendapatkan hasil yang optimal, pemula sebaiknya mempelajari dasar-dasar hidroponik terlebih dahulu.",
  },
];

// Ekspor komponen Faq
export default Faq;
