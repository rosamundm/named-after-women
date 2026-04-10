import { supabase } from '@/lib/supabase';
import { Street } from "@/types";

export const getStreets = async (): Promise<Street[]> => {
  const { data, error } = await supabase
    .from('streets')
    .select('*')

  if (error) {
    console.error('Error fetching streets:', error)
    throw new Error(`Failed to fetch streets: ${error.message}`)
  }

  return data || []
}