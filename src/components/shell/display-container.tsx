import React from "react";

const DisplayContainer = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div
      className="container rounded analysisview mx-auto min-w-[500px]"
      data-nosnippet
    >
      {children}
    </div>
  );
};

export default DisplayContainer;
