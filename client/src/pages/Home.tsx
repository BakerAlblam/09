import { Button } from "@/components/ui/button"
import Latest from "@/components/Latest"
import CityJob from "@/components/CityJob"
import { Input } from "@/components/ui/input"


const Home = () => {
  return (
    <section className='w-7xl min-w-full flex-center flex-col'>
    <h1 className='head_text text-center my-7'>
      <span className='orange_gradient text-center italic'> Jobblocket</span>
    </h1>
    <h1 className='desc text-center my-8'>
      <span className="blue_gradient text-2xl">Find a job, start studying or recruit?
Welcome to Jobblocket!</span>
    </h1>
    <div className="flex w-full max-w-6xl items-center mb-10 space-x-2 glassmorphism">
      <Input type="email" placeholder="Email" />
      <Button type="submit">Subscribe</Button>
    </div>
      <CityJob />
      <Latest />
  </section>
  )
}

export default Home
