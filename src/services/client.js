import { createClient } from '@supabase/supabase-js';
export const client = createClient(
  REACT_APP_SUPABASE_API_URL,
  REACT_APP_SUPABASE_API_KEY
);

export function checkError({ data, error }) {
  if (error) {
    throw error;
}
    return data;
}
