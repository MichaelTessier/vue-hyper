<template>
  <div
    class="auth-layout min-h-screen flex flex-col items-center justify-center"
  >
    <div>
      <slot name="header" />
    </div>
    <div>
      <slot name="content" />
    </div>
  </div>
</template>
