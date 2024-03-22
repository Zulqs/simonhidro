import { useRouter } from "next/router";

export default function BackButton() {
    const router = useRouter()

    return (
        <div>
            <button type="button" onClick={() => router.back()} className="text-black dark:text-white font-bold py-1 px-1 flex -mb-56">
                <img width="25" height="25" src="https://img.icons8.com/fluency-systems-filled/48/long-arrow-left.png" alt="long-arrow-left"/> <a className="pl-2 ">Kembali</a>
            </button>
        </div>
    )}
