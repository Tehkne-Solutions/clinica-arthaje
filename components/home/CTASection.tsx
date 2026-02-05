'use client';

import { Box, Container, Typography, Button } from '@mui/material';

export default function CTASection() {
  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        background: 'linear-gradient(135deg, #B87A9A 0%, #8B5A7A 100%)',
        color: 'white',
        textAlign: 'center',
      }}
    >
      <Container maxWidth="md">
        <Typography
          variant="h3"
          sx={{
            mb: 2,
            fontWeight: 700,
          }}
        >
          Pronto para transformar seu bem-estar?
        </Typography>

        <Typography
          variant="h6"
          sx={{
            mb: 4,
            opacity: 0.95,
            fontWeight: 400,
          }}
        >
          Agende sua avaliação gratuita e descubra como podemos ajudar você.
        </Typography>

        <Button
          variant="contained"
          size="large"
          sx={{
            bgcolor: 'white',
            color: 'primary.main',
            borderRadius: '50px',
            px: 5,
            py: 2,
            fontSize: '1.1rem',
            fontWeight: 600,
            '&:hover': {
              bgcolor: 'secondary.main',
            },
          }}
        >
          Agendar Agora
        </Button>
      </Container>
    </Box>
  );
}
