import shell from 'shelljs'
import dotenv from 'dotenv'

dotenv.config({ path: `.env.local`, override: true })

const command = `npx supabase gen types typescript --project-id ${process.env.VITE_SUPABASE_ID} > src/types/supabase.ts`

if (shell.exec(command).code !== 0) {
  shell.echo('Error: supabase codegen failed')
  shell.exit(1)
}
