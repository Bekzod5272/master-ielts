<script setup lang="ts">
  import eventBus from '@/constants/eventBus'
  import { computed } from 'vue'
  import { useI18n } from 'vue-i18n'
  const { t } = useI18n()
  const mentors = computed(() => [
    {
      id: 1,
      name: t('aboutMentors.mentors.name1'),
      image: '/images/sherzod.webp',
    },
    {
      id: 2,
      name: t('aboutMentors.mentors.name2'),
      image: '/images/sarvar.webp',
    },
    {
      id: 3,
      name: t('aboutMentors.mentors.name3'),
      image: '/images/abdulloh.webp',
    },
    { id: 4, name: t('aboutMentors.mentors.name4'), image: '/images/r3.webp' },
    {
      id: 5,
      name: t('aboutMentors.mentors.name5'),
      image: '/images/bekzod.webp',
    },
    {
      id: 6,
      name: t('aboutMentors.mentors.name6'),
      image: '/images/sardor.webp',
    },
  ])

  function handleButtonClick() {
    eventBus.emit('scroll-to-auth')
  }
</script>
<template>
  <div class="mentors-section container">
    <div class="mentors-section__content">
      <div class="mentors-section__information">
        <div class="mentors-section__information__content">
          <img
            src="/public/images/7+.webp"
            class="mentors-section__information__img img-fluid"
            loading="lazy"
          />
          <p class="mentors-section__information__info-text">
            {{ t('infoIelts.section.title6') }}<br />
            {{ t('infoIelts.section.title3') }}
          </p>
          <p class="mentors-section__information__info-text-italic">
            {{ t('infoIelts.section.title7') }}
          </p>
          <div
            class="mentors-section__information__btn"
            @click="handleButtonClick"
          >
            <i class="fa-solid fa-user" />
            <p>{{ t('aboutMentors.singIn') }}</p>
          </div>
        </div>
      </div>
      <div class="mentors-section__view">
        <div class="mentors-header">
          <h1 class="mentors-header__title">
            {{ t('aboutMentors.our') }}
            <br />
            {{ t('aboutMentors.mentorsText') }}
          </h1>
        </div>
        <div class="mentors-list">
          <div
            class="mentors-list__item"
            v-for="mentor in mentors"
            :key="mentor.id"
          >
            <img
              :src="mentor.image"
              :alt="mentor.name"
              class="mentors-list__item__image img-fluid"
              loading="lazy"
            />
            <p class="mentors-about__name">{{ mentor.name }}</p>
          </div>
        </div>
      </div>
    </div>
    <p class="mentors-section__information__footer__text">
      {{ t('aboutMentors.firstStep') }}
    </p>
    <div class="mentors-section__information__footer">
      <img
        src="/public/images/eagle.webp"
        class="mentors-section__information__footer__eagle-image img-fluid"
        loading="lazy"
      />
    </div>
  </div>
</template>
