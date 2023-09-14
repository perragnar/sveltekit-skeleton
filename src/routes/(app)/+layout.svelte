<script>
	import Clamp from '$lib/components/Clamp.svelte'
	import PageFooter from '$lib/components/PageFooter.svelte'
	import PageHeader from '$lib/components/PageHeader.svelte'
	import '$lib/css/app.postcss'
	import { user } from '$lib/stores/user.js'

	export let data

	$user = data.user || null
</script>

<Clamp>
	<PageHeader />
	<div class="p-4 mt-8">
		<slot />
	</div>
	<PageFooter />
</Clamp>
