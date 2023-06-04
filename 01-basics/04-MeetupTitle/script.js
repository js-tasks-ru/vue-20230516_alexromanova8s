import { createApp, reactive, computed, watch } from './vendor/vue.esm-browser.js';

const API_URL = 'https://course-vue.javascript.ru/api';

function fetchMeetupById(meetupId) {
  return fetch(`${API_URL}/meetups/${meetupId}`).then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      return response.json().then((error) => {
        throw error;
      });
    }
  });
}

createApp({
  setup() {
    const data = reactive({
      currentMeetupInfo: {},
      currentMeetupId: 1,
    });

    watch(
      () => data.currentMeetupId,
      async (value) => {
        data.currentMeetupInfo = await fetchMeetupById(value);
      },
      { immediate: true },
    );

    const meetupTitle = computed(() => {
      return data.currentMeetupInfo?.title || '';
    });

    return {
      data,
      meetupTitle,
    };
  },
}).mount('#app');
