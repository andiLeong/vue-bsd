<template>
  <!-- stats section -->
  <HomeStats />
  <!-- team member -->
  <div class="bg-white dark:bg-gray-600">
    <div
      class="max-w-7xl mx-auto py-12 px-4 text-center sm:px-6 lg:px-8 lg:py-24"
    >
      <div class="space-y-12">
        <div class="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
          <h2
            class="text-3xl font-extrabold tracking-tight sm:text-4xl dark:text-white"
          >
            Meet our team
          </h2>
          <p class="text-xl text-gray-500 dark:text-gray-200">
            Ornare sagittis, suspendisse in hendrerit quis. Sed dui aliquet
            lectus sit pretium egestas vel mattis neque.
          </p>
        </div>
        <ul
          role="list"
          class="mx-auto space-y-16 sm:grid sm:grid-cols-2 sm:gap-16 sm:space-y-0 lg:grid-cols-3 lg:max-w-5xl"
        >
          <li v-for="(member, index) in members" :key="index">
            <div class="space-y-6">
              <img
                class="mx-auto h-40 w-40 rounded-full xl:w-56 xl:h-56 dark:border dark:border-2 darK:border-white"
                :src="member.profile"
                :alt="member.name"
              />
              <div class="space-y-2">
                <div class="text-lg leading-6 font-medium space-y-1">
                  <h3 class="dark:text-white">{{ member.name }}</h3>
                  <p class="text-indigo-600 dark:text-sky-200">
                    {{ member.position }}
                  </p>
                </div>
                <ul role="list" class="flex justify-center space-x-5">
                  <li>
                    <a href="#" class="text-gray-400 hover:text-gray-500">
                      <span class="sr-only">Twitter</span>
                      <svg
                        class="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                      >
                        <path
                          d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"
                        />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="#" class="text-gray-400 hover:text-gray-500">
                      <span class="sr-only">LinkedIn</span>
                      <svg
                        class="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>

  <!-- faq -->
  <div class="bg-gray-100 dark:bg-gray-700">
    <div class="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
      <div class="max-w-3xl mx-auto divide-y-2 divide-gray-200">
        <h2
          class="text-center text-3xl font-extrabold text-gray-900 sm:text-4xl dark:text-white"
        >
          Frequently asked questions
        </h2>
        <dl class="mt-6 space-y-6 divide-y divide-gray-200">
          <Accordion :items="qa"> </Accordion>
        </dl>
      </div>
    </div>
  </div>

  <!-- footer -->
  <TheFooter />
</template>

<script setup>
import { ref } from 'vue';
import HomeStats from '@/components/HomeStats.vue';
import Accordion from '@/components/Accordion.vue';
import TheFooter from '@/components/TheFooter.vue';

const qa = ref([
  {
    title: 'How much is cheaper than others',
    body: "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    title: 'How much is cheaper than others',
    body: "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    title: 'How much is cheaper than others',
    body: "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
]);

const members = ref([
  {
    name: 'Roanld Tan',
    position: 'CEO',
    profile:
      'https://scontent-lhr8-1.xx.fbcdn.net/v/t1.6435-1/p100x100/72874997_103394827753023_5518677111549722624_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=7206a8&_nc_ohc=zl2uKKl94FgAX-2jeiu&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent-lhr8-1.xx&oh=00_AT8DK0G482oEAzccuGEk0R9ynu9vMdVyHMkx6rBGWReueg&oe=61FDA42B',
  },
  {
    name: 'Arren Lin',
    position: 'Integration Engineer',
    profile:
      'https://scontent-lhr8-1.xx.fbcdn.net/v/t1.6435-1/p100x100/174068355_4185629151456685_1000980932052326623_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=7206a8&_nc_ohc=iTGLUmXlgJEAX90NOwr&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent-lhr8-1.xx&oh=00_AT_AWYigNhSZudr4g-wd5QMRTxy511supVSk98Nbbq8Ikg&oe=61FE099F',
  },
  {
    name: 'Adrian',
    position: 'Integration Manager',
    profile:
      'https://scontent-lhr8-1.xx.fbcdn.net/v/t1.6435-1/p100x100/90098096_10157079348335773_7667709829699338240_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=7206a8&_nc_ohc=lkp-74tIfJ0AX8n-Hva&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent-lhr8-1.xx&oh=00_AT94-dwM1AQ6Pnma3k_WR6c3o0u-lgqZsX0I9SgLAVKTpA&oe=61FF2810',
  },
]);
</script>
