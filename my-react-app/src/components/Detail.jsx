import React from 'react';
import { Typography, Stack, Button } from '@mui/material';

import BodyPartImg from '../assets/icons/body-part.png';
import TargetImg from '../assets/icons/target.png';
import EquipmentImg from '../assets/icons/equipment.png';

const Detail = ({ exerciseDetail }) => {
  if (!exerciseDetail || Object.keys(exerciseDetail).length === 0) {
    return <Typography>Loading...</Typography>; // Show loading text or spinner
  }

  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;

  return (
    <Stack
      gap="60px"
      sx={{ flexDirection: { lg: 'row' }, p: '20px', alignItems: 'center' }}
    >
      {/* Exercise Image */}
      <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />
      
      {/* Exercise Details */}
      <Stack sx={{ gap: { lg: '35px', xs: '20px' } }}>
        <Typography variant="h3" textTransform="capitalize">
          {name}
        </Typography>
        <Typography variant="h6">
          Exercises keep you strong.{' '}
          <span style={{ textTransform: 'capitalize' }}>{name}</span> is one of
          the best exercises to target your {target}. It helps improve your mood
          and gain energy.
        </Typography>

        {/* Additional Details */}
        <Stack direction="row" gap="24px" alignItems="center">
          <Button
            sx={{
              background: '#fff2db',
              borderRadius: '50%',
              width: '100px',
              height: '100px',
            }}
          >
            <img src={BodyPartImg} alt="body part" style={{ width: '50px', height: '50px' }} />
          </Button>
          <Typography variant="h5" textTransform="capitalize">
            {bodyPart}
          </Typography>
        </Stack>

        <Stack direction="row" gap="24px" alignItems="center">
          <Button
            sx={{
              background: '#fff2db',
              borderRadius: '50%',
              width: '100px',
              height: '100px',
            }}
          >
            <img src={TargetImg} alt="target" style={{ width: '50px', height: '50px' }} />
          </Button>
          <Typography variant="h5" textTransform="capitalize">
            {target}
          </Typography>
        </Stack>

        <Stack direction="row" gap="24px" alignItems="center">
          <Button
            sx={{
              background: '#fff2db',
              borderRadius: '50%',
              width: '100px',
              height: '100px',
            }}
          >
            <img src={EquipmentImg} alt="equipment" style={{ width: '50px', height: '50px' }} />
          </Button>
          <Typography variant="h5" textTransform="capitalize">
            {equipment}
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};
export default Detail