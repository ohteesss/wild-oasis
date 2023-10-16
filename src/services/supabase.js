import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://fhnwiuitjnzepovtohsb.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZobndpdWl0am56ZXBvdnRvaHNiIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTcwMjI3MjQsImV4cCI6MjAxMjU5ODcyNH0.DZF04Gmz9-Pji_OMDBMW5lrHUCI_3KgTuPig3_vjuJI";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
