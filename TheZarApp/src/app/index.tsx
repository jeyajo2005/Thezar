import React from 'react';
import { Redirect } from 'expo-router';

export default function SplashScreen() {
  return <Redirect href="/auth/login" />;
}
