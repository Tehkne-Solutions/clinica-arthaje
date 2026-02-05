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
        background: 'linear-gradient(135deg, #F5F5F0 0%, #FFFFFF 100%)',
        py: { xs: 8, md: 12 },
        minHeight: '85vh',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Container maxWidth="lg">
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
                height: { xs: 300, md: 500 },
                borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
                overflow: 'hidden',
                boxShadow: '0 20px 60px rgba(184, 122, 154, 0.2)',
                opacity: fadeIn ? 1 : 0,
                transform: fadeIn ? 'scale(1)' : 'scale(0.95)',
                transition: 'all 1s ease-out 0.3s',
              }}
            >
              <Image
                src="/images/dra-hildete.png"
                alt="Dra. Hildete Ferreira - Fisioterapeuta CREFITO 430943-F"
                fill
                style={{ objectFit: 'cover' }}
                priority
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
