import { render, screen } from 'utils/test/customRender';
import { userBuilder } from 'utils/test/builder';

import Avatar from './index';

const fakeUser = userBuilder();

test('Avatar initial username', () => {
  render(<Avatar user={fakeUser} />);
  expect(screen.getByText(fakeUser.username[0])).toBeInTheDocument();
});
