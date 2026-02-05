'use client';

import { AppBar, Toolbar, Container, Button, Box, IconButton, Drawer, List, ListItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';

const navLinks = ['Home', 'Sobre', 'Serviços', 'Blog'];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <AppBar 
      position="sticky" 
      elevation={0}
      sx={{
        backgroundColor: 'rgba(245, 245, 240, 0.95)',
        backdropFilter: 'blur(10px)',
      }}
    >
      <Container maxWidth="lg">
        <Toolbar sx={{ justifyContent: 'space-between', py: 1 }}>
          <Box sx={{ fontSize: '1.5rem', fontWeight: 700, color: 'primary.main' }}>
            ArThaJe
          </Box>

          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 4 }}>
            {navLinks.map((link) => (
              <Button key={link} sx={{ color: 'text.primary', fontWeight: 500 }}>
                {link}
              </Button>
            ))}
          </Box>

          <Button 
            variant="contained" 
            sx={{ display: { xs: 'none', md: 'inline-flex' } }}
          >
            Agendar Consulta
          </Button>

          <IconButton 
            sx={{ display: { xs: 'flex', md: 'none' } }}
            onClick={() => setMobileOpen(true)}
          >
            <MenuIcon />
          </IconButton>

          <Drawer anchor="right" open={mobileOpen} onClose={() => setMobileOpen(false)}>
            <List sx={{ width: 250, pt: 4 }}>
              {navLinks.map((link) => (
                <ListItem key={link}>
                  <Button fullWidth>{link}</Button>
                </ListItem>
              ))}
              <ListItem>
                <Button variant="contained" fullWidth>Agendar Consulta</Button>
              </ListItem>
            </List>
          </Drawer>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
