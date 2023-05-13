import React, { useEffect, useState } from 'react';
import WebSocket from 'isomorphic-ws';

const PacketLatency = () => {
  const [latency, setLatency] = useState(null);

  useEffect(() => {
    const ws = new WebSocket('ws://localhost:55455');

    ws.onmessage = (message) => {
      const packetTimestamp = Number(message.data);
      const packetLatency = Date.now() - packetTimestamp;
      setLatency(packetLatency);
    };

    ws.onerror = (error) => {
      console.log(`WebSocket error: ${error}`);
    };

    ws.onclose = () => {
      console.log('WebSocket connection closed');
    };

    return () => {
      ws.close();
    };
  }, []);

  return (
    <div className="pylon-latency-container">
      <h3>Packet Latency from Pylon:</h3>
      {latency ? <p>{latency} ms</p> : <p>Waiting for data...</p>}
    </div>
  );
};

export default PacketLatency;
