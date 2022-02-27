import { useTranslation } from 'react-i18next';
import { Typography, Box, Container, Grow } from '@mui/material';
import { makeStyles } from '@mui/styles';
import SearchFiels from './SearchFields.js';

const Index = () => {
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
    }
  }));

  const classes = useStyles();
  const { t, i18n } = useTranslation();

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

      <SearchFiels />
    </div>
  );
}

export default Index;
