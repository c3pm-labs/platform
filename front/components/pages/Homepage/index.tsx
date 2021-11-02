import DiscordButton from 'components/DiscordButton';

import Title from './Title';
import Demo from './Demo';
import Team from './Team';

function Homepage(): JSX.Element {
  return (
    <>
      <Title />
      <Demo />
      <Team />
      <DiscordButton />
    </>
  );
}

export default Homepage;
