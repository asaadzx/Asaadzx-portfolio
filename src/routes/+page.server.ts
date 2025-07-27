import type { PageServerLoad } from './$types';
import { supabase } from '../lib/Supabase.js';

type Message = {
  id: number;
  created_at: string;
  Massage: string | null;
  Embeded_things: string | null;
};

export const load: PageServerLoad = async () => {
  const { data, error } = await supabase
    .from('MePortfolio')
    .select<'MePortfolio', Message>();

  if (error) {
    console.error('Error loading messages:', error.message);
    return { messages: [] };
  }

  return {
    messages: data ?? [],
  };
};
