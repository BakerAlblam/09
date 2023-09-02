import express from "express"
import { JobAddModel } from "../models/JobAdd"


const router = express.Router()



router.get("/latestAdds", async (req, res) => {
    try {
        const result = await JobAddModel.find({}).sort({ _id: -1 }).limit(7);
        if (!result) {
            return res.status(404).json({ message: "No data found" });
        }
        res.status(200).json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
});

router.get("/allAdds", async (req, res) => {
    const pageSize = 20;
    const { page = '0' } = req.query;
    const response = await JobAddModel.find({}, null, {
        skip: parseInt(page as string) * pageSize,
        limit: pageSize
    });
    res.status(200).json(response);
});



router.get("/profile/:id", async (req, res) => {
    try {
        const authorId = req.params.id
        const response = await JobAddModel.find({ authorId })
       
        res.json({response})
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error' });

    }
})


router.get("/singleAdd/:id", async (req, res) => { 
    try {
        const add = await JobAddModel.findById(req.params.id);
        if (!add) {
            return res.status(404).json({ error: 'Job Add not found' });
        }
        res.status(200).json(add);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Internal Server Error' }); 
    }
});


export { router as viewRouter }