import mongoose, { Types } from "mongoose"
import { expect } from "chai"
import { User } from "../data/models"
import { getUser } from "./getUser"
import { SystemError, NotFoundError } from "com/errors"
import { UserType } from "./types"

const { ObjectId } = Types

describe("getUser", () => {
    before(() => mongoose.connect(process.env.MONGO_URL_TEST!))

    beforeEach(() => User.deleteMany({}))

    it("gets an existing user", () => {
        let userId: string, user: UserType

        return User.create({ name: "Pepi Nillo", email: "pepi@nillo.com", username: "pepinillo", password: "12312123" })
            .then(user => {
                userId = user.id

                return getUser(userId)
            })
            .then(_user => user = _user)
            .finally(() => {
                expect(user.id).to.equal(userId)
                expect(user.name).to.equal("Pepi Nillo")
                expect(user.email).to.equal("pepi@nillo.com")
                expect(user.username).to.equal("pepinillo")
            })
    })

    it("fails on non-existing user", () => {
        let error: Error

        return getUser(new ObjectId().toString())
            .catch(_error => error = _error)
            .finally(() => {
                expect(error).to.be.instanceOf(NotFoundError)
                expect(error.message).to.equal("user not found")
            })
    })

    afterEach(() => User.deleteMany({}))

    after(() => mongoose.disconnect())
})