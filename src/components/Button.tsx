'use client';

import styles from './Button.module.scss';
import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
}

export default function Button({ children, loading = false, disabled, className = '', ...props }: ButtonProps) {
  return (
    <button
      className={`${styles.button} ${className}`}
      disabled={loading || disabled}
      {...props}
    >
      {loading ? 'در حال ورود...' : children}
    </button>
  );
} 