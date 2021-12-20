<script lang="ts">
    import { onMount } from 'svelte'
    // This line works
    //import D3LinearChart from '../lib/D3LinearChart'
    // This line don't
    import D3LinearChart from '@yababay67/d3-adapter'

    export let data
    let figure

    onMount(() => {
        data = Object.entries(data)
            .map(el => ({ethnos: el[0], count: el[1]}))
            .sort((a, b) => b.count - a.count)
        const linearChart = new D3LinearChart(figure)
        linearChart.bottom = 30
        linearChart.caption = 'There is a <b>nice</b> chart!'
        linearChart.inject([1, 3, 2, 5, 6, 4, 7, 8, 9])
    })
</script>

<figure bind:this={figure} />

