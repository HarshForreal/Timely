// prisma/seed.js
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const user1 = await prisma.user.create({
    data: {
      name: "John Doe",
      email: "john@example.com",
      password: "hashedpassword1",
      role: "user",
    },
  });

  const user2 = await prisma.user.create({
    data: {
      name: "Admin User",
      email: "admin@example.com",
      password: "hashedpassword2",
      role: "admin",
    },
  });

  await prisma.event.create({
    data: {
      title: "Birthday Party",
      description: "John's 30th Birthday",
      date: new Date("2024-04-20"),
      isApproved: true,
      creatorId: user1.id,
    },
  });

  await prisma.event.create({
    data: {
      title: "Conference Meetup",
      description: "Tech conference",
      date: new Date("2024-05-10"),
      isApproved: false,
      creatorId: user2.id,
    },
  });
}

main()
  .then(() => {
    console.log("✅ Seed data inserted successfully");
    prisma.$disconnect();
  })
  .catch((err) => {
    console.error(err);
    prisma.$disconnect();
    process.exit(1);
  });
