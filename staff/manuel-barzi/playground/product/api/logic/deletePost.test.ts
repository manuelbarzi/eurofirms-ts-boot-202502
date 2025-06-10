import mongoose from "mongoose"
import { deletePost } from "./deletePost"

mongoose.connect("mongodb://localhost:27017/test")
    .then(() => {
        console.info("TEST deletePost")

        console.info("CASE succeeds on existing user")

        try {
            return deletePost("67ec1032b6802556f05ab65c", "67ec1208176c1f1779fa49c5")
                .then(result => {
                    console.assert(result === undefined, "result is undefined")

                    console.log("post deleted", result)
                })
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })
    .catch(error => console.error(error))
    .finally(() => mongoose.disconnect())