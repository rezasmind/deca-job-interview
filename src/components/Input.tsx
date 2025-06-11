'use client';

import { useId, type InputHTMLAttributes } from 'react';
import styles from './Input.module.scss';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export default function Input({ label, error, id, className = '', ...props }: InputProps) {
  const inputId = useId();
  return (
    <div className={`${styles.wrapper} ${className}`}>
      {label && (
        <label htmlFor={id ?? inputId} className={styles.label}>
          {label}
        </label>
      )}
      <input
        id={id ?? inputId}
        className={styles.input}
        {...props}
        aria-invalid={!!error}
        aria-describedby={error ? `${id ?? inputId}-error` : undefined}
      />
      {error && (
        <p id={`${id ?? inputId}-error`} role="alert" className={styles.error}>
          {error}
        </p>
      )}
    </div>
  );
} 