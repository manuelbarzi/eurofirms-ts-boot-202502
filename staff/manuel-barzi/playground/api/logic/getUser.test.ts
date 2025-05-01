import mongoose from "mongoose"
import { getUser } from "./getUser"

mongoose.connect(process.env.MONGO_URL_TEST!)
    .then(() => {
        console.info("TEST getUser")

        console.info("CASE succeeds on existing user")

        try {
            return getUser("6813dd5e711adc7719791875")
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