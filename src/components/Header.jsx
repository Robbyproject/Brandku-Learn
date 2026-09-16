import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<header className="relative border-b border-slate-200 bg-white/90 px-6 py-5 backdrop-blur">
			<div className="mx-auto flex max-w-6xl items-center justify-between">
				<Link to="/" className="text-lg font-bold tracking-tight text-slate-900">Ambatukamm<span className="text-cyan-600">.</span></Link>
				<button
					className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-lg border border-red-200 text-red-600 md:hidden"
					onClick={() => setIsOpen(!isOpen)}
					aria-label={isOpen ? 'Tutup navigasi' : 'Buka navigasi'}
					aria-expanded={isOpen}
				>
					<span className={`block h-0.5 w-5 bg-current transition ${isOpen ? 'translate-y-2 rotate-45' : ''}`} />
					<span className={`block h-0.5 w-5 bg-current transition ${isOpen ? 'opacity-0' : ''}`} />
					<span className={`block h-0.5 w-5 bg-current transition ${isOpen ? '-translate-y-2 -rotate-45' : ''}`} />
				</button>
				<nav className={`${isOpen ? 'flex' : 'hidden'} absolute left-0 right-0 top-full z-10 flex-col gap-4 border-b border-slate-200 bg-white px-6 py-5 md:static md:flex md:flex-row md:border-0 md:bg-transparent md:p-0`}>
					<Link to="/" className="text-slate-600 transition hover:text-cyan-600" onClick={() => setIsOpen(false)}>Home</Link>
					<Link to="/about" className="text-slate-600 transition hover:text-cyan-600" onClick={() => setIsOpen(false)}>About</Link>
					<Link to="/contact" className="text-slate-600 transition hover:text-cyan-600" onClick={() => setIsOpen(false)}>Contact</Link>
				</nav>
			</div>
		</header>
	)
}
