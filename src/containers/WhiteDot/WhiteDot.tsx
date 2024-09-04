import { useEffect } from 'react';
import './WhiteDot.scss';

const WhiteDot = () => {
  useEffect(() => {
    const whiteDot = document.getElementById('white-dot');

    if (whiteDot) {
      whiteDot.addEventListener('animationend', () => {
        whiteDot.style.display = 'none';
      });
    }
  }, []);

  return (
    <div className="white-dot-page">
      <div className="white-dot" id="white-dot"></div>
      <div className="white-dot-content">
        <h1>White Dot Page</h1>
        {/* Add your people cards or other content here */}
      </div>
    </div>
  );
};

export default WhiteDot;