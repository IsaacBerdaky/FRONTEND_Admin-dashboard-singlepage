"use client"

import { X } from "lucide-react"

interface SidebarProps {
  isOpen: boolean
  onClose: () => void
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 bg-black/50 z-40"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-dvh w-72 bg-[#0B1016] z-50
        transform transition-transform duration-300
        ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-6">
          <div>
            <h1 className="text-white text-2xl font-bold tracking-wide">
              MOONLIGHT
            </h1>
            <p className="text-gray-400 text-sm tracking-widest">
              CORPORATION
            </p>
          </div>

          <button onClick={onClose}>
            <X className="text-white" size={22} />
          </button>
        </div>

        {/* Menu */}
        <nav className="px-4 space-y-3">
          <MenuButton label="Dashboard" />
          <MenuButton label="Analytics" />

          <Divider />

          <MenuButton label="Monitoramento Global" />
          <MenuButton label="Alertas" />
          <MenuButton label="Relatórios" />

          <Divider />

          <MenuButton label="Administração" />
          <MenuButton label="Controle de Acesso" />

          <Divider />

          <MenuButton label="Configurações" />
        </nav>
      </aside>
    </>
  )
}

function MenuButton({ label }: { label: string }) {
  return (
    <button className="w-full text-left px-5 py-3 rounded-xl bg-[#101926] text-gray-200 hover:text-white hover:bg-[#162235] hover:scale-105 transition-all duration-200 cursor-pointer">
      {label}
    </button>
  )
}

function Divider() {
  return (
    <div className="h-[1px] w-full bg-[#0E1C3A] my-3" />
  )
}
