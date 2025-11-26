import HomeScreen from '@/src/screens/HomeScreen';
import { Stack } from 'expo-router';
import React from 'react';

export default function HomeTabScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Trang chủ' }} />
      <HomeScreen />
    </>
  );
}
