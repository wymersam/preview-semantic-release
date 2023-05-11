import { getBranches } from "../git.js";

export default async (repositoryUrl, { cwd }, branches) => {
  const gitBranches = await getBranches(repositoryUrl, { cwd });

  console.log(gitBranches, branches);
};
