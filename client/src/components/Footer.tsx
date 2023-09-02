import { Typography } from "@material-tailwind/react";
import { Facebook, Github, Twitch, Twitter } from "lucide-react";


const LINKS = [
    {
      title: "Product",
      items: ["Overview", "Features", "Solutions", "Tutorials"],
    },
    {
      title: "Company",
      items: ["About us", "Careers", "Press", "News"],
    },
    {
      title: "Social",
      items: [ <Twitter />,  <Twitch />,<Facebook />,  <Github />],
    },
  ];


const Footer = () => {
  return (
    <footer className="relative w-full border-t border-blue-gray-50 mb-3">
      <div className="mx-auto w-full max-w-7xl px-8">
        <div className="grid grid-cols-1 justify-between gap-4 md:grid-cols-2">
       
       
        
       
          <div className="grid grid-cols-3 justify-between mt-3 gap-4">
            {LINKS.map(({ title, items }) => (
              <ul key={title}>
                <Typography
                  variant="h1"
                  color="white"
                  className="mb-3 font-medium opacity-40"
                >
                  {title}
                </Typography>
                {items.map((link) => (
                  <li key={link}>
                    <Typography
                      as="a"
                      href="#"
                      color="white"
                      className="py-1.5 font-normal transition-colors hover:text-blue-white"
                    >
                      {link}
                    </Typography>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
     
      </div>
    </footer>
  )
}

export default Footer
