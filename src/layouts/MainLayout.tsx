import React from "react";
import Header from "./Header";
import Container from "../components/Container";
import Footer from "./Footer";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex flex-col w-full h-screen">
            <Header />
            <Container className="flex-1 w-full">
                <main>{children}</main>
            </Container>
            <Footer />
        </div>
    );
};

export default MainLayout;
