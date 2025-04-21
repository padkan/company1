const ImageCard = ({ title, imageUrl }) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg card-full-img group">
      <img
        src={imageUrl}
        alt={title}
        className="object-cover w-full h-full transition-transform duration-500 transform group-hover:scale-110"
      />
      <div className="absolute inset-0 transition-opacity duration-300 bg-black opacity-50 overlay group-hover:opacity-0"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <h2 className="z-10 text-xl font-bold text-white card-full-img-title">
          {title}
        </h2>
      </div>
    </div>
  );
};

export default ImageCard;
