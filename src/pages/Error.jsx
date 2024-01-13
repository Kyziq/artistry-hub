import bobotimg from '../assets/images/4errorPage/404image.png';
import { Image } from '@nextui-org/react';

const ErrorPage = () => {
  return (
    <div className="flex flex-col justify-start items-start min-h-screen bg-gray-100 overflow-hidden p-4 md:p-10 ml-0 md:ml-20">
      <div className="flex flex-col md:flex-row items-center justify-between w-full p-4 md:p-10 ml-0 md:ml-20">
        <div className="mb-4 md:mb-0 md:p-10 md:ml-20">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            404 Error
          </h2>
          <h2 className="text-3xl md:text-4xl font-bold text-red-600">
            Oops! Something went wrong.
          </h2>
          <p className="text-lg font-medium text-gray-500">
            The page you are looking for does not exist or has been moved.
          </p>
        </div>
        <div className="text-4xl md:text-6xl p-4 md:p-10 ml-0 md:ml-20">
          <Image src={bobotimg} alt="Bot Image" className="max-w-full h-auto" />
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
