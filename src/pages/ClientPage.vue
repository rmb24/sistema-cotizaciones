<template>
  <q-page class="q-pa-md">
    <div class="text-right q-mb-md">
      <q-btn
        color="primary"
        label="Agregar Cliente"
        icon="las la-plus"
        @click="showAddModal = true"
      />
    </div>
    <q-table
      :rows="clientData"
      :columns="clientColumns"
      row-key="id"
      flat
      dense
      class="q-mt-lg"
    >
      <template v-slot:body-cell-actions="props">
        <q-td key="actions" :props="props">
          <q-btn
            flat
            round
            dense
            icon="las la-eye"
            aria-label="Ver datos"
            @click="viewClient(props.row)"
            class="q-mr-sm"
          />
          <q-btn
            flat
            round
            dense
            icon="las la-trash"
            aria-label="Eliminar"
            @click="deleteClient(props.row)"
          />
        </q-td>
      </template>
    </q-table>

    <q-dialog v-model="showAddModal" persistent>
      <q-card class="q-dialog-plugin">
        <q-card-section class="q-pa-md">
          <div class="text-h6 q-mb-md">Agregar Cliente</div>
          <q-input
            v-model="newClient.name"
            label="Nombre"
            outlined
            dense
            class="q-mb-sm"
          />
          <q-input
            v-model="newClient.address"
            label="Domicilio"
            outlined
            dense
            class="q-mb-sm"
          />
          <q-input
            v-model="newClient.phone"
            label="Celular"
            outlined
            dense
            class="q-mb-sm"
          />
          <q-input
            v-model="newClient.email"
            label="Correo"
            outlined
            dense
            class="q-mb-md"
          />

          <div class="q-gutter-sm">
            <q-btn
              color="primary"
              label="Agregar"
              @click="addClient"
              dense
              class="q-mr-md"
              icon="las la-check"
            />
            <q-btn
              color="primary"
              label="Cancelar"
              @click="showAddModal = false"
              dense
              icon="las la-times"
            />
          </div>
        </q-card-section>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { Notify } from 'quasar';

export default defineComponent({
  name: 'ClientesPage',
  setup() {
    const clientData = ref([
      {
        id: 1,
        name: 'Cliente 1',
        address: 'Dirección 1',
        phone: '123456789',
        email: 'cliente1@example.com',
      },
      {
        id: 2,
        name: 'Cliente 2',
        address: 'Dirección 2',
        phone: '987654321',
        email: 'cliente2@example.com',
      },
      // ... Agrega más clientes aquí según sea necesario
    ]);

    const clientColumns = [
      {
        name: 'name',
        required: true,
        label: 'Nombre',
        align: 'left',
        field: 'name',
        sortable: true,
      },
      {
        name: 'address',
        required: true,
        label: 'Domicilio',
        align: 'left',
        field: 'address',
        sortable: true,
      },
      {
        name: 'phone',
        required: true,
        label: 'Celular',
        align: 'left',
        field: 'phone',
        sortable: true,
      },
      {
        name: 'email',
        required: true,
        label: 'Correo',
        align: 'left',
        field: 'email',
        sortable: true,
      },
      { name: 'actions', label: 'Acciones', align: 'center', field: 'id' },
    ];

    const showAddModal = ref(false);

    const newClient = ref({
      name: '',
      address: '',
      phone: '',
      email: '',
    });

    const addClient = () => {
      // Verificar si todos los campos están completos
      if (
        newClient.value.name.trim() === '' ||
        newClient.value.address.trim() === '' ||
        newClient.value.phone.trim() === '' ||
        newClient.value.email.trim() === ''
      ) {
        Notify.create({
          color: 'negative',
          message: 'Por favor, completa todos los campos.',
        });
        return;
      }

      // Lógica para agregar un cliente
      // Aquí puedes usar los datos del objeto `newClient`
      // para agregar un nuevo cliente a la lista `clientData`

      // Ejemplo:
      clientData.value.push({
        id: clientData.value.length + 1,
        name: newClient.value.name,
        address: newClient.value.address,
        phone: newClient.value.phone,
        email: newClient.value.email,
      });

      // Reiniciar los campos del nuevo cliente
      newClient.value.name = '';
      newClient.value.address = '';
      newClient.value.phone = '';
      newClient.value.email = '';

      // Cerrar el modal
      showAddModal.value = false;

      // Mostrar una notificación de éxito
      Notify.create({
        color: 'positive',
        message: 'Cliente agregado exitosamente.',
      });
    };

    const viewClient = (client: number) => {
      console.log(client);
    };

    const deleteClient = (client: number) => {
      console.log(client);
    };

    return {
      clientData,
      clientColumns,
      showAddModal,
      newClient,
      addClient,
      viewClient,
      deleteClient,
    };
  },
});
</script>

<style scoped>
.q-table .q-td .q-btn.q-mr-sm {
  margin-right: 5px;
}

.text-right {
  text-align: right;
}

.q-mb-md {
  margin-bottom: 20px;
}

.q-mt-lg {
  margin-top: 30px;
}

.q-dialog {
  max-width: 600px;
}

.q-dialog .q-card-section {
  padding-top: 0;
}

.q-dialog .q-card-section .text-h6 {
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 15px;
}

.q-dialog .q-input {
  width: 100%;
}

.q-dialog .q-gutter-sm {
  display: flex;
  justify-content: flex-end;
}
</style>
