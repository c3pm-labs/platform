import { render, screen } from 'utils/test/customRender';
import { fakeUser } from 'utils/test/builder';

import Avatar from './index';

test('Avatar initial username', () => {
  render(<Avatar user={fakeUser} />);

  const avatar = screen.getByText(fakeUser.username[0]);
  expect(avatar).toHaveTextContent(fakeUser.username[0]);
});
