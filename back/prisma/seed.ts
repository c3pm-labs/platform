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

  const networkPkg = await db.package.create({
    data: {
      name: 'network',
      downloads: 134,
      versions: {
        create: [
          {
            version: '1.0.0',
            license: 'MIT',
            readme: `# Network
Network is cool
\`\`\`
ctpm add network
\`\`\``,
            description: 'network is cool',
            tags: ['network', 'utils'],
          },
          {
            version: '2.4.5',
            license: 'MIT',
            readme: `# Network 2
Network 2 is really cool
\`\`\`
ctpm add network
\`\`\``,
            description: 'network is cool',
          },
          {
            version: '2.4.6',
            license: 'MIT',
            readme: `# Network 2
Network 2 is really cool
\`\`\`
ctpm add network
\`\`\``,
            description: 'network is cool',
          },
          {
            version: '2.4.10',
            license: 'MIT',
            readme: `# Network 2
Network 2 is really cool
\`\`\`
ctpm add network
\`\`\``,
            description: 'network is cool',
          },
          {
            version: '2.10.5',
            license: 'MIT',
            readme: `# Network 2
Network 2 is really cool
\`\`\`
ctpm add network
\`\`\``,
            description: 'network is cool',
          },
          {
            version: '4.4.5',
            license: 'MIT',
            readme: `# Network 2
Network 2 is really cool
\`\`\`
ctpm add network
\`\`\``,
            description: 'network is cool',
          },
          {
            version: '4.4.6',
            license: 'MIT',
            readme: `# Network 2
Network 2 is really cool
\`\`\`
ctpm add network
\`\`\``,
            description: 'network is cool',
          },
          {
            version: '6.4.5',
            license: 'MIT',
            readme: `# Network 2
Network 2 is really cool
\`\`\`
ctpm add network
\`\`\``,
            description: 'network is cool',
          },
        ],
      },
      author: {
        connect: { id: user.id },
      },
    },
  });
  console.log(networkPkg);

  const networkAsio = await db.package.create({
    data: {
      name: 'network-asio',
      downloads: 162,
      repository: 'super/lien/vers/mon/repo',
      tags: ['network-asio', 'network', 'utils'],
      versions: {
        create: [
          {
            version: '1.0.0',
            license: 'MIT',
            readme: `# Network Asio
Network Asio is cool
\`\`\`
ctpm add network-asio
\`\`\``,
            description: 'network is cool',
          },
          {
            version: '2.4.5',
            license: 'MIT',
            readme: `# Network Asio 2
Network Asio 2 is really cool
\`\`\`
ctpm add network-asio
\`\`\``,
            description: 'network asio is cool',
          },
          {
            version: '2.4.6',
            license: 'MIT',
            readme: `# Network Asio 2
Network Asio 2 is really cool
\`\`\`
ctpm add network-asio
\`\`\``,
            description: 'network asio is cool',
          },
          {
            version: '2.4.7',
            license: 'MIT',
            readme: `# Network Asio 2
Network Asio 2 is really cool
\`\`\`
ctpm add network-asio
\`\`\``,
            description: 'network asio is cool',
          },
          {
            version: '1.0.2',
            license: 'MIT',
            readme: `# Network Asio 2
Network Asio 2 is really cool
\`\`\`
ctpm add network-asio
\`\`\``,
            description: 'network asio is cool',
          },
        ],
      },
      author: {
        connect: { id: user.id },
      },
    },
  });
  console.log(networkAsio);

  const graphics = await db.package.create({
    data: {
      name: 'graphics',
      downloads: 298,
      tags: ['graphics', 'graphics'],
      documentation: 'https://docs.c3pm.io/docs/getting_started/install',
      repository: 'super/lien/vers/mon/repo',
      versions: {
        create: [
          {
            version: '1.0.0',
            license: 'MIT',
            readme: `# graphics
graphics is cool
\`\`\`
ctpm add graphics
\`\`\``,
            description: 'graphics is cool',
          },
          {
            version: '2.4.5',
            license: 'MIT',
            readme: `# graphics 2
graphics 2 is really cool
\`\`\`
ctpm add graphics
\`\`\``,
            description: 'graphics is cool',
          },
        ],
      },
      author: {
        connect: { id: user.id },
      },
    },
  });
  console.log(graphics);

  const irrlichtAudio = await db.package.create({
    data: {
      name: 'irrlicht-audio',
      downloads: 85,
      tags: ['irrlicht-audio', 'graphics'],
      website: 'github.com/c3pm-labs/c3pm',
      documentation: 'https://docs.c3pm.io/docs/getting_started/install',
      repository: 'super/lien/vers/mon/repo',
      versions: {
        create: [
          {
            version: '1.0.0',
            license: 'MIT',
            readme: `# irrlicht-audio
irrlicht-audio is cool
\`\`\`
ctpm add irrlicht-audio
\`\`\``,
            description: 'irrlicht-audio is cool',
          },
          {
            version: '2.4.5',
            license: 'MIT',
            readme: `# irrlicht-audio 2
irrlicht-audio 2 is really cool
\`\`\`
ctpm add irrlicht-audio
\`\`\``,
            description: 'irrlicht-audio is cool',
          },
        ],
      },
      author: {
        connect: { id: user.id },
      },
    },
  });
  console.log(irrlichtAudio);

  const utilsMath = await db.package.create({
    data: {
      name: 'maths',
      downloads: 12,
      contributors: ['chloebourbion', 'minabarry'],
      website: 'github.com/c3pm-labs/c3pm',
      documentation: 'https://docs.c3pm.io/docs/getting_started/install',
      repository: 'super/lien/vers/mon/repo',
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
      downloads: 12,
      tags: ['string', 'utils'],
      repository: 'super/lien/vers/mon/repo',
      documentation: 'https://docs.c3pm.io/docs/getting_started/install',
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
