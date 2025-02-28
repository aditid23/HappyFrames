import PostMessage from "../models/postMessage.js";
import mongoose from 'mongoose';

export const getPosts = async(req, res) => {
    try{
        const postMessages = await PostMessage.find();

        console.log(postMessages);

        res.status(200).json(postMessages); 
    }
    catch(error){
        res.status(404).json({message: error.message});

    }
} 

export const createPost = async(req, res) => {
    const post = req.body;

    const newPost = new PostMessage(post);

    try{
        await newPost.save();

        res.status(201).json(newPost);
    } catch(error){
        res.status(409).json({message: error.message});
    }
}

export const updatePost = async (req, res) => {
    const { id: _id } = req.params;
    const post = req.body;

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post with that ID');
    
    const updatedPost = await PostMessage.findByIdAndUpdate(_id, {...post, _id}, {new: true});

    res.json(updatedPost);
}

export const deletePost = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ message: "Invalid post ID" });
    }

    const post = await PostMessage.findById(id);
    if (!post) {
        return res.status(404).json({ message: "No post with that ID" });
    }

    await PostMessage.findByIdAndDelete(id);

    console.log("Delete successful");

    res.json({ message: "Post deleted successfully" });
};

export const likePost = async(req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ message: "Invalid post ID" });
    }

    const post = await PostMessage.findById(id);
    if (!post) {
        return res.status(404).json({ message: "No post with that ID" });
    }
    else{
        const updatedPost = await PostMessage.findByIdAndUpdate(
            id,
            { $inc: { likeCount: 1 } }, // Increment likeCount by 1
            { new: true }
        );
    
        res.json(updatedPost);
    }
}