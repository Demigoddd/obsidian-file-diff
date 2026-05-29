export class ActionLineDivider {
	static build(actionLine: HTMLDivElement): void {
		actionLine.createEl('span', {
			text: '|',
			cls: 'file-diff__action-text',
		});
	}
}
