import { Project } from "@/types/project"

export async function GET() {
  const projects: Project[] = [
    {
      id: 1,
      slug: "wearesum",
      title: "We Are SUM",
      excerpt: "SUM è un collettivo che mira a progettare gli strumenti per anziani e i loro coetanei per identificare di quali informazioni fidarsi.",
      content: "SUM è un collettivo che mira a progettare gli strumenti per anziani e i loro coetanei per identificare di quali informazioni fidarsi. La nostra società si trova ad affrontare una sfida senza precedenti: l’eccezionale volume di informazioni a nostra disposizione, molte delle quali inaccurate, false o manipolate, ha creato una crisi di fiducia nelle istituzioni, nei media e nella nostra stessa capacità di sapere cosa è vero e cosa non lo è. In SUM ci dedichiamo alla progettazione di strumenti che aiutino le persone a identificare informazioni affidabili. Il nostro obiettivo finale è creare un kit di strumenti che qualsiasi organizzazione e ovunque possa utilizzare per affrontare questa sfida. Il nostro processo di progettazione inclusivo e co-creativo prevede il lavoro a stretto contatto con gli anziani per comprendere le loro esigenze e preoccupazioni. Crediamo che costruire una società più affidabile e resiliente richieda un approccio di rete, in cui possiamo condividere conoscenze e lavorare insieme per affrontare questa enorme sfida.",
      image: "/sum.png",
      link: "https://www.wearesum.eu/",
    },
  ]
 
  return Response.json({ projects })
}