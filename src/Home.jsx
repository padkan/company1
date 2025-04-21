import CardList from "./CardList";
import ImageCardList from "./ImageCardList";
import AnimatedRow from "./AnimatedRow";
import CookieConsent from "./CookieConsent";

function Home() {
  return (
    <>
      <div className="px-4 py-8 mx-auto bg-gray-100 max-w-7xl">
        {/* Other content like main menu */}
        <AnimatedRow
          imageUrl="/images/hero1.jpeg" // Replace with your image URL
        />
        {/* Other content */}
      </div>
      <div className="px-4 m-5 mx-auto max-w-7xl">
        <CardList />
        <ImageCardList />
      </div>

      <div className="px-4 mx-auto mt-5 max-w-7xl">
        <div className="scrolling-logo-container">
          <div className="scrolling-logos">
            <img
              src="/images/bank-logo/Logo-Consorsfinanz.webp"
              alt="Consorsfinanz"
              className="logo"
            />
            <img
              src="/images/bank-logo/Targobank_logo.svg.png"
              alt="Brand 2"
              className="logo"
            />
            <img
              src="/images/bank-logo/deutsche-bank-logo-2.webp"
              alt="Brand 3"
              className="logo"
            />
            <img
              src="/images/bank-logo/Logo-BHW.webp"
              alt="Brand 4"
              className="logo"
            />
            <img
              src="/images/bank-logo/Sparkasse.svg.png"
              alt="Brand 5"
              className="logo"
            />
          </div>
        </div>
      </div>
      <CookieConsent />
    </>
  );
}

export default Home;
