<script>
	import { _, locale } from 'svelte-i18n';
	import { teamCategories } from '../../store/team_members.svelte';
	import Nav from '../../components/nav/nav.svelte';
	import Hero from '../../components/hero.svelte';
	import BlurredBackground from '../../components/blurred_background.svelte';
	import ResourceContainer from '../../components/resource_container/resource_container.svelte';
	import TeamCategoryContainer from '../../components/team_category_container.svelte';
</script>

<!-- Blurred Background -->
<BlurredBackground />

<div class="no-scrollbar relative h-screen overflow-scroll">
	<!-- Nav -->
	<Nav />

	<!-- HERO -->
	<Hero title={$_('page.teams.teams')} description={$_('page.teams.description')} />

	<!-- Content -->
	<div class="absolute z-50 flex w-screen items-center justify-center pb-60">
		<div class="flex w-3/5 flex-col justify-between">
			<TeamCategoryContainer title={'Authors'} category={teamCategories.authors} />
			<TeamCategoryContainer
				title={'Graphics Designers'}
				category={teamCategories.graphicsDesigners}
			/>
			<TeamCategoryContainer
				title={'Software Developers'}
				category={teamCategories.softwareDevelopers}
			/>
		</div>
	</div>
</div>
