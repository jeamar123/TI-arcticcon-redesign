<template>
  <Container ref="containerNew">
    <router-view></router-view>
  </Container>
</template>

<script>
import Container from "@/components/container/Container";

export default {
  name: "App",
  components: {
    Container,
  },
};
</script>
