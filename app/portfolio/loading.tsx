import Container from "@/components/Container"
import GoBack from "@/components/GoBack"

export default async function Loading() {
  return (
    <main>
      <Container>
        <GoBack />
        <h1 className="font-bold">progetti</h1>
        
        loading...
      </Container>
    </main>
  )
}
