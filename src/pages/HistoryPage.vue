<template>
  <div class="quotation-history-page">
    <div v-if="quotations.length === 0" class="empty-message">
      No hay cotizaciones disponibles.
    </div>

    <ul v-else class="quotation-list">
      <li
        v-for="quotation in quotations"
        :key="quotation.id"
        class="quotation-item"
      >
        <div class="quotation-details">
          <div class="quotation-info">
            <span class="quotation-label">Nombre:</span>
            <span class="quotation-value">{{ quotation.name }}</span>
          </div>
          <div class="quotation-info">
            <span class="quotation-label">Medidas:</span>
            <span class="quotation-value"
              >{{ quotation.width }} cm x {{ quotation.height }} cm</span
            >
          </div>
          <div class="quotation-info">
            <span class="quotation-label">Material:</span>
            <span class="quotation-value">{{ quotation.material.name }}</span>
          </div>
          <div class="quotation-info">
            <span class="quotation-label">Total:</span>
            <span class="quotation-value">$ {{ quotation.total }}</span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      quotations: [
        {
          id: 1,
          name: 'Cotización 1',
          width: 100,
          height: 150,
          material: { name: 'Material 1', price: 10 },
          total: 1500,
        },
        {
          id: 2,
          name: 'Cotización 2',
          width: 80,
          height: 120,
          material: { name: 'Material 2', price: 15 },
          total: 1440,
        },
        // Add more quotations here...
      ],
    };
  },
};
</script>

<style>
.quotation-history-page {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
}

h1 {
  margin-bottom: 20px;
}

.empty-message {
  margin-top: 20px;
  font-size: 16px;
  color: #999999;
}

.quotation-list {
  list-style: none;
  padding: 0;
  margin-top: 20px;
}

.quotation-item {
  background-color: #f9f9f9;
  border-radius: 5px;
  padding: 15px;
  margin-bottom: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.quotation-details {
  display: flex;
  flex-direction: column;
}

.quotation-info {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.quotation-label {
  font-weight: bold;
  margin-right: 5px;
}

.quotation-value {
  color: #666666;
}

.quotation-value::before {
  content: '-';
  margin-right: 5px;
}

.quotation-value:last-child::before {
  content: '';
}

.quotation-value:first-child::before {
  content: '';
}

.empty-message {
  font-size: 18px;
  color: #999999;
}
</style>
