# RewriteLite privacy notice

Public Windows edition · Effective November 18, 2026

## What leaves your device

Selecting text or opening a blank Compose window does not send text. Clicking the rewrite icon or using a configured shortcut on a selection starts a request. Generating from the main window or Compose sends the text or instruction, selected writing style, and applicable language settings directly to your chosen AI provider. Refine also sends the current draft and recent context for that task to its original provider and model. New writing tasks start with separate context.

Connecting a profile or refreshing its models contacts the configured service. Testing a connection sends a short built-in test prompt. Cloud providers receive your network address, request content and authentication information as applicable. Their privacy, retention and billing terms apply. With a locally hosted Ollama model and a loopback endpoint, writing requests go to that local service. If you point the app to a remote server, that server receives the requests.

## What stays on your device

The application keeps writing context in memory. It does not save a writing history or operate a RewriteLite cloud service. The public edition stores preferences and connection profiles in data/settings.public.json beside the application, with a backup when available. Saved API keys are encrypted with Windows Data Protection for the current Windows account. Configuration files can still reveal provider names, model names and other preferences.

Selection detection uses Windows accessibility interfaces. Clicking Copy writes the result to the Windows clipboard. Windows clipboard history or sync, if enabled, is managed by Windows. Direct replacement is available in supported text controls. Technical errors can create a local diagnostic log under the current Windows user's LocalAppData/RewriteLite/logs folder. It records error identifiers and method names and omits text, credentials and request URLs. The app has no telemetry or advertising SDK.

## OpenRouter account authorization

Choosing Connect with OpenRouter opens its authorization page in your browser. OpenRouter handles sign-in. A one-time code returns directly to a temporary listener on your computer. RewriteLite exchanges it using PKCE and encrypts the issued API key for your Windows account. Requests to the official OpenRouter service include the product name and website for app identification. Requests use your OpenRouter account credits. Disconnect removes the key from the current settings; an encrypted backup may still contain it. Revoke the key in your OpenRouter account to disable it at the provider.

## Updates, website and removal

Checking for updates contacts GitHub. Downloading an update contacts GitHub's release hosting. If a supported .NET Framework runtime is missing, the launcher requests permission before downloading the Microsoft installer. These requests share the usual network information with GitHub or Microsoft.

GitHub Pages serves the product website and GitHub hosts downloads and feedback. These services receive ordinary connection information under GitHub's privacy statement (https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement). The website does not set tracking cookies or load advertising scripts. Its current visitor statistics practices are described in the online notice at https://thunderbrain.github.io/RewriteLite/privacy/. Feedback posted in public GitHub issues is visible to others. Keep credentials, private writing and diagnostic files out of public issues.

To remove local settings and backups, exit the application and delete its data folder after preserving any files you wish to keep. You can also remove local diagnostic logs and revoke a key with its provider. For product questions visit https://github.com/ThunderBrain/RewriteLite.

## Website statistics

The product website uses GoatCounter to count page visits and installer-link clicks. The site sends a fixed page path or event name, without URL queries or writing content. GoatCounter processes standard network information and publishes its data practices at https://www.goatcounter.com/help/privacy. The owner dashboard is private. Browser privacy signals and content blockers can suppress counts. GitHub separately publishes cumulative release asset download counts.
