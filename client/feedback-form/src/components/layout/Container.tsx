import React from 'react';
import styles from './Container.module.scss';

interface IProps {
  className?: string;
}

/**
 * Container component which wraps your div and doesn't
 * allow to be wider
 */
export const Container: React.FC<IProps> = ({ children, className }) => {

  const resultClassName = className === undefined
    ? styles.container
    : `${styles.container} ${className}`;

  return <div className={resultClassName}>
    {children}
  </div>;
};
