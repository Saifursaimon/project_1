import { useState } from "react";

const ImageTooltip = ({ src, alt, tooltipText, className }) => {
  const [show, setShow] = useState(false);

  return (
    <div
      className={`relative inline-block ${className}`}
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      <img src={src} alt={alt} className="rounded-lg" />

      {show && (
        <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-[#8a8a8a] text-white text-sm rounded-lg whitespace-nowrap z-50">
          {tooltipText}
        </div>
      )}
    </div>
  );
};

export default ImageTooltip;
