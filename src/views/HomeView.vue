<template>
    <!-- Home page of my portfolio detailing me -->
    <div class="text-white dark:text-black">
        <div class="flex flex-col items-center justify-center min-h-screen py-2">
            <div class="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
                <h1 class="text-6xl font-bold">
                    Welcome to my portfolio
                </h1>
                <p class="mt-3 text-2xl">
                    This is a work in progress
                </p>
                <!-- p5 sketch -->
                <p5 />
                <div class="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
                    <div class="p-6 mt-6 text-left border w-96 rounded-xl shadow-xl bg-gradient-to-r from-green-400 to-blue-500">
                        <h3 class="text-2xl font-bold">About Me</h3>
                        <p class="mt-4 text-xl">
                            I am a full stack developer with a passion for learning new things. I am currently
                            learning Vue.js and Tailwind CSS. I excel at machine learning and artificial intelligence.
                            I am currently working on a project that will allow me to create a portfolio website for
                            myself.
                        </p>
                    </div>
                    <div class="p-6 mt-6 text-left border w-96 rounded-xl shadow-xl bg-gradient-to-r from-green-400 to-blue-500">
                        <h3 class="text-2xl font-bold">My Projects</h3>
                        <p class="mt-4 text-xl">
                            I am working on several projects at the moment. I am working on this portfolio website, as
                            well as a home automation system that will integrate with my custom PCB.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import p5 from '../components/p5.vue';

    export default {
        components: {
            p5
        }
    }
</script>