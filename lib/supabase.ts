import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://stgmrbxwolivdppajhlw.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN0Z21yYnh3b2xpdmRwcGFqaGx3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjkwOTc4MzUsImV4cCI6MjA4NDY3MzgzNX0.cpPEKTrOETZJuz0qycTyyy-FyljVp_QzHei9Iz4VdnQ';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
