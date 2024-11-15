import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function jsonToMessage(errorJson: { [key: string]: string[] }): string {
	const messages: string[] = [];

	for (const field in errorJson) {
		if (errorJson.hasOwnProperty(field)) {
			errorJson[field].forEach((error) => {
				messages.push(`${capitalize(field)}: ${error}`);
			});
		}
	}

	return messages.join("\n");
}

export function capitalize(word: string): string {
	return word.charAt(0).toUpperCase() + word.slice(1);
}
