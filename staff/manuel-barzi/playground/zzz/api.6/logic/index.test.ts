import mongoose from "mongoose"

import { logic } from "."

mongoose.connect("mongodb://localhost:27017/test")
    // .then(() => {
    //     console.info("SUITE logic")

    //     console.info("TEST registerUser")

    //     console.info("CASE succeeds on new user")

    //     {
    //         try {
    //             // return logic.registerUser("Peter Pan", "peter@pan.com", "peterpan", "123123123")
    //             return logic.registerUser("Wendy Darling", "wendy@darling.com", "wendydarling", "123123123")
    //                 .then(result => {
    //                     console.assert(result === undefined, "result is undefined")

    //                     console.log("user saved")
    //                 })
    //                 .catch(error => console.error(error))
    //         } catch (error) {
    //             console.error(error)
    //         }
    //     }
    // })
    // .then(() => {
    //     console.info("TEST authenticateUser")

    //     console.info("CASE succeeds on existing user")

    //     {
    //         try {
    //             return logic.authenticateUser("peterpan", "123123123")
    //                 .then(userId => {
    //                     console.log("user authenticated", userId)
    //                 })
    //                 .catch(error => console.error(error))
    //         } catch (error) {
    //             console.error(error)
    //         }
    //     }
    // })
    // .then(() => {
    //     console.info("TEST getUserName")

    //     console.info("CASE succeeds on existing user")

    //     {
    //         try {
    //             return logic.getUserName("67d0683bdaa6b6a321765673")
    //                 .then(userName => {
    //                     console.log("user name gotten", userName)
    //                 })
    //                 .catch(error => console.error(error))
    //         } catch (error) {
    //             console.error(error)
    //         }
    //     }
    // })
    // .then(() => {
    //     console.info("TEST createPost")

    //     console.info("CASE succeeds on existing user")

    //     {
    //         try {
    //             return logic.createPost("67d0683bdaa6b6a321765673", "http://image.com/123", "hello world")
    //                 .then(result => {
    //                     console.assert(result === undefined, "result is undefined")

    //                     console.log("post created")
    //                 })
    //                 .catch(error => console.error(error))
    //         } catch (error) {
    //             console.error(error)
    //         }
    //     }
    // })
    // .then(() => {
    //     console.info("TEST getPosts")

    //     console.info("CASE succeeds on existing user")

    //     {
    //         try {
    //             return logic.getPosts("67d0683bdaa6b6a321765673")
    //                 .then(posts => {
    //                     console.log("posts", posts)
    //                 })
    //                 .catch(error => console.error(error))
    //         } catch (error) {
    //             console.error(error)
    //         }
    //     }
    // })
    .then(() => {
        console.info("TEST deletePost")

        console.info("CASE succeeds on existing user")

        {
            try {
                return logic.deletePost("67d9a7238f3db5086f355ab6", "67d9a74535c15df007830df1")
                    .then(result => {
                        console.assert(result === undefined, "result is undefined")

                        console.log("post deleted", result)
                    })
                    .catch(error => console.error(error))
            } catch (error) {
                console.error(error)
            }
        }
    })
    .catch(error => console.error(error))
    .finally(() => mongoose.disconnect())