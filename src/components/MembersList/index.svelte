<script>
  import { currentSearch, selectedConstituency } from '../../store/appState';
  import members from '../../../data/33-dail-members';

  let filteredMembers = [...members];

  selectedConstituency.subscribe(value => {
    if (!value) {
      filteredMembers = [...members];
      return true;
    }

    filteredMembers = members.filter(({ constituencyCode }) => {
      let code = constituencyCode.toLowerCase();

      return value === code
        || value === 'dublin' && (code.includes('dún') || code.includes('dub'))
        || (value.includes('dún') || value.includes('dub')) && code === 'dublin';
    });
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
  .member-name {
    font-size: 2rem;
    cursor: pointer;
    text-align: center
  }
</style>

<ul>
  {#each filteredMembers as { constituencyCode, lastName, firstName }}
    <li class="member-name">
      {lastName}, {firstName}
    </li>
  {/each}
</ul>

