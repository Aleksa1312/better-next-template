import { createClient } from "@supabase/supabase-js";

const supabaseUrl = String(process.env.NEXT_PUBLIC_SUPABASE_URL);
const supabaseKey = String(process.env.SUPABASE_SERVICE_ROLE);

if (!supabaseKey) {
  throw new Error(
    `Supabase client error: There was an error reading "supabaseKey". Please make sure that you are using "supabaseAdmin" in server component and that you have configured "SUPABASE_SERVICE_ROLE" in ".env.local" file.`
  );
}

const supabaseAdmin = createClient(supabaseUrl, supabaseKey);

export default supabaseAdmin;
