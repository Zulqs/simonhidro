import React from "react";
import Container from "./container";
import Link from "next/link";

// Komponen Cta sebagai functional component
export default function Botnav() {
  return (
    <Container className="fixed -bottom-3"> 
        <div className="flex flex-nowrap gap-11 py-2 bg-gray-100 rounded-[25px] 
                        shadow-xl border-[3px] border-gray-200 justify-center">
            <Link className="grid grid-cols-1 justify-items-center" href="/">
                <img width="30" height="30" src="https://img.icons8.com/fluency-systems-regular/48/home--v1.png" alt="home--v1"/>
                <p className="text-sm dark:text-gray-800 ">Beranda</p>
            </Link>
            <Link className="grid grid-cols-1 justify-items-center" href="/">
                <img width="30" height="30" src="https://img.icons8.com/fluency-systems-regular/48/home--v1.png" alt="home--v1"/>
                <p className="text-sm dark:text-gray-800 ">Beranda</p>
            </Link>
        </div>
    </Container>
  );
}
