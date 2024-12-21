import React, { useState } from "react";

import { calculateDailyPoints } from "../utils";

const DailyPoints: React.FC = () => {
  const [points] = useState(calculateDailyPoints(new Date("2024-12-01")));

  return (
    <div className="rounded-lg bg-neutral p-4">
      <h2 className="text-lg font-bold">Daily Points</h2>
      <p className="text-xl text-neutral-content">{points}</p>
    </div>
  );
};

export default DailyPoints;
