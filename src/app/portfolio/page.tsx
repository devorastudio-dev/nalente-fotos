import Link from "next/link";
import Image from "next/image";
import { portfolioItems } from "@/data/portfolio";

export const metadata = {
  title: "Portfólio",
  description:
    "Conheça eventos registrados pela nossa equipe e sinta o cuidado em cada detalhe.",
  openGraph: {
    title: "Portfólio Nalente Studio",
    description:
      "Eventos registrados com sensibilidade, luz e precisão.",
  },
};

export default function PortfolioPage() {
  return (
    <div className="bg-white">
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500">
            Portfólio
          </p>
          <h1 className="mt-3 text-3xl font-semibold text-neutral-900">
            Credibilidade construída em cada evento
          </h1>
          <p className="mt-4 text-sm text-neutral-600">
            Conheça alguns eventos que tivemos o prazer de registrar. Cada um tem
            sua luz, seu ritmo e seus bastidores, e a gente guarda tudo isso com
            sensibilidade.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {portfolioItems.map((item) => (
            <Link
              key={item.name}
              href={`/galeria?evento=${item.slug}`}
              className="group overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-sm transition hover:-translate-y-1"
            >
              <div className="relative h-52">
                <Image
                  src={item.coverImage}
                  alt={item.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="space-y-2 p-6">
                <h3 className="text-lg font-semibold text-neutral-900">
                  {item.name}
                </h3>
                <p className="text-sm text-neutral-600">{item.location}</p>
                <p className="text-xs uppercase tracking-[0.2em] text-neutral-400">
                  {item.date}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
