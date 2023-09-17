import { createClient } from "@supabase/supabase-js";

const supabaseUrl = String(process.env.NEXT_PUBLIC_SUPABASE_URL);
const supabaseKey = String(process.env.NEXT_PUBLIC_SUPABASE_KEY);

if (!supabaseUrl || !supabaseKey) {
  throw new Error(
    `Supabase client error: There was an error reading "supabaseUrl" or "supabaseKey". Make sure to specify "NEXT_PUBLIC_SUPABASE_URL" and "NEXT_PUBLIC_SUPABASE_KEY" inside ".env.local" file.`
  );
}

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
