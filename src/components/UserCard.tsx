'use client';

import Image from 'next/image';
import { User as UserIcon, Mail, Phone as PhoneIcon, MapPin, LogOut } from 'lucide-react';
import styles from './UserCard.module.scss';

interface UserName {
  title?: string;
  first?: string;
  last?: string;
}

interface UserLocation {
  city?: string;
  state?: string;
  country?: string;
}

interface UserPicture {
  large?: string;
  medium?: string;
  thumbnail?: string;
}

export interface User {
  name?: UserName;
  email?: string;
  phone?: string;
  location?: UserLocation;
  picture?: UserPicture;
}

interface UserCardProps {
  user: User;
  onSignOut?: () => void;
  signOutDisabled?: boolean;
}

export default function UserCard({ user, onSignOut, signOutDisabled = false }: UserCardProps) {
  const fullName = user.name?.first && user.name?.last ? `${user.name.first} ${user.name.last}` : 'کاربر';
  const location = user.location
    ? `${user.location.city ?? ''}${user.location.city ? ',' : ''} ${user.location.state ?? ''}${
        user.location.state ? ',' : ''
      } ${user.location.country ?? ''}`
    : '';

  return (
    <section className={styles.card}>
      {user.picture?.large && (
        <Image
          className={styles.avatar}
          src={user.picture.large}
          alt={fullName}
          width={128}
          height={128}
          priority
        />
      )}
      <div className={styles.info}>
        <div className={`${styles.infoRow} ${styles.nameRow}`}>
          <UserIcon size={22} />
          <span>{fullName}</span>
        </div>
        {user.email && (
          <div className={styles.infoRow}>
            <Mail size={18} />
            <span>{user.email}</span>
          </div>
        )}
        {user.phone && (
          <div className={styles.infoRow}>
            <PhoneIcon size={18} />
            <span>{user.phone}</span>
          </div>
        )}
        {location.trim() && (
          <div className={styles.infoRow}>
            <MapPin size={18} />
            <span>{location}</span>
          </div>
        )}
        {onSignOut && (
          <button
            type="button"
            className={styles.signOut}
            onClick={onSignOut}
            disabled={signOutDisabled}
            aria-label="خروج"
          >
            <LogOut size={20} />
          </button>
        )}
      </div>
    </section>
  );
} 