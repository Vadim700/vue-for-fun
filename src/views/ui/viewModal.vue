<template>
  <div class="grid grid-rows-[auto_1fr]">
    <h2 class="text-3xl mb-4 text-center">Modal</h2>

    <button
      @click="openModal = true"
      class="rounded-sm bg-blue-400 hover:bg-blue-500 transition-colors px-8 py-2 uppercase cursor-pointer text-white m-auto"
    >
      Open modal
    </button>

    <Modal :open="openModal" @close="openModal = false">
      <template #header>Auth</template>
      <form action="#" @submit.prevent>
        <div class="mb-4 grid grid-rows-2">
          <label for="name" class="uppercase">Name</label>
          <input type="text" id="name" class="border border-zinc-400 rounded-sm" />
        </div>
        <div class="mb-10 grid grid-rows-2">
          <label for="mail" class="uppercase">Email</label>
          <input type="text" id="mail" class="border border-zinc-400 rounded-sm" />
        </div>
        <button
          @click="openModal = false"
          class="uppercase bg-blue-400 px-10 py-2 text-md text-white w-full rounded-sm hover:bg-blue-500 cursor-pointer transition-colors"
        >
          Submit
        </button>
      </form>
    </Modal>
  </div>

  <Tabs :html :css />
</template>

<script setup>
import Modal from '@/components/modals/vModal.vue'
import { ref } from 'vue'
import Tabs from '@/components/shared/vTabs.vue'

const openModal = ref(false)

const html = `
<div class="modal" id="modal">
   <div class="modal__body">
      <div class="modal__inner">
         <button id="modal-close" class="modal__close">
            <svg>
               <use href="../assets/images/sprite.svg#close-popup"></use>
            </svg>
         </button>
         <h3 class="modal__title">Modal title</h3>
         <div class="modal__content">
            <form action="#">
               <div class="formgroup">
                  <label for="input" class="formgroup__label">NAME</label>
                  <div class="formgroup__wrapper">
                     <input class="formgroup__input input" type="text" placeholder="Placeholder">
                     <svg class="formgroup__icon formgroup__icon_success">
                        <use href="../../assets/images/sprite.svg#success"></use>
                     </svg>
                     <svg class="formgroup__icon formgroup__icon_error">
                        <use href="../../assets/images/sprite.svg#error"></use>
                     </svg>
                  </div>
               </div>
               <div class="formgroup">
                  <label for="input" class="formgroup__label">EMAIL</label>
                  <div class="formgroup__wrapper">
                     <input class="formgroup__input input" type="text" placeholder="Placeholder">
                     <svg class="formgroup__icon formgroup__icon_success">
                        <use href="../../assets/images/sprite.svg#success"></use>
                     </svg>
                     <svg class="formgroup__icon formgroup__icon_error">
                        <use href="../../assets/images/sprite.svg#error"></use>
                     </svg>
                  </div>
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
   bottom: 0;
   right: 0;
   top: 0;
   left: 0;
   background-color: rgba(0, 0, 0, .4);
}
.modal_preview {
   display: block;
   position: relative;
   background-color: var(--white);
   text-align: left;
   padding: 20px;
   background: rgba(0, 0, 0, .15);
   pointer-events: none;
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
   font-family: 'Inter', sans-serif;
}
.modal__inner_review {
   padding: 15px;
}
.modal__close {
   display: block;
   position: absolute;
   top: 15px;
   right: 15px;
   cursor: pointer;
   line-height: 1;
   border: none;
   background: var(--white);
}
.modal__close svg {
   display: block;
   width: 16px;
   height: 16px;

}
.modal__title {
   margin: 0;
   margin-bottom: 14px;
   font-size: 20px;
   line-height: 1.2;
   font-weight: 600;
   color: var(--black-blue);
}
.modal__content {
   font-size: 16px;
   line-height: 1.5;
   font-weight: 400;
   color: var(--grey-4)
}
`
</script>
