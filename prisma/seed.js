const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function seed() {
  const createdUsers = await prisma.user.createMany({
    data: [
      { username: "plice", email: "ytu@iuo.com" },
      { username: "alice", email: "ytzzu@iuo.com" },
    ],
  });

  const createdProfile = await prisma.profile.createMany({
    data: [
      {
        userId: 1,
        bio: "Not a long bio",
        profileUrl: "https://poiij.com",
      },
      {
        userId: 2,
        bio: "Not a long bio again",
        profileUrl: "https://p888j.com",
      },
    ],
  });

  const createdPosts = await prisma.post.createMany({
    data: [
      {
        title: "A post about nothing",
        content: "you have 500 characters",
        published: true,
        pictureUrl: "https://p888j.com",
        authorId: 1,
      },
      {
        title: "A post about nothing",
        content: "you have 500 characters",
        published: true,
        pictureUrl: "https://p888j.com",
        authorId: 2,
      },
      {
        title: "Another post about nothing",
        content: "you have 500 characters, is it enough?",
        published: true,
        pictureUrl: "https://p888j.com",
        authorId: 1,
      },
      {
        title: "Another post about nothing",
        content: "you have 500 characters to to finish",
        published: true,
        pictureUrl: "https://p888j.com",
        authorId: 2,
      },
    ],
  });

  const createdComments = await prisma.comment.createMany({
    data: [
      { content: "A long comment", authorId: 1, postId: 1 },
      { content: "A long comment", authorId: 2, postId: 1 },

      {
        content: "This is a comment to a comment",
        authorId: 1,
        postId: 1,
        commentId: 1,
      },
    ],
  });
  // Don't edit any of the code below this line
  process.exit(0);
}

seed().catch(async (error) => {
  console.error(error);
  await prisma.$disconnect();
  process.exit(1);
});
