export default function Contact() {
	return (
		<main className="mx-auto flex min-h-[calc(100vh-152px)] max-w-6xl items-center px-6 py-16">
			<section className="w-full max-w-2xl">
				<p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">Kontak</p>
				<h1 className="text-4xl font-bold text-slate-900 sm:text-6xl">Punya ide yang ingin diwujudkan?</h1>
				<p className="mt-6 text-lg leading-8 text-slate-600">Mari bicarakan kebutuhan dan kemungkinan kolaborasinya.</p>
				<a href="mailto:hello@portofolioku.dev" className="mt-10 inline-block rounded-full bg-cyan-500 px-6 py-3 font-semibold text-white transition hover:bg-cyan-600">hello@portofolioku.dev</a>
			</section>
		</main>
	)
}
