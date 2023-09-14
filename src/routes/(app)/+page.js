import { env } from '$env/dynamic/public';

export const load = () => {
	try {
		return {
			appTitle: env.PUBLIC_APP_TITLE,
			appVersion: env.PUBLIC_APP_VERSION
		};
	} catch (error) {
		console.log(error);
	}
};
