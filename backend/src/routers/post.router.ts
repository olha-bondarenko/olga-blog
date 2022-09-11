import { Router } from 'express';
import asyncHandler from 'express-async-handler';
import { PostModel } from '../models/post';

const router = Router();

// router.get("/seed", asyncHandler (
//     async (req, res) => {
//         const postsCount = await PostModel.countDocuments();
//         if (postsCount > 0) {
//             res.send("Seed is already done!")
//             return;
//         }
//         await PostModel. create(posts);
//         res.send("Seed is Done!")
//     })
// )

router.get("/", asyncHandler(
    async (req, res) => {
        const posts = await PostModel.find();
        res.send(posts);
    })
) 

export default router;