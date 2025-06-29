sequenceDiagram
  participant browser
  participant server

  Note right of browser: User writes a note and click save button

  browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note
  activate server
  server-->>browser: HTTP 302 Redirect to /notes
  deactivate server
  
  Note to right of browser: Browser follows redirect and reloads the notes page

  browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes
  activate server
  server-->>browser: HTML document
  deactivate server

  browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
  activate server
  server-->>browser: the CSS file
  deactivate server

  browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
  activate server
  server-->>browser: the Javascript file
  deactivate server

  Note right of browser: Javascript fetches the updated notes list

  browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
  activate server
  server-->>browser: Updated notes JSON including the newly saved note

  Note right of browser: Javascript renders the updagted notes on the page