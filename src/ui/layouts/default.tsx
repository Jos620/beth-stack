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
    <script src="https://cdn.jsdelivr.net/npm/@unocss/runtime"></script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@unocss/reset/tailwind.css"></script>
  </head>

  <body hx-boost="true">
    ${children}
  </body>

  </html>
`;

export function DefaultLayout({ children }: elements.Children) {
  return (
    <DefaultBaseHtml>
      <main class="flex flex-col justify-center items-center w-screen h-screen">
        {children}
      </main>
    </DefaultBaseHtml>
  );
}
