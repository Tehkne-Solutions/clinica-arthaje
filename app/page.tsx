'use client';

import { Box, Button, Typography, Container } from '@mui/material';

export default function Home() {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          minHeight: '80vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 4,
          py: 8,
        }}
      >
        <Typography variant="h1" color="primary" sx={{ fontSize: { xs: '2.5rem', md: '4rem' }, textAlign: 'center' }}>
          Clínica ArThaJe
        </Typography>
        
        <Typography variant="h5" color="text.secondary" textAlign="center">
          Módulo 2 Completo ✓
        </Typography>

        <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', justifyContent: 'center' }}>
          <Button variant="contained" color="primary">
            Agendar Consulta
          </Button>
          <Button variant="outlined" color="primary">
            Conhecer Serviços
          </Button>
        </Box>

        <Box sx={{ 
          p: 4, 
          bgcolor: 'secondary.main', 
          borderRadius: 2,
          textAlign: 'center',
          maxWidth: 600,
        }}>
          <Typography variant="body1" sx={{ mb: 2 }}>
            ✅ Header com navegação responsiva<br />
            ✅ Footer com Flor ArThaJe decorativa<br />
            ✅ Design System ativo<br />
            ✅ Bordas arredondadas (16px)
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Próximo: Módulo 3 - Homepage de Vendas
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}
