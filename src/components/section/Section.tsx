import * as React from 'react';

type Props = {
    title?: string;
    children?: React.ReactNode
};

const Section = ({ title, children }: Props) => {
    return (
        <div>
            {title && <h1>{title}</h1>}
            {children && <div>{children}</div>}
        </div>
    );
}

export default Section;