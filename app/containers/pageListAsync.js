import React from 'react';
import { Loading } from '@/components';
import loadable from '../utils/loadable';

// Landing Page
export const Landing = loadable(() => import('./Landing'), {
  fallback: <Loading />,
});

export const About = loadable(() => import('./About'), {
  fallback: <Loading />,
});

export const ContactUs = loadable(() => import('./ContactUs'), {
  fallback: <Loading />,
});

export const Faq = loadable(() => import('./Faq'), {
  fallback: <Loading />,
});

// Static Pages
export const NotFound = loadable(() => import('./NotFound'), {
  fallback: <Loading />,
});
