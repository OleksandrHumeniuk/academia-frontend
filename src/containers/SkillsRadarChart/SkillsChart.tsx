import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

type SkillScore = {
  skill: string;
  score: number;
};

type SkillsRadarChartProps = {
  scores: SkillScore[];
};

const SkillsRadarChart: React.FC<SkillsRadarChartProps> = ({ scores }) => {
  const data = scores.map(item => ({
    subject: item.skill,
    score: item.score,
    fullMark: 100,
  }));

  return (
    <ResponsiveContainer width="100%" height={300}>
      <RadarChart cx="50%" cy="50%" outerRadius="70%" data={data}>
        <PolarGrid stroke="#e5e7eb" />
        <PolarAngleAxis
          dataKey="subject"
          tick={{
            fill: 'black',
            fontSize: 14,
            fontWeight: 500,
          }}
        />
        <PolarRadiusAxis angle={90} domain={[0, 100]} tick={false} />
        <Radar
          name="Skills"
          dataKey="score"
          stroke="black"
          fill="black"
          fillOpacity={0.1}
          dot={{
            fill: 'black',
            r: 4,
          }}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
};

export default SkillsRadarChart;
