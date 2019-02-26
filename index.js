const { prisma } = require("./generated/prisma-client");

// A `main` function so that we can use async/await
async function main() {
  // Read the previously created user from the database and print their posts to the console
  const postsByUser = await prisma.user({ email: "bob@prisma.io" }).posts();
  const userByPost = await prisma
    .post({ id: "cjslf4v1b00cp0831hbkb1jk6" })
    .author();
  const i = await prisma.users().posts();
  console.log(`All posts by that user: ${JSON.stringify(postsByUser)}`);
  console.log(`user by post: ${JSON.stringify(userByPost)}`);
  console.log(`all posts by all users: ${JSON.stringify(i)}`);
}

main().catch(e => console.error(e));
