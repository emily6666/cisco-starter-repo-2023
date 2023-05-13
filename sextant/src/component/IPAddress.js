import React, { useEffect, useState } from "react";
import axios from "axios";

const IPAddress = ({ ipv6 }) => {
  const [ipAddress, setIpAddress] = useState("");

  useEffect(() => {
    const getIP = async () => {
      try {
        const response = await axios.get(`https://api64.ipify.org?format=json`);
        setIpAddress(response.data.ip);
      } catch (error) {
        console.error("Error fetching IP address: ", error);
      }
    };

    if (ipv6) {
      getIP();
    } else {
      const getIPv4 = async () => {
        try {
          const response = await axios.get(`https://api.ipify.org?format=json`);
          setIpAddress(response.data.ip);
        } catch (error) {
          console.error("Error fetching IP address: ", error);
        }
      };

      getIPv4();
    }
  }, [ipv6]);

  return (
    <div>
      <h3> {ipv6 ? "IPv6" : "IPv4"}: {ipAddress}</h3>
    </div>
  );
};

export default IPAddress;
