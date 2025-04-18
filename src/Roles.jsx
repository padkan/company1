function Roles() {
  return (
    <div className="grid grid-cols-1 gap-4 my-4 md:grid-cols-1 lg:grid-cols-1">
      <div className="p-6 bg-white rounded shadow">
        <h1 className="text-xl font-semibold">نحوه ارائه خدمات مشاوره</h1>
        <p className="mt-2 text-lg text-right">
          خدمات مشاوره‌ای ما به دو صورت آنلاین و حضوری ارائه می‌شود تا بتوانید
          با توجه به نیاز و شرایط خود، بهترین روش را انتخاب کنید.
        </p>
        <h3 className="text-xl font-semibold text-right">
          1. مشاوره‌های آنلاین و حضوری{" "}
        </h3>
        <ul className="p-2 text-base text-right">
          <li className="mt-2">
            تمامی خدمات تحلیل مالی، وام، سرمایه‌گذاری و بررسی وضعیت اقتصادی
            به‌صورت آنلاین و حضوری قابل ارائه هستند.
          </li>
          <li className="mt-2">
            جلسات مشاوره آنلاین از طریق پلتفرم‌های ارتباطی انجام می‌شود و برای
            تمامی مشتریان، بدون محدودیت مکانی، در دسترس است.
          </li>
          <li className="mt-2">
            جلسات حضوری در صورت تمایل مشتری و امکان‌پذیری، در محل مورد توافق
            برگزار خواهند شد.
          </li>
        </ul>

        <h3 className="text-xl font-semibold text-right">
          2. محدوده خدمات مشاوره مسکن{" "}
        </h3>
        <p className="mt-2 text-lg text-right">
          <ul className="p-2 text-base text-right">
            <li className="mt-2">
              مشاوره‌های مرتبط با تحلیل و بررسی املاک و مستغلات صرفاً در ایالت
              بایرن (مونیخ و حومه) ارائه می‌شود.
            </li>
            <li className="mt-2">
              مشاوره‌های مرتبط با تحلیل و بررسی املاک و مستغلات صرفاً در ایالت
              بایرن (مونیخ و حومه) ارائه می‌شود.
            </li>
            <li className="mt-2">
              دلیل این محدودیت، نیاز به بررسی‌های میدانی و محلی در فرآیند
              ارزیابی املاک است که برای تحلیل دقیق، آگاهی از شرایط بازار
              منطقه‌ای، وضعیت محله‌ها و جزئیات مربوط به هر ملک ضروری می‌باشد.
            </li>
            <li className="mt-2">
              در خارج از این محدوده، امکان ارائه تحلیل میدانی و مشاوره دقیق برای
              املاک وجود ندارد.
            </li>
          </ul>
        </p>
        <div className="flex items-center justify-center flex-grow mt-4">
          <img
            src="images/roles.jpeg"
            alt="Financial services"
            className="object-cover h-auto mt-4 rounded w-sm"
          />
        </div>

        <p className="mt-2 text-lg text-right">
          هدف ما ارائه مشاوره‌ای مبتنی بر اطلاعات دقیق و قابل اعتماد است. با
          انتخاب روش مناسب و محدوده موردنظر، می‌توانید از خدمات ما بهره‌مند شوید
          و با اطمینان بیشتری تصمیم‌گیری کنید.
        </p>
      </div>
    </div>
  );
}

export default Roles;
