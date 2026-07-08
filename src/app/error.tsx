"use client";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ reset }: ErrorProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white rounded-2xl shadow-lg p-10 max-w-lg w-full text-center">
        <h1 className="text-6xl font-bold text-red-500">خطا!</h1>

        <h2 className="mt-5 text-2xl font-bold">
          مشکلی در اجرای برنامه به وجود آمد.
        </h2>

        <p className="mt-4 text-gray-600 leading-8">
          متأسفانه هنگام پردازش درخواست شما خطایی رخ داد. لطفاً دوباره تلاش
          کنید. اگر مشکل همچنان ادامه داشت، بعداً مجدداً مراجعه کنید.
        </p>

        <button
          onClick={reset}
          className="mt-8 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          تلاش مجدد
        </button>
      </div>
    </div>
  );
}