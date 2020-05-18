import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import FaqLogo from 'assets/Faq/FaqLogo.svg';
import FaqPanels from './FaqPanels';
import { FaqData } from './FaqData';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(10),
  },
  header: {
    fontWeight: 'bold',
    fontSize: '30px',
    color: 'teal',
    textAlign: 'center',
  },
  tabsPanel: {
    marginTop: '30px',
  },
  faqPanels: {
    marginTop: '20px',
  },
  tab: {
    color: 'teal',
  },
  faqLogo: {
    display: 'block',
    margin: '0px auto',
    width: '100px',
  },
}));

export default function Forum() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const topics = Object.keys(FaqData);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container component="main" maxWidth="sm">
      <div className={classes.paper}>
        <div className={classes.header}>How can we help you?</div>
        <img src={FaqLogo} alt="" className={classes.faqLogo} />
        <AppBar position="static" color="default" className={classes.tabsPanel}>
          <Tabs
            TabIndicatorProps={{ style: { background: 'teal' } }}
            value={value}
            onChange={handleChange}
            variant="fullWidth"
            aria-label="full width tabs example"
          >
            {topics.map((label) => (
              <Tab label={label} key={label} className={classes.tab} />
            ))}
          </Tabs>
        </AppBar>
        <div className={classes.faqPanels}>
          <FaqPanels faqs={FaqData[topics[value]]} />
        </div>
      </div>
    </Container>
  );
}
