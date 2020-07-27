<script>
  import { currentSearch } from '../../store/appState';

  $currentSearch;
</script>

<style>
  input {
    width: 100%;
    padding: 10px;
    font-size: 1.6rem;
    text-align: center;
  }
</style>

<input
  type="search"
  placeholder="Filter list by typing TD name"
  bind:value={$currentSearch}
/>