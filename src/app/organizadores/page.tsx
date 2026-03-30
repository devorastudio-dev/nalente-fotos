import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Organizadores",
  description:
    "Parceria organizada e transparente para valorizar o evento e gerar receita adicional.",
  openGraph: {
    title: "Parceria para organizadores",
    description:
      "Cobertura completa, venda de fotos e comissão com total clareza.",
  },
};

const steps = [
  "Contato e alinhamento do roteiro do evento",
  "Nossa equipe realiza a cobertura completa",
  "As fotos são tratadas e disponibilizadas para compra",
  "O organizador recebe comissão com transparência",
];

const benefits = [
  "Cobertura cuidadosa e discreta",
  "Valorização do evento e da marca",
  "Recordação viva para participantes",
  "Receita adicional para o organizador",
];

export default function OrganizadoresPage() {
  return (
    <div className="bg-white">
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500">
              Organizadores
          </p>
          <h1 className="mt-3 text-3xl font-semibold text-neutral-900">
            Parceria estratégica para elevar o seu evento
          </h1>
          <p className="mt-4 text-sm text-neutral-600">
            Oferecemos um modelo de parceria pensado para agregar valor ao seu
            evento. Nossa equipe registra cada detalhe com organização e carinho,
            e os participantes podem adquirir suas fotos depois.
          </p>
            <div className="mt-6">
              <Button asChild size="lg">
                <Link href="/contato">Quero ser parceiro</Link>
              </Button>
            </div>
          </div>
          <div className="rounded-[32px] border border-neutral-200 bg-neutral-50 p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500">
              Estrutura da equipe
            </p>
            <p className="mt-4 text-sm text-neutral-700">
              Contamos com profissionais preparados para cobrir seu evento com
              qualidade, discrição e atenção ao que acontece nos bastidores.
            </p>
          </div>
        </div>

        <div className="mt-16 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold text-neutral-900">
              Como funciona a parceria
            </h2>
            <div className="mt-6 space-y-4">
              {steps.map((step, index) => (
                <div
                  key={step}
                  className="flex items-start gap-4 rounded-2xl border border-neutral-200 bg-white p-4"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-neutral-900 text-xs font-semibold text-white">
                    0{index + 1}
                  </span>
                  <p className="text-sm text-neutral-700">{step}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-neutral-900">Benefícios</h2>
            <div className="mt-6 space-y-3">
              {benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="rounded-2xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-neutral-700"
                >
                  {benefit}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-neutral-950 py-16 text-white">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-4 px-6 text-center">
          <h2 className="text-3xl font-semibold">
            Vamos construir uma parceria de alto impacto?
          </h2>
          <p className="text-sm text-white/70">
            Transforme seu evento em uma experiência memorável e gere nova receita
            com uma cobertura cuidadosa e fotos que os participantes querem levar.
          </p>
          <Button asChild size="lg">
            <Link href="/contato">Quero ser parceiro</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
