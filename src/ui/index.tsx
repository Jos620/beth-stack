import elements from 'typed-html';

export const DefaultBaseHtml = ({ children }: elements.Children) => /* html */ `
  <!DOCTYPE html>
  <html lang="en">

  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>BETH stack</title>
    <script src="https://unpkg.com/htmx.org@1.9.3"></script>
    <script src="https://unpkg.com/alpinejs@3" defer></script>
    <script src="https://unpkg.com/hyperscript.org@0.9.11"></script>
    <script src="https://cdn.jsdelivr.net/npm/@unocss/runtime"></script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@unocss/reset/tailwind.css" />
  </head>

  <body hx-boost="true">
    ${children}
  </body>

  </html>
`;
