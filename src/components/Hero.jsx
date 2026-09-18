import { useEffect, useState } from "react";
import { useLocalStorageState } from "../hooks/useLocalStorageState";

function Hero() {
  const [angka, setAngka] = useLocalStorageState("angka", 0);


  return (
    <section className="flex min-h-[calc(100vh-73px)] items-center justify-center bg-white px-6 py-24 text-center sm:py-32">
      <div className="mx-auto max-w-4xl">

        <h1 className="text-3xl font-extrabold text-slate-900">Solusi Terbaik Untuk Bisnismu</h1>
        <p className="mt-4 text-lg text-slate-600">
          Selamat datang di website kami! Kami menyediakan solusi terbaik untuk kebutuhan bisnismu.
        </p>
        <button
        onClick={() => setAngka(angka + 1)}
        className="px-8 py-3 font-semibold text-white transition bg-pink-600 rounded-full hover:bg-pink-900"
      >
        Klik button ini {angka}
      </button>
      </div>
    </section>
  )
}
export default Hero;