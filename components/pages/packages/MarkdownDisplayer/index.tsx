import React from 'react';
import ReactMarkdown from 'react-markdown';
import { makeStyles } from '@material-ui/core/styles';

export interface MarkdownDisplayerProps {
  source: string;
  className?: string;
  escapeHtml?: boolean
}

const useStyles = makeStyles((theme) => ({
  readme: {
    '& > *': {
      fontFamily: 'Segoe UI,Helvetica, Arial, sans-serif',
      fontSize: 16,
      overflowWrap: 'break-word',
    },
    '& code': {
      fontFamily: 'SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace',
      fontSize: 14,
      backgroundColor: '#f0f5f9',
      borderRadius: theme.shape.borderRadius,
      padding: '3px 5px',
    },
    '& > pre': {
      padding: theme.spacing(1),
      overflow: 'auto',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: '#f0f5f9',
      '& > code': {
        borderRadius: 'none',
        backgroundColor: 'none',
      },
    },
    '& a': {
      textDecoration: 'none',
      color: theme.palette.primary.main,
    },
    '& > h1, h2': {
      paddingBottom: '0.3em',
      borderBottom: '1px solid #eaecef',
    },
    '& > h1, h2, h3, h4, h5, h6': {
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(2),
      fontWeight: '600',
    },
    '& > h1': {
      fontSize: 32,
    },
    '& > h2': {
      fontSize: 24,
    },
    '& > h3': {
      fontSize: 20,
    },
    '& > h4': {
      fontSize: 16,
    },
    '& > h5': {
      fontSize: 14,
    },
  },
}));

function MarkdownDisplayer({ source, className, escapeHtml = false }: MarkdownDisplayerProps):
JSX.Element {
  const classes = useStyles();

  return (
    <div className={classes.readme}>
      <ReactMarkdown source={source} className={className} escapeHtml={escapeHtml} />
    </div>
  );
}

export default MarkdownDisplayer;
