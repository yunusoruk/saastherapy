const { PrismaClient } = require("@prisma/client");

const db = new PrismaClient();

async function category() {
  try {
    await db.category.createMany({
      data: [{ name: "Patient" }, { name: "Psychologist" }],
    });
  } catch (error) {
    console.error("Error seeding default categories:", error);
  } finally {
    await db.$disconnect();
  }
}

async function companion() {
  try {
    await db.companion.createMany({
      data: [
        {
          name: "Alice",
          image: "/images/avatars/avatar.png",
          description: "Test companion",
          instructions:
            "Test instructions, test, test, test, test, test, test, test, test, test, test, test, test, test, test, test, test, test, test, test, test, test, test, test, test, test, test, test, test, test, test, test, test, test, test, test, test, test, test, test, test, test, test, test, test, test, test, test, test, test, test, test, test, test, test, test, test,",
          seed: "Test seed, test, test, test, test, test, test, test, test, test, test, test, test, test, test, test, test, test, test, test, test, test, test, test, test, test, test, test, test, test, test, test, test, test, test, test, test, test, test, test, test, test, test, test, test, test, test, test, test, test, test, test, test, test, test, test, test,",
          categoryId: "76daaf66-3f91-42c3-b0db-d3b590aa8a41",
        },
      ],
    });
  } catch (error) {
    console.error("Error seeding default categories:", error);
  } finally {
    await db.$disconnect();
  }
}

async function companionUpdate() {
  try {
    await db.companion.update({
      where: {
        id: "aa0723ba-b4fa-43a5-91fb-e72998c9e5aa",
      },
      data: {
        illness: "bipolar",
      },
    });
  } catch (error) {
    console.error("Error seeding default categories:", error);
  } finally {
    await db.$disconnect();
  }
}

companionUpdate();
