<template>
  <v-app>
    <!-- Бокове меню -->
    <v-navigation-drawer v-model="drawer" app width="250">
      <v-list>
        <!-- Заголовок меню -->
        <div class="drawer-header">
          <div class="app-title">APPLICATION</div>
          <div class="divider-line"></div>
          <div class="app-subtitle">Vuetify</div>
        </div>

        <v-divider class="my-2"></v-divider>

        <!-- Пункти меню -->
        <v-list-item to="/about" class="pa-2">
          <v-list-item-title class="list">List</v-list-item-title>
        </v-list-item>

        <v-list-item to="/contacts" class="pa-2">
          <v-list-item-title class="list">Contact</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>


    <!-- Верхня панель -->
    <v-app-bar app>
      <v-btn @click="drawer = !drawer" color="primary">
        <v-icon left>mdi-menu</v-icon>
        Меню
      </v-btn>
      <v-app-bar-title>Application</v-app-bar-title>
    </v-app-bar>

    <!-- Основний контент -->
    <v-main>
      
    </v-main>
  </v-app>
</template>

<script setup>
import { ref } from 'vue'

// Стан бокового меню
const drawer = ref(false)
</script>
<style scoped>
.drawer-header {
  padding: 10px 24px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.app-title {
  font-size: 15px;
  text-transform: uppercase;
  margin-bottom: 1px;
}

.app-subtitle {
  font-size: 12px;
  color: #888;

}
.divider-line {
  width: 100%;
  height: 1px;
  background-color: #ccc;
  margin: 4px 0;
}

.pa-2 {
  display: block; /* Робимо кожен елемент блочним */
  padding: 30px 16px;
}

.list {
  font-size: 20px;
  font-weight: 500;
  text-align: left; /* Вирівнювання по лівому краю */
}

</style>




