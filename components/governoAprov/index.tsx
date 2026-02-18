"use client"

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts"

const data = [
  { month: "Jan", approval: 48 },
  { month: "Feb", approval: 52 },
  { month: "Mar", approval: 50 },
  { month: "Apr", approval: 46 },
  { month: "May", approval: 43 },
  { month: "Jun", approval: 47 },
  { month: "Jul", approval: 51 },
  { month: "Aug", approval: 49 },
]

export default function GovernmentApprovalChart() {
  return (
    <div className="w-full h-[400px] bg-[#101926] pt-6 pb-11 rounded-2xl shadow-lg">
      <h2 className="text-xl font-semibold text-white mb-4 ml-8">
        Taxa de Aprovação do Governo (%)
      </h2>

      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <defs>
            <linearGradient id="approvalColor" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#3B82F6" stopOpacity={0.05} />
            </linearGradient>
          </defs>

          <CartesianGrid stroke="#1f2937" strokeDasharray="3 3" />
          <XAxis dataKey="month" stroke="#9CA3AF" />
          <YAxis domain={[0, 100]} stroke="#9CA3AF" />

          <Tooltip
            contentStyle={{
              backgroundColor: "#101926",
              border: "none",
              borderRadius: "8px",
              color: "#fff",
            }}
          />

          <Area
            type="monotone"
            dataKey="approval"
            stroke="#3B82F6"
            strokeWidth={3}
            fill="url(#approvalColor)"
            name="Aprovação"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}
