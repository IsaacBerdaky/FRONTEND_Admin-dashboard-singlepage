"use client"

import CountUp from "react-countup"

export default function SmallCard({
  title,
  value,
}: {
  title: string
  value: string
}) {
  const numericValue = parseFloat(value.replace(/[^0-9.-]+/g, ""))
  const suffix = value.replace(/[0-9.,-]/g, "")

  return (
    <div className="bg-[#101926] rounded-lg p-4 w-60 font-radio">
      <h3 className="text-sm text-gray-400">{title}</h3>

      <p className="text-2xl font-bold mt-2">
        <CountUp
          end={numericValue}
          duration={3}
          separator=","
        />
        {suffix}
      </p>
    </div>
  )
}
