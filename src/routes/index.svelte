<script>
	import Map from '../components/Map/index.svelte';
	import MembersList from '../components/MembersList/index.svelte';
	import SelectConstituency from '../components/SelectConstituency/index.svelte';
	import MemberFilter from '../components/MemberFilter/index.svelte';
</script>

<style type="text/scss" lang="scss">
	@import '../style/mixins.scss';

	.app {
		display: flex;
		flex-direction: row;
		height: 100%;
	}

	.filters {
		display: flex;
		flex-direction: column;
		width: 100%;

		div {
			width: 100%;
			padding: 10px;
		}
	}

	.main-elements {
		display: flex;
		flex-direction: column;
		height: 100%;
		width: 50%;
		min-height: 0;
	}

	.members-list {
		overflow-y: scroll;
	}

	.map {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 100%;
		width: 50%;

		@include mobile {
			display: none;
		}
	}
</style>

<div class="app">
	<section class="map">
		<Map />
	</section>
	<section class="main-elements">
		<section class="filters">
			<div class="constituency-select-control">
				<SelectConstituency />
			</div>
			<div class="member-filter-control">
				<MemberFilter />
			</div>
		</section>
		<section class="members-list">
			<MembersList />
		</section>
	</section>
</div>
