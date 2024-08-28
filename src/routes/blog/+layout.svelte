<script>
    export let data;
    
    // Function to remove suffix from a string
    function removeSuffix(str, suffix) {
        return str.endsWith(suffix) ? str.slice(0, -suffix.length) : str;
    }
</script>

<h1>Nick Labs</h1>
<main>
    <h2>Blog posts</h2>
    {#each data.posts as post}
        <div>
            <h3><a href={`/blog/${removeSuffix(post.file, '.md')}`}>{post.meta.title}</a></h3>
            <p>{post.meta.summary}</p>
            <slot></slot>
        </div>
    {/each}
</main>
