import { Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

const Index = () => {
  const { t, i18n } = useTranslation();

  return (
    <div>
      <Typography>
        {t('first translation')}
      </Typography>

    </div>
  );
}

export default Index;