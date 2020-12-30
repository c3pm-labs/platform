/* eslint-disable import/no-extraneous-dependencies */
import { render } from '@testing-library/react';

import TabPanel from '../index';

test('TabPanel', () => {
  const { container } = render(
    <TabPanel value={1} index={1}>
      toto
    </TabPanel>,
  );

  expect(container).toMatchInlineSnapshot(`
    <div>
      <div
        aria-labelledby="simple-tab-1"
        id="simple-tabpanel-1"
        role="tabpanel"
      >
        toto
      </div>
    </div>
  `);
});
