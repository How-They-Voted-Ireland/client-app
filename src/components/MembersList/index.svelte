<script>
  import { currentSearch, selectedConstituency } from '../../store/appState';
  import members from '../../../data/33-dail-members';

  let filteredMembers = [...members];

  const filterMembers = () => {
    filteredMembers = members.filter(({ fullName }) => {
      return fullName.toLowerCase().includes($currentSearch.toLowerCase());
    }).filter(({ constituencyCode }) => {
      const code = constituencyCode.toLowerCase();
      const value = $selectedConstituency;

      if (!value) {
        return true;
      };

      return value === code ||
        (value === 'dublin' && (code.includes('dún') || code.includes('dub'))) ||
        ((value.includes('dún') || value.includes('dub')) && code === 'dublin');
    });
  };

  selectedConstituency.subscribe(value => {
    filterMembers();
  });
  
  currentSearch.subscribe(value => {
    filterMembers();
  });
</script>

<style lang="scss">
  .member-name {
    font-size: 2rem;
    cursor: pointer;
    text-align: center
  }

  a {
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
</style>

<ul>
  {#each filteredMembers as { memberCode, lastName, firstName, fullName }}
    <li class="member-name">
      <a href="member/{memberCode}" title="Link to voting profile of {fullName}">
        {lastName}, {firstName}
      </a>
    </li>
  {/each}
</ul>

