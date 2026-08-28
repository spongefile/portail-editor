# Portail Editor (built app)

The **built, deployable web app** for the eowave Portail — an unofficial, browser-based
MIDI-to-CV configuration editor. This repository contains only the compiled output; it is
served at **https://spongefile.github.io/portail-editor/**.

⚠️ **Unofficial, AI-generated, and not affiliated with eowave. Use entirely at your own risk.**
Beta — tested against one real module and a simulator. A config or tuning send lands in the module's
working memory (a power-cycle restores its last saved state); the only durable action is an explicit
Save-to-preset, and it never writes firmware. Every write is verified by reading it back.

Built with plain TypeScript + Vite. Runs fully client-side over Web MIDI (Chrome/Edge/Android;
Safari/iOS can edit and export offline but cannot connect).
