import { useEffect, useState } from "react";

const AnimatedRow = ({ imageUrl }) => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAnimate(true);
    }, 100); // Delay before starting the animation

    return () => clearTimeout(timeout); // Cleanup timeout
  }, []);

  return (
    <div className="flex items-start justify-between gap-6 p-4">
      <div
        className={`w-full md:w-1/2 text-right transition-transform duration-500 ${
          animate ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        }`}
      >
        <h2 className="m-4 text-2xl font-bold">
          راهنمای خرید و سرمایه‌گذاری در حوزه مسکن
        </h2>
        <p className="mt-2 text-xl">
          خرید خانه یا آپارتمان، یکی از بزرگترین تصمیمات مالی است. در این مسیر،
          ما همراه شما خواهیم بود تا با تحلیل دقیق ویژگی‌های ملک، مزایا و معایب
          آن را به خوبی شناسایی کنید و بهترین انتخاب را برای آینده‌تان انجام
          دهید.
        </p>
        <ul className="hidden p-2 font-bold text-right lg:block">
          <li className="mt-2">
            - تحلیل دقیق ویژگی‌های ملک: وضعیت ساخت، امکانات، زیرساخت‌ها
          </li>
          <li className="mt-2">
            - مزایا و معایب ملک: موقعیت، محله، سند قانونی
          </li>
          <li className="mt-2">
            - هزینه‌های جاری و پنهان مانند مالیات و تعمیرات
          </li>
          <li className="mt-2">- بررسی نیاز به بازسازی و بهینه‌سازی ملک</li>
          <li className="mt-2">
            - ارزیابی روند قیمت و آینده ارزش سرمایه‌گذاری
          </li>
        </ul>
      </div>

      <div
        className={`w-full hidden md:block  md:w-1/2 transition-transform duration-500 ${
          animate ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <img
          src={imageUrl}
          alt="Animated"
          className="object-cover w-full h-auto" // Ensures the image scales correctly
        />
      </div>
    </div>
  );
};

export default AnimatedRow;
