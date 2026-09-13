# Update manifest schema

Each application publishes one stable manifest at `<app-id>/latest.json`.

Example:

```json
{
  "schemaVersion": 1,
  "app": "app-sol",
  "channel": "stable",
  "version": "0.2.6",
  "status": "published",
  "notes": "Release notes",
  "platforms": {
    "windows-x86_64": {
      "url": "https://raw.githubusercontent.com/zhiqiyue918-sys/moon-app-updates/main/app-sol/releases/AppSol_0.2.6_x64-setup.exe",
      "sha256": "<sha256>"
    }
  }
}
```

Rules:
- Every app has an independent version stream.
- Packages are immutable after publication.
- Clients only install a version greater than their current semantic version.
- Clients verify SHA-256 before launching an installer.
- The stable manifest is updated only after the package has been uploaded successfully.
