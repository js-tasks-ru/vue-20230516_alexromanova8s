import { defineComponent } from '../vendor/vue.esm-browser.js';
import UiContainer from './UiContainer.js';
import UiAlert from './UiAlert.js';
import { fetchMeetupById } from '../meetupService.js';
import MeetupView from '../../06-MeetupView/components/MeetupView.js';

export default defineComponent({
  name: 'PageMeetup',
  components: {
    UiAlert,
    UiContainer,
    MeetupView
  },

  props: {
    meetupId: {
      type: Number,
      required: true
    }
  },

  data() {
    return {
      loading: false,
      error: '',
      meetup: null
    }
  },

  computed: {
    alertText() {
      return this.error || 'Загрузка...';
    },
  },

  watch: {
    meetupId: {
      async handler(meetupId) {
        this.meetup = null;
        try {
          this.loading = true;
          this.error = '';
          this.meetup = await fetchMeetupById(meetupId)
        } catch(e) {
          this.error = e.message;
        } finally {
          this.loading = false;
        }
      },
      immediate: true,
    }
  },

  template: `
    <div class="page-meetup">
      <MeetupView v-if="meetup" :meetup="meetup" />

      <UiContainer v-else>
        <UiAlert>{{ alertText }}</UiAlert>
      </UiContainer>
    </div>`,
});
