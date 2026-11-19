<template>
  <section>
    <header class="mb-8">
      <p class="eyebrow">UI · Container</p>
      <h2 class="page-title mt-1 text-2xl sm:text-3xl">Modal</h2>
      <p class="page-subtitle">
        A modal built on Teleport: it locks page scrolling, closes on Escape and returns focus to
        the trigger.
      </p>
    </header>

    <div class="card grid place-items-center px-6 py-14">
      <button type="button" class="btn btn-primary" @click="openModal = true">Open modal</button>
    </div>

    <Modal :open="openModal" aria-label="Auth form" @close="openModal = false">
      <template #header>Auth</template>

      <form class="space-y-4" @submit.prevent="openModal = false">
        <label class="block">
          <span class="text-ink-soft mb-1 block text-xs font-extrabold uppercase">Name</span>
          <input
            type="text"
            class="w-full rounded-xl border border-zinc-300 px-3 py-2 text-sm outline-none focus:border-amber-500"
          />
        </label>

        <label class="block">
          <span class="text-ink-soft mb-1 block text-xs font-extrabold uppercase">Email</span>
          <input
            type="email"
            class="w-full rounded-xl border border-zinc-300 px-3 py-2 text-sm outline-none focus:border-amber-500"
          />
        </label>

        <button type="submit" class="btn btn-primary mt-2 w-full">Submit</button>
      </form>
    </Modal>

    <Tabs :html :css />
  </section>
</template>

<script setup>
import { ref } from 'vue'
import Modal from '@/components/modals/vModal.vue'
import Tabs from '@/components/shared/vTabs.vue'

const openModal = ref(false)

const html = `
<div class="modal" id="modal">
   <div class="modal__body">
      <div class="modal__inner">
         <button id="modal-close" class="modal__close">
            <svg><use href="/assets/images/sprite.svg#close-popup"></use></svg>
         </button>
         <h3 class="modal__title">Modal title</h3>
         <div class="modal__content">
            <form action="#">
               <div class="formgroup">
                  <label for="input" class="formgroup__label">NAME</label>
                  <input class="formgroup__input input" type="text" placeholder="Placeholder">
               </div>
               <button type="submit" class="button button_primary">Submit</button>
            </form>
         </div>
      </div>
   </div>
</div>
`

const css = `
.modal {
   display: none;
   position: fixed;
   inset: 0;
   background-color: rgba(0, 0, 0, .4);
}
.modal__body {
   position: absolute;
   top: 50%;
   left: 50%;
   transform: translate(-50%, -50%);
}
.modal__inner {
   max-width: 428px;
   padding: 30px 40px 33px;
   position: relative;
   background: var(--white);
   border-radius: 8px;
}
.modal__close {
   position: absolute;
   top: 15px;
   right: 15px;
   cursor: pointer;
   border: none;
   background: var(--white);
}
.modal__title {
   margin: 0 0 14px;
   font-size: 20px;
   line-height: 1.2;
   font-weight: 600;
   color: var(--black-blue);
}
`
</script>
