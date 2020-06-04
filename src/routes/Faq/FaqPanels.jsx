import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';

const ExpansionPanel = withStyles({
  root: {
    border: '1px solid rgba(0, 0, 0, .125)',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  expanded: {},
})(MuiExpansionPanel);

const ExpansionPanelSummary = withStyles({
  root: {
    backgroundColor: 'rgba(0, 0, 0, .03)',
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
    marginBottom: -1,
    minHeight: 56,
    '&$expanded': {
      minHeight: 56,
    },
  },
  content: {
    '&$expanded': {
      margin: '12px 0',
    },
  },
  expanded: {},
})(MuiExpansionPanelSummary);

const ExpansionPanelDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiExpansionPanelDetails);

const useStyles = makeStyles(() => ({
  faqQuestion: {
    color: '#9ac555',
    fontFamily: 'Open Sans',
  },
  faqText: {
    fontFamily: 'Montserrat',
  },
}));

const FaqExpansionPanels = ({ faqs }) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(`panel${faqs[0].id}`);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      {faqs.map((faq) => (
        <ExpansionPanel
          square
          expanded={expanded === `panel${faq.id}`}
          onChange={handleChange(`panel${faq.id}`)}
          key={faq.id}
        >
          <ExpansionPanelSummary
            aria-controls={`panel${faq.id}d-content`}
            id={`panel${faq.id}d-content`}
          >
            <Typography className={classes.faqQuestion}>
              {faq.question}
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography className={classes.faqText}>{faq.answer}</Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      ))}
    </div>
  );
};

export default FaqExpansionPanels;
