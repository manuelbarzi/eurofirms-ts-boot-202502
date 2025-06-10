import { Logic, PostType } from "./types"

import { registerUser } from "./registerUser"
import { authenticateUser } from "./authenticateUser"
import { getUser } from "./getUser"
import { createPost } from "./createPost"
import { getPosts } from "./getPosts"
import { deletePost } from "./deletePost"

export const logic: Logic = {
    registerUser,
    authenticateUser,
    getUser,

    createPost,
    getPosts,
    deletePost
}