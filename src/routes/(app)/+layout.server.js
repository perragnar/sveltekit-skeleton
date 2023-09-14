import { redirect } from '@sveltejs/kit'

export const load = async ({ cookies, locals }) => {
	const session = cookies.get('session')

	if (!session) {
		throw redirect(302, '/login')
	}

	return {
		user: locals.user
	}
}
