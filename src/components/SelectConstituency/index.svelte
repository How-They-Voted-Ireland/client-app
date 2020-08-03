<script>
  import { selectedConstituency } from '../../store/appState';
  import constituencies from '../../../data/33-dail-constituencies';
</script>

<style>
  select {
    width: 100%;
    padding: 10px;
    font-size: 1.6rem;
    text-align: center;
    text-align-last: center;
    -moz-text-align-last: center;
  }
</style>

<select name="constituencies" bind:value={$selectedConstituency} aria-label="Select a constituency from the list">
  <option value="">Select a Constituency</option>
  {#each Object.entries(constituencies) as [key, { name }]}
    <option
      value={ key }
      selected={ key === $selectedConstituency }
    >
      { name }
    </option>
  {/each}
</select>