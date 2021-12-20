<script>
    import EthnicalProfile from '../components/EthnicalProfile.svelte'
    export let link

    const fetched = fetch(`/api/profile/ethnical/${link}`)
        .then(res => res.json())
</script>

{#await fetched}
    <div class="progress">
        <div class="progress-bar progress-bar-striped progress-bar-animated" 
             role="progressbar" style="width: 80%" 
                   aria-valuenow="80" aria-valuemin="0" 
                                      aria-valuemax="100">
        </div>
    </div>
{:then data}
    <EthnicalProfile {data} />
{:catch error}
    <div class="alert alert-danger text-center" role="alert">
        Ошибка при загрузке контента.
    </div>
{/await}

