import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Rules from './src/pages/Rules';
import Start from './src/pages/Start';

export default function App() {
  return (
    <>
      <Rules />
      <StatusBar color="light" />
    </>
  );
}
