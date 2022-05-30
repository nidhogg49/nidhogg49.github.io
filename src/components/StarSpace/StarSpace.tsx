import * as React from 'react';
import styles from './styles.module.scss'



const GetStars = (count: number) => (
    Array.from(Array(count).keys()).map(
        () => (
            <div className={styles.star}></div>
        )
    )
);

const StarSpace = () => {
    return (
        <div className={styles.space}>
            {GetStars(50)}
        </div>
    );
}

export default StarSpace;