import mongoose from "mongoose";

const JobAddSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    yrke: {
        type: String,
    },
    stad: {
        type: String,
    },
    varaktighet: {
        type: String,
    },
    anstallningsform: {
        type: String,
    },
    mainBody: {
        type: String,
    },
    arbetsgivare: {
        type: String,
    },
    arbetsgivareUrl: {
        type: String,
    },
    address: {
        type: String,
    },
    kontakt: {
        type: String,
    },
    omfattning: {
        type: String,
    },
    antal: {
        type: Number,
    },
    author: {
        type: String,
    },
    authorImage: {
        type: String,
    },
    authorId: {
        type: String,
    },
    tidStamp: {
        type: Date,
        default: Date.now,
    },
})

export const JobAddModel = mongoose.model("jobbAdd", JobAddSchema)