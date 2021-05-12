import { render, screen } from 'utils/test/customRender';
import { userBuilder } from 'utils/test/builder';

import Avatar from './index';

test('Avatar initial username', () => {
  const user = userBuilder();

  render(<Avatar user={user} />);
  expect(screen.getByText(user.username[0])).toBeInTheDocument();
});
