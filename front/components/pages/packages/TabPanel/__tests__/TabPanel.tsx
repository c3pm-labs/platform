import { render } from '@testing-library/react';

import TabPanel from '../index';

test('TabPanel', () => {
  const { container } = render(
    <TabPanel value={1} index={1}>
      toto
    </TabPanel>,
  );

  expect(container).toMatchSnapshot();
});
