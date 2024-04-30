import React, { useEffect } from 'react';

useEffect(() => {
  const handleScroll = () => {
    console.log("Window scroll: ", window.scrollY);
  };

  window.addEventListener("scroll", handleScroll);

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);
