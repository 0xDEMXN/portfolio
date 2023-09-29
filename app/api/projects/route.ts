import { Project } from "@/types/project"

export async function GET() {
  const data: Project[] = [
    {
      id: 1,
      slug: "wasan",
      title: "Wasan Project",
      excerpt: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quibusdam.",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget feugiat lorem. Donec mattis, est at porttitor finibus, tellus turpis interdum leo, non sagittis quam arcu nec dolor. Pellentesque sodales felis quis ante viverra sodales. Sed elementum, ante id congue placerat, enim lorem gravida odio, a tristique magna augue ut elit. In tincidunt velit ac odio auctor, sit amet lacinia diam porta. Integer in nisl augue. Proin suscipit, sapien sed dapibus ullamcorper, ante lectus malesuada lectus, et gravida nisl neque vitae odio. Donec pharetra, elit ut interdum ultricies, diam sapien facilisis leo, eu condimentum dolor ipsum sit amet turpis.",
      image: "/Wasan.jpg",
      link: "https://wasan.sayitsimple.it/",
    },
    {
      id: 2,
      slug: "google",
      title: "Google",
      excerpt: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quibusdam.",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget feugiat lorem. Donec mattis, est at porttitor finibus, tellus turpis interdum leo, non sagittis quam arcu nec dolor. Pellentesque sodales felis quis ante viverra sodales. Sed elementum, ante id congue placerat, enim lorem gravida odio, a tristique magna augue ut elit. In tincidunt velit ac odio auctor, sit amet lacinia diam porta. Integer in nisl augue. Proin suscipit, sapien sed dapibus ullamcorper, ante lectus malesuada lectus, et gravida nisl neque vitae odio. Donec pharetra, elit ut interdum ultricies, diam sapien facilisis leo, eu condimentum dolor ipsum sit amet turpis.",
      image: "/Google.jpg",
      link: "https://www.google.com",
    },
  ]
 
  return Response.json({ data })
}