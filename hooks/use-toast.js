"use client"

import { createContext, useContext, useState } from "react"

const ToastContext = createContext({})

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([])

  const toast = ({ title, description, action, ...props }) => {
    const id = Math.random().toString(36).substring(2, 9)
    const newToast = { id, title, description, action, ...props }
    setToasts((current) => [...current, newToast])
    return id
  }

  const dismiss = (toastId) => {
    setToasts((current) => current.filter((toast) => toast.id !== toastId))
  }

  const dismissAll = () => {
    setToasts([])
  }

  return (
    <ToastContext.Provider value={{ toast, dismiss, dismissAll, toasts }}>
      {children}
    </ToastContext.Provider>
  )
}

export const useToast = () => {
  const context = useContext(ToastContext)

  if (context === undefined) {
    throw new Error("useToast must be used within a ToastProvider")
  }

  return context
}