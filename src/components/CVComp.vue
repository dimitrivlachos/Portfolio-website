<template>
    <!-- Two-column section -->
    <div class="grid md:grid-cols-3 lg:grid-cols-4 justify-center">

        <!-- Spacer div -->
        <div class="hidden lg:block lg:col-span-1 p-4">
            <!-- Maybe add a profile picture here? -->
        </div>

        <!-- Main section -->
        <div class="md:col-span-2 p-4 mx-auto lg:mx-0">
            

            <h2 class="text-2xl font-semibold">Profile</h2>
            <p>Graduate Computer Scientist from the University of London with First Class Honours.
            Strong foundation in Computer Science, Software Engineering, and data structures.
            Demonstrated self-driven nature, completing my degree independently.
            Possesses problem-solving mindset, analytical approach, and quick adaptability to new
            technologies. Thrives in challenging projects and seeks to make meaningful
            contributions to organizations. Seeking opportunities to further develop abilities and
            contribute to innovative initiatives.</p>

            <h2 class="text-2xl pt-6">Education</h2>
            <h2>University of London</h2>
        </div>

        <!-- Sidebar section -->
        <div class="col-span-1 p-4 mx-auto lg:mx-0">
            <h1 class="text-2xl">Skills</h1>
            <h2 class="text-xl">Programming Languages</h2>
            <h3 class="text-lg">Proficient</h3>
            <p>Python, C++, C#</p>
            <h3 class="text-lg pt-2">Experienced</h3>
            <p>Java, JavaScript, HTML, CSS, SQL</p>
            <h3 class="text-lg pt-2">Familiar</h3>
            <p>LATEX, RUST</p>

            
            <h2 class="text-xl pt-6">Frameworks</h2>
            <ul>
                <li>Vue.js</li>
                <li>React</li>
                <li>Node.js</li>
                <li>Express</li>
                <li>Flask</li>
                <li>Bootstrap</li>
                <li>Tailwind CSS</li>
            </ul>

            <h2 class="text-xl pt-6">Tools/Platforms</h2>
            <ul>
                <li>Git</li>
                <li>GitHub</li>
                <li>GitLab</li>
                <li>Linux</li>
                <li>Windows</li>
                <li>macOS</li>
                <li>Arduino</li>
                <li>Raspberry Pi</li>
            </ul>

        </div>
        
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            
        }
    }
};
</script>
  