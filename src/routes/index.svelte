<script>
	import Map from '../components/Map/index.svelte';
	import MembersList from '../components/MembersList/index.svelte';
	import SelectConstituency from '../components/SelectConstituency/index.svelte';
	import MemberFilter from '../components/MemberFilter/index.svelte';
	// import MapButton from '../components/MapButton/index.svelte';

	let appWidth;
</script>

<style type="text/scss" lang="scss">
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

	.map {
		@include mobile {
			display: none;
		}
	}

	.constituency-map-control {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 100%;
	}
</style>

<div class="app">
	<section class="filters">
		<div class="constituency-select-control">
			<SelectConstituency />
		</div>
		<div class="member-filter-control">
			<MemberFilter />
		</div>
	</section>
	<div class="main-elements">
			<section class="map">
				<div class="constituency-map-control">
					<Map />
				</div>		
			</section>
		<section class="members-list">
			<MembersList />
		</section>
	</div>
</div>
