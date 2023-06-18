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

      <q-list padding>
        <EssentialLink
          v-for="link in menuLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>

      <div class="drawer-footer">
        <q-item class="logout-link" clickable>
          <q-item-section avatar>
            <q-icon name="las la-sign-out-alt" class="logout-icon" />
          </q-item-section>
          <q-item-section>
            <q-item-label class="logout-label">Cerrar sesión</q-item-label>
          </q-item-section>
        </q-item>
      </div>
    </q-drawer>
    <q-page-container>
      <transition
        enter-active-class="animated slideInLeft"
        leave-active-class=" animated slideOutLeft"
        mode="out-in"
        appear
      >
        <router-view />
      </transition>
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
    link: '/home',
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
    link: '/materials',
  },
  {
    title: 'Cotizaciones',
    caption: 'Realizar cotizaciones',
    icon: 'las la-file-invoice-dollar',
    link: '/orders',
  },
  {
    title: 'Historial',
    caption: 'Historial de cotizaciones',
    icon: 'las la-history',
    link: '/history',
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
  font-size: 16px;
  color: #333333;
}

.q-item-section .q-item-caption {
  margin: 0;
  font-size: 14px;
  color: #999999;
}

.q-item-section .q-item-icon {
  margin-right: 10px;
  font-size: 20px;
  color: #999999;
}

.q-item-section .q-item-icon svg {
  vertical-align: middle;
}

.q-item-section .q-item-icon + .q-item-label,
.q-item-section .q-item-icon + .q-item-caption {
  margin-left: 10px;
}

.q-item-separator {
  margin-top: 10px;
  margin-bottom: 10px;
  border-top: 1px solid #ebebeb;
}

.logout-link {
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.logout-link:hover {
  background-color: #ebebeb;
}

.logout-icon {
  font-size: 20px;
  color: #999999;
}

.logout-label {
  margin: 0;
  font-size: 16px;
  color: #333333;
}

.drawer-footer {
  position: absolute;
  bottom: 20px;
  left: 0;
  right: 0;
  padding: 10px 20px;
  background-color: #f5f5f5;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.5s;
}

.slide-enter,
.slide-leave-to {
  transform: translateX(100%);
}
</style>
