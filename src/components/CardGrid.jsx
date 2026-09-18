import { useEffect, useState } from "react";
import { getData } from "../api/getData";

export default function CardGrid() {
    const [dataProduct, setDataProduct] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getData();
                setDataProduct(data);
            } catch (err) {
                setError(err);
            }
        };

        fetchData();
    }, []);

    if (error) {
        return <p>Gagal mengambil data.</p>;
    }

    return (
        <section className="bg-slate-50 px-6 py-16 sm:py-20">
            <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
                {dataProduct.map((data) => (
                    <article
                        key={data.id}
                        className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm"
                    >
                        <img
                            src={data.image}
                            alt={data.title}
                            className="mx-auto h-48 object-contain"
                        />

                        <p className="mt-5 text-sm capitalize text-slate-500">
                            {data.category}
                        </p>

                        <h2 className="mt-2 text-xl font-bold text-slate-900">
                            {data.title}
                        </h2>

                        <p className="mt-3 text-slate-600">
                            {data.description}
                        </p>

                        <p className="mt-4 text-lg font-bold text-red-600">
                            ${data.price}
                        </p>

                        <p className="mt-2 text-sm text-slate-500">
                            Rating: {data.rating.rate} / 5 ({data.rating.count} ulasan)
                        </p>
                    </article>
                ))}
            </div>
        </section>
    );
}