import Box from '@mui/material/Box';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { useState } from 'react';
import { PeriodPag } from './periodPag';

const CalendarBar = ({ mode, data }) => {
  const type = useState('month');

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: { xs: '24px', lg: '32px' },
      }}
    >
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <PeriodPag mode={mode} type={type} data={data} />
      </LocalizationProvider>
    </Box>
  );
};

export default CalendarBar;
