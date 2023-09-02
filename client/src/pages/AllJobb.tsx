import { Button } from '@/components/ui/button'
import Hrlist from '@/components/Hrlist'
import JobAds from '@/components/JobAds'
import { Input } from '@/components/ui/input'
const AllJobb = () => {
  return (
    <section className='w-6xl flex-center flex-col'>
    <h1 className='head_text text-center my-20'>
      <span className='orange_gradient text-center italic mt-5'> Jobblocket</span>
    </h1>
     <div className="flex w-full max-w-6xl items-center mb-10 space-x-2 glassmorphism">
      <Input type="email" placeholder="Email" />
      <Button type="submit">Subscribe</Button>
    </div>
       <Hrlist />
       <JobAds />

  </section>
  )
}

export default AllJobb
