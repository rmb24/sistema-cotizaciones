<template>
  <div>
    <div class="search-bar">
      <q-input
        v-model="searchQuery"
        filled
        dense
        placeholder="Buscar materiales"
        class="search-input"
        clearable
        @clear="clearSearch"
      >
        <template #append>
          <q-icon name="las la-search" class="search-icon" />
        </template>
      </q-input>
    </div>

    <div class="filter-bar">
      <q-select
        v-model="selectedCategory"
        filled
        dense
        :options="categories"
        label="Filtrar por categoría"
        class="category-filter"
        emit-value
        map-options
      >
        <template #prepend>
          <q-icon name="las la-filter" class="filter-icon" />
        </template>
      </q-select>
    </div>

    <div class="material-list">
      <q-card
        v-for="material in filteredMaterials"
        :key="material.id"
        class="material-card"
      >
        <q-card-section class="material-card-content">
          <div class="material-image">
            <img :src="material.image" :alt="material.name" />
          </div>
          <div class="material-details">
            <div class="material-name">{{ material.name }}</div>
            <div class="material-category">{{ material.category }}</div>
          </div>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MaterialsPage',

  data() {
    return {
      searchQuery: '',
      selectedCategory: '',
      materials: [
        {
          id: 1,
          name: 'Solera de acero',
          category: 'Perfiles de acero',
          image:
            'https://images.pexels.com/photos/5676470/pexels-photo-5676470.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        },
        {
          id: 2,
          name: 'Tubo cuadrado de acero',
          category: 'Perfiles de acero',
          image:
            'https://images.pexels.com/photos/1544943/pexels-photo-1544943.jpeg',
        },
        {
          id: 3,
          name: 'Martillo de herrería',
          category: 'Herramientas de herrería',
          image:
            'https://images.pexels.com/photos/3680095/pexels-photo-3680095.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        },
        {
          id: 4,
          name: 'Yunque',
          category: 'Herramientas de herrería',
          image:
            'https://images.pexels.com/photos/8489873/pexels-photo-8489873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        },
        {
          id: 5,
          name: 'Hoja de sierra para metal',
          category: 'Herramientas de herrería',
          image:
            'https://images.pexels.com/photos/7492884/pexels-photo-7492884.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        },
        {
          id: 6,
          name: 'Barra de hierro forjado',
          category: 'Forja',
          image: 'ruta/imagen-barra-forjado.jpg',
        },
        {
          id: 7,
          name: 'Puntas decorativas para rejas',
          category: 'Ornamentos y elementos decorativos',
          image: 'ruta/imagen-puntas-decorativas.jpg',
        },
        {
          id: 8,
          name: 'Bisagra de acero',
          category: 'Bisagras y cerraduras',
          image: 'ruta/imagen-bisagra.jpg',
        },
        {
          id: 9,
          name: 'Cerradura de seguridad',
          category: 'Bisagras y cerraduras',
          image: 'ruta/imagen-cerradura.jpg',
        },
        {
          id: 10,
          name: 'Electrodo de soldadura',
          category: 'Soldadura y consumibles',
          image: 'ruta/imagen-electrodo.jpg',
        },
        {
          id: 11,
          name: 'Alambre de soldadura',
          category: 'Soldadura y consumibles',
          image: 'ruta/imagen-alambre-soldadura.jpg',
        },
        {
          id: 12,
          name: 'Reja de acero',
          category: 'Rejas y barandillas',
          image: 'ruta/imagen-reja-acero.jpg',
        },
        {
          id: 13,
          name: 'Barandilla de hierro',
          category: 'Rejas y barandillas',
          image: 'ruta/imagen-barandilla.jpg',
        },
        {
          id: 14,
          name: 'Conector de tubo',
          category: 'Accesorios y conectores',
          image: 'ruta/imagen-conector-tubo.jpg',
        },
        // Agrega más materiales aquí...
      ],

      // categorias de materiales de herreria
      categories: [
        { label: 'Todos', value: '' },
        { label: 'Perfiles de acero', value: 'Perfiles de acero' },
        {
          label: 'Herramientas de herrería',
          value: 'Herramientas de herrería',
        },
        { label: 'Forja', value: 'Forja' },
        { label: 'Bisagras y cerraduras', value: 'Bisagras y cerraduras' },
        { label: 'Soldadura y consumibles', value: 'Soldadura y consumibles' },
        { label: 'Rejas y barandillas', value: 'Rejas y barandillas' },
        {
          label: 'Ornamentos y elementos decorativos',
          value: 'Ornamentos y elementos decorativos',
        },
        { label: 'Accesorios y conectores', value: 'Accesorios y conectores' },
        // Agrega más categorías aquí...
      ],
    };
  },

  computed: {
    filteredMaterials() {
      const query = this.searchQuery.toLowerCase().trim();
      const category = this.selectedCategory;

      if (query === '' && category === '') {
        return this.materials;
      }

      return this.materials.filter((material) => {
        const nameMatch = material.name.toLowerCase().includes(query);
        const categoryMatch = category === '' || material.category === category;

        return nameMatch && categoryMatch;
      });
    },
  },

  methods: {
    clearSearch() {
      this.searchQuery = '';
    },
  },
});
</script>

<style scoped>
.search-bar {
  padding: 20px;
  display: flex;
  justify-content: center;
}

.search-input {
  width: 400px;
  max-width: 100%;
}

.search-icon {
  font-size: 20px;
  color: #999999;
}

.filter-bar {
  padding: 20px;
  display: flex;
  justify-content: center;
}

.category-filter {
  width: 200px;
}

.filter-icon {
  font-size: 20px;
  color: #999999;
}

.material-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px;
}

.material-card {
  max-width: 300px;
  margin: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
}

.material-card:hover {
  transform: translateY(-5px);
}

.material-card-content {
  padding: 20px;
  display: flex;
  align-items: center;
}

.material-image img {
  width: 100%;
  height: auto;
  border-radius: 4px;
}

.material-details {
  margin-left: 20px;
}

.material-name {
  font-weight: bold;
}

.material-category {
  margin-top: 5px;
  font-size: 14px;
  color: #999999;
}
</style>
