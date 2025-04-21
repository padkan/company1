import ImageCard from "./ImageCard";

const ImageCardList = () => {
  const cardsData = [
    {
      title: "شهر مونیخ",
      imageUrl: "/images/city.jpg", // Replace with your image URL
    },
    {
      title: "تحلیل‌های مالی",
      imageUrl: "/images/tahlil2.jpeg", // Replace with your image URL
    },
    {
      title: "آپارتمان و سرمایه‌گذاری ملکی",
      imageUrl: "/images/home.jpeg", // Replace with your image URL
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-4 mt-6 md:grid-cols-2 lg:grid-cols-3">
      {cardsData.map((card, index) => (
        <ImageCard key={index} title={card.title} imageUrl={card.imageUrl} />
      ))}
    </div>
  );
};

export default ImageCardList;
