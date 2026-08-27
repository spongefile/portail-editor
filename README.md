# Portail Editor (built app)

The **built, deployable web app** for the eowave Portail — an unofficial, browser-based
MIDI-to-CV configuration editor. This repository contains only the compiled output; it is
served at **https://spongefile.github.io/portail-editor/**.

⚠️ **Unofficial and not affiliated with eowave. Use entirely at your own risk.** Beta — tested
against one real module and a simulator. It writes only to the module's working memory (nothing
permanent, no firmware), and verifies writes by reading them back.

Built with plain TypeScript + Vite. Runs fully client-side over Web MIDI (Chrome/Edge/Android;
Safari/iOS can edit and export offline but cannot connect).
