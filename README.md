# pi-disable-debug-shortcut

## Overview

Disable Pi's Ctrl+Shift+D debug shortcut in TUI sessions.

## Requirements

Requires Pi TUI mode. It consumes only the Ctrl+Shift+D terminal input so the debug action cannot fire.

## Installation

```sh
pi install npm:@yukikisaku/pi-disable-debug-shortcut
```

## Usage

Start Pi normally. Ctrl+Shift+D is ignored; other input is unchanged.

## Configuration

No configuration.

## Uninstallation

```sh
pi uninstall npm:@yukikisaku/pi-disable-debug-shortcut
```

Remove any package-specific configuration described above if you no longer need it.

## Pull requests

This repository includes a policy for automatic AI review and merge of incoming pull requests. It becomes active when the CI and merge workflows are on `main` and the maintainer's GitHub event automation is enabled; a draft setup PR does not activate it.

Once active, AI reviews each non-draft PR and it is merged automatically only when the review has no findings, required CI succeeds, and there are no conflicts or unresolved review threads. New commits require a new review. Changes to the automation itself require manual merge. See [AI review and merge operations](docs/ai-review-operations.md).

## License

MIT © yuki-kisaku. See [LICENSE](LICENSE).
