import Container from "@/components/Container"
import GoBack from "@/components/GoBack"
import CardsWrapper from "@/components/CardsWrapper"

export default function Portfolio() {
  return (
    <main>
      <Container>
        <GoBack />
        <h1 className="font-bold">progetti</h1>

        <CardsWrapper />
      </Container>
    </main>
  )
}
