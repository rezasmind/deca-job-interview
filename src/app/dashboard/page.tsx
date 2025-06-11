'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './Dashboard.module.scss';
import UserCard, { type User } from '../../components/UserCard';
import { motion, AnimatePresence } from 'framer-motion';

export default function DashboardPage() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [loadingSignOut, setLoadingSignOut] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const stored = localStorage.getItem('user');
    if (!stored) {
      router.replace('/auth');
      return;
    }
    try {
      const parsedUser: User = JSON.parse(stored);
      setUser(parsedUser);
    } catch {
      localStorage.removeItem('user');
      router.replace('/auth');
    }
  }, [router]);

  // Welcome text timeout
  useEffect(() => {
    if (!showWelcome) return;
    const timer = setTimeout(() => setShowWelcome(false), 2500);
    return () => clearTimeout(timer);
  }, [showWelcome]);

  const handleSignOut = () => {
    if (typeof window === 'undefined') return;
    setLoadingSignOut(true);
    localStorage.removeItem('user');
    router.replace('/auth');
  };

  if (user === null) {
    // Loading state
    return <div className={styles.loading}>در حال بارگذاری...</div>;
  }

  return (
    <div className={styles.container}>
      <AnimatePresence mode="wait">
        {showWelcome ? (
          <motion.h1
            key="welcome"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
            className={styles.welcome}
          >
            سلام {user.name?.first ?? ''}، خوش آمدی 👋
          </motion.h1>
        ) : (
          user && (
            <motion.div
              key="card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <UserCard
                user={user}
                onSignOut={handleSignOut}
                signOutDisabled={loadingSignOut}
              />
            </motion.div>
          )
        )}
      </AnimatePresence>
    </div>
  );
} 