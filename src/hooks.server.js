import { db } from '$lib/database'

export const handle = async ({ event, resolve }) => {
	const session = event.cookies.get('session')

	if (!session) {
		return await resolve(event)
	}

	const user = await db.users.findUnique({
		where: { userAuthToken: session }
	})

	if (user) {
		event.locals.user = user
	}

	return await resolve(event)
}
