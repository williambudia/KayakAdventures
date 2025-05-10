"use client"

import { ToastProvider } from "../hooks/use-toast"
import { Toaster } from "../components/ui/toaster"

export function Providers({ children }) {
  return (
    <ToastProvider>
      {children}
      <Toaster />
    </ToastProvider>
  )
}