# Node Built-in Modules Practice

This folder contains simple Node.js practice files for core built-in modules and a small form example that uses HTTP + FS.

## Files
- 01-events.js - EventEmitter basics
- 02-http.js - HTTP server example
- 03-fs.js - File system read/write examples
- 04-os.js - OS info example
- 05-path.js - Path utilities
- 06-url.js - URL parsing
- 07-streams.js - ReadStream/WriteStream usage
- 08-form-server.js - Responsive form with HTTP + FS
- form.html - Sample form page

## How to run

1. Open terminal in this folder.
2. Run any file with Node:
   - node 01-events.js
   - node 08-form-server.js

## Form example

Run:

```bash
node 08-form-server.js
```

Then open:

```text
http://localhost:3000
```

The submitted form data will be saved to:

```text
submissions.txt
```
