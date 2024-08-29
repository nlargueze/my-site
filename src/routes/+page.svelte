<script>
	import { format } from 'date-fns';
	export let data;

	// Function to remove suffix from a string
	function removeSuffix(str, suffix) {
		return str.endsWith(suffix) ? str.slice(0, -suffix.length) : str;
	}

	// Function to format the date using date-fns
	function formatDate(dateString) {
		return format(new Date(dateString), 'yyyy-MMM-dd');
	}
</script>

<header>
	<h1>Nick Labs</h1>
	<nav>
		<a href="#me">Me</a>
		<a href="#now">Now</a>
		<a href="#blog">Blog</a>
	</nav>
</header>
<main>
	<section id="me">
		<h2>Me</h2>
		<div>
			<p>
				I am Nicolas Largueze, i am an engineer and developper, with a broad set of interests. I am
				a graduate from the <a href="https://www.polytechnique.edu/" target="_blank"
					>Ecole Polytechnique</a
				>
				with a Master in Economy from the
				<a href="https://www.ensae.fr/en" target="_blank">ENSAE</a>, and a Master in Finance and
				Strategy from
				<a href="https://www.sciencespo.fr/en/" target="_blank">Sciences Po Paris</a>.
			</p>
			<p>I am also a freediver.</p>
		</div>
		<div>
			<div>
				<a href="https://www.linkedin.com/in/nicolas-largueze/" target="_blank">LinkedIn</a>
			</div>
			<div>
				<a href="https://www.instagram.com/nicolaslargueze/" target="_blank">Instagram</a>
			</div>
			<div>
				<a href="https://x.com/nicolaslargueze" target="_blank">X</a>
			</div>
		</div>
	</section>

	<section id="now">
		<h2>Now</h2>
		<p>I am currently working on personal projects</p>
	</section>

	<section id="blog">
		<h2>Blog</h2>
		{#each data.posts as post}
			<div>
				<span class="blog-date">{formatDate(post.meta.date)}</span>
				<span>
					<a href={`/blog/${removeSuffix(post.file, '.md')}`} target="_blank">{post.meta.title}</a>
				</span>
			</div>
		{/each}
	</section>
</main>

<style>
	.blog-date {
		font-size: 0.8em;
		color: #666;
	}
</style>
