import React from 'react';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/tanıtım.mp4' autoPlay loop muted />
      <h1>SORU ÇÖZÜM DÜNYASINA HOŞGELDİN</h1>
      <p>Ne için bekliyorsun? Hadi Sorularının Cevabını Bulalım</p>
     
    </div>
  );
}

export default HeroSection;