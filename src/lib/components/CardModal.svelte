<script lang="ts">
	export let task_title;
	export let description;
	export let func;
</script>

<div class="card w-96 bg-base-100 shadow-xl">
	<div class="card-body bg-surface text-text rounded-xl">
		<!-- The Card's title -->
		<h2 class="card-title w-full justify-center">{task_title}</h2>
		<br />
		<!-- Function viewing section -->
		<h3 class="font-bold mt-2">Function:</h3>
		<!-- TODO: Fix the bg-gray to be a nice value -->
		<pre class="bg-gray-800 text-text rounded p-4 font-mono text-sm">{func}</pre>
		<br />
		<!-- The placeholder for the description -->
		<h3 class="font-bold">Description:</h3>
		<p>
			{description}
		</p>
		<br />
		<!-- The buttons section -->
		<div class="card-actions justify-start">
			<div class="justify-center">
				<button class="btn bg-accent h-8 px-4">✏️ Edit</button>
				<button class="btn bg-accent h-8 px-4">🗑️ Delete</button>
			</div>
		</div>
	</div>
</div>
