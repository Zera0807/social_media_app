import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Define the TimeUnit type.
type TimeUnit = 'seconds' | 'minutes' | 'hours' | 'days';

export function formatDate(dateString: string): string {
  // Create a new Date object from the date string.
  const date = new Date(dateString);

  // Get the current time in milliseconds.
  const now = Date.now();

  // Calculate the time difference between the current time and the given date.
  const timeDiff = now - date.getTime();

  // Convert the time difference to seconds.
  let seconds: number = timeDiff / 1000;

  // Determine the appropriate unit of time for the time difference.
  let unit: TimeUnit = 'seconds';
  if (seconds >= 60) {
    seconds /= 60;
    unit = 'minutes';
  }
  if (seconds >= 60) {
    seconds /= 60;
    unit = 'hours';
  }
  if (seconds >= 24) {
    seconds /= 24;
    unit = 'days';
  }

  // Round the time difference to the nearest integer.
  const roundedTimeDiff = Math.round(seconds);

  // Return a meaningful string representation of the time difference.
  return `${roundedTimeDiff} ${unit} ago`;
}

//
export const checkIsLiked = (likeList: string[], userId: string) => {
  return likeList.includes(userId);
};