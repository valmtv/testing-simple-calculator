import React from 'react';
import { createRoot } from 'react-dom/client';
import Application from './view/application';

const ApplicationContainer = document.getElementById('application-container');

createRoot(ApplicationContainer).render(<Application />);
