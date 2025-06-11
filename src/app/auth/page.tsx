'use client';

import { useState, type FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import Input from '~/components/Input';
import styles from './Auth.module.scss';
import { motion, AnimatePresence } from 'framer-motion';
import buttonStyles from '~/components/Button.module.scss';

export default function AuthPage() {
  const router = useRouter();
  const [phone, setPhone] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const validatePhone = (value: string) => {
    // Iranian phone numbers: starts with 09 & 11 digits, or +989xxxxxxxxx
    const regex = /^(\+98|0)?9\d{9}$/;
    return regex.test(value);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validatePhone(phone)) {
      setError('شماره تلفن معتبر نیست، باید با ۰۹ یا +۹۸ شروع شود');
      return;
    }
    setError(null);
    setLoading(true);
    try {
      const res = await fetch('https://randomuser.me/api/?results=1&nat=us');
      const data = await res.json();
      if (data.results && data.results.length > 0) {
        const user = { ...data.results[0], phone };
        if (typeof window !== 'undefined') {
          localStorage.setItem('user', JSON.stringify(user));
        }
        setSuccess(true);
        // Delay redirect to allow success animation
        setTimeout(() => {
          router.push('/dashboard');
        }, 1200);
      }
    } catch (err) {
      setError('خطا در ارتباط با سرور');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <motion.form
        onSubmit={handleSubmit}
        className={styles.form}
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 80, damping: 12 }}
        whileHover={{ scale: 1.02 }}
      >
        <h1 className={styles.title}>ورود</h1>
        <h2 className={styles.subtitle}>برای ورود به سامانه، شماره تلفن همراه خود را وارد کنید</h2>
        <Input
          type="tel"
          placeholder="09xxxxxxxxx"
          label="شماره تلفن همراه"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          autoFocus
          error={error || undefined}
        />
        <AnimatePresence mode="wait">
          {success ? (
            <motion.button
              key="success"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1, backgroundColor: '#16a34a' }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className={`${styles.submit} ${buttonStyles.button} ${styles.success}`}
              disabled
            >
              موفق!
            </motion.button>
          ) : (
            <motion.button
              key="normal"
              whileTap={{ scale: 0.97 }}
              className={`${styles.submit} ${buttonStyles.button}`}
              type="submit"
              disabled={loading}
            >
              {loading ? 'در حال ورود...' : 'ورود'}
            </motion.button>
          )}
        </AnimatePresence>
      </motion.form>
    </div>
  );
} 