<script>
	import { onMount } from "svelte";

	import Map from '../components/Map/index.svelte';
	import MembersList from '../components/MembersList/index.svelte';
	import SelectConstituency from '../components/SelectConstituency/index.svelte';
	import MemberFilter from '../components/MemberFilter/index.svelte';
	import MapButton from '../components/MapButton/index.svelte';

	let appWidth;
</script>

<style lang="scss">
	@import '../style/mixins.scss';

	.app {
		display: flex;
		flex-direction: column;
		height: 100%;
	}

	.filters {
		display: flex;
		flex-direction: row;
		width: 100%;

		div {
			width: 50%;
			padding: 10px;
		}

		@include mobile {
			flex-direction: column;

			div {
				width: 100%;
			}
		}
	}

	.main-elements {
		display: flex;
		flex-direction: row;
		height: 100%;
		min-height: 0;

		section {
			width: 50%;
			padding: 0 10px;
			margin-bottom: 10px;

			@include mobile {
				width: 100%;
			}
		}
	}

	.members-list {
		overflow-y: scroll;
	}

	.constituency-map-control {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 100%;
	}
</style>

<div class="app" bind:clientWidth={appWidth}>
	<section class="filters">
<!-- 		{#if appWidth <= 640}
			<div class="show-map-button">
				<MapButton />
			</div>
		{/if} -->
		<div class="constituency-select-control">
			<SelectConstituency />
		</div>
		<div class="member-filter-control">
			<MemberFilter />
		</div>
	</section>
	<div class="main-elements">
		{#if appWidth > 640}
			<section class="map">
				<div class="constituency-map-control">
					<Map />
				</div>		
			</section>
		{/if}
		<section class="members-list">
			<MembersList />
		</section>
	</div>
</div>
