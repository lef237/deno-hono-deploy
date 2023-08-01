// simple_api.js

import { Hono } from 'https://deno.land/x/hono/mod.ts'

const app = new Hono()

app.get('/', (c) => c.text('Hello Hono! 🔥 \n You can access /hono'))
app.get('/hono', (c) => c.text('🔥🔥🔥🔥🔥'))

Deno.serve(app.fetch)
