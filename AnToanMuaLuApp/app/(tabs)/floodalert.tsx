import FloodAlertScreen from '@/src/screens/FloodAlertScreen';
import { Stack } from 'expo-router';
import React from 'react';

export default function FloodAlertTabScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Cảnh báo lũ' }} />
      <FloodAlertScreen />
    </>
  );
}
