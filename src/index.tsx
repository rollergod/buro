import React, {useLayoutEffect} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import {BrowserRouter, Routes, useLocation} from "react-router-dom";
import {QueryClient, QueryClientProvider} from "react-query";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const queryClient = new QueryClient();

const Wrapper = ({children}) => {
    const location = useLocation();
    useLayoutEffect(() => {
        document.documentElement.scrollTo(0, 0);
    }, [location.pathname]);
    return children
}

root.render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <Wrapper children={<App />}>
                </Wrapper>
            </BrowserRouter>
        </QueryClientProvider>
    </React.StrictMode>
);
