import mongoose from "mongoose"
import { createPost } from "./createPost"

mongoose.connect("mongodb://localhost:27017/test")
    .then(() => {
        console.info("TEST createPost")

        console.info("CASE succeeds on existing user")

        try {
            return createPost("67ec1032b6802556f05ab65c", "http://image.com/123", "hello world")
                .then(result => {
                    console.assert(result === undefined, "result is undefined")

                    console.log("post created")
                })
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })
    .catch(error => console.error(error))
    .finally(() => mongoose.disconnect())