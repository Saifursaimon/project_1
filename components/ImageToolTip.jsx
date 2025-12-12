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
        <div className="absolute bottom-full mb-3 left-1/2 transform -translate-x-2 px-3 py-1 bg-[#8a8a8a]
         text-white text-sm whitespace-nowrap z-50 ">
          {tooltipText}
           <div
            className="
              absolute top-full left-3
              -translate-x-1/2               /* center arrow under tooltip */
              w-0 h-0 
              border-l-8 border-l-transparent 
              border-r-8 border-r-transparent 
              border-t-8 border-t-[#8a8a8a]  /* arrow color */
            "
          />
        </div>
      )}
    </div>
  );
};

export default ImageTooltip;
