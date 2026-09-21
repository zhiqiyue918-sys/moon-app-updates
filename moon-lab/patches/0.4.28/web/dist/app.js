// Compatibility bridge for MoonLab documents cached before the Vite UI migration.
// Ask the local Service for the current software version instead of hard-coding releases.
fetch('/health', {cache:'no-store'})
  .then(r => r.json())
  .then(x => window.location.replace('/?v=' + encodeURIComponent(x.version || Date.now())))
  .catch(() => window.location.replace('/?v=' + Date.now()))
