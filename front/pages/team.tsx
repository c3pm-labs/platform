import { makeStyles } from '@material-ui/core/styles';
import { Avatar } from '@material-ui/core';
import LanguageIcon from '@material-ui/icons/Language';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import LinkIcon from '@material-ui/icons/Link';

// import withApollo from 'utils/withApollo';
import team from 'utils/team';
import Head from 'components/Head';
import Layout from 'components/Layout';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    margin: `0 ${theme.spacing(4)}px`,
    [theme.breakpoints.down('xs')]: {
      margin: `0 ${theme.spacing(1)}px`,
    },
  },
  profileCard: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 150,
    maxWidth: 350,
    width: '22%',
    margin: '20px 0',
    [theme.breakpoints.down('xs')]: {
      width: '50%',
      margin: 0,
    },
    height: 250,
  },
  avatar: {
    width: 120,
    height: 120,
    marginBottom: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: 500,
    marginBottom: 20,
  },
  links: {
    display: 'flex',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
  },
  link: {

    padding: `0 ${theme.spacing(1)}px`,
  },
  icon: {
    height: 20,
    width: 20,
  },
}));

function Team(): JSX.Element {
  const classes = useStyles();

  const icons = {
    github: <GitHubIcon className={classes.icon} style={{ color: '#000' }} />,
    twitter: <TwitterIcon className={classes.icon} style={{ color: '#1DA1F2' }} />,
    linkedin: <LinkedInIcon className={classes.icon} style={{ color: '#2867B2' }} />,
    blog: <LanguageIcon className={classes.icon} style={{ color: '#DA874A' }} />,
    link: <LinkIcon className={classes.icon} />,
  };

  return (
    <Layout>
      <Head title="Team" />
      <div className={classes.container}>
        {team.map((member) => (
          <div key={member.name} className={classes.profileCard}>
            <Avatar alt="member avatar" src={`https://avatars2.githubusercontent.com/u/${member.avatar}`} className={classes.avatar} />
            <span className={classes.name}>{member.name}</span>
            <div className={classes.links}>
              {member?.links?.map((media) => (
                <div key={`${member.name}-${media.name}`} className={classes.link}>
                  <a href={media.link} target="_blank" rel="noopener noreferrer">
                    {icons[media.name]}
                  </a>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
}

export default Team;
