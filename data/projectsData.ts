interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'User Management',
    description: `This project show case a user manament tool build with .net
8, followinng a clean archicter. it make it user to manage user who are log in
the system`,
    imgSrc: '/static/images/google.png',
    href: 'https://www.google.com',
  },
  {
    title: 'Carpentry Shop',
    description: `This projects show case a .net web application that I build
where you can place orders of carpentry, it send you and email when the order
it is receved when it is completed`,
    imgSrc: '/static/images/carpentry-shop.png',
    href: 'https://carpentry.simanga.dev/',
  },
]

export default projectsData
