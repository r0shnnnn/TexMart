
import { ArrowRight, Layers3, ShieldCheck, Truck } from 'lucide-react'

function App() {
  return (
    <main className="min-h-screen bg-[#faf9f6] text-[#17231f]">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <a href="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#173d32] text-white">
            <Layers3 size={24} />
          </div>

          <div>
            <h1 className="text-xl font-bold tracking-tight">
              TextileHub
            </h1>
            <p className="text-xs tracking-wide text-stone-500">
              TEXTILE SOURCING, SIMPLIFIED
            </p>
          </div>
        </a>

        <span className="hidden text-sm text-stone-500 sm:block">
          Connecting customers, brokers & manufacturers
        </span>
      </nav>

      <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 md:grid-cols-2 md:py-24">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-[#d7e2d9] bg-white px-4 py-2 text-sm text-[#285b47]">
            <span className="h-2 w-2 rounded-full bg-[#4c896b]" />
            A smarter way to source textiles
          </span>

          <h2 className="mt-7 max-w-xl text-5xl font-semibold leading-tight tracking-tight sm:text-6xl">
            Find the right fabric.
            <span className="block text-[#39765b]">
              Build better connections.
            </span>
          </h2>

          <p className="mt-6 max-w-lg text-base leading-8 text-stone-600">
            Discover textile products and submit custom fabric
            requirements. Our broker-mediated process helps connect
            your needs with suitable manufacturers and suppliers.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <button className="inline-flex items-center gap-2 rounded-xl bg-[#173d32] px-6 py-3.5 font-medium text-white transition hover:bg-[#285b47]">
              Explore fabrics <ArrowRight size={18} />
            </button>

            <button className="rounded-xl border border-stone-300 bg-white px-6 py-3.5 font-medium transition hover:bg-stone-100">
              Request custom fabric
            </button>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-stone-600">
            <span className="flex items-center gap-2">
              <ShieldCheck size={17} className="text-[#39765b]" />
              Guided sourcing
            </span>
            <span className="flex items-center gap-2">
              <Truck size={17} className="text-[#39765b]" />
              Supplier coordination
            </span>
          </div>
        </div>

        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1100&q=85"
            alt="Textile fabric and material"
            className="h-[420px] w-full rounded-3xl object-cover shadow-xl sm:h-[520px]"
          />

          <div className="absolute -bottom-5 left-4 right-4 rounded-2xl border border-white/70 bg-white/95 p-5 shadow-lg backdrop-blur sm:left-8 sm:right-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#39765b]">
              How TextileHub works
            </p>
            <p className="mt-2 text-lg font-semibold">
              Your requirement. Our broker. The right supplier.
            </p>
            <p className="mt-1 text-sm leading-6 text-stone-600">
              Every transaction follows a broker-mediated process,
              from supplier quotations to your final offer.
            </p>
          </div>
        </div>
      </section>

      <footer className="border-t border-stone-200 px-6 py-6 text-center text-sm text-stone-500">
        TextileHub — A broker-mediated textile marketplace
      </footer>
    </main>
  )
}

export default App
