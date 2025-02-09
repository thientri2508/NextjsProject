import React from "react";

export const HeroBanner = () => {
  return (
    <div className="w-full h-[400px] relative bg-gray-200 flex items-center justify-center">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.3061291227964!2d106.757151874805!3d10.787849189361598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317526783a905a3d%3A0xb80c765aaaaa209f!2zMTUwIMSQLiBOZ3V54buFbiBEdXkgVHJpbmgsIFBoxrDhu51uZyBCw6xuaCBUcsawbmcgVMOieSwgUXXhuq1uIDIsIEjhu5MgQ2jDrSBNaW5oLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1739110943660!5m2!1svi!2s"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        />
    </div>
  );
};
