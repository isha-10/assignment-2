import Image from "next/image";

import React from 'react';
import Header from "./components/about"; // Adjust the path if needed
import About from  "./components/header"; // Adjust the path if needed

const HomePage: React.FC = () => {
    return (
        <div>
            <Header />
            <About />
        </div>
    );
};

export default HomePage;

           