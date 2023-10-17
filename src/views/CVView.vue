<template>
    <div class="text-black dark:text-slate-300">
        <h1 class="text-center text-6xl p-8"><p class="inline font-semibold">Dimitrios </p><p class="inline font-thin">Vlachos</p></h1>

        <!-- Social links -->
        <div class="flex justify-center">
            <a href="https://www.linkedin.com/in/dimitri-vlachos/" target="_blank" rel="noopener noreferrer" class="mx-4">
                <LinkedInSVG width="40" height="40" class="inline"/><p class="inline font-thin pl-2">LinkedIn</p>
            </a>
            <a href="https://github.com/dimitrivlachos" target="_blank" rel="noopener noreferrer" class="mx-4">
                <GitHubSVG width="40" height="40" class="inline"/><p class="inline font-thin pl-2">GitHub</p>
            </a>
        </div>

        <CVComp />
    </div>
</template>

<script>
    import CVComp from '../components/CVComp.vue';
    import LinkedInSVG from '../assets/svg/LinkedInSVG.vue';
    import GitHubSVG from '../assets/svg/GitHubSVG.vue';

    export default {
        name: 'CVView',
        components: {
            CVComp,
            LinkedInSVG,
            GitHubSVG
        }
    }
</script>