<template>
    <!-- Two-column section -->
    <div class="md:grid md:grid-cols-3 lg:grid-cols-4 justify-center bg-white dark:bg-gray-800">

        <!-- Social div -->
        <div class="flex justify-center md:block">
        <div class="flex justify-top md:flex-col lg:col-span-1 p-4 md:sticky md:top-0">
            <!-- LinkedIn Button -->
                <a href="https://www.linkedin.com/in/dimitri-vlachos/" target="_blank" rel="noopener noreferrer"
                    class="h-full md:h-auto flex cursor-pointer justify-between items-center border-2 border-solid border-slate-700 hover:bg-gray-700 p-2 rounded-lg">
                    <LinkedInSVG width="40" height="40" class="inline" />
                    <p class="inline text-2xl pl-2">LinkedIn</p>
                    <div class="inline-block"></div>
                </a>
                <!-- GitHub Button -->
                <a href="https://github.com/dimitrivlachos" target="_blank" rel="noopener noreferrer"
                    class="h-full md:h-auto ml-2 md:ml-0 md:mt-4 flex cursor-pointer justify-between items-center border-2 border-solid border-slate-700 hover:bg-gray-700 p-2 rounded-lg">
                    <GitHubSVG width="40" height="40" :color="githubButtonColour" class="inline" />
                    <p class="inline text-2xl pl-2">GitHub</p>
                    <div class="inline-block"></div>
                </a>
        </div></div>

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
            <div>
                <h2 class="text-3xl inline">BSc Computer Science</h2>
                <h2 class="text-3xl inline font-thin"> | University of London</h2>
            </div>
            <div>
                <p class="text-sm inline pr-2">London, England</p>
                <img src="../assets/svg/uk.svg" alt="UK Flag" class="inline w-6 rounded-sm">
            </div>
            <p class="italic">September 2019 - March 2023</p>
            <div class="pt-4 max-w-xl items-center">
                <span class="flex justify-between border-dashed border-b-2">
                    <h2 class="text-xl font-bold inline pr-2">Final Results:</h2>
                    <h3 class="text-xl font-semibold inline">🎓 First Class Honours</h3>
                </span>
                <ul>
                    <li v-for="item in uniResults"
                        class="flex justify-between items-center border-b border-gray-600 dark:border-gray-300 py-2">
                        <span>{{ item.module }}</span>
                        <span class="font-bold">{{ item.result }}%</span>
                    </li>
                </ul>
            </div>

            <div class="mt-4">
                <h2 class="text-3xl inline">Matric / Highschool</h2>
                <h2 class="text-3xl inline font-thin"> | Beaulieu College</h2>
            </div>
            <div>
                <p class="text-sm inline pr-2">Kyalami, South Africa</p>
                <img src="../assets/svg/za.svg" alt="South African Flag" class="inline w-5 rounded-sm">
            </div>

            <p class="italic">January 2011 - December 2015</p>
            <p>* IEB subjects are AS-level equivalents</p>

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

            <!------------------------------------------------------------------------->
            <h1 class="text-3xl text-blue-500 font-semibold pt-6 pb-2">Experience</h1>
            <div>
                <h2 class="text-3xl inline">Freelance</h2>
                <h2 class="text-3xl inline font-thin"> | Web Development</h2>
            </div>
            <div>
                <p class="text-sm inline pr-2">Aylesbury, England</p>
                <img src="../assets/svg/uk.svg" alt="UK Flag" class="inline w-6 rounded-sm">
            </div>
            <p class="italic">August 2023 - Present</p>

            <h2 class="text-2xl font-bold pt-4">Responsibilities</h2>
            <ul class="list-disc">
                <li>Outlined clients' needs, turning those into a design prototype.</li>
                <li>Developed responsive, modern websites out of those prototypes.</li>
                <li>Deployed websites to hosting platforms.</li>
                <li>Provided maintenance and support for websites.</li>
                <li>Set up and managed Google Ad campaigns</li>
            </ul>

            <h2 class="text-2xl font-bold pt-4">Projects</h2>
            <h3 class="text-xl font-semibold pt-2">Phoenix 6018</h3>
            <p> Small, local storage company. Developed a website to showcase the company's services and
                provide a contact form for potential clients.
                <a class="text-blue-400 hover:text-blue-500" href="https://phoenix6018.co.za/" target="_blank"
                    rel="noopener">https://phoenix6018.co.za/</a>
            </p>
            <p>I also managed their ad campaigns, drawing attention to the website.</p>
            <p><strong>Technologies used:</strong> Vite, Vue.js, Tailwind CSS</p>


            <hr class="my-4 border-dashed">

            <!-- Transcat -->
            <div>
                <h2 class="text-3xl inline">Transcat SA</h2>
                <h2 class="text-3xl inline font-thin"> | IT Administrator</h2>
            </div>
            <div>
                <p class="text-sm inline pr-2">Midrand, South Africa</p>
                <img src="../assets/svg/za.svg" alt="South African Flag" class="inline w-5 rounded-sm">
            </div>
            <p class="italic">May 2016 - August 2019</p>
            <h2 class="text-2xl font-bold pt-4">Responsibilities</h2>
            <ul class="list-disc">
                <li>Built and maintained company network infrastructure</li>
                <li>Managed company servers and databases</li>
                <li>Developed and maintained company website</li>
                <li>Developed and maintained company data structures and workflows</li>
            </ul>
            <h2 class="text-2xl font-bold pt-4">Achievements</h2>
            <ul class="list-disc">
                <li>
                    Transitioned office work from mostly paper-based to mostly electronic mediums,
                    reducing paper usage by 80%.
                </li>
                <li>
                    Developed a custom data workflow system for the company, removing redundant
                    processes allowing single entries of data to be used in multiple places.
                </li>
                <li>
                    Automated many processes, including trip-costing, salary and comission calculations,
                    profit calculations, and more.
                </li>
            </ul>

            <hr class="my-4 border-dashed">

            <!-- Waterhaven -->
            <div>
                <h2 class="text-3xl inline">Waterhaven</h2>
                <h2 class="text-3xl inline font-thin"> | Clay Target Coach</h2>
            </div>
            <div>
                <p class="text-sm inline pr-2">Centurion, South Africa</p>
                <img src="../assets/svg/za.svg" alt="South African Flag" class="inline w-5 rounded-sm">
            </div>
            <p class="italic">January 2013 - Mar 2016</p>
            <h2 class="text-2xl font-bold pt-4">Responsibilities</h2>
            <ul>
                <li>Trained and guided groups from corporate events in clay target shooting.</li>
                <li>Communicated and facilitated safety whilst entertaining and teaching.</li>
            </ul>

            <!------------------------------------------------------------------------->
            <h1 class="text-3xl text-blue-500 font-semibold pt-6 pb-2">Projects</h1>
            <p>> Will autofill</p>
        </div>

        <!-- Sidebar section -->
        <div class="md:col-span-1 p-4 mx-auto lg:mx-0">
            <h1 class="text-3xl text-blue-500 font-semibold">Skills</h1>
            <h2 class="text-2xl font-bold">Programming Languages</h2>
            <h3 class="text-sm italic">Proficient</h3>
            <p class="pl-2">Python, C++, C#</p>
            <h3 class="text-sm italic pt-2">Experienced</h3>
            <p class="pl-2">Java, JavaScript, HTML, CSS, SQL</p>
            <h3 class="text-sm italic pt-2">Familiar</h3>
            <p class="pl-2">LATEX, RUST</p>


            <h2 class="text-2xl font-bold pt-6">Frameworks / Libraries</h2>
            <ul>
                <li>TensorFlow</li>
                <li>Keras</li>
                <li>FreeRTOS</li>
                <li>Vite</li>
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
            <ul class="list-disc">
                <li>Greek / EU Citizen</li>
                <li>South African Citizen</li>
                <li>UK Resident (Pre-settled status)</li>
                <li class="inline">↳ Share code: </li>
                <p v-if="!isShowShareCode" class="inline bg-gray-400 dark:bg-black px-1 animate-pulse"
                    @click="showShareCode">Click to reveal</p>
                <p v-if="isShowShareCode" class="inline font-bold px-1" id="share">{{ shareCode }}</p>
                <li>No sponsorship required</li>
                <li>Has driver's licence</li>
                <li>Has access to a vehicle</li>
            </ul>

            <h1 class="text-3xl text-blue-500 font-semibold pt-6">Interests</h1>
            <h2 class="text-2xl font-bold">Related</h2>
            <ul class="list-disc">
                <li>Machine Learning</li>
                <li>Artificial Intelligence</li>
                <li>Computer Vision</li>
                <li>Robotics</li>
                <li>Embedded Systems</li>
                <li>Game Development</li>
                <li>Web Development</li>
            </ul>
            <h2 class="text-2xl font-bold pt-6">Other</h2>
            <ul class="list-disc">
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
import LinkedInSVG from '../assets/svg/LinkedInSVG.vue';
import GitHubSVG from '../assets/svg/GitHubSVG.vue';

export default {
    data() {
        return {
            isDarkMode: false,
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
        },
        detectColorScheme() {
            // Detects if user has dark mode enabled
            if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                this.isDarkMode = true;
            }
        },
    },
    components: {
        LinkedInSVG,
        GitHubSVG
    },
    mounted() {
        this.detectColorScheme();
    },
    computed: {
        theme() {
            return this.isDarkMode ? 'dark' : 'light';
        },
        githubButtonColour() {
            return this.isDarkMode ? '#A0A0A0' : '#161614';
        }
    }
};
</script>
  