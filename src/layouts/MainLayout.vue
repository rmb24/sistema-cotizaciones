<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="las la-bars"
          aria-label="Menu"
          class="text-white"
          @click="toggleLeftDrawer"
        />
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="drawer-content"
    >
      <div class="drawer-header">
        <q-avatar>
          <img
            src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg"
            alt="Quasar Logo"
          />
        </q-avatar>
        <div class="user-info">
          <q-item-label header class="text-grey-9">Usuario</q-item-label>
          <q-item-label caption>usuario@ejemplo.com</q-item-label>
        </div>
      </div>

      <q-scroll-area class="fit">
        <q-list padding>
          <EssentialLink
            v-for="link in menuLinks"
            :key="link.title"
            v-bind="link"
          />
        </q-list>
      </q-scroll-area>
    </q-drawer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import EssentialLink from 'components/EssentialLink.vue';

const menuLinks = [
  {
    title: 'Inicio',
    caption: 'Página de inicio',
    icon: 'las la-home',
    link: '/',
  },
  {
    title: 'Clientes',
    caption: 'Administrar clientes',
    icon: 'las la-users',
    link: '/clients',
  },
  {
    title: 'Materiales',
    caption: 'Administrar materiales',
    icon: 'las la-cubes',
    link: '/materiales',
  },
  {
    title: 'Cotizaciones',
    caption: 'Realizar cotizaciones',
    icon: 'las la-file-invoice-dollar',
    link: '/cotizaciones',
  },
  {
    title: 'Histonal',
    caption: 'Historial de cotizaciones',
    icon: 'las la-history',
    link: '/historial',
  },
];

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink,
  },

  setup() {
    const leftDrawerOpen = ref(false);

    const toggleLeftDrawer = () => {
      leftDrawerOpen.value = !leftDrawerOpen.value;
    };

    return {
      menuLinks: menuLinks,
      leftDrawerOpen,
      toggleLeftDrawer,
    };
  },
});
</script>
<style scoped>
/* Estilos específicos para este componente */
.drawer-content {
  background-color: #f5f5f5;
}

.drawer-header {
  padding: 20px;
  display: flex;
  align-items: center;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.user-info {
  margin-left: 15px;
}

.user-info .q-item-label {
  margin: 0;
  font-weight: bold;
}

.q-list > .q-item {
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.q-list > .q-item:hover {
  background-color: #ebebeb;
}

.q-list > .q-item > .q-item-section:first-child {
  margin-right: 10px;
}

.q-list > .q-item > .q-item-section:last-child {
  flex: 1;
}

.q-item-section {
  display: flex;
  align-items: center;
}

.q-item-section .q-item-label {
  margin: 0;
}
</style>
