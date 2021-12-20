<script>
    import AsideItem from './AsideItem.svelte'

    const fetched = fetch(`/api/sources`)
        .then(res => res.json())

</script>

<div class="position-sticky pt-3">
    <ul class="nav flex-column">
    {#await fetched}
        <div class="progress">
          <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style="width: 80%" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
    {:then items}
    {#each items as item}
        <AsideItem author={item.author} title={item.title} key={item.key} />
    {/each}
    {:catch error}
        <div class="alert alert-danger text-center" role="alert">
          Ошибка при загрузке контента.
        </div>
    {/await}
    </ul>
</div>

