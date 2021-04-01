<template>
  <div class="search-all">
      <ExperienceList/>
  </div>
</template>

<script>
import ExperienceList from '@/components/search-all/experience-list/experience-list.vue';

export default {
  name: 'SearchAll',
  components: {
      ExperienceList
  }
}
</script>
