import React from 'react';
import useOnlineStatus from '../hooks/useOnlineStatus';

function OnlineStatus() {
  const online = useOnlineStatus();

  return <span>{online ? 'En ligne ✅' : 'Hors ligne ❌'}</span>;
}

export default OnlineStatus;