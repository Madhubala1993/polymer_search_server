import { client } from "./index.js";

export async function addRepo(newrepo) {
  return await client.db("mongo_db").collection("aws").insertMany(newrepo);
}

export async function getAllRepos(request) {
  return await client
    .db("mongo_db")
    .collection("aws")
    .find(request.query)
    .toArray();
}
