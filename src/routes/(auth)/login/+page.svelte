<script>
	import { enhance } from '$app/forms'

	export let form
</script>

<svelte:head>
	<title>Login</title>
	<meta name="robots" content="noindex, nofollow" />
</svelte:head>

<div class="prose">
	<h1>Log in</h1>

	<form method="post" class="flex flex-col gap-4" use:enhance>
		<div class="form-control">
			<label class="label" for="username">
				<span class="label-text">Username</span>
			</label>
			<input
				id="username"
				name="username"
				type="text"
				class="input input-bordered input-lg w-full"
				required
			/>
		</div>

		<div class="form-control">
			<label class="label" for="password">
				<span class="label-text">Password</span>
			</label>
			<input
				id="password"
				name="password"
				type="password"
				class="input input-bordered input-lg w-full"
				required
			/>
		</div>

		{#if form?.invalid}
			<div class="alert alert-error">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="stroke-current shrink-0 h-6 w-6"
					fill="none"
					viewBox="0 0 24 24"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
					/></svg
				>
				<span>Username and password is required..</span>
			</div>
		{/if}

		{#if form?.credentials}
			<div class="alert alert-error">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="stroke-current shrink-0 h-6 w-6"
					fill="none"
					viewBox="0 0 24 24"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
					/></svg
				>
				<span>You have entered the wrong credentials.</span>
			</div>
		{/if}

		<div class="form-control">
			<input type="submit" class="btn" value="Log in" />
		</div>
	</form>
</div>
