import { useTranslation } from 'react-i18next';
import { Box, Container, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

const Footer = () => {
  const useStyles = makeStyles(theme => ({
    footerBox: {
      width: '100%',
      padding: '5px 0px 5px',
      textAlign: 'center',
      backgroundColor: 'rgba(202, 202, 202, 0.5)',
      position : 'absolute',
      bottom : '0',
    }
  }));

  const classes = useStyles();
  const { t, i18n } = useTranslation();

  return (
    <Box
      className={classes.footerBox}
      component='footer'>
      <Container>
        <Typography>
          {t('copyright', { copy:'\u00A9', year: new Date().getFullYear() })}
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;