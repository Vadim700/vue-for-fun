<template>
  <div class="flex flex-col gap-10">
    <div class="relative text-xl max-h-200 overflow-hidden">
      <h1
        class="text-8xl text-center text-white uppercase font-bold absolute left-[50%] top-[50%] w-full -translate-[50%]"
      >
        scroll animation on CSS
      </h1>
      <img src="../../assets/ice.jpg" class="object-cover object-center" alt="Image" />
    </div>

    <div class="flex items-center justify-center gap-10 text-4xl">
      <div class="">Scroll rotate</div>
      <figure>
        <img
          src="../../assets/sun.png"
          class="w-50 autoRotate aspect-square object-cover border test"
          alt="Image"
        />
      </figure>
      <div class="">animation</div>
    </div>

    <div class="text-xl flex flex-col gap-5">
      <div class="max-w-[70%]">
        <h2 class="text-2xl mb-4">Lorem ipsum dolor sit amet.</h2>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas incidunt provident non
        numquam iusto doloribus quidem vel blanditiis quia velit deleniti fugit nostrum ratione cum,
        perspiciatis eos assumenda dolore possimus aperiam? Adipisci facere eos voluptatum id
        consequuntur cupiditate autem dolores consequatur voluptas, at aliquid pariatur beatae amet
        tempora, totam laudantium nostrum quae doloremque enim quos dolorem aliquam quia modi dicta.
      </div>
      <div class="max-w-[60%] self-end text-end text-j overflow-hidden">
        <h2 class="text-2xl mb-4 autoShow">Lorem ipsum dolor sit amet.</h2>
        <img
          src="../../assets/ice-2.jpg"
          class="max-h-20 w-full object-cover object-bottom rounded-xl mb-4"
          alt="Image"
        />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto tenetur culpa
        consequuntur. Impedit laborum ea molestiae nesciunt necessitatibus commodi, ipsa dignissimos
        ullam in reprehenderit soluta aspernatur est qui rerum amet libero dolor, similique
        doloribus recusandae saepe quam repellendus natus provident voluptas. Laborum, quod nihil
        dolorum accusantium facere debitis quibusdam voluptas porro veritatis dolores tempora
        maiores totam nemo voluptate recusandae? Excepturi?
      </div>
      <div class="max-w-[70%]">
        <h2 class="text-2xl mb-4">Lorem ipsum dolor sit amet.</h2>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias magnam sequi eaque esse
        repellat molestias, explicabo ad veniam placeat error quibusdam? Atque officia vitae iure
        rem consequuntur. Delectus aliquid expedita consequatur beatae nostrum assumenda iste
        explicabo quis, qui repellendus ipsa? Minus dignissimos iusto repudiandae ipsa, quos,
        dolores illum perspiciatis fugit nostrum iste magni laborum beatae?
      </div>
      <div class="max-w-[60%] self-end text-end text-j overflow-hidden">
        <h2 class="text-2xl mb-4">Lorem ipsum dolor sit amet.</h2>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto tenetur culpa
        consequuntur. Impedit laborum ea molestiae nesciunt necessitatibus commodi, ipsa dignissimos
        ullam in reprehenderit soluta aspernatur est qui rerum amet libero dolor, similique
        doloribus recusandae saepe quam repellendus natus provident voluptas. Laborum, quod nihil
        dolorum accusantium facere debitis quibusdam voluptas porro veritatis dolores tempora
        maiores totam nemo voluptate recusandae? Excepturi?
      </div>
      <div class="max-w-[70%]">
        <h2 class="text-2xl mb-4">Lorem ipsum dolor sit amet.</h2>
        <figure>
          <img
            src="../../assets/ice-2.jpg"
            class="max-h-20 w-full object-cover object-bottom rounded-xl mb-4"
            alt="Image"
          />
        </figure>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias magnam sequi eaque esse
        repellat molestias, explicabo ad veniam placeat error quibusdam? Atque officia vitae iure
        rem consequuntur. Delectus aliquid expedita consequatur beatae nostrum assumenda iste
        explicabo quis, qui repellendus ipsa? Minus dignissimos iusto repudiandae ipsa, quos,
        dolores illum perspiciatis fugit nostrum iste magni laborum beatae?
      </div>
    </div>
    <div class="h-[78vh] text-8xl uppercase text-center">
      <span class="inline-block pl-40">Lorem</span><br />
      <span class="inline-block pr-60">ipsum</span><br />
      <span class="inline-block pl-80">dolor</span><br />
      <span class="inline-block pr-30">sit</span><br />
      <span class="inline-block pl-50">amet</span><br />
      <span class="inline-block pr-50">consectetur</span><br />
      <span class="inline-block pl-30">adispanisicing</span><br />
      <span class="inline-block pr-50">elit</span>
    </div>
    <div class="py-8 h-[60vh] flex justify-between gap-8 border-t">
      <p class="flex-1 basis-1/3 text-justify">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit veritatis aspernatur
        corrupti consequatur quas pariatur ut eos? Voluptas voluptates nostrum qui sit, sequi
        provident cupiditate natus quaerat quo libero mollitia, officiis odit facilis eveniet quis
        inventore repellat pariatur quisquam exercitationem?
      </p>
      <p class="flex-1 basis-1/3 self-center text-justify">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam velit, animi earum beatae
        molestias facere? Cupiditate rerum adipisci ex amet accusamus quasi at animi dolor
        voluptates cumque. Dolorem eligendi amet quis reiciendis atque eius itaque facilis maiores,
        beatae, pariatur voluptatem.
      </p>
      <p class="flex-1 basis-1/3 self-end text-justify">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima animi doloremque sequi
        reiciendis vitae tempore optio a eius voluptates veniam, maxime eum nesciunt dolorum
        adipisci enim facilis ab ducimus beatae minus deleniti. Praesentium officiis quod, impedit
        odio minus eveniet nihil!
      </p>
    </div>
  </div>
</template>

<style scoped>
.autoRotate {
  animation: autoRotateAnimation;
  animation-timeline: view();
}

.autoShow {
  animation: autoShowAnimation;
  animation-timeline: view(auto auto);
}

.test{
  border-top-right-radius: 80px;
  corner-shape: notch;
}

@keyframes autoRotateAnimation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes autoShowAnimation {
  from {
    opacity: 0;
    transform: translateY(200px) scale(0.3);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}
</style>


