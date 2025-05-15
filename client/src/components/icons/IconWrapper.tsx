import { ReactNode } from "react";

interface IconWrapperProps {
  children: ReactNode;
  className?: string;
}

const IconWrapper: React.FC<IconWrapperProps> = ({ children, className = "" }) => {
  return (
    <div className={`h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center ${className}`}>
      <div className="h-6 w-6 text-primary">
        {children}
      </div>
    </div>
  );
};

export default IconWrapper;
