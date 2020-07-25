<script>
	import Map from '../components/Map/index.svelte';
	import MembersList from '../components/MembersList/index.svelte';
</script>
<style lang="scss">
	.app {
		display: flex;
		flex-direction: row;
	}
	section {
		width: 50%;
		display: inline;
		margin: 0;
	}
</style>

<h1>How They Voted</h1>
<div class="app">
<section class="map">
	<Map />
</section>
<section class="members">
	<MembersList />
</section>
</div>
