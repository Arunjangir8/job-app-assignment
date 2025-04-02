import React from "react";

interface CompanyLogoProps {
  dangerousHTML: string;
  className?: string;
}

export const CompanyLogo: React.FC<CompanyLogoProps> = ({
  dangerousHTML,
  className = "",
}) => {
  return (
    <div className={className}>
      <div
        dangerouslySetInnerHTML={{
          __html: dangerousHTML,
        }}
      />
    </div>
  );
};
