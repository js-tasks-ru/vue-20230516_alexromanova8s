import { defineComponent } from '../vendor/vue.esm-browser.js';
import UiAlert from './UiAlert.js';
import UiContainer from './UiContainer.js';
import MeetupCover from '../../03-MeetupCover/components/MeetupCover.js';
import MeetupDescription from '../../02-MeetupDescription/components/MeetupDescription.js';
import MeetupInfo from '../../04-MeetupInfo/components/MeetupInfo.js';
import MeetupAgenda from '../../05-MeetupAgenda/components/MeetupAgenda.js';

export default defineComponent({
  name: 'MeetupView',

  components: {
    UiAlert,
    UiContainer,
    MeetupCover,
    MeetupDescription,
    MeetupInfo,
    MeetupAgenda
  },

  props: {
    meetup: {
      type: Object,
      required: true,
    },
  },

  computed: {
    isMeetupAgendaShown() {
      return this.meetup.agenda?.length;
    },
  },

  template: `
    <div>
      <MeetupCover :title="meetup.title" :image="meetup.image" />

      <UiContainer>
        <div class="meetup">
          <div class="meetup__content">
            <MeetupDescription :description="meetup.description" />

            <h3>Программа</h3>
            <MeetupAgenda v-if="isMeetupAgendaShown" :agenda="meetup.agenda" />
            <UiAlert v-else>Программа пока пуста...</UiAlert>
          </div>
          <div class="meetup__aside">
            <MeetupInfo
              :organizer="meetup.organizer"
              :place="meetup.place"
              :date="meetup.date"
            />
          </div>
        </div>
      </UiContainer>
    </div>`,
});
