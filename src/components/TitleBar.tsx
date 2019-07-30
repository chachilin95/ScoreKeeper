import React from 'react';

interface TitleBarProps {
    title: string,
    subtitle: string
};

export default ({ title, subtitle }: TitleBarProps) => {
    return (
        <div className='title-bar'>
            <div className='wrapper'>
                <h1 className='title-bar__title'>{title}</h1>
                <h2 className='title-bar__subtitle'>{subtitle}</h2>
            </div>
        </div>
    );
};