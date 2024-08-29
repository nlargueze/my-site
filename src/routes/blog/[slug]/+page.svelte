<script>
	import { base } from '$app/paths';
	import { format } from 'date-fns';
	export let data;

	// Function to format the date using date-fns
	function formatDate(dateString) {
		return format(new Date(dateString), 'yyyy-MMM-dd');
	}
</script>

<h1><a href="{base}/" class="logo">Nick Labs</a></h1>
<main>
	<h4 class="post-date">{formatDate(data.post.meta.date)}</h4>
	<h2>{data.post.meta.title}</h2>
	<div class="markdown">
		{@html data.post.htmlContent}
	</div>
</main>

<style>
	.logo {
		text-decoration: none;
		color: inherit;
	}
	.post-date {
		color: #666;
	}
</style>
