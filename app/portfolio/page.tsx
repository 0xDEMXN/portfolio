import Container from "@/components/Layout/Container"
import GoBack from "@/components/GoBack/GoBack"
import CardsWrapper from "@/components/CardsWrapper/CardsWrapper"

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
