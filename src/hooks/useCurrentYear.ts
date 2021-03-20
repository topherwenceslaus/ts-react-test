import React from "react";

const useCurrentYear = () => {
  const [currentYear, setCurrentYear] = React.useState(
    new Date().getFullYear()
  );

  return {
    getCurrentYear: () => currentYear,
    getPreviousYear: () => currentYear - 1,
    getNextYear: () => currentYear + 1,
    setCurrentYear: (year: number) => {
      setCurrentYear(year);
    },
  };
};

export default useCurrentYear;
