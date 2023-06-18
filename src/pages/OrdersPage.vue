<template>
  <div class="quotation-page">
    <div class="quotation-card">
      <form @submit.prevent="calculateTotal">
        <div class="form-group">
          <label for="name">Nombre:</label>
          <input type="text" id="name" v-model="quotation.name" required />
        </div>

        <div class="form-group">
          <label for="width">Ancho (cm):</label>
          <input type="number" id="width" v-model="quotation.width" required />
        </div>

        <div class="form-group">
          <label for="height">Alto (cm):</label>
          <input
            type="number"
            id="height"
            v-model="quotation.height"
            required
          />
        </div>

        <div class="form-group">
          <label for="material">Material:</label>
          <select id="material" v-model="quotation.material" required>
            <option value="" disabled selected>Seleccione un material</option>
            <option
              v-for="material in materials"
              :key="material.id"
              :value="material"
            >
              {{ material.name }} - ${{ material.price }}
            </option>
          </select>
        </div>

        <div class="form-group">
          <button type="submit">Calcular total</button>
        </div>
      </form>

      <div v-if="quotation.total" class="total">
        <p>Total: ${{ quotation.total }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      quotation: {
        name: '',
        width: 0,
        height: 0,
        material: null,
        total: null,
      },
      materials: [
        { id: 1, name: 'Material 1', price: 10 },
        { id: 2, name: 'Material 2', price: 15 },
        { id: 3, name: 'Material 3', price: 20 },
      ],
    };
  },
  methods: {
    calculateTotal() {
      const { width, height, material } = this.quotation;
      const area = width * height;
      const totalPrice = area * material.price;
      this.quotation.total = totalPrice;
    },
  },
};
</script>

<style>
.quotation-page {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
}

h1 {
  margin-bottom: 20px;
}

.quotation-card {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: 20px;
  text-align: left;
}

label {
  display: block;
  font-weight: bold;
}

input,
select {
  width: 100%;
  padding: 10px;
  font-size: 16px;
}

button {
  padding: 10px 20px;
  background-color: #2196f3;
  color: #fff;
  font-size: 16px;
  border: none;
  cursor: pointer;
}

.total {
  margin-top: 20px;
  font-size: 18px;
  font-weight: bold;
}
</style>
