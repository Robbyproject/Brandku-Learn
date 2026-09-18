import { getData } from "../api/getData"
import { useEffect, useState } from "react"

function Card(icon, title, subtitle) {
    console.log(icon, title, subtitle)

     useEffect (() => {
    const data = getData();
    console.log(data, 'data');
  },);

  return (
    <article
      className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
    >
        <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-red-50 text-2xl" aria-hidden="true">
            {icon}
        </div>
        <h2 className="text-xl font-bold text-slate-900">{title}</h2>   
        <p className="mt-3 leading-7 text-slate-600">{subtitle}</p>
    </article>
    )
}

export default Card;