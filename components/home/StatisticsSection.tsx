"use client";

import Container from "@/components/Container";
import { STATISTICS } from "@/constants/landing";

import StatisticsCard from "./StatisticsCard";

const StatisticsSection = () => {
  return (
    <section className="bg-grayWhite py-16 sm:py-22">
      <Container size="lg">
        <div className="statistics-card statistics-card-shadow rounded-[24px] bg-white p-6 py-10 sm:rounded-[34.449px] sm:p-8 sm:py-14">
          <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-4">
            {STATISTICS.map((statistic) => (
              <StatisticsCard key={statistic.id} statistic={statistic} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default StatisticsSection;
