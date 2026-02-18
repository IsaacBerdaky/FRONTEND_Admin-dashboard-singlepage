"use client"

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts"

const data = [
  { month: "Jan", political: 65, economic: 55, environmental: 40 },
  { month: "Feb", political: 70, economic: 60, environmental: 45 },
  { month: "Mar", political: 68, economic: 58, environmental: 50 },
  { month: "Apr", political: 75, economic: 62, environmental: 52 },
  { month: "May", political: 72, economic: 66, environmental: 60 },
  { month: "Jun", political: 78, economic: 70, environmental: 65 },
]

export default function RiskChart() {
  return (
    <div className="w-full h-[400px] bg-[#101926] pt-6 pb-5 rounded-2xl shadow-lg">
      <h2 className="text-xl font-semibold text-white mb-4 ml-9">
        Análise de Risco Global
      </h2>

      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid stroke="#1f2937" strokeDasharray="3 3" />

          <XAxis dataKey="month" stroke="#9CA3AF" />
          <YAxis stroke="#9CA3AF" />

          <Tooltip
            contentStyle={{
              backgroundColor: "#101926",
              border: "none",
              borderRadius: "8px",
              color: "#fff",
            }}
          />

          <Legend />

          <Line
            type="monotone"
            dataKey="political"
            stroke="#EF4444"
            strokeWidth={3}
            name="Risco Político"
          />

          <Line
            type="monotone"
            dataKey="economic"
            stroke="#3B82F6"
            strokeWidth={3}
            name="Risco Econômico"
          />

          <Line
            type="monotone"
            dataKey="environmental"
            stroke="#22C55E"
            strokeWidth={3}
            name="Risco Ambiental"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
