<template>
  <div class="contactUs">
    <h1>Contacts</h1>
    <div
      v-for="contact in contacts"
      :key="contact.phone"
      :email="contact.email"
    >
      <p>
        Tel : {{ contact.phone }} <br />
        Email: {{ contact.email }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "contactUs",
  data() {
    return {
      contacts: [
        { phone: "+372 555 6942", email: "bigenergy@mail.com" },
        { phone: "+372 555 3621", email: "yoloswag@fastmail.com" },
        { phone: "+372 555 8391", email: "gobigorgohome@weebmail.com" },
      ],
    };
  },
};
</script>
