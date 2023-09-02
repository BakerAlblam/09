import React from 'react'
import { Link } from 'react-router-dom'

const listOfCity = [
    {
        id: 1,
        label: "Stockholm",
        img: "https://www.stenaline.se/content/dam/stenaline/en/images/destinations/sweden/20190603_stockholm-old-town.jpeg",
        to: "/stockholm",
    },
    {
        id: 2,
        label: "Göteborg",
        img: "https://www.businessregiongoteborg.se/sites/brg/files/2020-08/G%C3%B6teborg%20Sj%C3%B6manshustrun%201.JPG",
        to: "/goteborg",
    },
    {
        id: 3,
        label: "Malmö",
        img: "https://www.solita.fi/wp-content/uploads/2023/05/Malmo-office-news.jpg",
        to: "/malmo",
    },
    {
        id: 4,
        label: "Jönköping",
        img: "https://www.vatterleden.se/wp-content/uploads/2022/12/Vatterleden-Jonkoping.jpeg",
        to: "/jonkoping",
    },
    {
        id: 5,
        label: "Uppsala",
        img: "https://images.squarespace-cdn.com/content/v1/5db2c1c870cf53160ba6a917/f5b8c489-617e-4217-bf67-ad63bc0e16cb/uppsala+cathedral+domkyrka+sweden+view+from+gotlandsparken",
        to: "/uppsala",
    },
 
]

const Hrlist = () => {
  return (
    <ul className="flex flex-wrap items-center justify-center  text-white">
        
    {listOfCity.map((city) => (
        <li key={city.id}>
        <Link to={city.to} className="mr-4 hover:underline md:mr-6 "> {city.label} </Link>
    </li>
    ))}
 
</ul>
  )
}

export default Hrlist
