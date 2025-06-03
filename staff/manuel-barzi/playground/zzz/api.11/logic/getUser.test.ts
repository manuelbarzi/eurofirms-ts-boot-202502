import mongoose from "mongoose"
import { getUser } from "./getUser"

mongoose.connect(process.env.MONGO_URL_TEST!)
    .then(() => {
        console.info("TEST getUser")

        console.info("CASE succeeds on existing user")

        try {
            return getUser("681ccdefbd7959be5cbad5a2")
                .then(user => {
                    console.log("user gotten", user)
                })
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })
    .catch(error => console.error(error))
    .finally(() => mongoose.disconnect())