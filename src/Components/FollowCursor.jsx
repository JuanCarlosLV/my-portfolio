import React, { useState, useEffect } from 'react';
import '../assets/CSS/FollowCursor.css'; // Importa estilos adicionales

const FollowCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [gradientPosition, setGradientPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateCursorPosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener('mousemove', updateCursorPosition);

    return () => {
      document.removeEventListener('mousemove', updateCursorPosition);
    };
  }, []);

  useEffect(() => {
    const updateGradientPosition = () => {
      const dx = position.x - gradientPosition.x;
      const dy = position.y - gradientPosition.y;
      const newX = gradientPosition.x + dx * .2; // Adjust speed here
      const newY = gradientPosition.y + dy * .2; // Adjust speed here
      setGradientPosition({ x: newX, y: newY });
    };

    const updateInterval = setInterval(updateGradientPosition, 1000 / 100); // 60 FPS

    return () => {
      clearInterval(updateInterval);
    };
  }, [position, gradientPosition]);

  return (
    <div className="follow-cursor">
      <div
        className="cursor-gradient"
        style={{
          left: gradientPosition.x + 'px',
          top: gradientPosition.y + 'px',
        }}
      ></div>
    </div>
  );
};

export default FollowCursor;
