import React from 'react';
import {createRoot} from 'react-dom/client';
import Application from './app';

const ApplicationContainer = document.getElementById('application-container');

createRoot(ApplicationContainer).render(<Application />);
