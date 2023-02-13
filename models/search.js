import { users } from "./schemaUser.js";


export async function search(data) {
    console.log(data);
  const result = await users.find({ "$or": [
    { "Email": { "$regex": data} }, 
    { "Name": { "$regex": data }}
]})
return result
console.log(result);
  
}
