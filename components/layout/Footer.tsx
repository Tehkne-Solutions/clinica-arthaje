'use client';

import { Box, Container, Grid, Typography, Link, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Image from 'next/image';

export default function Footer() {
  return (
    <Box 
      component="footer" 
      sx={{ 
        bgcolor: 'secondary.main', 
        pt: 8, 
        pb: 4, 
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          right: -50,
          width: { xs: 200, md: 350 },
          height: { xs: 200, md: 350 },
          opacity: 0.15,
          zIndex: 0,
        }}
      >
        <Image 
          src="/images/footer-flower.svg" 
          alt="Flor ArThaJe"
          fill
          style={{ objectFit: 'contain' }}
        />
      </Box>

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h5" color="primary" gutterBottom sx={{ fontWeight: 700 }}>
              ArThaJe
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Clínica de Fisioterapia e Estética.<br />
              Transformando intenção em bem-estar através da precisão técnica.
            </Typography>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
              Links Rápidos
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              {['Home', 'Sobre', 'Serviços', 'Blog', 'Contato'].map((link) => (
                <Link key={link} href="#" color="text.primary" underline="hover">
                  {link}
                </Link>
              ))}
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
              Contato
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Brasília - DF<br />
              (61) 99999-9999<br />
              contato@arthaje.com.br
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <IconButton color="primary" size="small">
                <FacebookIcon />
              </IconButton>
              <IconButton color="primary" size="small">
                <InstagramIcon />
              </IconButton>
              <IconButton color="primary" size="small">
                <WhatsAppIcon />
              </IconButton>
            </Box>
          </Grid>
        </Grid>

        <Box sx={{ mt: 6, pt: 3, borderTop: '1px solid rgba(0,0,0,0.1)', textAlign: 'center' }}>
          <Typography variant="body2" color="text.secondary">
            © {new Date().getFullYear()} Clínica ArThaJe | Desenvolvido por TEHKNÉ SOLUTIONS
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
