import { ChangeEvent, useState } from 'react';
import MaterialAccordion from '@material-ui/core/Accordion';
import MaterialAccordionDetails from '@material-ui/core/AccordionDetails';
import MaterialAccordionSummary from '@material-ui/core/AccordionSummary';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    backgroundColor: 'transparent',
    boxShadow: 'none',
    width: '100%',
    '& .MuiCollapse-container': { backgroundColor: 'rgba(38, 179, 239, 0.2)' },
    '& .MuiExpansionPanelDetails-root': { padding: '25px 30px' },
  },
});

type AProps = {
  summary: React.ReactNode;
  children: React.ReactNode;
};

const Accordion = ({ summary, children }: AProps): JSX.Element => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState<boolean | string>('');

  // eslint-disable-next-line operator-linebreak
  const handleChange =
    // eslint-disable-next-line @typescript-eslint/ban-types
    (panel: string) => (event: ChangeEvent<{}>, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <MaterialAccordion
      classes={{ root: classes.root }}
      expanded={expanded === 'panel1'}
      onChange={handleChange('panel1')}
    >
      <MaterialAccordionSummary>{summary}</MaterialAccordionSummary>
      <MaterialAccordionDetails>{children}</MaterialAccordionDetails>
    </MaterialAccordion>
  );
};

export default Accordion;
