function Footer() {
  return (
    <footer className="mt-20 border-t border-gray-200 bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Logo */}
          <div>
            <h2 className="text-2xl font-bold text-indigo-600 ">
              Product App
            </h2>
            <p className="mt-3 text-sm leading-6 text-gray-500 font-bold text-left w-50">
              یک پروژه ساده با Next.js، React Query و Tailwind CSS.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="mb-4 font-semibold text-gray-800 dark:text-gray-50">
              دسترسی سریع
            </h3>

            <ul className="space-y-2 font-semibold text-sm text-gray-500">
              <li>
                <a
                  href="#"
                  className="transition hover:text-indigo-600"
                >
                  خانه
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="transition hover:text-indigo-600"
                >
                  محصولات
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 font-semibold text-gray-800 dark:text-gray-50">
              ارتباط با ما
            </h3>

            <div className="space-y-2 text-sm text-gray-500 font-semibold">
              <p>Email: m9103243@gmail.com</p>
              <p>Phone: +98 912 123 4567</p>
            </div>
          </div>
        </div>

        <div className="font-bold mt-10 border-t border-gray-200 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Product App. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;