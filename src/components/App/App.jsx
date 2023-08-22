import React from 'react'
import AppRoutes from '../Routes/Routes'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Sidebar from '../Sidebar/Sidebar';

const App = () => {
    return (
        <div className="app">
            <Header />
            <Sidebar />
            <AppRoutes />
            <Footer />
        </div>
    );
};

export default App