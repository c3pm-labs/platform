/* eslint-disable import/no-extraneous-dependencies */
import { render } from '@testing-library/react';

import VersionList from '../index';

test('VersionList', () => {
  const mockVersions = [
    {
      version: '0.1.5',
      publishedAt: '10:04:1999',
      description: 'hot fix',
      readme: 'blablabla',
    },
    {
      version: '0.2.5',
      publishedAt: '10:04:1999',
      description: 'hot fix',
      readme: 'blablabla',
    },
  ];

  const { container } = render(
    <VersionList versions={mockVersions} packageName="math" />,
  );

  expect(container).toMatchInlineSnapshot(`
    <div>
      <div
        class="makeStyles-versions-1"
      >
        <h2
          class="makeStyles-title-2"
        >
          v
          0
          :
        </h2>
        <a
          href="/package/math/0.2.5"
        >
          <span
            class="makeStyles-versionName-3"
          >
            0.2.5
          </span>
          <div
            class="makeStyles-separator-4"
          />
          <span
            class="makeStyles-versionDate-5"
          >
            Fri Jan 01 1999
          </span>
        </a>
        <a
          href="/package/math/0.1.5"
        >
          <span
            class="makeStyles-versionName-3"
          >
            0.1.5
          </span>
          <div
            class="makeStyles-separator-4"
          />
          <span
            class="makeStyles-versionDate-5"
          >
            Fri Jan 01 1999
          </span>
        </a>
      </div>
    </div>
  `);
});
