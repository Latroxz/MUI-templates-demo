import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import MenuItem from '@mui/material/MenuItem';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import ColorModeIconDropdown from '.././theme/ColorModeIconDropdown';
import Sitemark from './SitemarkIcon';
import { Link } from 'react-router-dom';
import SignIn from './main/SignIn';
import Dialog from '@mui/material/Dialog';
import SignUp from './main/SignUp';
import { DialogContent } from '@mui/material';

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexShrink: 0,
  borderRadius: `calc(${theme.shape.borderRadius}px + 8px)`,
  backdropFilter: 'blur(24px)',
  border: '1px solid',
  borderColor: (theme.vars || theme).palette.divider,
  backgroundColor: theme.vars
    ? `rgba(${theme.vars.palette.background.defaultChannel} / 0.4)`
    : alpha(theme.palette.background.default, 0.4),
  boxShadow: (theme.vars || theme).shadows[1],
  padding: '8px 12px',
}));

export default function AppAppBar() {
  const [open, setOpen] = React.useState(false);
  const [showSignInDialog, setShowSignInDialog] = React.useState(false);
  const [showSignupDialog, setShowSignupDialog] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const handleClickSignIn = () => {
    setShowSignInDialog(true);
  };

  const handleSignInClose = () => {
    setShowSignInDialog(false);
  };

  const handleClickSignUp = () => {
    setShowSignupDialog(true);
  };

  const handleSignUpClose = () => {
    setShowSignupDialog(false);
  };

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    p: 4,
  };

  return (
    <AppBar
      position="fixed"
      enableColorOnDark
      sx={{
        boxShadow: 0,
        bgcolor: 'transparent',
        backgroundImage: 'none',
        mt: 'calc(var(--template-frame-height, 0px) + 28px)',
      }}
    >
      <Container maxWidth="lg">
        <StyledToolbar variant="dense" disableGutters>
          <Box
            sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', px: 0 }}
          >
            <Sitemark />
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              <Link to="/dashboard">
                <Button variant="text" color="info" size="small">
                  Demo Dashboard
                </Button>
              </Link>
              <Link to="/checkout">
                <Button variant="text" color="info" size="small">
                  Demo Checkout
                </Button>
              </Link>
              <Link to="/sign-in">
                <Button variant="text" color="info" size="small">
                  Demo Sign-in Full
                </Button>
              </Link>
              <Link to="/sign-up">
                <Button variant="text" color="info" size="small">
                  Demo Sign-up
                </Button>
              </Link>
              <Button
                variant="text"
                color="info"
                size="small"
                sx={{ minWidth: 0 }}
              >
                FAQ
              </Button>
              <Button
                variant="text"
                color="info"
                size="small"
                sx={{ minWidth: 0 }}
              >
                Blog
              </Button>
            </Box>
          </Box>
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              gap: 1,
              alignItems: 'center',
            }}
          >
            <Button variant="text" size="small" onClick={handleClickSignIn}>
              Sign-in
            </Button>
            <Dialog
              open={showSignInDialog}
              onClose={handleSignInClose}
              maxWidth={'sm'}
              fullWidth
              scroll="paper"
            >
              <DialogContent>
                <SignIn></SignIn>
              </DialogContent>
            </Dialog>
            <Button
              color="primary"
              variant="contained"
              size="small"
              onClick={handleClickSignUp}
            >
              Sign up
            </Button>
            <Dialog
              open={showSignupDialog}
              onClose={handleSignUpClose}
              maxWidth={'sm'}
              scroll="paper"
            >
              <DialogContent>
                <SignUp></SignUp>
              </DialogContent>
            </Dialog>
            <ColorModeIconDropdown />
          </Box>
          {/* rendered when screen is small or smartphones */}
          <Box sx={{ display: { xs: 'flex', md: 'none' }, gap: 1 }}>
            <ColorModeIconDropdown size="medium" />
            <IconButton aria-label="Menu button" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="top"
              open={open}
              onClose={toggleDrawer(false)}
              PaperProps={{
                sx: {
                  top: 'var(--template-frame-height, 0px)',
                },
              }}
            >
              <Box sx={{ p: 2, backgroundColor: 'background.default' }}>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                  }}
                >
                  <IconButton onClick={toggleDrawer(false)}>
                    <CloseRoundedIcon />
                  </IconButton>
                </Box>

                <MenuItem>Features</MenuItem>
                <MenuItem>Testimonials</MenuItem>
                <MenuItem>Highlights</MenuItem>
                <MenuItem>Pricing</MenuItem>
                <MenuItem>FAQ</MenuItem>
                <MenuItem>Blog</MenuItem>
                <Divider sx={{ my: 3 }} />
                <MenuItem>
                  <Button color="primary" variant="contained" fullWidth>
                    Sign up
                  </Button>
                </MenuItem>
                <MenuItem>
                  <Button color="primary" variant="outlined" fullWidth>
                    Sign in
                  </Button>
                </MenuItem>
              </Box>
            </Drawer>
          </Box>
        </StyledToolbar>
      </Container>
    </AppBar>
  );
}
