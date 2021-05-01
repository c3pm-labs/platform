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
            tags: ['boost', 'network', 'utils'],
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
            tags: ['boost', 'utils', 'network'],
          },
        ],
      },
      author: {
        connect: { id: user.id },
      },
    },
  });
  console.log(boostPkg);

  const boostAsio = await db.package.create({
    data: {
      name: 'boost-asio',
      versions: {
        create: [
          {
            version: '1.0.0',
            license: 'MIT',
            readme: `# Boost Asio
Boost Asio is cool
\`\`\`
ctpm add boost-asio
\`\`\``,
            description: 'boost is cool',
            tags: ['boost-asio', 'network'],
          },
          {
            version: '2.4.5',
            license: 'MIT',
            readme: `# Boost Asio 2
Boost Asio 2 is really cool
\`\`\`
ctpm add boost-asio
\`\`\``,
            description: 'boost asio is cool',
            tags: ['boost-asio', 'network', 'utils'],
          },
        ],
      },
      author: {
        connect: { id: user.id },
      },
    },
  });
  console.log(boostAsio);

  const sfml = await db.package.create({
    data: {
      name: 'sfml',
      versions: {
        create: [
          {
            version: '1.0.0',
            license: 'MIT',
            readme: `# sfml
sfml is cool
\`\`\`
ctpm add sfml
\`\`\``,
            description: 'sfml is cool',
            tags: ['sfml', 'graphics'],
          },
          {
            version: '2.4.5',
            license: 'MIT',
            readme: `# sfml 2
sfml 2 is really cool
\`\`\`
ctpm add sfml
\`\`\``,
            description: 'sfml is cool',
            tags: ['sfml', 'graphics'],
          },
        ],
      },
      author: {
        connect: { id: user.id },
      },
    },
  });
  console.log(sfml);

  const irrlicht = await db.package.create({
    data: {
      name: 'irrlicht',
      versions: {
        create: [
          {
            version: '1.0.0',
            license: 'MIT',
            readme: `# irrlicht
irrlicht is cool
\`\`\`
ctpm add irrlicht
\`\`\``,
            description: 'irrlicht is cool',
            tags: ['irrlicht', 'graphics'],
          },
          {
            version: '2.4.5',
            license: 'MIT',
            readme: `# irrlicht 2
irrlicht 2 is really cool
\`\`\`
ctpm add irrlicht
\`\`\``,
            description: 'irrlicht is cool',
            tags: ['irrlicht', 'graphics'],
          },
        ],
      },
      author: {
        connect: { id: user.id },
      },
    },
  });
  console.log(irrlicht);

  const utilsMath = await db.package.create({
    data: {
      name: 'maths',
      versions: {
        create: [
          {
            version: '1.0.0',
            license: 'MIT',
            readme: `# maths
maths is cool
\`\`\`
ctpm add maths
\`\`\``,
            description: 'maths is cool',
            tags: ['maths', 'utils'],
          },
          {
            version: '2.4.5',
            license: 'MIT',
            readme: `# maths 2
maths 2 is really cool
\`\`\`
ctpm add maths
\`\`\``,
            description: 'maths is cool',
            tags: ['maths', 'utils'],
          },
        ],
      },
      author: {
        connect: { id: user.id },
      },
    },
  });
  console.log(utilsMath);

  const utilsString = await db.package.create({
    data: {
      name: 'string',
      versions: {
        create: [
          {
            version: '1.0.0',
            license: 'MIT',
            readme: `# string
string is cool
\`\`\`
ctpm add string
\`\`\``,
            description: 'string is cool',
            tags: ['string', 'utils'],
          },
          {
            version: '2.4.5',
            license: 'MIT',
            readme: `# string 2
string 2 is really cool
\`\`\`
ctpm add string
\`\`\``,
            description: 'string is cool',
            tags: ['string', 'utils'],
          },
        ],
      },
      author: {
        connect: { id: user.id },
      },
    },
  });
  console.log(utilsString);
}

main()
  .catch(console.error)
  .finally(() => db.$disconnect());
