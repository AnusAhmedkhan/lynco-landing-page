"use client";

type Props = {
  children: React.ReactNode;
};

const LegalPageLayout = ({ children }: Props) => {
  return <div className="mx-auto  max-w-6xl px-4 sm:px-8 py-12">{children}</div>;
};

export default LegalPageLayout;
