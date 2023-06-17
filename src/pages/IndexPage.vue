<template>
  <q-page class="row items-center justify-evenly">
    <div class="text-center">
      <h1 class="text-h4">Bienvenido al sistema de cotizaciones de herrería</h1>
      <p class="text-subtitle1">
        Realiza cotizaciones de forma eficaz y rápida
      </p>
      <q-btn
        class="q-mt-lg"
        color="primary"
        label="Crear Cotización"
        @click="createQuotation"
        icon="las la-plus-circle"
        size="lg"
      />
    </div>
    <div>
      <q-table
        :rows="quotationData"
        :columns="quotationColumns as any"
        row-key="id"
        flat
        dense
        class="q-mt-lg"
      >
        <template v-slot:top-left>
          <q-checkbox v-model="selectAll" color="primary" dense />
        </template>
        <template v-slot:body-cell-actions="props">
          <q-td key="actions" :props="props">
            <div class="q-gutter-md">
              <q-btn
                flat
                round
                dense
                icon="las la-eye"
                @click="viewQuotation(props.row)"
                class="q-mr-sm"
              />
              <q-btn
                flat
                round
                dense
                icon="las la-edit"
                @click="editQuotation(props.row)"
                class="q-mr-sm"
              />
              <q-btn
                flat
                round
                dense
                icon="las la-trash"
                @click="deleteQuotation(props.row)"
              />
            </div>
          </q-td>
        </template>
      </q-table>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'IndexPage',
  setup() {
    const quotationData = ref([
      { id: 1, customer: 'Cliente 1', amount: 500 },
      { id: 2, customer: 'Cliente 2', amount: 800 },
      { id: 3, customer: 'Cliente 3', amount: 1200 },
      { id: 4, customer: 'Cliente 4', amount: 1500 },
      { id: 5, customer: 'Cliente 5', amount: 2000 },
    ]);

    const quotationColumns = [
      {
        name: 'customer',
        required: true,
        label: 'Cliente',
        align: 'left',
        field: 'customer',
        sortable: true,
      },
      {
        name: 'amount',
        required: true,
        label: 'Monto',
        align: 'left',
        field: 'amount',
        sortable: true,
      },
      { name: 'actions', label: 'Acciones', align: 'center', field: 'id' },
    ];
    const selectAll = ref(false);

    const createQuotation = () => {
      // Lógica para crear una cotización
    };

    const viewQuotation = (quotation: number) => {
      console.log(quotation);
    };

    const editQuotation = (quotation: number) => {
      console.log(quotation);
    };

    const deleteQuotation = (quotation: number) => {
      console.log(quotation);
    };

    return {
      quotationData,
      quotationColumns,
      selectAll,
      createQuotation,
      viewQuotation,
      editQuotation,
      deleteQuotation,
    };
  },
});
</script>

<style scoped>
.text-h4 {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
}

.text-subtitle1 {
  font-size: 16px;
  color: #666;
}

.q-mt-lg {
  margin-top: 24px;
}

.q-mr-sm {
  margin-right: 8px;
}

.q-gutter-md {
  margin: -8px;
}

.q-gutter-md > * {
  margin: 8px;
}
</style>
