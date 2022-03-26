const { localStorage } = window;

const STORAGE_NAMESPACE: string = 'STARSHIPS_WARS';
const namespaceKey = (key: string): string => {
	return `${STORAGE_NAMESPACE}:${key}`;
};

const storageHelper = {
	setItem(key: string, value: string) {
		return localStorage.setItem(namespaceKey(key), JSON.stringify(value));
	},

	getItem(key: string) {
		const value: string = localStorage.getItem(namespaceKey(key)) || '';
		try {
			return JSON.parse(value);
		} catch (e) {
			return undefined;
		}
	},

	removeItem(key: string) {
		return localStorage.removeItem(namespaceKey(key));
	},
};

export default storageHelper;
