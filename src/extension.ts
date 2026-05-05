import * as vscode from 'vscode';
import { key_word_descriptions } from './key-word-descriptions';

export function activate(context: vscode.ExtensionContext) {

 const auto_complete_provider = vscode.languages.registerCompletionItemProvider({ language: 'minsc' }, {
	provideCompletionItems(_document: vscode.TextDocument, _position: vscode.Position, _token: vscode.CancellationToken, _context: vscode.CompletionContext) {

		let codeCompletionList: vscode.ProviderResult<vscode.CompletionItem[] | vscode.CompletionList<vscode.CompletionItem>> = [];

		/*
		pk|older|after|of|hash160|sha256|likely|address|heightwise|wsh|sh|miniscript|any|all
		*/

		const pkCompletion         = new vscode.CompletionItem('pk');
		const olderCompletion      = new vscode.CompletionItem('older');
		const afterCompletion      = new vscode.CompletionItem('after');
		const ofCompletion         = new vscode.CompletionItem('of');
		const hash160Completion    = new vscode.CompletionItem('hash160');
		const sha256Completion     = new vscode.CompletionItem('sha256');
		const likelyCompletion     = new vscode.CompletionItem('likely');
		const addressCompletion    = new vscode.CompletionItem('address');
		const heightwiseCompletion = new vscode.CompletionItem('heightwise');
		const wshCompletion        = new vscode.CompletionItem('wsh');
		const shCompletion         = new vscode.CompletionItem('sh');
		const miniscriptCompletion = new vscode.CompletionItem('miniscript');
		const anyCompletion        = new vscode.CompletionItem('any');
		const allCompletion        = new vscode.CompletionItem('all');

		codeCompletionList.push(
			pkCompletion, 
			olderCompletion, 
			afterCompletion, 
			ofCompletion, 
			hash160Completion, 
			sha256Completion, 
			likelyCompletion, 
			addressCompletion, 
			heightwiseCompletion, 
			wshCompletion, 
			shCompletion, 
			miniscriptCompletion, 
			anyCompletion, 
			allCompletion)

		return codeCompletionList
	},
 });

const hover_provider = vscode.languages.registerHoverProvider({ language: 'minsc' }, {
  provideHover(_document: vscode.TextDocument, _position: vscode.Position, _token: vscode.CancellationToken) {

	const wordRange = _document.getWordRangeAtPosition(_position);
	const word      = _document.getText(wordRange);

	const map  = key_word_descriptions;

	const word_description: string = map[word as keyof typeof map]
    return new vscode.Hover(word_description);

  }
});

 context.subscriptions.push(auto_complete_provider);
 context.subscriptions.push(hover_provider)

}

export function deactivate() {}
