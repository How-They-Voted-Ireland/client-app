<style lang="scss" global>
  @import '../style/mixins.scss';
  
  header, footer {
    padding: 20px 10px;
    background-color: var(--primary-light);
  }

  header {
    h1 {
      text-align: center;
    }
    
    a {
      text-decoration: none;
    }
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
  <meta name="description" content="An app to easily see how their TDs have voted in the Dáil">
</svelte:head>

<header>
  <a href="/" title="Home screen"><h1>How They Voted</h1></a>
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