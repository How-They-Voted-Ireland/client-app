<script context="module">
  import members from '../../../data/33-dail-members';
  import memberVotes from '../../../data/33-dail-members-votes';
  import voteDetails from '../../../data/33-dail-vote-details';

  export async function preload ({ params, query }, session) {
    const member = members.find(member => member.memberCode === params.memberId);
    const votes = [];

    const memberVotesList = memberVotes[params.memberId];
    for (const [key, value] of Object.entries(memberVotesList)) {
      const { date, title, description, status, detailLink } = voteDetails[key];
      votes.push({
        voteId: key,
        choice: value,
        date,
        description,
        title,
        status,
        detailLink
      });
    }

    return {
      member,
      votes
    };
  }
</script>

<script>
  export let member;
  export let votes;
</script>

<style lang="scss">
@import '../../style/mixins.scss';

  .app {
    display: flex;
    flex-direction: row;
    height: 100%;
    max-width: 1280px;
    margin: 0 auto;

    @include mobile {
      flex-direction: column;
      overflow-y: scroll;
    }
  }

  .profile {
    width: 30%;
    margin-right: 10px;
    padding: 5px;

    @include mobile {
      width: 100%;
    }
  }

  .votes {
    overflow-y: scroll;
    margin: 5px 0;
    padding: 0 5px;

    @include mobile {
      overflow-y: revert;
    }
  }

  li {
    margin: 10px 0;
    padding: 5px;

    &.alternate {
      background-color: var(--primary-light);
    }
  }

  .external-link {
    font-size: .8rem;
    margin-top: 20px;
    a {
      text-decoration: none;
    } 
  }
</style>

<svelte:head>
    <title>How They Voted - {member.fullName}</title>
</svelte:head>

<div class="app">
  <div class="profile">
    <h2>{member.fullName}</h2>
    <p>{member.partyName}</p>
    <p>{member.constituencyName}</p>
    <p class="external-link">
      <a href="https://www.oireachtas.ie/en/members/member/{member.memberCode}" title="Link to TDs Dail profile - external" target="_blank">Dail profile</a>
    </p>
    <p>
      <a href="/" title="Back to filter screen">Back</a>
    </p>
  </div>
  <div class="votes">
    <ul>
      {#each votes as vote, index}
        <li class:alternate={ index % 2 }>
          {vote.date} - {vote.name || vote.title} - Voted: {vote.choice}<br>
          {vote.description}<br>
          Status of motion - {vote.status}<br>
          <a href="https://www.oireachtas.ie{vote.detailLink}" title="Link to details on Oireachtas.ie - external" target="_blank">Link to details on Oireachtas.ie</a>
        </li>
      {/each}
    </ul>
  </div>
</div>