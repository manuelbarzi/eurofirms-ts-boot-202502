import { z, ZodSchema } from "zod"

class ValidationError extends Error {
    constructor(message: string) {
        super(message)
    }
}

const checkId = value => /^[0-9a-fA-F]{24}$/.test(value)
const idSchema = z.string().refine(checkId, { message: "invalid id, not a 24-character hexadecimal string" })
const nameSchema = z.string().min(1).max(30)

// try {
//     const data = idSchema.parse("507f1f77bcf86cd7994390101")

//     console.log("Valid:", data)
// } catch (error) {
//     throw new ValidationError(error.errors[0]?.message || "validation failed")
// }

// const result = idSchema.safeParse("507f1f77bcf86cd799439010")
// if (result.success) {
//     console.log("Valid:", result.data)
// } else {
//     throw new ValidationError(result.error.errors[0]?.message || "validation failed")
// }

function validate<T>(schema: ZodSchema<T>, data: unknown) {
    const result = schema.safeParse(data)

    if (result.success)
        return

    throw new ValidationError(result.error.errors[0]?.message || "validation failed")
}

// try {
//     const id = "507f1f77bcf86cd799439010"

//     validate(idSchema, id)

//     console.log("Valid:", id)
// } catch (error) {
//     if (error instanceof ValidationError) {
//         console.log("Validation Error:", error.message)
//     }
// }

try {
    const name = "X"

    validate(nameSchema, name)

    console.log("Valid:", name)
} catch (error) {
    if (error instanceof ValidationError) {
        console.log("Validation Error:", error.message)
    }
}