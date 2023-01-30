import React from "react";

const ErrorMessage = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-neutral-500">
      <div className="text-center">
        <h2 className="h2 mb-4 text-white">404 Not Found</h2>
        <p className="text-body-sm lg:text-body-md mb-8 text-white">
          The page you're looking for was not found. <br />
          Please check the URL again.
        </p>
        <a href="/" className="btn btn-lg btn-primary inline-flex">
          Back to home
        </a>
      </div>
    </div>
  );
};

export default ErrorMessage;
