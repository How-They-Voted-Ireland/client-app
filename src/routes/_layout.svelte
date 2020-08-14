<style lang="scss" global>
  @import '../style/mixins.scss';
  
  header, footer {
    padding: 20px 10px;
    background-color: var(--primary-light);
  }

  header {
    text-align: center;
  }

  footer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    @include mobile {
      flex-direction: column;
      align-items: center;
    }
  }

  main {
    flex-grow: 1;
    overflow: hidden;
  }
</style>

<svelte:head>
  <title>How They Voted</title>
  <meta name="description" content="Under development - An app to allow Irish people to easily see how their TDs have voted on bills in the Dáil">
</svelte:head>

<header>
  <h1>How They Voted</h1>
</header>

<main>
	<slot></slot>
</main>

<footer>
  <div class="site-name">
    How They Voted
  </div>
  <div class="site-contact">
    <a href="https://github.com/How-They-Voted-Ireland">Github</a> | 
    <a href="mailto:info@howtheyvoted.ie">info@howtheyvoted.ie</a>
  </div>
</footer>