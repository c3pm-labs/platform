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
      tags: ['boost', 'network', 'utils'],
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
          {
            version: '2.4.6',
            license: 'MIT',
            readme: `# Boost 2
Boost 2 is really cool
\`\`\`
ctpm add boost
\`\`\``,
            description: 'boost is cool',
          },
          {
            version: '2.4.10',
            license: 'MIT',
            readme: `# Boost 2
Boost 2 is really cool
\`\`\`
ctpm add boost
\`\`\``,
            description: 'boost is cool',
          },
          {
            version: '2.10.5',
            license: 'MIT',
            readme: `# Boost 2
Boost 2 is really cool
\`\`\`
ctpm add boost
\`\`\``,
            description: 'boost is cool',
          },
          {
            version: '4.4.5',
            license: 'MIT',
            readme: `# Boost 2
Boost 2 is really cool
\`\`\`
ctpm add boost
\`\`\``,
            description: 'boost is cool',
          },
          {
            version: '4.4.6',
            license: 'MIT',
            readme: `# Boost 2
Boost 2 is really cool
\`\`\`
ctpm add boost
\`\`\``,
            description: 'boost is cool',
          },
          {
            version: '6.4.5',
            license: 'MIT',
            readme: `# Boost 2
Boost 2 is really cool
\`\`\`
ctpm add boost
\`\`\``,
            description: 'boost is cool',
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
      tags: ['boost-asio', 'network', 'utils'],
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
          },
          {
            version: '2.4.6',
            license: 'MIT',
            readme: `# Boost Asio 2
Boost Asio 2 is really cool
\`\`\`
ctpm add boost-asio
\`\`\``,
            description: 'boost asio is cool',
          },
          {
            version: '2.4.7',
            license: 'MIT',
            readme: `# Boost Asio 2
Boost Asio 2 is really cool
\`\`\`
ctpm add boost-asio
\`\`\``,
            description: 'boost asio is cool',
          },
          {
            version: '3.0.0',
            license: 'MIT',
            readme: `# Boost Asio 2
Boost Asio 2 is really cool
\`\`\`
ctpm add boost-asio
\`\`\``,
            description: 'boost asio is cool',
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
      tags: ['sfml', 'graphics'],
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
      tags: ['irrlicht', 'graphics'],
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
      tags: ['maths', 'utils'],
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
      tags: ['string', 'utils'],
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
