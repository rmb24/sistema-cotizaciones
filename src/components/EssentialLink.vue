<template>
  <q-item clickable tag="a" :to="link">
    <q-item-section v-if="icon" avatar>
      <q-icon :name="icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label class="essential-link-title">{{ title }}</q-item-label>
      <q-item-label caption class="essential-link-caption">{{
        caption
      }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'EssentialLink',
  props: {
    title: {
      type: String,
      required: true,
    },

    caption: {
      type: String,
      default: '',
    },

    link: {
      type: String,
      default: '#',
    },

    icon: {
      type: String,
      default: '',
    },
  },
});
</script>

<style lang="scss" scoped>
.essential-link {
  padding: 10px;
  transition: background-color 0.3s;
  border-radius: 5px;
  cursor: pointer;
}

.essential-link:hover {
  background-color: #f5f5f5;
}

.essential-link-icon {
  font-size: 18px;
  color: #333333;
  margin-right: 10px;
}

.essential-link-title {
  font-size: 16px;
  color: #333333;
  font-weight: bold;
}

.essential-link-caption {
  font-size: 14px;
  color: #666666;
}

.essential-link-caption + .essential-link-caption {
  margin-top: 5px;
}
</style>
