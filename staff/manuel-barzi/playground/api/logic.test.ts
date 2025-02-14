import logic from "./logic"
import data from "./data"

try {
    logic.registerUser('Peter Pan', 'peter@pan.com', 'peterpan', '12312123')

    console.log(data.users)
} catch (error) {
    console.error(error)
}