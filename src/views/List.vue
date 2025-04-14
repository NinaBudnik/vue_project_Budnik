<template>
  <v-container class="centered-container">
    <v-row>
      <!-- Форма для додавання нового елемента в список -->
      <v-col cols="12" md="4">
        <v-text-field
          v-model="newItem"
          label="Додати новий елемент"
          @keyup.enter="addItem"
        />
      </v-col>
      <v-col cols="12" md="4">
        <v-btn color="primary" @click="addItem">Додати</v-btn>
      </v-col>
    </v-row>

    <v-list class="shopping-list-container">
      <!-- Цикл по списку покупок -->
      <div v-for="item in shoppingList" :key="item.id">
        <v-list-item @click="doneBought(item.id)" :class="{ 'blue lighten-5': item.bought }">
          <v-list-item-content>
            <v-list-item-title :class="{ 'text-decoration-line-through': item.bought }">
              {{ item.title }}
            </v-list-item-title>
          </v-list-item-content>

          <!-- Додано кнопка видалення збоку -->
          <v-list-item-action>
            <v-btn icon @click.stop="deleteItem(item.id)">
              <svg style="width:24px;height:24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path
                  fill="currentColor"
                  d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6Z"
                />
              </svg>
            </v-btn>

          </v-list-item-action>
        </v-list-item>
        <!-- Роздільник після кожного елемента -->
        <v-divider />
      </div>
    </v-list>
  </v-container>
</template>

<script>
export default {
  name: "List",
  data() {
    return {
      newItem: '', // Змінна для введення нового елемента
      shoppingList: [
        { id: 1, title: 'Молоко', bought: false },
        { id: 2, title: 'Хліб', bought: false },
        { id: 3, title: 'Яйця', bought: false }
      ]
    }
  },
  methods: {
    // Додавання нового елемента в список
    addItem() {
      if (this.newItem.trim() !== '') {
        this.shoppingList.push({
          id: this.shoppingList.length + 1,
          title: this.newItem,
          bought: false
        });
        this.newItem = ''; // Очищаємо поле вводу після додавання
      }
    },
    // Зміна статусу покупки
    doneBought(id) {
      const item = this.shoppingList.find(item => item.id === id);
      if (item) {
        item.bought = !item.bought;
      }
    },
    // Видалення елемента зі списку
    deleteItem(id) {
      this.shoppingList = this.shoppingList.filter(item => item.id !== id);
    }
  }
}
</script>

<style scoped>

.text-decoration-line-through {
  text-decoration: line-through;
}


.v-list-item-action {
  display: flex;
  justify-content: flex-end;
}


.centered-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
}


.shopping-list-container {
  max-height: 400px;
  overflow-y: auto;
  width: 500px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  background-color: white;
  padding: 16px;
}
</style>

