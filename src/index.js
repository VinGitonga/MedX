import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react'
import ContextProvider from './context/state'

ReactDOM.render(
    <React.StrictMode>
        <ChakraProvider>
            <ContextProvider>
                <App />
            </ContextProvider>
        </ChakraProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

