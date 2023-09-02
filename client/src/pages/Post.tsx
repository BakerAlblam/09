import { Card, Typography } from "@material-tailwind/react"
import { Button, TextArea} from "@radix-ui/themes";
  import { Input } from "@/components/ui/input"
import { useUser } from "@clerk/clerk-react";
import { useState } from "react";
import axios from "axios";
import { useForm, SubmitHandler } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
  

const Post = () => {
    const user = useUser()
    const author = user.user?.username ||  user.user?.fullName
    const authorImage = user.user?.imageUrl
    const authorId = user?.user?.id
    const [stad, setStad] = useState("")
    const [varaktighet, setVaraktighet] = useState("")
    const [anstallning, setAnstallning] = useState("")
    const notify = () => toast("Wow so easy!");

    const schema = yup.object().shape({
        title: yup.string().required("Fältet måste fyllas"),
        yrke: yup.string().required(),
        arbetsgivare: yup.string().required(),
        arbetsgivareUrl: yup.string(),
        kontakt: yup.string().required().email(),
        address: yup.string().required(),
        mainBody: yup.string().required(),
        antal: yup.number().required(),
        
    })

    const { register, handleSubmit, reset, formState: { errors }} = useForm({
        resolver: yupResolver(schema)
    })

    interface FromData  {
        title: string;
        yrke: string;
        arbetsgivare: string;
        arbetsgivareUrl: string | undefined;
        kontakt: string;
        address: string;
        mainBody: string;
        antal: number;
       
    }

    const onSubmit: SubmitHandler<FromData> = async (formData) => {
        
       try {
        await axios.post("http://localhost:3001/job/postJobbAdd", {
            author,
            authorImage,
            authorId,
           ...formData,
            stad,
            varaktighet,
            anstallning,
        })
        notify()
        reset()
       } catch (error) {
        console.log(error);
       }
    } 
  
   

  return (
    <Card color="transparent" shadow={false}>
    <Typography variant="h4" className="text-center mt-6" color="white">
      Publicera Jobbanons
    </Typography>
    <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96" onSubmit={handleSubmit(onSubmit)}>
    <div className="grid w-full max-w-sm items-center gap-1.5 my-4">

      <Input type="text" id="title"  className="my-1 border-indigo-500" placeholder="Title..." {...register("title")} />
      {errors.title?.message}

      <Input type="text"  id="yrke"className="my-1 border-indigo-500" placeholder="Yrke..." {...register("yrke")} />

      <Input type="text"   id="arbetsgivare" className="my-1 border-indigo-500" placeholder="Arbetsgivare..." {...register("arbetsgivare")} />

      <Input type="text"   id="arbetsgivareUrl" className="my-1 border-indigo-500" placeholder="Arbetsgivare URL..." {...register("arbetsgivareUrl")} />

      <Input type="email"  id="kontakt"  className="my-1 border-indigo-500" placeholder="Email för kontakt..." {...register("kontakt")} />

      <Input type="text" id="address" className="my-1 border-indigo-600" placeholder="Address" {...register("address")} />

      <Input type="number" id="antal" className="my-1 border-indigo-600" placeholder="antal" {...register("antal")} />
     
      <TextArea size={"3"}   id="mainBody"  className="my-1 border-indigo-900" placeholder="Arbetsbeskrivning" {...register("mainBody")} />


    <select value={varaktighet} id="varaktighet" name="varaktighet" className=" border-indigo-500 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500" required onChange={(e) => setVaraktighet(e.target.value)}>
        <option selected>Varaktighet</option>
        <option value="deltid">Deltid</option>
        <option value="heltid">Heltid</option>
    </select>

    <select value={anstallning} id="anstallning" name="anstallning" className=" border-indigo-500 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500" required onChange={(e) => setAnstallning(e.target.value)}>
        <option selected>Anställningsform</option>
        <option value="tillsvidare">Tillsvidare</option>
        <option value="vidBevoh">Vid behov</option>
        <option value="sommarjobb">Sommarjobb</option>
    </select>

    <select value={stad} id="stad" name="stad" className=" border-indigo-500 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500" required onChange={(e) => setStad(e.target.value)}>
        <option selected>Stad</option>
        <option value="Stockholm">Stockholm</option>
        <option value="Göteborg">Göteborg</option>
        <option value="Uppsala">Uppsala</option>
    </select>

  

      
      <Typography color="gray" className="mt-4 text-center font-normal">
      <Button  m="2" color="crimson" size="3" variant="solid">
    Publicera 
  </Button>
  <ToastContainer />
      </Typography>
      </div>
    </form>
  </Card>
 
  )
}

export default Post
