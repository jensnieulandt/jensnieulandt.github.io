export default defineNuxtConfigSchema({
  appConfig: {
    /** Default OG image path */
    cover: '/cover.jpg',
    /**
     * Social media icons displayed in the navbar
     */
    socials: {
      /**
       * Twitter handle
       *
       * @example 'jensnieulandt'
       * @studioIcon simple-icons:twitter
       * */
      twitter: '',
      /**
       * LinkedIn profile
       *
       * @example 'jens-nieulandt'
       * @studioIcon simple-icons:linkedin
       * */
      linkedin: '',
      /**
       * Github repository name
       * @example 'nuxt/framework'
       * @studioIcon simple-icons:github
       * */
      github: '',
    },
  },
})
