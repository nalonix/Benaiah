<script lang="ts">
	import { locale } from 'svelte-i18n';
	let { artistsList } = $props();
</script>

<div class="flex flex-col items-center justify-center gap-y-7 py-20">
	<div class="font-batangas text-2xl">Designed By</div>
	<div class="flex items-center justify-center gap-x-4">
		{#each artistsList as artist}
			<div class="group/artist flex cursor-pointer flex-col items-center">
				<div
					class="h-20 w-20 overflow-clip rounded-full border border-zinc-400 shadow-lg transition-all group-hover/artist:scale-110 group-hover/artist:border-black"
				>
					<img
						src={artist.photo}
						alt={$locale == 'am' ? artist.fullname_am : artist.fullname_en}
						class="aspect-square"
					/>
				</div>
				<div class="absolute hidden pt-24 group-hover/artist:block">
					<div
						class="rounded-full border border-zinc-400 bg-zinc-900 px-3 text-white backdrop-blur-xl transition-all"
					>
						{$locale == 'am' ? artist.fullname_am : artist.fullname_en}
					</div>
				</div>
			</div>
		{/each}
	</div>
</div>
