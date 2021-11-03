import DiscordButton from 'components/DiscordButton';

import Title from './Title';
import Demo from './Demo';
import Team from './Team';
import Discover from './Discover';

function Homepage(): JSX.Element {
  return (
    <>
      <Title />
      <Demo />
      <Discover />
      <Team />
      <DiscordButton />
    </>
  );
}

export default Homepage;
