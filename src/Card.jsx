import { useEffect, useRef } from "react";
import PropTypes from "prop-types";

const Card = ({ title, description, list }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("appear"); // Add the appear class
          observer.unobserve(entry.target); // Stop observing after it appears
        }
      });
    });

    if (cardRef.current) {
      observer.observe(cardRef.current); // Observe the card
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current); // Cleanup the observer
      }
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className="p-4 text-right transition duration-700 transform translate-y-5 bg-white opacity-0 card-scrolling"
    >
      <h3 className="text-lg font-semibold">{title}</h3>
      <p>{description}</p>
      <ul className="p-2 text-base text-right">
        {list?.map((item, index) => (
          <li key={index} className="mt-2">
            - {item}
          </li>
        ))}
      </ul>
    </div>
  );
};
Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  list: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Card;
