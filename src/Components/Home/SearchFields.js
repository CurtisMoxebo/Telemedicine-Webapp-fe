import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Grid, TextField, Autocomplete, Container, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import SearchIcon from '@mui/icons-material/Search';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import { getRandomArray } from "../../Utils/Utils.js";

const SearchFiels = () => {
  const top100Films = getRandomArray();

  const useStyles = makeStyles(theme => ({
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
    <Container>
      { /* Consider using asynchronous autocomplete, highlight, suggestion */}
      <Grid direction='row' container spacing={0}>
        <Grid item md={3} xs={12}>
          <Autocomplete
            freeSolo
            autoHighlight
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
            autoHighlight
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
  );
}

export default SearchFiels;
