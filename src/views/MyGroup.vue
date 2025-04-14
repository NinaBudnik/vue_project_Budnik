<template>
  <v-container>
    <!-- Форма для додавання або редагування студента -->
    <v-form v-model="formValid">
      <v-row>
        <v-col cols="12" md="3">
          <v-text-field v-model="newStudent.name" label="ПІП" :rules="[rules.required]" required></v-text-field>
        </v-col>
        <v-col cols="12" md="3">
          <v-text-field v-model="newStudent.birthYear" label="Рік народження" :rules="[rules.required, rules.year]" required></v-text-field>
        </v-col>
        <v-col cols="12" md="3">
          <v-text-field v-model="newStudent.phone" label="Телефон" :rules="[rules.required, rules.phone]" required></v-text-field>
        </v-col>
        <v-col cols="12" md="3">
          <v-text-field v-model="newStudent.email" label="Email" :rules="[rules.required, rules.email]" required></v-text-field>
        </v-col>
      </v-row>

      <!-- Кнопки: Додати або Оновити -->
      <v-btn color="primary" v-if="!isEditing" @click="addStudent" :disabled="!formValid">Додати студента</v-btn>
      <v-btn color="success" v-else @click="updateStudent" :disabled="!formValid">Оновити</v-btn>
      <v-btn color="grey" v-if="isEditing" @click="cancelEdit">Скасувати</v-btn>
    </v-form>

    <!-- Пошук по таблиці -->
    <v-text-field v-model="search" label="Пошук" append-icon="mdi-magnify"></v-text-field>

    <!-- Таблиця з даними -->
    <v-data-table
      v-model:items-per-page="itemsPerPage"
      :headers="headers"
      :items="filteredStudents"
      item-key="name"
      :search="search"
    >
      <template v-slot:item.actions="{ item }">
        <v-btn variant="text" color="primary" @click="editStudent(item)" size="small">Редагувати</v-btn>
        <v-btn variant="text" color="error" @click="deleteStudent(item)" size="small">Видалити</v-btn>
      </template>

      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>Моя група</v-toolbar-title>
        </v-toolbar>
      </template>
    </v-data-table>
  </v-container>
</template>

<script>
export default {
  name: "GroupPage",
  data() {
    return {
      search: "",
      formValid: false,
      isEditing: false,
      editingIndex: null,
      newStudent: {
        name: "",
        birthYear: "",
        phone: "",
        email: "",
      },
      students: [
        { name: "Іванов Іван Іванович", birthYear: "1995", phone: "123456789", email: "ivanov@mail.com" },
        { name: "Петров Петро Петрович", birthYear: "1997", phone: "987654321", email: "petrov@mail.com" },
      ],
      headers: [
        { text: "ПІП", value: "name" },
        { text: "Рік народження", value: "birthYear" },
        { text: "Телефон", value: "phone" },
        { text: "Email", value: "email" },
        { text: "Дії", value: "actions", sortable: false },
      ],
      itemsPerPage: 5,
      rules: {
        required: (v) => !!v || "Це поле обов'язкове",
        email: (v) => /.+@.+\..+/.test(v) || "Введіть коректну електронну пошту",
        phone: (v) => /^(\+?\d{1,3}[-\s]?)?\(?\d{2,3}\)?[-\s]?\d{3}[-\s]?\d{2}[-\s]?\d{2}$/.test(v) || "Невірний формат телефону",
        year: (v) => /^\d{4}$/.test(v) || "Введіть правильний рік народження",
      },
    };
  },
  computed: {
    filteredStudents() {
      return this.students.filter(
        (student) =>
          student.name.toLowerCase().includes(this.search.toLowerCase()) ||
          student.birthYear.includes(this.search) ||
          student.phone.includes(this.search) ||
          student.email.toLowerCase().includes(this.search.toLowerCase())
      );
    },
  },
  methods: {
    addStudent() {
      if (this.formValid) {
        this.students.push({ ...this.newStudent });
        this.resetForm();
      }
    },
    editStudent(student) {
      this.isEditing = true;
      this.editingIndex = this.students.indexOf(student);
      this.newStudent = { ...student };
    },
    updateStudent() {
      if (this.editingIndex !== null && this.formValid) {
        this.students.splice(this.editingIndex, 1, { ...this.newStudent });
        this.resetForm();
      }
    },
    cancelEdit() {
      this.resetForm();
    },
    deleteStudent(student) {
      const index = this.students.indexOf(student);
      if (index !== -1) {
        this.students.splice(index, 1);
      }
      if (this.isEditing && this.editingIndex === index) {
        this.resetForm(); // Якщо видалили того, кого редагували
      }
    },
    resetForm() {
      this.newStudent = { name: "", birthYear: "", phone: "", email: "" };
      this.isEditing = false;
      this.editingIndex = null;
      this.formValid = false;
    },
  },
};
</script>

<style scoped>
.v-form {
  margin-bottom: 20px;
}

.v-text-field {
  margin-bottom: 15px;
}
</style>
