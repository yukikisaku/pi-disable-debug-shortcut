import type { ExtensionAPI } from "@earendil-works/pi-coding-agent";
import { matchesKey } from "@earendil-works/pi-tui";

export default function disableDebugShortcut(pi: ExtensionAPI): void {
	pi.on("session_start", (_event, ctx) => {
		if (ctx.mode !== "tui") return;

		ctx.ui.onTerminalInput((data) => {
			if (matchesKey(data, "shift+ctrl+d")) {
				return { consume: true };
			}
		});
	});
}
