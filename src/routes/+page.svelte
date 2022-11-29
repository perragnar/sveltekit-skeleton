<script>
	export let data;

	const { appTitle, appVersion } = data;
</script>

<div class="app">
	<hgroup class="app__header">
		<h1>{appTitle}</h1>
		<h2>{appVersion}</h2>
	</hgroup>
	<section class="app__body">
		<p>
			A simple SvelteKit skeleton from <a href="https://github.com/perragnar/sveltekit-skeleton"
				>https://github.com/perragnar/sveltekit-skeleton</a
			>.
		</p>
	</section>
</div>

<style lang="scss">
	.app {
		display: flex;
		flex-direction: column;
		width: minmax(1fr, 500px);
		padding: 1rem;
		margin: 1rem;
		overflow: hidden;
		border-radius: 5px;
		border-top: 1px solid rgb(255 255 255 / 10%);
		border-left: 1px solid rgb(255 255 255 / 10%);
		border-right: 1px solid rgb(255 255 255 / 3%);
		border-bottom: 1px solid rgb(255 255 255 / 3%);
		background: rgb(127 150 175 / 10%);
		box-shadow: 0 8px 32px 0 rgb(0 0 0 / 20%);
		backdrop-filter: blur(4px);
		-webkit-backdrop-filter: blur(4px);
		color: #ffffff;

		@media screen and (max-width: 768px) {
			font-size: 0.8em;
		}

		&__header {
			display: flex;
			align-items: baseline;
			gap: 0.5rem;
			line-height: 1.1;
			margin-bottom: 0.5rem;
			padding-bottom: 0.5rem;
			border-bottom: solid 1px rgba(255 255 255 / 10%);

			h2 {
				color: #aaaaaa;
			}
		}
	}
</style>
