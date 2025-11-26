import SOSScreen from '@/src/screens/SOSScreen';
import { Stack } from 'expo-router';
import React from 'react';

export default function SOSTabScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'SOS' }} />
      <SOSScreen />
    </>
  );
}
