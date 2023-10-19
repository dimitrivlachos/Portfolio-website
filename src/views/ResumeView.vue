<template>
    <div class="text-black dark:text-slate-300">
        <h1 class="text-center text-6xl p-8"><p class="inline font-semibold">Dimitrios </p><p class="inline font-thin">Vlachos</p></h1>

        <ResumeComp />
    </div>
</template>

<script>
    import ResumeComp from '../components/ResumeComp.vue';
    import LinkedInSVG from '../assets/svg/LinkedInSVG.vue';
    import GitHubSVG from '../assets/svg/GitHubSVG.vue';

    export default {
        name: 'ResumeView',
        components: {
            ResumeComp,
            LinkedInSVG,
            GitHubSVG
        }
    }
</script>