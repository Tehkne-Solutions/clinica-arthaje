'use client';

import { Box, Container, Grid, Typography, Card, CardContent } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SpaIcon from '@mui/icons-material/Spa';
import VerifiedIcon from '@mui/icons-material/Verified';

const benefits = [
  {
    icon: <FavoriteBorderIcon sx={{ fontSize: 48, color: 'primary.main' }} />,
    title: 'Movimento Livre de Dor',
    description: 'Fisioterapia especializada para recuperação e prevenção de lesões.',
  },
  {
    icon: <SpaIcon sx={{ fontSize: 48, color: 'primary.main' }} />,
    title: 'Confiança Renovada',
    description: 'Tratamentos estéticos avançados com resultados naturais.',
  },
  {
    icon: <VerifiedIcon sx={{ fontSize: 48, color: 'primary.main' }} />,
    title: 'Atendimento Humanizado',
    description: 'Equipe especializada focada no seu bem-estar integral.',
  },
];

export default function ValueProposition() {
  return (
    <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          textAlign="center"
          sx={{
            mb: 2,
            fontWeight: 600,
            color: 'primary.main',
          }}
        >
          Por que escolher a ArThaJe?
        </Typography>

        <Typography
          variant="body1"
          textAlign="center"
          color="text.secondary"
          sx={{ mb: 6, maxWidth: 600, mx: 'auto' }}
        >
          Cuidado integral que transforma intenção em bem-estar através da precisão técnica.
        </Typography>

        <Grid container spacing={4}>
          {benefits.map((benefit, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card
                sx={{
                  height: '100%',
                  textAlign: 'center',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 12px 24px rgba(184, 122, 154, 0.15)',
                  },
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  <Box sx={{ mb: 2 }}>{benefit.icon}</Box>
                  <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
                    {benefit.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {benefit.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
