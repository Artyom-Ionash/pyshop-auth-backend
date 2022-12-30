import { PrismaClient, Prisma } from '@prisma/client';

import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

const userData: Prisma.UserCreateInput[] = [
  {
    email: 'john',
    hash: bcrypt.hashSync('changeme', +process.env.SALT_ROUNDS),
    phone: '+111',
  },
  {
    email: 'chris',
    hash: bcrypt.hashSync('secret', +process.env.SALT_ROUNDS),
    phone: '+222',
  },
  {
    email: 'maria',
    hash: bcrypt.hashSync('guess', +process.env.SALT_ROUNDS),
    phone: '+333',
  },
];

async function main() {
  console.log(`Start seeding ...`);
  for (const u of userData) {
    const user = await prisma.user.upsert({
      where: { email: u.email },
      update: {},
      create: u,
    });
    console.log(`Created user with id: ${user.id}`);
  }
  console.log(`Seeding finished.`);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
