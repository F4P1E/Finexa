"use client"

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts"

const data = [
  { name: "Jan", total: 1200 },
  { name: "Feb", total: 900 },
  { name: "Mar", total: 1600 },
  { name: "Apr", total: 1400 },
  { name: "May", total: 2000 },
  { name: "Jun", total: 1800 },
]

export function Overview() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <XAxis dataKey="name" style={{ fontSize: 12 }} />
        <YAxis style={{ fontSize: 12 }} />
        <Tooltip />
        <Bar dataKey="total" fill="#8884d8" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}