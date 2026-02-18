"use client"

import { useState } from "react"
import { Menu } from "lucide-react"
import Sidebar from "@/components/sidebar"
import Globe from "@/components/globe"
import SmallCard from "@/components/smallCard"
import RiskChart from "@/components/riskGraph"
import GovernmentApprovalChart from "@/components/governoAprov"
import AnomalyPieChart from "@/components/anomalyPie"

export default function Page() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="min-h-screen bg-[#0B1016] text-white">
      
      {/* Header */}
      <header className="p-4 sticky top-0">
        <button onClick={() => setIsOpen(true)}>
          <Menu />
        </button>
      </header>

      <Sidebar isOpen={isOpen} onClose={() => setIsOpen(false)} />

      {/* Main */}
      <main className="p-4 sm:p-6 md:p-8 ">
        
        <h1 className="text-xl sm:text-2xl mb-6">
          Bem vindo de volta, Usuário!
        </h1>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
          <SmallCard title="Alertas Recentes" value="1,234" />
          <SmallCard title="Taxa de Risco" value="14%" />
          <SmallCard title="Analistas Online" value="26" />
          <SmallCard title="Relatórios Hoje" value="74" />
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          <div className="bg-[#101926] rounded-2xl p-4">
            <RiskChart />
          </div>

          <div className="bg-[#101926] rounded-2xl p-4">
            <GovernmentApprovalChart />
          </div>
          
          <div className="bg-[#101926] rounded-2xl p-4">
            <Globe />
          </div>

           <div className="bg-[#101926] rounded-2xl p-4 h-[420px]">
            <AnomalyPieChart />
          </div>
          
        </div>

      </main>
    </div>
  )
}
