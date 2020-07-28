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
		height: 100%
	}

	section {
		width: 50%;
		margin: 0;
		padding: 10px;
		display: flex;
		flex-direction: column;
	}

	.member-list {
		height: 100%;
		min-height: 0;
	}

	.constituency-map-control {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 100%;
		min-height: 0;
	}
</style>

<div class="app">
	<section class="map">
		<div class="constituency-select-control">
			<SelectConstituency />
		</div>
		<div class="constituency-map-control">
			<Map />
		</div>
	</section>
	<section class="members">
		<div class="member-filter-control">
			<MemberFilter />
		</div>
		<div class="member-list">
			<MembersList />
		</div>
	</section>
</div>
