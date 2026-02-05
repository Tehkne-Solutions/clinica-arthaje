'use client';

import { Box, Container, Typography, Card } from '@mui/material';

export default function ImpactSection() {
  return (
    <Box
      sx={{
        position: 'relative',
        height: '400px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundImage: 'url("https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1200")',
        backgroundAttachment: { xs: 'scroll', md: 'fixed' },
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          bgcolor: 'rgba(0, 0, 0, 0.4)',
          zIndex: 0,
        },
      }}
    >
      <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
        <Card
          sx={{
            bgcolor: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(10px)',
            p: { xs: 4, md: 6 },
            textAlign: 'center',
            borderRadius: 4,
          }}
        >
          <Typography
            variant="h3"
            sx={{
              color: 'primary.main',
              fontWeight: 700,
              mb: 2,
              fontSize: { xs: '1.75rem', md: '2.5rem' },
            }}
          >
            Excelência em Fisioterapia e Estética
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: 'text.secondary',
              fontWeight: 400,
            }}
          >
            No coração de Itambacuri, cuidado humanizado com a precisão que sua saúde merece.
          </Typography>
        </Card>
      </Container>
    </Box>
  );
}
