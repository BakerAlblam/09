import express  from "express";
import { JobAddModel } from "../models/JobAdd";

const router = express.Router()

router.post("/postJobbAdd", async (req,res) => {
    const { title, yrke, stad, varaktighet, anstallningsform, mainBody, arbetsgivare, arbetsgivareUrl, address, kontakt, author, authorImage, antal, omfattning, authorId } = req.body

    try {
        const jobbAdd = new JobAddModel({ title, yrke, stad, varaktighet, anstallningsform, arbetsgivareUrl, mainBody, arbetsgivare, address, kontakt, author, authorImage, antal, omfattning,  authorId })

        await jobbAdd.save()

        res.status(201).json({ message: "posted"})
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Server error" });
    }
})


export { router as addRouter }