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

const ExpansionPanelDetails = withStyles(theme => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiExpansionPanelDetails);

const useStyles = makeStyles(() => ({
	faqQuestion: {
		color: 'teal',
  },
}))

const FaqExpansionPanels = ({ faqList }) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState('panel0');

  const handleChange = panel => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      {
        faqList.map((faqItem, index) => (
          <ExpansionPanel square expanded={expanded === `panel${index}`} onChange={handleChange(`panel${index}`)} key={index}>
            <ExpansionPanelSummary aria-controls={`panel${index}d-content`} id={`panel${index}d-content`}>
              <Typography className={classes.faqQuestion}>{ faqItem.question }</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>
                { faqItem.answer }
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        ))
      }
    </div>
  );
}

export default FaqExpansionPanels;