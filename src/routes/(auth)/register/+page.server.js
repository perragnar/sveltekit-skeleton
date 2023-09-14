import { db } from '$lib/database'
import { fail, redirect } from '@sveltejs/kit'
import bcrypt from 'bcrypt'

const roles = {
	ADMIN: 'ADMIN',
	USER: 'USER'
}

export const load = ({ cookies }) => {
	const session = cookies.get('session')

	if (session) {
		throw redirect(302, '/')
	}
}

export const actions = {
	default: async ({ cookies, request }) => {
		const data = await request.formData()
		const username = data.get('username')
		const password = data.get('password')

		if (typeof username !== 'string' || typeof password !== 'string' || !username || !password) {
			return fail(400, { invalid: true })
		}

		const user = await db.users.findUnique({ where: { username } })

		if (user) {
			return fail(400, { user: true })
		}

		await db.users.create({
			data: {
				username,
				passwordHash: await bcrypt.hash(password, 10),
				userAuthToken: crypto.randomUUID(),
				role: { connect: { name: roles.USER } }
			}
		})

		throw redirect(302, '/login')
	}
}
