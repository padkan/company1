import { useState } from "react";

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleAccept = () => {
    setIsVisible(false);
    // Here you can add functions to set cookies or preferences
  };

  const handleDecline = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null; // Hide if already accepted or declined

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 p-4 bg-white shadow-lg">
      <div className="flex items-center justify-between max-w-3xl gap-6 mx-auto text-left">
        <p className="flex-1 mr-4">
          This website uses cookies to provide you with the best possible
          experience. You can accept all cookies or customize your preferences.
        </p>
        <div className="flex space-x-2">
          <button
            onClick={handleAccept}
            className="flex-1 px-6 py-2 text-white bg-blue-500 rounded"
          >
            Accept All Cookies
          </button>
          <button
            onClick={handleDecline}
            className="flex-1 px-6 py-2 text-black bg-gray-300 rounded"
          >
            Decline Cookies
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
