import { createServer } from 'http'
import { handler } from './.output/server/index.mjs'
import serverless from 'serverless-http'


const server = createServer(handler)

export const handler = serverless(server)