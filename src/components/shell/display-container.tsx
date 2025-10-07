import { cn } from "@/lib/utils";
import React from "react";

const DisplayContainer = ({
  className,
  children,
}: {
  className: string, 
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn("container rounded analysisview mx-auto ", className)}
      data-nosnippet
    >
      {children}
    </div>
  );
};

export default DisplayContainer;
