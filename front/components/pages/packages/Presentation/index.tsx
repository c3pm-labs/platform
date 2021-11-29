import MenuBookIcon from '@material-ui/icons/MenuBook';
import CodeIcon from '@material-ui/icons/Code';
import PeopleIcon from '@material-ui/icons/People';
import LanguageIcon from '@material-ui/icons/Language';
import React from 'react';
import Link from 'next/link';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import InstallButton from '../InstallButton';
import Avatar from '../../../Avatar';
import { Version } from '../../../../types';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    margin: `${theme.spacing(2)}px ${theme.spacing(3)}px`,
    [theme.breakpoints.down('xs')]: {
      margin: theme.spacing(2),
    },
  },
  containerLoader: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '25%',
  },
  tab: {
    '& .MuiTab-root': {
      color: theme.palette.grey[500],
      [theme.breakpoints.down('xs')]: {
        width: '50%',
      },
    },
    '& .Mui-selected': {
      color: theme.palette.primary.main,
    },
    '& .MuiTabs-fixed > span': {
      backgroundColor: theme.palette.primary.main,
    },
  },
  header: {
    background: 'linear-gradient(100.51deg, rgba(0, 184, 230, 0.14) 45.2%, rgba(255, 112, 68, 0.2) 79.05%)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'baseline',
    justifyContent: 'space-between',
    [theme.breakpoints.up('sm')]: {
      paddingLeft: theme.spacing(20),
      paddingRight: theme.spacing(20),
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(1),
      marginBottom: theme.spacing(4),
    },
    [theme.breakpoints.down('xs')]: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
    },
    '& h1': {
      color: theme.palette.primary.main,
      margin: `${theme.spacing(2)}px ${theme.spacing(1)}px ${theme.spacing(2)}px 0`,
      [theme.breakpoints.down('xs')]: {
        margin: `${theme.spacing(1)}px 0`,
      },
    },
  },
  version: {
    fontWeight: 500,
    fontSize: 18,
  },
  description: {
    color: theme.palette.grey[500],
    marginBottom: theme.spacing(2),
    whiteSpace: 'pre-wrap',
    fontSize: 16,
    [theme.breakpoints.down('xs')]: {
      marginTop: theme.spacing(1),
    },
  },
  update: {
    fontSize: 12,
    fontWeight: 'normal',
  },
  avatar: {
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    cursor: 'pointer',
  },
  picture: {
    height: 30,
    width: 30,
  },
  name: {
    color: theme.palette.text.primary,
  },
  separator: {
    width: 1,
    margin: `0 ${theme.spacing(1)}px`,
    height: 28,
    backgroundColor: theme.palette.grey[300],
  },
  line: {
    display: 'flex',
    flexWrap: 'nowrap',
    alignItems: 'baseline',
    width: '100%',
  },
  widthAuto: {
    width: 'auto',
  },
  alignCenter: {
    alignItems: 'center',
  },
  spaceBetween: {
    justifyContent: 'space-between',
  },
  tagsContainer: {
    display: 'flex',
  },
  tag: {
    fontSize: 12,
    marginRight: 5,
    color: theme.palette.text.primary,
    background: 'rgba(0,184,230, 0.3)', // main with opacity
    borderRadius: theme.shape.borderRadius,
    padding: 3,
  },
  metadataContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    margin: '10px 0',
    flexWrap: 'wrap',
    '& .info': {
      display: 'flex',
      alignItems: 'center',
      marginRight: 20,
      '& a': {
        textDecoration: 'none',
        color: 'black',
      },
      '& svg': {
        fill: theme.palette.primary.dark,
        marginRight: 3,
        width: 18,
      },
    },
  },
}));

export interface PresentationProps {
  version: Version
}

const Presentation = ({ version } : PresentationProps): JSX.Element => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'));
  const gotMetaData = version.package.repository !== '' || version.package.documentation !== ''
    || version.package.contributors.length > 0 || version.package.website !== '';

  return (
    <div className={classes.header}>
      <div className={`${classes.spaceBetween} ${classes.line}`}>
        <div className={`${classes.widthAuto} ${!isMobile && classes.line}`}>
          <h1 data-testid="name">{version.package.name}</h1>
          <span className={classes.version} data-testid="version">
            v
            {version.version}
          </span>
        </div>
        {!isMobile && (
          <InstallButton packageName={version.package.name} />
        )}
      </div>
      <div className={classes.description}>{version.description}</div>
      <div className={`${classes.line} ${classes.alignCenter}`}>
        { version.package.tags?.length > 0 ? (
          <>
            <div className={classes.tagsContainer}>
              {version.package.tags?.map(
                (tag) => <span className={classes.tag} key={tag}>{tag}</span>)}
            </div>
            <div className={classes.separator} />
          </>
        ) : null}
        <span className={classes.update}>
          Last updated on&nbsp;
          {(new Date(version.package.latest.publishedAt)).toDateString()}
        </span>
        <div className={classes.separator} />
        <Avatar
          user={version.package.author}
          classes={
            { container: classes.avatar, picture: classes.picture, name: classes.name }
          }
          testId="author"
        />
      </div>
      { gotMetaData ? (
        <div className={classes.metadataContainer}>
          {version.package.documentation && (
            <div className="info">
              <MenuBookIcon />
              <a href={version.package.documentation}>Documentation</a>
            </div>
          )}
          {version.package.repository && (
            <div className="info">
              <CodeIcon />
              <a href={version.package.repository}>Our Repository</a>
            </div>
          )}
          {version.package.contributors.length > 0 && (
            <div className="info">
              <PeopleIcon />
              {version.package.contributors.join(' - ')}
            </div>
          )}
          {version.package.website && (
            <div className="info">
              <LanguageIcon />
              <a href={version.package.website}>Visit our website</a>
            </div>
          )}
        </div>
      ) : null }
    </div>
  );
};

export default Presentation;
