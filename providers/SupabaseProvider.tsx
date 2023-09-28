'use client'
import { useState } from 'react'
import { SessionContextProvider } from '@supabase/auth-helpers-react'
import { Database } from '@/types_db'
import React from 'react'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'

interface SupabaseProviderProps {
  children: React.ReactNode
}

const SupaBaseProvider: React.FC<SupabaseProviderProps> = ({ children }) => {
  const [supabaseClient] = useState(() =>
    createClientComponentClient<Database>()
  )
  return (
    <SessionContextProvider supabaseClient={supabaseClient}>
      {children}
    </SessionContextProvider>
  )
}

export default SupaBaseProvider
