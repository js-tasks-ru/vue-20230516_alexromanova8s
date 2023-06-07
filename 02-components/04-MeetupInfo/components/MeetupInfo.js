import { defineComponent } from '../vendor/vue.esm-browser.js';
import { format } from 'date-fns';

export default defineComponent({
  name: 'MeetupInfo',
  props: {
    organizer: {
      type: String,
      required: true
    },
    place: {
      type: String,
      required: true
    },
    date: {
      type: Number,
      required: true
    },
  },

  computed: {
    formattedDate() {
      return format(new Date(this.date), 'yyyy-MM-dd');
    },
    localeDate() {
      return new Date(this.date).toLocaleDateString(navigator.language, { day: 'numeric', month: 'long', year: 'numeric' });
    },
  },

  template: `
    <ul class="meetup-info">
      <li>
        <img class="icon meetup-info__icon" alt="icon" src="/assets/icons/icon-user.svg" />
        {{ organizer }}
      </li>
      <li>
        <img class="icon meetup-info__icon" alt="icon" src="/assets/icons/icon-map.svg" />
        {{ place }}
      </li>
      <li>
        <img class="icon meetup-info__icon" alt="icon" src="/assets/icons/icon-cal-lg.svg" />
        <time :datetime="formattedDate">{{ localeDate }}</time>
      </li>
    </ul>`,
});
