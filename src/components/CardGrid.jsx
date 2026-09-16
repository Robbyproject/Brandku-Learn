import { featureData } from '../data/features'

export default function CardGrid() {
	return (
		<section className="bg-slate-50 px-6 py-16 sm:py-20">
			<div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
				{featureData.map((feature) => (
					<article
						key={feature.id}
						className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
					>
						<div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-red-50 text-2xl" aria-hidden="true">
							{feature.icon}
						</div>
						<h2 className="text-xl font-bold text-slate-900">{feature.title}</h2>
						<p className="mt-3 leading-7 text-slate-600">{feature.subtitle}</p>
					</article>
				))}
			</div>
		</section>
	)
}
