import Container from "@/components/Container"
import GoBack from "@/components/GoBack"
import CardsWrapper from "@/components/CardsWrapper"

export default function Portfolio() {
  return (
    <main>
      <Container>
        <GoBack />
        <h1 className="font-bold">progetti</h1>
        <span>⚠️ questa pagina non è ancora completa, ritorna tra un po&apos; di tempo per vedere tutti i progetti a cui ho lavorato ⚠️</span>

        <CardsWrapper />
      </Container>
    </main>
  )
}
