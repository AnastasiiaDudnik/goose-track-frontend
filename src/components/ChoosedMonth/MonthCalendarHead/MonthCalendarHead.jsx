import React, { useEffect, useState } from 'react';
import { format, startOfWeek, addDays } from 'date-fns';
import { Box } from '@mui/material';
import { enGB, eo, uk } from 'date-fns/locale';
import { useTranslation } from 'react-i18next';

const locales = { enGB, eo, uk };

const MonthCalendarHead = ({ currentDate }) => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language);

  useEffect(() => {
    if (i18n.language === 'ua') {
      setLanguage('uk');
    } else {
      setLanguage('enGB');
    }
  }, [i18n.language]);

  const getRows = (language) => {
    const dateFormatEn = window.innerWidth >= 768 ? 'EEE' : 'EEEEE';
    const dateFormatUk = window.innerWidth >= 768 ? 'EEEEEE' : 'EEEEE';
    const dateFormat = language === 'uk' ? dateFormatUk : dateFormatEn;
    const days = [];
    let startDate = startOfWeek(currentDate, { weekStartsOn: 1 });

    for (let i = 0; i < 7; i++) {
      const dayName =
        i === 5 || i === 6 ? (
          <Box
            key={i}
            sx={{
              display: 'flex',
              flexGrow: 1,
              justifyContent: 'center',
              alignItems: 'center',
              maxWidth: '100%',
              color: 'var(--calendar-digit-color)',
              textTransform: 'uppercase',
              fontWeight: 600,
              fontSize: '16px',
              lineHeight: 1.12,
              padding: '16px',
              backgroundColor: 'var(--primary-background-color)',
              '@media screen and (min-width: 768px)': {
                padding: '14px',
              },
            }}
          >
            {format(addDays(startDate, i), dateFormat, {
              locale: locales[language],
            })}
          </Box>
        ) : (
          <Box
            key={i}
            sx={{
              display: 'flex',
              flexGrow: 1,
              justifyContent: 'center',
              alignItems: 'center',
              maxWidth: '100%',
              color: 'var(--calendar-digit-color)',
              textTransform: 'uppercase',
              fontWeight: 600,
              fontSize: '16px',
              lineHeight: 1.12,
              padding: '16px',
              backgroundColor: 'var(--primary-background-color)',
              '@media screen and (min-width: 768px)': {
                padding: '14px',
              },
            }}
          >
            {format(addDays(startDate, i), dateFormat, {
              locale: locales[language],
            })}
          </Box>
        );
      days.push(dayName);
    }
    return days;
  };

  return (
    <Box
      sx={{
        margin: 0,
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: '100%',
        overflow: 'hidden',
        cursor: 'default',
        border: '1px solid rgba(220, 227, 229, 0.5)',
        borderRadius: '8px',
        marginBottom: '14px',
        '@media screen and (min-width: 768px)': {
          marginBottom: '18px',
        },
        '@media screen and (min-width: 1100px)': {
          marginBottom: '15px',
        },
      }}
    >
      {getRows(language)}
    </Box>
  );
};

export default MonthCalendarHead;
