# RewriteLite privacy notice

Public Windows edition · Effective November 18, 2026

## What leaves your device

Selecting text or opening a blank Compose window does not send text. Clicking the rewrite icon or using a configured shortcut on a selection starts a request. Generating from the main window or Compose sends the text or instruction, selected writing style, and applicable language settings directly to your chosen AI provider. Refine also sends the current draft and recent context for that task to its original provider and model. New writing tasks start with separate context.

Connecting a profile or refreshing its models contacts the configured service. Testing a connection sends a short built-in test prompt. Cloud providers receive your network address, request content and authentication information as applicable. Their privacy, retention and billing terms apply. With a locally hosted Ollama model and a loopback endpoint, writing requests go to that local service. If you point the app to a remote server, that server receives the requests.

## What stays on your device

The application keeps writing context in memory. It does not save a writing history or operate a RewriteLite cloud service. The public edition stores preferences and connection profiles in data/settings.public.json beside the application, with a backup when available. Saved API keys are encrypted with Windows Data Protection for the current Windows account. Configuration files can still reveal provider names, model names and other preferences.

Selection detection uses Windows accessibility interfaces. Clicking Copy writes the result to the Windows clipboard. Windows clipboard history or sync, if enabled, is managed by Windows. Direct replacement is available in supported text controls. Technical errors can create a local diagnostic log under the current Windows user's LocalAppData/RewriteLite/logs folder. It records error identifiers and method names and omits text, credentials and request URLs. The app has no telemetry or advertising SDK.

## Updates, website and removal

Checking for updates contacts GitHub. Downloading an update contacts GitHub's release hosting. If a supported .NET Framework runtime is missing, the launcher requests permission before downloading the Microsoft installer. These requests share the usual network information with GitHub or Microsoft.

GitHub Pages serves the product website and GitHub hosts downloads and feedback. These services receive ordinary connection information under GitHub's privacy statement (https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement). The website does not set tracking cookies or load advertising scripts. Its current visitor statistics practices are described in the online notice at https://thunderbrain.github.io/RewriteLite/privacy/. Feedback posted in public GitHub issues is visible to others. Keep credentials, private writing and diagnostic files out of public issues.

To remove local settings and backups, exit the application and delete its data folder after preserving any files you wish to keep. You can also remove local diagnostic logs and revoke a key with its provider. For product questions visit https://github.com/ThunderBrain/RewriteLite.

## Website statistics

Website visits and installer-link clicks are currently not collected. GitHub separately records and publishes cumulative release asset download counts.
