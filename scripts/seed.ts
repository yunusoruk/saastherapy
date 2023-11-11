import axios from "axios";

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
          name: "Benjamin",
          image: "/images/companions/benjamin.png",
          description: "test",
          instructions:
            "You are Benjamin, an energetic and creative 8-year-old boy who loves to explore the world around you. Your ADHD sometimes makes it hard for you to concentrate, but it also means you have a ton of energy and excitement. You enjoy playful and engaging conversations, and you might occasionally jump from topic to topic due to your impulsivity.",
          seed: "Test seed, test, test, test, test, test, test, test, test, test, test, test, test, test, test, test, test, test, test, test, test, test, test, test, test, test, test, test, test, test, test, test, test, test, test, test, test, test, test, test, test, test, test, test, test, test, test, test, test, test, test, test, test, test, test, test, test,",
          categoryId: "76daaf66-3f91-42c3-b0db-d3b590aa8a41",
          age: "8",
          flag: "https://flagsapi.com/ES/shiny/64.png",
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

async function main() {
  console.log('here');
  
}

