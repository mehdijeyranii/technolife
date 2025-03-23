import React from "react";

interface ContainerType {
    children: React.ReactNode;
    className?: string;
}

const Container: React.FC<ContainerType> = ({ children, className }) => {
    return <div className={`px-5 py-3 mx-auto ${className}`}>{children}</div>;
};

export default Container;
