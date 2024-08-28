<script>
	export let data;
</script>

<h1>Nick Labs</h1>
<main>
	<h4><h2>{data.post.meta.date}</h2></h4>
	<h2>{data.post.meta.title}</h2>
	<div class="markdown">
		{@html data.post.htmlContent}
	</div>
	<slot></slot>
</main>
