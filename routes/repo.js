import express from "express";
import { addRepo, getAllRepos } from "../helper.js";

const router = express.Router();

router.post("/", async (request, response) => {
  const newrepo = request.body;
  console.log(newrepo);
  const result = await addRepo(newrepo);
  response.send(result);
});

router.get("/", async (request, response) => {
  const repos = await getAllRepos(request);
  response.send(repos);
});

export const repoRouter = router;
