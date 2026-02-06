'use client';

import { Box, Container, Typography, Button, Grid } from '@mui/material';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  return (
    <Box
      sx={{
        position: 'relative',
        bgcolor: '#F5F5F0',
        py: { xs: 8, md: 12 },
        minHeight: '85vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'url("https://images.unsplash.com/photo-1540206395-68808572332f?w=1200")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.08,
          zIndex: 0,
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                opacity: fadeIn ? 1 : 0,
                transform: fadeIn ? 'translateY(0)' : 'translateY(20px)',
                transition: 'all 0.8s ease-out',
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: '0.75rem', md: '0.875rem' },
                  fontWeight: 600,
                  color: 'rgba(0, 0, 0, 0.6)',
                  letterSpacing: '2px',
                  mb: 1,
                  textTransform: 'uppercase',
                }}
              >
                Clínica de Fisioterapia e Estética
              </Typography>

              <Typography
                variant="h1"
                component="h1"
                sx={{
                  fontSize: { xs: '2.5rem', md: '3.5rem' },
                  fontWeight: 700,
                  color: 'primary.main',
                  mb: 2,
                  lineHeight: 1.2,
                }}
              >
                Transforme Sua Saúde e Beleza em Itambacuri-MG
              </Typography>

              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: '1.25rem', md: '1.5rem' },
                  fontWeight: 400,
                  color: 'text.secondary',
                  mb: 4,
                  lineHeight: 1.6,
                }}
              >
                Com Dra. Hildete Ferreira, Fisioterapeuta (CREFITO 430943-F). Onde a ciência da reabilitação encontra a arte do bem-estar.
              </Typography>

              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    borderRadius: '50px',
                    px: 4,
                    py: 1.5,
                    fontSize: '1.1rem',
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                      transform: 'scale(1.05)',
                    },
                  }}
                >
                  Agendar Consulta em Itambacuri
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  sx={{
                    borderRadius: '50px',
                    px: 4,
                    py: 1.5,
                    fontSize: '1.1rem',
                  }}
                >
                  Conhecer Tratamentos
                </Button>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box
              sx={{
                position: 'relative',
                width: '100%',
                height: { xs: 400, md: 550 },
                borderRadius: '24px',
                overflow: 'hidden',
                boxShadow: '0 20px 60px rgba(209, 77, 114, 0.2)',
                opacity: fadeIn ? 1 : 0,
                transform: fadeIn ? 'scale(1)' : 'scale(0.95)',
                transition: 'all 1s ease-out 0.3s',
              }}
            >
              <Image
                src="/images/dra-hildete.png"
                alt="Dra. Hildete Ferreira - Fisioterapeuta CREFITO 430943-F"
                fill
                style={{ objectFit: 'cover', objectPosition: 'center top' }}
                priority
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
