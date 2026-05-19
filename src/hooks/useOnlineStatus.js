import { useDebugValue, useEffect, useState } from 'react';

function useOnlineStatus() {
  const [online, setOnline] = useState(navigator.onLine);

  useDebugValue(online ? 'En ligne' : 'Hors ligne');

  useEffect(() => {
    const goOnline = () => setOnline(true);
    const goOffline = () => setOnline(false);

    window.addEventListener('online', goOnline);
    window.addEventListener('offline', goOffline);

    return () => {
      window.removeEventListener('online', goOnline);
      window.removeEventListener('offline', goOffline);
    };
  }, []);

  return online;
}

export default useOnlineStatus;