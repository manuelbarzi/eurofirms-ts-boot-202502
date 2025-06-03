import mongoose from "mongoose"
import { registerUser } from "./registerUser"

mongoose.connect(process.env.MONGO_URL_TEST!)
    .then(() => {
        console.info("TEST registerUser")

        console.info("CASE succeeds on new user")

        try {
            // return registerUser("Peter Pan", "peter@pan.com", "peterpan", "123123123")
            return registerUser("Wendy Darling", "wendy@darling.com", "wendydarling", "123123123")
                // return registerUser("Cara Melo", "cara@melo.com", "caramelo", "123123123")
                .then(result => {
                    console.assert(result === undefined, "result is undefined")

                    console.log("user saved")
                })
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })
    .catch(error => console.error(error))
    .finally(() => mongoose.disconnect())