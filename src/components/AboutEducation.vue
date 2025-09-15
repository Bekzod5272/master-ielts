<script lang="ts" setup>
  import {
    dataVideoLinksFirst,
    dataVideoLinksSecond,
    dataVideoLinksEvenFour,
    dataVideoLinksEvenThree,
    dataVideoLinksEvenFive,
  } from '@/constants/video-links'
  import { useI18n } from 'vue-i18n'
  import { Vue3Marquee } from 'vue3-marquee'

  const imgUrls = dataVideoLinksFirst.map((item) => item.path)
  const { t } = useI18n()
</script>
<template>
  <div class="about-education-main main-container">
    <div class="about-education-box container">
      <div class="about-education-header">
        <div class="about-education-main__img">
          <img
            src="/public/images/master-ielts-word.webp"
            class="img-fluid"
            loading="lazy"
          />
        </div>
        <div class="about-education-title">
          <p>
            {{ t('aboutEducation.title') }}
          </p>
        </div>
      </div>
      <div class="about-education">
        <div class="about-education__content">
          <div class="grid-container">
            <div class="grid-container__column">
              <Vue3Marquee
                style="width: 100% !important"
                :pause-on-hover="true"
                :vertical="true"
                :speed="100"
              >
                <div
                  v-for="(item, index) in dataVideoLinksFirst"
                  :key="index"
                >
                  <a
                    :href="item.url"
                    target="_blank"
                  >
                    <img
                      :src="item.path"
                      :alt="'Image ' + (index + 1)"
                      class="img-fluid"
                      loading="lazy"
                    />
                  </a>
                </div>
              </Vue3Marquee>
            </div>
            <div class="grid-container__column">
              <Vue3Marquee
                style="width: 100% !important"
                :pause-on-hover="true"
                :vertical="true"
                :speed="100"
              >
                <div
                  v-for="(item, index) in dataVideoLinksSecond"
                  :key="index"
                >
                  <a
                    :href="item.url"
                    target="_blank"
                  >
                    <img
                      :src="item.path"
                      :alt="'Image ' + (index + 1)"
                      class="img-fluid"
                      loading="lazy"
                    />
                  </a>
                </div>
              </Vue3Marquee>
            </div>
            <div class="grid-container__column">
              <Vue3Marquee
                style="width: 100% !important"
                :pause-on-hover="true"
                :vertical="true"
                :speed="100"
              >
                <div
                  v-for="(item, index) in dataVideoLinksEvenThree"
                  :key="index"
                >
                  <a
                    :href="item.url"
                    target="_blank"
                  >
                    <img
                      :src="item.path"
                      :alt="'Image ' + (index + 1)"
                      class="img-fluid"
                      loading="lazy"
                    />
                  </a>
                </div>
              </Vue3Marquee>
            </div>
            <div class="grid-container__column">
              <Vue3Marquee
                style="width: 100% !important"
                :pause-on-hover="true"
                :vertical="true"
                :speed="100"
              >
                <div
                  v-for="(item, index) in dataVideoLinksEvenFour"
                  :key="index"
                >
                  <a
                    :href="item.url"
                    target="_blank"
                  >
                    <img
                      :src="item.path"
                      :alt="'Image ' + (index + 1)"
                      class="img-fluid"
                      loading="lazy"
                    />
                  </a>
                </div>
              </Vue3Marquee>
            </div>
            <div class="grid-container__column">
              <Vue3Marquee
                style="width: 100% !important"
                :pause-on-hover="true"
                :vertical="true"
                :speed="100"
              >
                <div
                  v-for="(item, index) in dataVideoLinksEvenFive"
                  :key="index"
                >
                  <a
                    :href="item.url"
                    target="_blank"
                  >
                    <img
                      :src="item.path"
                      :alt="'Image ' + (index + 1)"
                      class="img-fluid"
                      loading="lazy"
                    />
                  </a>
                </div>
              </Vue3Marquee>
            </div>
          </div>
          <div class="about-education__content__footer-img">
            <img
              src="/public/images/master-ielts-natijalar.webp"
              class="about-education__content__img img-fluid"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
