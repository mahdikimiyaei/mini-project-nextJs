import { routes } from "@/constants/routes";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-lg w-full bg-white rounded-2xl shadow-lg p-10 text-center">
        <h1 className="text-7xl font-bold text-blue-600">404</h1>

        <h2 className="mt-5 text-3xl font-bold text-gray-800">
          صفحه مورد نظر پیدا نشد
        </h2>

        <p className="mt-4 text-gray-600 leading-8">
          متأسفانه صفحه‌ای که به دنبال آن هستید وجود ندارد یا ممکن است
          حذف شده باشد. لطفاً آدرس را بررسی کنید یا از طریق دکمه زیر
          به صفحه اصلی بازگردید.
        </p>

        <Link
          href={routes.home}
          className="inline-block mt-8 rounded-lg bg-blue-600 px-6 py-3 text-white transition hover:bg-blue-700"
        >
          بازگشت به صفحه اصلی
        </Link>
      </div>
    </div>
  );
}