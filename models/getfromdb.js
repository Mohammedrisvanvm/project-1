import users from "./schemaUser.js"

const getDocument=async()=>{
    const result=await users.find()
}
export default getDocument
