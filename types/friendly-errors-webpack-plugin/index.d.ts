// Type definitions for friendly-errors-webpack-plugin 0.1
// Project: https://github.com/geowarin/friendly-errors-webpack-plugin
// Definitions by: Arne Bahlo <https://github.com/bahlo>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

import { NextHandleFunction } from 'connect';

export = FriendlyErrorsWebpackPlugin;

declare function FriendlyErrorsWebpackPlugin(
	options?: FriendlyErrorsWebpackPlugin.Options
): NextHandleFunction;

declare namespace FriendlyErrorsWebpackPlugin {
	enum Severity {
		Error = "error",
		Warning = "warning",
	}

	interface Options {
		compilationSuccessInfo?: {
			messages: string[],
			notes: string[],
		};
		onErrors?(severity: Severity, errors: string): void;
		clearConsole?: true;
		additionalFormatters?: Array<(errors: WebpackError[], type: Severity) => string[]>;
		additionalTransformers?: Array<(error: any) => any>;
	}

	interface WebpackError {
		message: string;
		file: string;
		origin: string;
		name: string;
		severity: Severity;
		webpackError: any;
	}
}
