import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="flex min-h-[calc(100vh-73px)] items-center justify-center bg-white px-6 py-24 text-center sm:py-32">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-5xl font-bold leading-[1.05] tracking-tight text-slate-900 sm:text-7xl">Membuat ide terasa hidup di layar.</h1>
        <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-slate-600">Portofolio personal untuk karya digital, eksperimen antarmuka, dan solusi web yang terasa manusiawi.</p>
        <Link to="/about" className="mt-10 inline-block rounded-full bg-red-500 px-6 py-3 font-semibold text-white transition hover:bg-red-600">Kenali saya</Link>
      </div>
    </section>
  )
}
