"use client"
import ThemeProvider from "@/context/themeContext";
import { queryClient } from "@/lib/query-clinet"
import { QueryClientProvider } from "@tanstack/react-query"

function Providers({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        {children}
      </ThemeProvider>
    </QueryClientProvider>
  )
}

export default Providers;
