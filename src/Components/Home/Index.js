import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Typography, Box, Grid, TextField, InputAdornment, Container, Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import MasksTwoToneIcon from '@mui/icons-material/MasksTwoTone';
import LocationOnTwoToneIcon from '@mui/icons-material/LocationOnTwoTone';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import { makeStyles } from '@mui/styles';

const Index = () => {
  const useStyles = makeStyles(theme => ({
    headerBox: {
      height: 360,
      width: '100%',
      background: 'linear-gradient(to top, white, #06a3b8)'
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

  return (
    <div>
      <Box
        className={classes.headerBox}
        component='div'>
          <Container>
            <Typography
              className={classes.title}
              component='div'
              variant="h1">
                Find the right health service for your needs!
            </Typography>

            <Typography
              className={classes.subtitle}
              component='div'
              variant="subtitle">
                Top results guaranteed for each search
            </Typography>
          </Container>
      </Box>

      <Container>
        <Grid direction='row' container spacing={0}>
          <Grid item md={3} xs={12}>
            <TextField
              className={classes.searchBox}
              variant='outlined'
              autoComplete='off'
              label='Name, speciality, illness'
              InputProps={{
                endAdornment: <InputAdornment position="end"><MasksTwoToneIcon /></InputAdornment>,
              }} />
          </Grid>

          <Grid item md={3} xs={12}>
            <TextField
              className={classes.searchBox}
              variant='outlined'
              autoComplete='off'
              label='Location'
              InputProps={{
                endAdornment: <InputAdornment position="end"><LocationOnTwoToneIcon /></InputAdornment>,
              }} />
          </Grid>

          <Grid item md={3} xs={12}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                label='Availability Date'
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
              Search
            </Button>
          </Grid>
        </Grid>
      </Container>

      <Typography>
        {t('')}
      </Typography>

    </div>
  );
}

export default Index;
