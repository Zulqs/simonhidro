import React from "react";
import Container from "./container";
import Link from "next/link";

// Komponen Cta sebagai functional component
export default function Menu() {
  return (
    <Container>
        <p className="mb-4 mt-6 font-bold text-grey-900 text-lg">Fitur:</p>
        <div className="grid grid-cols-2 gap-4 
        
        md:grid-cols-4 md:gap-10 
        
        text-gray-700">
            <Link href="/panduanmobile">
                <div 
                className=" rounded-xl text-center
                    font-bold py-3 grid grid-cols-1 justify-items-center
                    border-[3px] border-gray-300 dark:border-white shadow-lg">
                    <img width="40" height="40" src="https://img.icons8.com/office/40/000000/user-manual.png" alt="user-manual"/>
                    <p className="dark:text-white text-sm pt-1">Panduan</p>
                </div>
            </Link>
            <Link href="/monitoringmobile">
                <div 
                className=" rounded-xl text-center
                    font-bold py-3 grid grid-cols-1 justify-items-center
                    border-[3px] border-gray-300 dark:border-white shadow-lg">
                    <img width="40" height="40" src="https://img.icons8.com/office/40/system-task.png" alt="system-task"/>
                    <p className="dark:text-white text-sm pt-1">Monitoring</p>
                </div>
            </Link>
            <Link href="/bertanya">
                <div 
                className=" rounded-xl text-center
                    font-bold py-3 grid grid-cols-1 justify-items-center
                    border-[3px] border-gray-300 dark:border-white shadow-lg">
                    <img width="40" height="40" src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/96/external-question-and-answer-session-with-speech-bubble-school-color-tal-revivo.png" alt="external-question-and-answer-session-with-speech-bubble-school-color-tal-revivo"/>
                    <p className="dark:text-white text-sm pt-1">Bertanya</p>
                </div>
            </Link>
        </div>
    </Container>
  );
}
