const express = require("express");
const { ReviewModel21 } = require("../../model/reviewModel/review21.model");

const ReviewRouter21 = express.Router();

// 1st review

ReviewRouter21.post("/add21", async (req, res) => {
    const payload = req.body;
    try {
        const new_review = new ReviewModel21(payload);
        await new_review.save();
        res.send("review added")
    } catch (error) {
        console.log("Something went wrong");
        res.send(error);
    }
})


ReviewRouter21.get("/add21", async (req, res) => {
    try {
        const page = parseInt(req.query.page) - 1 || 0;
        const limit = parseInt(req.query.limit) || 3;
        const review = await ReviewModel21.find().skip(page * limit).limit(limit)
        res.send(review);
    } catch (error) {
        console.log("Something went wrong");
        res.send(error);
    }
})


module.exports = {
    ReviewRouter21
}