import Container from "@/components/Container"
import GoBack from "@/components/GoBack"
import CardsWrapper from "@/components/CardsWrapper"

async function getProjects() {
  const res = await fetch(`${process.env.PROJECTS_API_URL}/projects`, { next: { revalidate: 300 } })
 
  if (!res.ok) {
    throw new Error('failed to fetch data')
  }
 
  return res.json()
}

export default async function Portfolio() {
  const projects = await getProjects()

  return (
    <main>
      <Container>
        <GoBack />
        <h1 className="font-bold">progetti</h1>
        <span>⚠️ questa pagina non è ancora completa, ritorna tra un po&apos; di tempo per vedere tutti i progetti a cui ho lavorato ⚠️</span>

        <CardsWrapper projects={projects.data.reverse()} />
      </Container>
    </main>
  )
}
