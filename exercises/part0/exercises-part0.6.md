sequenceDiagram
  participant browser
  participant server

  Note right of browser: User types a note and clicks the Save button

  browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
  activate server
  server-->>browser: 200 OK
  deactivate server

  browser->>browser: Rerender updated notes list on the page (without reloading)