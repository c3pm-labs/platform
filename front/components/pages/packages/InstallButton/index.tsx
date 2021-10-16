import { makeStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import React, { useState } from 'react';
import checkCopied from 'public/assets/checkCopied.json';
import Lottie from 'lottie-react';

export interface InstallButtonProps {
  packageName: string;
}

const useStyles = makeStyles((theme) => ({
  add: {
    fontFamily: 'SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace',
    fontSize: 12,
    border: `none`,
    background: '#FFFFFF',
    boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.12)',
    borderRadius: theme.shape.borderRadius,
    width: 200,
    cursor: 'pointer',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    textAlign: 'left',
    flexDirection: 'row',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  container: {
    width: '30px',
    height: '30px',
  },
  textContainer: {
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    paddingTop: theme.spacing(1),
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    maxWidth: '155px',
  },
}));

function InstallButton({ packageName }: InstallButtonProps): JSX.Element {
  const classes = useStyles();
  const [isCopied, setIsCopied] = useState(false);
  const [tooltipTitle, setTooltipTitle] = useState<string>('copy');

  const addCmd = `ctpm add ${packageName}`;

  function textToClipboard(text) {
    const dummy = document.createElement('textarea');
    document.body.appendChild(dummy);
    dummy.value = text;
    dummy.select();
    document.execCommand('copy');
    document.body.removeChild(dummy);
    setTooltipTitle('copied');
    setIsCopied(true);
  }

  return (
    <Tooltip title={tooltipTitle}>
      <button className={classes.add} onClick={() => textToClipboard(addCmd)} type="button">
        <div className={classes.textContainer}>
          $&nbsp;
          {addCmd}
        </div>
        {
          isCopied
            ? (
              <div className={classes.container}>
                <Lottie loop={false} animationData={checkCopied} />
              </div>
            )
            : null
        }
      </button>
    </Tooltip>
  );
}

export default InstallButton;
