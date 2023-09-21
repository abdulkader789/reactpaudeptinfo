import React, { useState, useEffect } from 'react';

const TextAnimation = ({ texts }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [showText, setShowText] = useState(false);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    let animationTimeout;

    if (!showText) {
      animationTimeout = setTimeout(() => {
        setShowText(true);
        setDisplayedText('');
      }, 1000);
    } else if (displayedText.length < texts[currentIndex].length && !reverse) {
      animationTimeout = setTimeout(() => {
        setDisplayedText(texts[currentIndex].substring(0, displayedText.length + 1));
      }, 100);
    } else if (displayedText.length === texts[currentIndex].length && !reverse) {
      animationTimeout = setTimeout(() => {
        setReverse(true);
      }, 1000);
    } else if (displayedText.length > 0 && reverse) {
      animationTimeout = setTimeout(() => {
        setDisplayedText(displayedText.substring(0, displayedText.length - 1));
      }, 100);
    } else {
      animationTimeout = setTimeout(() => {
        setShowText(false);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
        setReverse(false);
      }, 1000);
    }

    return () => {
      clearTimeout(animationTimeout);
    };
  }, [texts, currentIndex, displayedText, showText, reverse]);

  return (
    <div className="text-animation">
      <h1 className='font-extrabold text-4xl text-white uppercase'>{displayedText}<span className='font-medium text-green-500 lowercase'>l</span></h1>
    </div>
  );
};

export default TextAnimation;
