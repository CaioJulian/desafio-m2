<template>
  <div id="app">
    <div id="nav">
      <h4 class="text-center pt-4">Operadora Brasil</h4>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
@import "bootstrap";

$new-color: purple;

.text-primary {
  color: $new-color !important;
}
.btn-primary {
  @include button-variant(
    $new-color,
    darken($new-color, 7.5%),
    darken($new-color, 10%),
    lighten($new-color, 5%),
    lighten($new-color, 10%),
    darken($new-color, 30%)
  );
}
a.btn.btn-white.active-selected {
  background-color: $new-color;
  color: #ffff;
}
a.btn.btn-white.active-selected:hover {
  color: #ffff;
}
a.text-muted.small.active-selected {
  color: #ffff !important;
}
</style>
