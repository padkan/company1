function Home() {
  return (
    <>
      <div className="px-4 mx-auto max-w-7xl">
        {/* <!-- Three Cards --> */}
        <div className="grid grid-cols-1 gap-4 mb-8 sm:grid-cols-3">
          <div className="p-4 bg-white rounded shadow">
            <img
              src="/images/city.jpg"
              alt="Card 1"
              className="object-cover w-full h-32 mb-2 rounded"
            />
            <h3 className="text-lg font-semibold">شهر مونیخ</h3>
          </div>
          <div className="p-4 bg-white rounded shadow">
            <img
              src="./images/tahlil2.jpeg"
              alt="Card 2"
              className="object-cover w-full h-32 mb-2 rounded"
            />
            <h3 className="text-lg font-semibold">تحلیل‌های مالی</h3>
          </div>
          <div className="p-4 bg-white rounded shadow">
            <img
              src="./images/home.jpeg"
              alt="Card 3"
              className="object-cover w-full h-32 mb-2 rounded"
            />
            <h3 className="text-lg font-semibold">
              آپارتمان و سرمایه‌گذاری ملکی
            </h3>
          </div>
        </div>

        {/* <!-- Six Bigger Cards --> */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          <div className="p-6 bg-white rounded shadow">
            <h3 className="text-xl font-semibold text-right">
              تحلیل مالی مشتریان
            </h3>
            <p className="p-1 mt-2 text-lg text-right">
              ما در کنار شما هستیم تا تصویر شفافی از وضعیت مالی‌تان داشته باشید.
              با تحلیل دقیق درآمد، هزینه‌ها و دارایی‌های شما، به شما کمک می‌کنیم
              تا مسیر بهتری برای مدیریت مالی خود انتخاب کنید.
            </p>
            <ul className="p-2 text-base text-right">
              <li className="mt-2">- بررسی دقیق درآمدها و هزینه‌ها</li>
              <li className="mt-2">- ارائه پیشنهاد‌های بهینه‌سازی مالی</li>
              <li className="mt-2">- تحلیل ریسک‌های مالی شخصی</li>
              <li className="mt-2">
                - برنامه‌ریزی برای اهداف مالی کوتاه‌مدت و بلندمدت
              </li>
              <li className="mt-2">
                - ارائه گزارش‌های مالی برای تصمیم‌گیری بهتر
              </li>
            </ul>
          </div>
          <div className="p-6 bg-white rounded shadow">
            <h3 className="text-xl font-semibold">تحلیل وام خودرو</h3>
            <p className="p-1 mt-2 text-lg text-right">
              خرید خودرو یک تصمیم مالی مهم است و ما اینجا هستیم تا به شما کمک
              کنیم بهترین گزینه را انتخاب کنید. با بررسی نرخ بهره، شرایط
              بازپرداخت و هزینه‌های پنهان، بهترین راهکار تأمین مالی خودرو را به
              شما پیشنهاد می‌دهیم.
            </p>
            <ul className="p-2 text-base text-right">
              <li className="mt-2">- مقایسه انواع وام‌های خودرو</li>
              <li className="mt-2">- بررسی میزان توان بازپرداخت شما</li>
              <li className="mt-2">- تحلیل نرخ بهره و شرایط وام‌دهندگان</li>
              <li className="mt-2">- محاسبه هزینه‌های جانبی خرید خودرو</li>
              <li className="m-2">
                - ارائه بهترین استراتژی برای تأمین مالی خودرو
              </li>
            </ul>
          </div>
          <div className="p-6 bg-white rounded shadow">
            <h3 className="text-xl font-semibold">تحلیل وام مسکن</h3>
            <p className="p-1 mt-2 text-lg text-right">
              خرید خانه یکی از مهم‌ترین تصمیمات زندگی است. ما به شما کمک می‌کنیم
              تا با تحلیل شرایط مالی خود، مناسب‌ترین وام مسکن را انتخاب کنید و
              از پرداخت هزینه‌های اضافی جلوگیری کنید.
            </p>
            <ul className="p-2 text-base text-right">
              <li className="mt-2">- مقایسه انواع وام‌های مسکن</li>
              <li className="mt-2">
                - بررسی نرخ بهره و تأثیر آن بر بازپرداخت تحلیل وضعیت مالی شما
                برای دریافت بهترین وام مسکن
              </li>
              <li className="mt-2">
                - محاسبه هزینه‌های جانبی خرید خانه / آپارتمان
              </li>
              <li className="mt-2">
                - ارائه راهکارهای کاهش فشار مالی در بازپرداخت و برنامه ریزی مالی
                استهلاک تسهیلات
              </li>
            </ul>
          </div>
        </div>
        <div className="px-4 mx-auto max-w-7xl">
          <div className="scrolling-logo-container">
            <div className="scrolling-logos">
              <img src="logo1.png" alt="Brand 1" className="logo" />
              <img src="logo2.png" alt="Brand 2" className="logo" />
              <img src="logo3.png" alt="Brand 3" className="logo" />
              <img src="logo4.png" alt="Brand 4" className="logo" />
              <img src="logo5.png" alt="Brand 5" className="logo" />
              <img src="logo6.png" alt="Brand 6" className="logo" />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 my-4 md:grid-cols-1 lg:grid-cols-1">
          <div className="p-6 bg-white rounded shadow">
            <h3 className="text-xl font-semibold">
              راهنمای خرید و سرمایه‌گذاری در حوزه مسکن
            </h3>
            <p className="mt-2 text-lg text-right">
              خرید خانه یا آپارتمان، یکی از بزرگترین تصمیمات مالی است. در این
              مسیر، ما همراه شما خواهیم بود تا با تحلیل دقیق ویژگی‌های ملک،
              مزایا و معایب آن را به خوبی شناسایی کنید و بهترین انتخاب را برای
              آینده‌تان انجام دهید.
            </p>
            <ul className="p-2 text-base text-right">
              <li className="mt-2">
                - تحلیل دقیق ویژگی‌های ملک: وضعیت ساخت، امکانات، زیرساخت‌ها
              </li>
              <li className="mt-2">
                - مزایا و معایب ملک: موقعیت، محله، سند قانونی
              </li>
              <li className="mt-2">
                - هزینه‌های جاری و پنهان مانند مالیات و تعمیرات
              </li>
              <li className="mt-2">
                - بررسی نیاز به بازسازی و بهینه‌سازی ملک ارزیابی روند قیمت و
                آینده ارزش سرمایه‌گذاری
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
