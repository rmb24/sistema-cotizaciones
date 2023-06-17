<template>
  <q-layout>
    <q-page-container>
      <q-page class="login-page">
        <div class="background-shapes">
          <div class="shape shape-1"></div>
          <div class="shape shape-2"></div>
          <div class="shape shape-3"></div>
        </div>
        <div class="login-container">
          <div class="login-header">
            <h1 class="login-title">¡Bienvenido!</h1>
            <p class="login-subtitle">Inicia sesión para continuar</p>
          </div>
          <q-card class="login-card">
            <q-card-section class="q-pa-md">
              <div class="form-group">
                <q-input
                  v-model="loginData.email"
                  label="Correo electrónico"
                  outlined
                  dense
                  class="q-mb-sm"
                  :rules="[
                    (val) =>
                      !!val || 'Por favor, ingresa un correo electrónico.',
                    (val) =>
                      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(
                        val
                      ) || 'Por favor, ingresa un correo electrónico válido.',
                  ]"
                />
              </div>
              <div class="form-group">
                <q-input
                  v-model="loginData.password"
                  label="Contraseña"
                  type="password"
                  outlined
                  dense
                  class="q-mb-md"
                  :rules="[
                    (val) => !!val || 'Por favor, ingresa una contraseña.',
                  ]"
                />
              </div>

              <div class="form-group">
                <q-btn
                  color="primary"
                  label="Iniciar Sesión"
                  @click="login"
                  dense
                  class="login-button"
                  icon="las la-sign-in-alt"
                />
              </div>
              <div class="form-group">
                <q-separator class="login-separator" />
                <div class="login-options">
                  <span class="login-option">¿Olvidaste tu contraseña?</span>
                  <span class="login-option">Crear una cuenta</span>
                </div>
              </div>
            </q-card-section>
          </q-card>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { Notify } from 'quasar';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'LoginPage',
  setup() {
    const router = useRouter();
    const loginData = ref({
      email: '',
      password: '',
    });

    const login = () => {
      const email = loginData.value.email.trim();
      const password = loginData.value.password;

      if (email === '' || password === '') {
        Notify.create({
          color: 'negative',
          message: 'Por favor, ingresa un correo y una contraseña válidos.',
          icon: 'las la-exclamation-circle',
        });
        return;
      }

      // Aquí puedes implementar la lógica para realizar la autenticación
      // Por ejemplo, hacer una llamada a una API para verificar las credenciales,
      // o usar un servicio de autenticación como Firebase

      // Simulación de inicio de sesión exitoso
      Notify.create({
        color: 'positive',
        message: 'Inicio de sesión exitoso.',
        icon: 'las la-check-circle',
      });

      // Redirigir al usuario a la ruta principal "/"
      router.push('/home');
    };

    return {
      loginData,
      login,
    };
  },
});
</script>

<style scoped>
.q-page.login-page {
  background-color: #f7f9fc;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  overflow: hidden;
  position: relative;
}

.background-shapes {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.shape {
  position: absolute;
  pointer-events: none;
}

.shape-1 {
  top: -50px;
  left: -50px;
  width: 200px;
  height: 200px;
  background-color: #3f51b5;
  border-radius: 50%;
  opacity: 0.2;
}

.shape-2 {
  bottom: -100px;
  right: -100px;
  width: 400px;
  height: 400px;
  background-color: #3f51b5;
  border-radius: 50%;
  opacity: 0.2;
}

.shape-3 {
  top: -100px;
  right: -50px;
  width: 150px;
  height: 150px;
  background-color: #3f51b5;
  border-radius: 50%;
  opacity: 0.2;
}

.login-container {
  max-width: 400px;
  width: 100%;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
  position: relative;
  z-index: 1;
}

.login-header {
  text-align: center;
  margin-bottom: 30px;
}

.login-title {
  font-size: 30px;
  font-weight: bold;
  color: #3f51b5;
  margin-bottom: 10px;
}

.login-subtitle {
  font-size: 16px;
  color: #616161;
  margin-bottom: 20px;
}

.login-card .q-card-section {
  padding: 20px;
}

.login-card .q-input {
  width: 100%;
}

.login-card .form-group {
  margin-bottom: 15px;
}

.login-card .login-button {
  width: 100%;
}

.login-card .login-separator {
  margin: 15px 0;
  border-color: #dcdcdc;
}

.login-card .login-options {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.login-card .login-option {
  font-size: 14px;
  color: #3f51b5;
  cursor: pointer;
  transition: color 0.3s;
}

.login-card .login-option:hover {
  color: #1a237e;
}
</style>
