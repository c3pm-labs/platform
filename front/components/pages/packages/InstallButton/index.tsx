import { makeStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import React, { useState } from 'react';

export interface InstallButtonProps {
  packageName: string;
}

const useStyles = makeStyles((theme) => ({
  add: {
    fontFamily: 'SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace',
    fontSize: 12,
    border: 'none',
    background: '#FFFFFF',
    boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.12)',
    borderRadius: theme.shape.borderRadius,
    padding: theme.spacing(1),
    width: 200,
    cursor: 'pointer',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    textAlign: 'left',
  },
}));

function InstallButton({ packageName }: InstallButtonProps): JSX.Element {
  const classes = useStyles();

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
  }

  return (
    <Tooltip title={tooltipTitle}>
      <button className={classes.add} onClick={() => textToClipboard(addCmd)} type="button">
        $&nbsp;
        {addCmd}
      </button>
    </Tooltip>
  );
}

export default InstallButton;
