<script>
	import Map from '../components/Map/index.svelte';
	import MembersList from '../components/MembersList/index.svelte';
	import SelectConstituency from '../components/SelectConstituency/index.svelte';
	import MemberFilter from '../components/MemberFilter/index.svelte';
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
		padding: 10px;
	}
</style>

<div class="app">
	<section class="map">
		<SelectConstituency />
		<Map />
	</section>
	<section class="members">
		<MemberFilter />
		<MembersList />
	</section>
</div>
