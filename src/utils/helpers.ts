import { BookingStatus } from '@/types/api.types';

export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    month: '2-digit',
    day: '2-digit',
    year: 'numeric',
  });
};

export const formatTime = (timeString: string): string => {
  const time = new Date(timeString);
  return time.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  });
};

export const formatCurrency = (amount: number, currency: string = 'OMR'): string => {
  return `${amount.toLocaleString()} ${currency}`;
};

export const getStatusColor = (status: BookingStatus): string => {
  const statusColors: Record<BookingStatus, string> = {
    accepted: 'accepted',
    pending: 'pending',
    assigned: 'assigned',
    declined: 'declined',
    cancelled: 'cancelled',
  };
  return statusColors[status] || 'pending';
};

export const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text;
  return `${text.substring(0, maxLength)}...`;
};

export const debounce = <T extends (...args: unknown[]) => void>(
  func: T,
  delay: number
): ((...args: Parameters<T>) => void) => {
  let timeoutId: ReturnType<typeof setTimeout>;
  return (...args: Parameters<T>) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
};

