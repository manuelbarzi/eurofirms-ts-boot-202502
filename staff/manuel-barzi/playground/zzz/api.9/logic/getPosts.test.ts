import mongoose from "mongoose"
import { getPosts } from "./getPosts"

mongoose.connect("mongodb://localhost:27017/test")
    .then(() => {
        console.info("TEST getPosts")

        console.info("CASE succeeds on existing user")

        try {
            return getPosts("67ec1032b6802556f05ab65c")
                .then(posts => {
                    console.log("posts", posts)
                })
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })
    .catch(error => console.error(error))
    .finally(() => mongoose.disconnect())