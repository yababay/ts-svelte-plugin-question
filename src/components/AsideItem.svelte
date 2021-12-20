<script>
    import Icon from './Icon.svelte'

    export let author, title, key
</script>

<li class="nav-item">
    <a class="nav-link link-secondary" aria-current="page" href={`#${key}`}>
        <Icon icon="book" />
        {`${author} – ${title}`}
    </a>
</li>

