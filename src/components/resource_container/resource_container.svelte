<script lang="ts">
	let { theme, subtopic, published }: { theme: any; subtopic: any; published: boolean } = $props();
	import { _, locale } from 'svelte-i18n';

	import { BookText, FileText, Image } from '@lucide/svelte';
	import MaterialContainer from './material_container.svelte';
	import Divider from './divider.svelte';
</script>

<div
	class="group w-full md:w-72 lg:w-72 xl:w-72 2xl:w-72 overflow-clip rounded-xl border border-zinc-300 shadow-lg transition-all hover:border-black hover:shadow-xl"
>
	<div class="relative">
		{#if !published}
		<div class="w-full h-full absolute bg-white">
			<div class="text-lg flex flex-col items-center justify-center pt-14 text-black">
				<div class="font-batangas">
					{$locale === 'am' ? subtopic.title_am : subtopic.title_en}
				</div>
				<div class="text-sm">
					{$locale === 'am' ? 'በቅርብ ቀን' : 'Coming Soon'}
				</div>
			</div>
		</div>
		{/if}

		<div class="grid grid-cols-1 bg-white py-1">
			<!-- Title -->
			<div class="pb-1 text-center font-semibold">
				{$locale === 'am' ? subtopic.title_am : subtopic.title_en}
			</div> 

			<!-- Divider -->
			<Divider />

			<!-- Devotional -->
			<MaterialContainer
				title={$locale === 'am' ? 'የጥሞና ጽሑፍ' : 'Devotional'}
				icon={FileText}
				artistsList={$locale === 'am' ? subtopic.devotional.devotional_author_am : subtopic.devotional.devotional_author_en}
				link={$locale === 'am' ? subtopic.devotional.devotional_am : subtopic.devotional.devotional_en}
			/>

			<!-- Study Material -->
			<MaterialContainer
				title={$locale === 'am' ? 'የጥናት ጽሑፍ' : 'Study Material'}
				icon={BookText}
				artistsList={$locale === 'am' ? subtopic.study_material.study_material_author_am : subtopic.study_material.study_material_author_en}
				link={$locale === 'am' ? subtopic.study_material.study_material_am : subtopic.study_material.study_material_en}
			/>
			
			<!-- Divider -->
			<!-- <Divider /> -->

			<!-- Cover Image -->
			{#if published}
			<a href={!published ? '/resources' : `graphics/${theme.theme_en}/${subtopic.title_en}`}>
				<div class="aspect-square overflow-clip border-t border-b my-1 border-zinc-300 group-hover:border-black">
					<img
						src={$locale === 'am' ? subtopic.cover_am : subtopic.cover_en}
						alt={subtopic.title_en}
						class="h-full w-full object-fill transition-all group-hover:scale-105"
					/>
				</div>
			</a>
			{/if}
			
			<!-- Graphics -->
			<MaterialContainer
				title={$locale === 'am' ? 'ምስሎች' : 'Graphics'}
				icon={Image}
				artistsList={subtopic.artists}
				link={`graphics/${theme.theme_en}/${subtopic.title_en}`}
			/>
		</div>
	</div>

</div>
