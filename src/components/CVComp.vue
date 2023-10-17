<template>
    <!-- Two-column section -->
    <div class="md:grid md:grid-cols-3 lg:grid-cols-4 justify-center bg-gray-800">

        <!-- Spacer div -->
        <div class="hidden lg:block lg:col-span-1 p-4">
            <!-- Maybe add a profile picture here? -->
        </div>

        <!-- Main section -->
        <div class="md:col-span-2 p-4 mx-auto lg:mx-0">

            <h1 class="text-3xl text-blue-500 font-semibold">Profile</h1>
            <p> <strong>Computer Scientist</strong> from the University of London with <strong>First Class Honours</strong>.
                Strong foundation in Computer Science, Software Engineering, and data structures.
                Demonstrated self-driven nature, completing my degree independently.
                Possesses problem-solving mindset, analytical approach, and quick adaptability to new
                technologies. Thrives in challenging projects and seeks to make meaningful
                contributions to organizations. Seeking opportunities to further develop abilities and
                contribute to innovative initiatives.</p>

            <h1 class="text-3xl text-blue-500 font-semibold pt-6 pb-2">Education</h1>
            <h2 class="text-3xl inline">BSc Computer Science</h2>
            <h2 class="text-3xl inline font-thin"> | University of London</h2>
            <h3 class="text-xl font-semibold">First Class Honours</h3>
            <p class="italic">September 2019 - March 2023</p>
            <div class="pt-4 max-w-xl items-center">
                <h2 class="text-xl font-bold">Final Results:</h2>
                <ul>
                    <li v-for="item in uniResults"
                        class="flex justify-between items-center border-b border-gray-600 dark:border-gray-300 py-2">
                        <span>{{ item.module }}</span>
                        <span class="font-bold">{{ item.result }}%</span>
                    </li>
                </ul>
            </div>

            <hr class="my-4 border-dashed">
            <!-- Need a breaker -->

            <h2 class="text-3xl inline">Matric / Highschool</h2>
            <h2 class="text-3xl inline font-thin"> | Beaulieu College</h2>
            <p class="italic">January 2011 - December 2015</p>
            <div class="pt-4 max-w-xl items-center">
                <h2 class="text-xl font-bold">Final Results:</h2>
                <ul>
                    <li v-for="item in hsResults"
                        class="flex justify-between items-center border-b border-gray-600 dark:border-gray-300 py-2">
                        <span>{{ item.module }}</span>
                        <span class="font-bold">{{ item.result }}%</span>
                    </li>
                </ul>
            </div>

            <h1 class="text-3xl text-blue-500 font-semibold pt-6 pb-2">Experience</h1>

        </div>

        <!-- Sidebar section -->
        <div class="md:col-span-1 p-4 mx-auto lg:mx-0">
            <h1 class="text-3xl text-blue-500 font-semibold">Skills</h1>
            <h2 class="text-2xl font-bold">Programming Languages</h2>
            <h3 class="text-lg italic">Proficient</h3>
            <p>Python, C++, C#</p>
            <h3 class="text-lg italic pt-2">Experienced</h3>
            <p>Java, JavaScript, HTML, CSS, SQL</p>
            <h3 class="text-lg italic pt-2">Familiar</h3>
            <p>LATEX, RUST</p>


            <h2 class="text-2xl font-bold pt-6">Frameworks / Libraries</h2>
            <ul>
                <li>TensorFlow</li>
                <li>Keras</li>
                <li>Vue.js</li>
                <li>Tailwind CSS</li>
            </ul>

            <h2 class="text-2xl font-bold pt-6">Tools / Platforms</h2>
            <ul>
                <li>Git</li>
                <li>GitHub</li>
                <li>Unity</li>
                <li>Visual Studio</li>
                <li>Visual Studio Code</li>
                <li>Jupyter</li>
                <li>Linux</li>
                <li>Windows</li>
                <li>Arduino</li>
                <li>Raspberry Pi</li>
                <li>KiCad</li>
            </ul>

            <h1 class="text-3xl text-blue-500 font-semibold pt-6">Right to work</h1>
            <ul>
                <li>> Greek / EU Citizen</li>
                <li>> South African Citizen</li>
                <li>> UK Resident (Pre-settled status)</li>
                <li class="inline">Share code: </li>
                <p v-if="!isShowShareCode" class="inline bg-gray-400 dark:bg-black px-1 animate-pulse"
                    @click="showShareCode">Click to reveal</p>
                <p v-if="isShowShareCode" class="inline font-bold px-1" id="share">{{ shareCode }}</p>
            </ul>

            <h1 class="text-3xl text-blue-500 font-semibold pt-6">Interests</h1>
            <h2 class="text-2xl font-bold">Related</h2>
            <ul>
                <li>Machine Learning</li>
                <li>Artificial Intelligence</li>
                <li>Computer Vision</li>
                <li>Robotics</li>
                <li>Embedded Systems</li>
                <li>Game Development</li>
                <li>Web Development</li>
            </ul>
            <h2 class="text-2xl font-bold pt-6">Other</h2>
            <ul>
                <li>Cooking and baking</li>
                <li>Hobby electronics</li>
                <li>Traditional and digital art</li>
                <li>Zero-waste eco lifestyle</li>
                <li>History and journalism</li>
            </ul>
        </div>

    </div>
</template>
  
<script>
export default {
    data() {
        return {
            isShowShareCode: false,
            shareCode: "W3G A25 3CC",
            uniResults: [
                { module: "Machine Learning and Neural Networks", result: 95 },
                { module: "Artificial Intelligence", result: 77 },
                { module: "Games Development", result: 76 },
                { module: "3D Graphics and Animation", result: 81 },
                { module: "Virtual Reality", result: 83 },
                { module: "Physical Computing and IoT", result: 71 },
                { module: "Final Project / Thesis", result: 84 }
            ],
            hsResults: [
                { module: "English", result: 70 },
                { module: "History", result: 75 },
                { module: "IT", result: 81 },
                { module: "Mathematics", result: 63 },
                { module: "Physics & Chemistry", result: 66 },
                { module: "isiZulu", result: 40 },
                { module: "Life Orientation", result: 69 }
            ]
        }
    },
    methods: {
        showShareCode() {
            // Replace text in element with share code id="share"
            console.log("Clicked");
            this.isShowShareCode = true;
            document.getElementById("share").innerHTML = this.shareCode;
        }
    }
};
</script>
  