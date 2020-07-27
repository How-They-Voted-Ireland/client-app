<script>
  import { currentSearch, selectedConstituency } from '../../store/appState';
  import members from '../../../data/33-dail-members';

  let filteredMembers = [...members];

  selectedConstituency.subscribe(value => {
    if (!value) {
      filteredMembers = [...members];
      return true;
    }

    filteredMembers = members.filter(({ constituencyCode }) => (
      value === constituencyCode.toLowerCase())
    );
  });
  
  currentSearch.subscribe(value => {
    if (!value) {
      filteredMembers = [...members];
      return true;
    }

    filteredMembers = members.filter(({ fullName }) => (
      fullName.toLowerCase().includes(value.toLowerCase()))
    );
  });
</script>

<style lang="scss">

</style>

<ul>
  {#each filteredMembers as { constituencyCode, lastName, firstName }}
    <li>
      {lastName}, {firstName}
    </li>
  {/each}
</ul>

