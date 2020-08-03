<script>
  import { currentSearch } from '../../store/appState';
</script>

<style>
  input {
    width: 100%;
    padding: 10px;
    font-size: 1.6rem;
    text-align: center;
  }
</style>

<div>
  <input
    type="search"
    placeholder="Enter TD name"
    bind:value={$currentSearch}
    aria-label="Search for a TD"
  />
</div>