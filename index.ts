import { Elysia } from 'elysia'
import { html } from '@elysiajs/html'

const app = new Elysia().use(html()).get('/', ({ html }) => html(baseHtml)).listen(3000)
console.log(
  `Server running at http://${app.server?.hostname}:${app.server?.port}`
)

const baseHtml = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>BETH stack</title>
  </head>
  <body>
    <h1>Hey there!</h1>
  </body>
  </html>
`
