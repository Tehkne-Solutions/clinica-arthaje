'use client';

import { Box, Container, Typography, Grid, Card, CardContent } from '@mui/material';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import SpaIcon from '@mui/icons-material/Spa';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';
import FaceRetouchingNaturalIcon from '@mui/icons-material/FaceRetouchingNatural';
import MassageIcon from '@mui/icons-material/Massage';

const fisioterapia = [
  { icon: <LocalHospitalIcon sx={{ fontSize: 48 }} />, title: 'Ortopedia', desc: 'Reabilitação de lesões e pós-operatório' },
  { icon: <FitnessCenterIcon sx={{ fontSize: 48 }} />, title: 'Esportiva', desc: 'Prevenção e tratamento para atletas' },
  { icon: <SelfImprovementIcon sx={{ fontSize: 48 }} />, title: 'RPG', desc: 'Reeducação Postural Global' },
];

const estetica = [
  { icon: <FaceRetouchingNaturalIcon sx={{ fontSize: 48 }} />, title: 'Facial', desc: 'Tratamentos rejuvenescedores' },
  { icon: <SpaIcon sx={{ fontSize: 48 }} />, title: 'Corporal', desc: 'Modelagem e drenagem linfática' },
  { icon: <MassageIcon sx={{ fontSize: 48 }} />, title: 'Massoterapia', desc: 'Relaxamento e bem-estar' },
];

export default function TreatmentsSection() {
  return (
    <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        <Typography variant="h3" textAlign="center" sx={{ mb: 1, fontWeight: 700, color: 'primary.main' }}>
          Nossos Tratamentos
        </Typography>
        <Typography variant="body1" textAlign="center" color="text.secondary" sx={{ mb: 6, maxWidth: 600, mx: 'auto' }}>
          Soluções personalizadas em fisioterapia e estética para seu bem-estar completo
        </Typography>

        <Typography variant="h4" sx={{ mb: 3, fontWeight: 600, color: 'text.primary' }}>
          Fisioterapia
        </Typography>
        <Grid container spacing={3} sx={{ mb: 6 }}>
          {fisioterapia.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card sx={{ height: '100%', transition: 'transform 0.3s', '&:hover': { transform: 'translateY(-8px)' } }}>
                <CardContent sx={{ textAlign: 'center', p: 4 }}>
                  <Box sx={{ color: 'primary.main', mb: 2 }}>{item.icon}</Box>
                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.desc}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Typography variant="h4" sx={{ mb: 3, fontWeight: 600, color: 'text.primary' }}>
          Estética
        </Typography>
        <Grid container spacing={3}>
          {estetica.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card sx={{ height: '100%', transition: 'transform 0.3s', '&:hover': { transform: 'translateY(-8px)' } }}>
                <CardContent sx={{ textAlign: 'center', p: 4 }}>
                  <Box sx={{ color: 'primary.main', mb: 2 }}>{item.icon}</Box>
                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.desc}
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
