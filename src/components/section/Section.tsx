import * as React from 'react';
import styles from './styles.module.scss'

type Props = {
    title?: string;
    children?: React.ReactNode
};

const Section = ({ title, children }: Props) => {
    return (
        <div className={styles.section}>
            {title && <span>{title}</span>}
            {children && <div>{children}</div>}
        </div>
    );
}

export default Section;