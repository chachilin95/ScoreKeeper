import React from 'react';

interface TitleBarProps {
    title:string,
    subtitle:string
};

export default ({ title, subtitle }:TitleBarProps) => {
    return (
        <div>
            <h1>{title}</h1>
            <h3>{subtitle}</h3>
        </div>
    );
};