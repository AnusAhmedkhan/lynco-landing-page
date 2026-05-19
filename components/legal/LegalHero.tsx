"use client";

import Typography from "@/components/ui/legacy-typography";

type Props = {
  title: string;
  description?: string;
  children?: React.ReactNode;
};

const LegalHero = ({ title, description, children }: Props) => {
  return (
    <section className="bg-lyn-bg border-lyn-border/80 relative overflow-hidden border-b text-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-8 pt-18 pb-12 sm:pb-16">
        <div className="max-w-3xl mx-auto text-center">
          <Typography
            variant="display"
            className="mt-2 text-background text-3xl sm:text-5xl"
          >
            {title}
          </Typography>

          {description ? (
            <Typography className="mt-4 text-background/80">
              {description}
            </Typography>
          ) : null}

          {children ? <div className="mt-8">{children}</div> : null}
        </div>
      </div>
    </section>
  );
};

export default LegalHero;
