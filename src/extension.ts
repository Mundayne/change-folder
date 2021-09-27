import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	const command = 'change-folder.changeFolder';

	const commandHandler = (folder: vscode.Uri) => {
		vscode.commands.executeCommand('vscode.openFolder', folder);
	};

	context.subscriptions.push(vscode.commands.registerCommand(command, commandHandler));
}