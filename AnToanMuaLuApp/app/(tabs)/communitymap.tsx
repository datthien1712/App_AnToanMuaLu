import CommunityMapScreen from '@/src/screens/CommunityMapScreen';
import { Stack } from 'expo-router';
import React from 'react';

export default function CommunityMapTabScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Bản đồ cộng đồng' }} />
      <CommunityMapScreen />
    </>
  );
}
