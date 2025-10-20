<script lang="ts">
	import { invoke } from "@tauri-apps/api/core";

	import * as lib from "../lib/lib";

	// Importing components
	import KnowledgeCard from "$lib/components/KnowledgeCard.svelte";
</script>

<main class="bg-background text-accent">
	<KnowledgeCard />
</main>
