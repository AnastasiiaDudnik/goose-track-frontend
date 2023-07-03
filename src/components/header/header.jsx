import { useState } from 'react';
import {
  AppBar,
  Avatar,
  Box,
  Button,
  IconButton,
  Typography,
  Toolbar,
  SvgIcon,
  useMediaQuery,
  useTheme,
} from '@mui/material';
// import Icons from 'icons/Icons';
import Sprite from '../../icons/sprite.svg';

export const Header = ({ handleDrawerToggle, drawerWidth }) => {
  const theme = useTheme();
  const matchesDesktop = useMediaQuery(theme.breakpoints.down('lg'));
  // console.log(matchesDesktop);

  const [mode, setMode] = useState('light');

  const toggleColorMode = () => {
    setMode(prevMode => (prevMode === 'light' ? 'dark' : 'light'));
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        width: {
          lg: `calc(100% - ${drawerWidth.desktop}px)`,
        },
        ml: {
          lg: `${drawerWidth.desktop}px`,
        },
        bgcolor: 'background.default',
        boxShadow: 'none',
      }}
    >
      <Toolbar
        sx={{
          justifyContent: 'space-between',
          px: { xs: '20px', md: '32px' },
          minHeight: { xs: '0px' },
          pt: '24px',
        }}
      >
        {!matchesDesktop ? (
          <Typography
            fontSize={'32px'}
            fontWeight={700}
            fontFamily="Inter, sans-serif"
            color="text.primary"
            lineHeight={1}
            sx={{
              textShadow:
                '0px 9.399999618530273px 57.6875px 0px rgba(0, 0, 0, 0.04), 0px 47px 355px 0px rgba(0, 0, 0, 0.07)',
            }}
          >
            User Profile
          </Typography>
        ) : (
          <IconButton
            color="text.secondary"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{
              m: 0,
              p: 0,
              display: { lg: 'none' },
              '&:hover': {
                backgroundColor: 'background.default',
                color: 'primary.main',
              },
            }}
          >
            {/* <Icons name="menu" size="24px" color="text.secondary" /> */}
            <SvgIcon
              sx={{
                width: { xs: '24px', md: '34px' },
                height: { xs: '24px', md: '34px' },
              }}
              stroke="currentColor"
            >
              <use href={`${Sprite}#menu`}></use>
            </SvgIcon>
          </IconButton>
        )}

        <Box display={'flex'} gap={{ xs: '18px', md: '24px' }}>
          <Button
            variant="contained"
            sx={{
              borderRadius: { xs: '10px', md: '14px' },
              background: '#3E85F3',
              fontFamily: 'Inter, sans-serif',
              fontWeight: 600,
              textTransform: 'none',
              fontSize: { xs: '12px', md: '14px' },
              lineHeight: { xs: 1.333, md: 1.286 },
              py: { xs: '8px', md: '12px' },
              px: { xs: '20px', md: '32px' },
            }}
          >
            Feedback
          </Button>

          <Box
            display={'flex'}
            gap={{ xs: '8px', md: '14px' }}
            alignItems={'center'}
          >
            {/* <IconButton sx={{ padding: 0 }}>
              <Icons name="moon" size="32px" />
            </IconButton> */}

            <IconButton
              sx={{ padding: 0 }}
              onClick={toggleColorMode}
              color="inherit"
            >
              {mode === 'dark' ? (
                <SvgIcon
                  sx={{
                    width: { xs: '24px', md: '32px' },
                    height: { xs: '24px', md: '32px' },
                  }}
                  stroke="currentColor"
                >
                  <use href={`${Sprite}#sun`}></use>
                </SvgIcon>
              ) : (
                <SvgIcon
                  sx={{
                    width: { xs: '24px', md: '32px' },
                    height: { xs: '24px', md: '32px' },
                  }}
                  stroke="currentColor"
                >
                  <use href={`${Sprite}#moon`}></use>
                </SvgIcon>
              )}
            </IconButton>

            <Typography
              fontSize={{ xs: '14px', md: '18px' }}
              fontWeight={700}
              fontFamily="Inter, sans-serif"
              color="text.secondary"
              lineHeight={{ xs: 1.286, md: 1 }}
            >
              Nadiia
            </Typography>
            <Avatar
              sx={{
                border: '1.8px solid #3E85F3',
                width: { xs: '32px', md: '44px' },
                height: { xs: '32px', md: '44px' },
              }}
            />
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};