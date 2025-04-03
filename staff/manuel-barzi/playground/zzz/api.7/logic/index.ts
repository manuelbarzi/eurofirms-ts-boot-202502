import { Logic, PostType } from "./types"

import { registerUser } from "./registerUser"
import { authenticateUser } from "./authenticateUser"
import { getUserName } from "./getUserName"
import { createPost } from "./createPost"
import { getPosts } from "./getPosts"
import { deletePost } from "./deletePost"

const logic: Logic = {
    registerUser,
    authenticateUser,
    getUserName,

    createPost,
    getPosts,
    deletePost
}

export {
    logic
}