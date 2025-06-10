import mongoose from "mongoose"
import { getUserName } from "./getUserName"

mongoose.connect("mongodb://localhost:27017/test")
    .then(() => {
        console.info("TEST getUserName")

        console.info("CASE succeeds on existing user")

        try {
            return getUserName("67ec1032b6802556f05ab65c")
                .then(userName => {
                    console.log("user name gotten", userName)
                })
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })
    .catch(error => console.error(error))
    .finally(() => mongoose.disconnect())