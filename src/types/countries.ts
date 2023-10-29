import type { Database } from './supabase'

export type Country = Database['public']['Tables']['countries']['Row']
