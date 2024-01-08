const ErrorPage = () => {
  return (
    <div className="flex flex-col justify-start items-start min-h-screen bg-gray-100 overflow-hidden p-10">
      <div className="flex items-center justify-between w-full">
        <div>
          <h1 className="text-4xl font-bold text-black-500 mb-10 mt-12">
            ArtistryHub.
          </h1>
          <h2 className="text-3xl font-bold text-black-500 mb-5">404 Error.</h2>
          <h2 className="text-3xl font-bold text-red-500">
            Oops! Something went wrong.
          </h2>
          <p className="font-bold text-gray-400 mt-3">
            This page does not exist.
          </p>
        </div>
        <div className="text-6xl p-10"> &#129402;</div>
      </div>
    </div>
  );
};

export default ErrorPage;
