<script>
	import { enhance } from '$app/forms'
	import { goto } from '$app/navigation'
	import { user } from '$lib/stores/user'
</script>

<div class="navbar bg-base-100">
	<div class="navbar-start">
		<div class="dropdown">
			<button class="btn btn-ghost sm:hidden">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h8m-8 6h16"
					/></svg
				>
			</button>
			{#if !$user}
				<ul
					class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
				>
					<li><a href="/login">Login</a></li>
					<li><a href="/register">Register</a></li>
				</ul>
			{/if}
		</div>
		<button
			class="btn btn-ghost normal-case text-xl text-primary"
			class:hidden={$user}
			class:sm:flex={$user}
			on:click={() => goto('/')}>SvelteKit Skeleton<sup class="text-xs">TM</sup></button
		>
	</div>
	<div class="hidden sm:flex" class:navbar-end={!$user} class:navbar-center={$user}>
		{#if !$user}
			<ul class="menu menu-horizontal px-1">
				<li><a href="/login">Login</a></li>
				<li><a href="/register">Register</a></li>
			</ul>
		{/if}
	</div>
	{#if $user}
		<div class="navbar-end">
			<li class="flex gap-2 items-center">
				<div class="avatar placeholder">
					<div class="bg-neutral-focus text-neutral-content rounded-full w-8">
						<span class="text-sm">{$user.username.slice(0, 1).toUpperCase()}</span>
					</div>
				</div>
				<span class="whitespace-nowrap text-sm">{$user.username}</span>
				<form action="/logout" method="POST" use:enhance>
					<button class="btn btn-xs btn-outline border-neutral whitespace-nowrap">Log out</button>
				</form>
			</li>
		</div>
	{/if}
</div>
