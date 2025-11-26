import ShelterScreen from '@/src/screens/ShelterScreen';
import { Stack } from 'expo-router';
import React from 'react';

export default function ShelterTabScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Nơi trú ẩn' }} />
      <ShelterScreen />
    </>
  );
}
