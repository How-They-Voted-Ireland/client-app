<script>
  import { hoveredConstituency, selectedConstituency } from '../../store/appState';
  import members from '../../../data/33-dail-members';

  $selectedConstituency;
</script>

<style lang="scss">
  li {
    display: none;
  }

  li.visible {
    display: block;
  }
</style>

<ul>
  {#each members as { constituencyCode, lastName, firstName }}
    <li class:visible={
      !$selectedConstituency || $selectedConstituency === constituencyCode.toLowerCase()
    }>{lastName}, {firstName}</li>
  {/each}
</ul>

