"use client";
import React from 'react';
import { CollegeProvider } from './contexts/CollegeContext';
import { Toaster } from 'sonner';

const ClientProviders = ({ children }) => {
  return (
    <CollegeProvider>
      {children}
      {/* Bug 7 fix: Global toast notifications replace blocking alert popups. */}
      <Toaster position="top-right" richColors closeButton />
    </CollegeProvider>
  );
};

export default ClientProviders;
