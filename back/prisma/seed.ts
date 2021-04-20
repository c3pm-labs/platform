/* eslint-disable no-console */

import { PrismaClient } from '@prisma/client';

const db = new PrismaClient();

async function main() {
  const user = await db.user.create({
    data: {
      email: 'demo@demo.com',
      username: 'demodemo',
      password: '$2a$10$pCEPFTJPFaCFTJ9WYjbSD.QvACtcpkSigridFBGpYRmUdF5jR16IW', // demodemo
    },
  });

  const boostPkg = await db.package.create({
    data: {
      name: 'boost',
      versions: {
        create: [
          {
            version: '1.0.0',
            license: 'MIT',
            readme: `# Boost
Boost is cool
\`\`\`
ctpm add boost
\`\`\``,
            description: 'boost is cool',
            tags: ['boost', 'network'],
          },
          {
            version: '2.4.5',
            license: 'MIT',
            readme: `# Boost 2
Boost 2 is really cool
\`\`\`
ctpm add boost
\`\`\``,
            description: 'boost is cool',
            tags: ['boost', 'utils'],
          },
        ],
      },
      author: {
        connect: { id: user.id },
      },
    },
  });

  console.log(boostPkg);
}

main()
  .catch(console.error)
  .finally(() => db.$disconnect());
