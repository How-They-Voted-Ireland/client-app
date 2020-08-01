<script>
  import { selectedConstituency } from '../../store/appState';
  import constituencies from './constituencyPaths';

  const setConstituency = event => {
    selectedConstituency.set(event.target.id);
  }

  $selectedConstituency;
</script>

<style lang="scss">
  svg {
    width: 100%;
    height: auto;
    max-height: 100%;
  }
  
  path {
    fill: green;
    cursor: pointer;
  }

  path:hover, .selected {
    fill: orange;
  }
</style>

<svg
  viewBox="0 0 180.19859 149.22494">
  <g transform="translate(-310.62091,2.1166666)">
     {#each constituencies as { svgPath, id, noTransform }}
      <path
        d={svgPath}
        {id}
        transform={!noTransform ? "scale(0.26458333)" : null}
        class:selected={
          id === $selectedConstituency
          || $selectedConstituency === 'dublin' && (id.includes('dún') || id.includes('dub'))
          || ($selectedConstituency.includes('dún') || $selectedConstituency.includes('dub')) && id === 'dublin'
        }
        on:click={setConstituency}
      />
     {/each}
  </g>
  <path
    id="path285"
    d="m 78.81196,12.575155 3.67189,1.117031 1.71979,-2.381249 0.66146,-2.7119803 2.38125,0.727605 2.51354,-0.06615 1.65365,-1.4552087 3.175,-1.25677 0.52917,-0.33073 4.49791,1.521355 1.78594,-0.595313 2.51354,1.1244787 -0.13229,4.6302083 0.39688,0.661459 1.19062,-0.396875 -0.66146,2.844271 1.78594,0.330729 2.64583,4.299479 0.59532,0.992187 1.4552,-0.264583 0.8599,2.711979 -1.52135,1.124479 -0.1323,1.785938 -2.64583,0.132291 v 1.852084 l 0.46302,0.06615 1.78594,-1.389063 4.16719,-0.06615 3.30729,7.143753 -1.52136,5.02708 -1.5875,-2.44739 0.46302,-0.92604 -0.13229,-3.50573 -2.51354,-1.52136 -0.26458,1.5875 0.85989,3.57188 -0.79375,2.24896 2.31511,-0.13229 0.85989,1.78593 -2.3151,3.57188 -2.24896,-0.66146 -2.18281,0.92604 -0.7276,0.79375 0.39687,1.85208 -0.39687,1.78594 -2.77813,1.71979 -1.62047,0.81666"
    style="fill:none;stroke:#000000;stroke-width:0.264583px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
  />
  <path
    id="path305"
    d="m 104.19151,64.57841 46.23046,1.61886"
    style="fill:none;stroke:#000000;stroke-width:0.20561px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
  />
  <path
    id="path307"
    d="m 107.28851,81.54737 11.41241,65.57458"
    style="fill:none;stroke:#000000;stroke-width:0.264583px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
  />
</svg>

<!-- <p>This file is licensed under the Creative Commons Attribution-Share Alike 4.0 International license. Originally created by <a href="https://commons.wikimedia.org/wiki/User:Erinthecute">Erinthecute</a></p> -->