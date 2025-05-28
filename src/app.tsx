import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import 'primeicons/primeicons.css';
        
import Home from './home';

const root = createRoot(document.body);
root.render(<Home />);