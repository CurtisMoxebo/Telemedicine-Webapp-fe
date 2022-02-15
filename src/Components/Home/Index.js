import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Typography, Box, Grid, TextField, Autocomplete, Container, Button, Grow } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import { makeStyles } from '@mui/styles';
import { getRandomArray } from "../../Utils/Utils.js";

const Index = () => {
  const top100Films = getRandomArray();

  const useStyles = makeStyles(theme => ({
    headerBox: {
      height: 360,
      width: '100%',
      background: `linear-gradient(to top, ${theme.palette.common.white}, ${theme.palette.primary.main})`
    },

    title: {
      width: '60%',
      color: theme.palette.common.white,
      fontSize: '50px',
      'text-shadow': `2px 2px ${theme.palette.primary.dark}`,
      paddingTop: theme.spacing(5),
      [theme.breakpoints.down('md')]: {
        width: '100%',
        fontSize: '40px',
        paddingTop: theme.spacing(4),
      }
    },

    subtitle: {
      width: '60%',
      color: theme.palette.common.white,
      fontSize: '22px',
      'text-shadow': `1px 2px ${theme.palette.common.black}`,
      paddingTop: theme.spacing(3),
      [theme.breakpoints.down('md')]: {
        width: '90%',
        fontSize: '20px',
        paddingTop: theme.spacing(4),
      }
    },

    searchBox: {
      width: '100%',
      fontSize: '50px',
      borderColor: theme.palette.common.white,
      [theme.breakpoints.down('md')]: {
        width: '100%',
        marginBottom: theme.spacing(1)
      }
    },

    searchButton: {
      width: '80%',
      height: '52px',
      float: 'right',
      [theme.breakpoints.down('md')]: {
        width: '100%',
      }
    }
  }));

  const classes = useStyles();
  const { t, i18n } = useTranslation();
  const [selectedDate, setSelectedDate] = useState(null);

  const options = top100Films.map((option) => {
    const firstLetter = option.title[0].toUpperCase();
    return {
      firstLetter: /[0-9]/.test(firstLetter) ? '0-9' : firstLetter,
      ...option,
    };
  });

  return (
    <div>
      <Box
        className={classes.headerBox}
        component='div'>
        <Container>
          <Grow
            in={true}>
            <Typography
              className={classes.title}
              component='div'
              variant="h1">
                {t('home-title')}
            </Typography>
          </Grow>

          <Grow
            in={true}
            style={{ transformOrigin: '0 0 0' }}
            {...(true ? { timeout: 1000 } : {})}>
            <Typography
              className={classes.subtitle}
              component='div'
              variant="subtitle">
                {t('home-subtitle')}
            </Typography>
          </Grow>
        </Container>
      </Box>

      { /* Consider using asynchronous autocomplete, highlight, suggestion */}
      <Container>
        <Grid direction='row' container spacing={0}>
          <Grid item md={3} xs={12}>
            <Autocomplete
              freeSolo
              autoHighlight = {true}
              options={options.sort((a, b) => -b.firstLetter.localeCompare(a.firstLetter))}
              groupBy={(option) => option.firstLetter}
              getOptionLabel={(option) => option.title}
              renderInput={(params) =>
                <TextField
                  {...params}
                  className={classes.searchBox}
                  variant='outlined'
                  label={t('name-speciality-illness')} />
              } />
          </Grid>

          <Grid item md={3} xs={12}>
            <Autocomplete
              freeSolo
              options={options.sort((a, b) => -b.firstLetter.localeCompare(a.firstLetter))}
              groupBy={(option) => option.firstLetter}
              getOptionLabel={(option) => option.title}
              renderInput={(params) =>
                <TextField
                  {...params}
                  className={classes.searchBox}
                  variant='outlined'
                  label={t('location')} />
            } />
          </Grid>

          <Grid item md={3} xs={12}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                disablePast
                label={t('availability-date')}
                value={selectedDate}
                onChange={(newValue) => {
                  setSelectedDate(newValue);
                }}
                renderInput={(params) =>
                  <TextField
                    className={classes.searchBox}
                    variant='outlined'
                    autoComplete='off'
                    {...params} />} />
            </LocalizationProvider>
          </Grid>

          <Grid item md={3} xs={12}>
            <Button
              className={classes.searchButton}
              variant='contained'
              startIcon={<SearchIcon />} >
              {t('search')}
            </Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Index;
