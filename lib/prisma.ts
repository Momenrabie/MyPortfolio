import { PrismaNeon } from "@prisma/adapter-neon";

import { serverEnv } from "@/lib/env";
import { PrismaClient } from "@/lib/generated/prisma/client";

const createPrismaClient = () =>
  new PrismaClient({
    adapter: new PrismaNeon({ connectionString: serverEnv.DATABASE_URL }),
  });

const globalForPrisma = globalThis as unknown as {
  prisma?: ReturnType<typeof createPrismaClient>;
};

export const prisma = globalForPrisma.prisma ?? createPrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}
