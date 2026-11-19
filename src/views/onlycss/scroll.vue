<template>
  <div class="flex flex-col gap-12">
    <header>
      <p class="eyebrow">Only CSS</p>
      <h1 class="page-title mt-2">Scroll animations</h1>
      <p class="page-subtitle">
        Scroll the page: the sun rotation and the heading reveal are tied to the scroll position via
        animation-timeline.
      </p>
    </header>

    <div class="relative max-h-[70vh] overflow-hidden rounded-2xl">
      <img
        src="../../assets/optimized/ice.jpg"
        class="h-full w-full object-cover object-center"
        alt="Blocks of blue ice"
        fetchpriority="high"
      />
      <h2
        class="absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2 px-4 text-center text-5xl font-black text-white uppercase drop-shadow-lg sm:text-7xl"
      >
        scroll animation&nbsp;on&nbsp;CSS
      </h2>
    </div>

    <div class="flex flex-wrap items-center justify-center gap-8 text-3xl font-bold">
      <div>Scroll rotate</div>
      <figure>
        <img
          src="../../assets/optimized/sun.png"
          class="autoRotate aspect-square w-40 rounded-3xl border border-white/40 object-cover"
          alt="Sun"
          loading="lazy"
          decoding="async"
        />
      </figure>
      <div>animation</div>
    </div>

    <div class="text-ink-soft flex flex-col gap-8 text-base leading-relaxed">
      <div class="max-w-[70%]">
        <h2 class="text-ink mb-3 text-2xl font-extrabold">Lorem ipsum dolor sit amet.</h2>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas incidunt provident non
        numquam iusto doloribus quidem vel blanditiis quia velit deleniti fugit nostrum ratione cum,
        perspiciatis eos assumenda dolore possimus aperiam? Adipisci facere eos voluptatum id
        consequuntur cupiditate autem dolores consequatur voluptas, at aliquid pariatur beatae amet
        tempora, totam laudantium nostrum quae doloremque enim quos dolorem aliquam quia modi dicta.
      </div>

      <div class="max-w-[60%] self-end text-right">
        <h2 class="text-ink autoShow mb-3 text-2xl font-extrabold">Lorem ipsum dolor sit amet.</h2>
        <img
          src="../../assets/ice-2.jpg"
          class="mb-4 max-h-24 w-full rounded-xl object-cover object-bottom"
          alt="Ice hummocks"
          loading="lazy"
          decoding="async"
        />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto tenetur culpa
        consequuntur. Impedit laborum ea molestiae nesciunt necessitatibus commodi, ipsa dignissimos
        ullam in reprehenderit soluta aspernatur est qui rerum amet libero dolor, similique
        doloribus recusandae saepe quam repellendus natus provident voluptas.
      </div>

      <div class="max-w-[70%]">
        <h2 class="text-ink mb-3 text-2xl font-extrabold">Lorem ipsum dolor sit amet.</h2>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias magnam sequi eaque esse
        repellat molestias, explicabo ad veniam placeat error quibusdam? Atque officia vitae iure
        rem consequuntur. Delectus aliquid expedita consequatur beatae nostrum assumenda iste
        explicabo quis, qui repellendus ipsa? Minus dignissimos iusto repudiandae ipsa, quos,
        dolores illum perspiciatis fugit nostrum iste magni laborum beatae?
      </div>

      <div class="max-w-[60%] self-end text-right">
        <h2 class="text-ink mb-3 text-2xl font-extrabold">Lorem ipsum dolor sit amet.</h2>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto tenetur culpa
        consequuntur. Impedit laborum ea molestiae nesciunt necessitatibus commodi, ipsa dignissimos
        ullam in reprehenderit soluta aspernatur est qui rerum amet libero dolor, similique
        doloribus recusandae saepe quam repellendus natus provident voluptas.
      </div>

      <div class="max-w-[70%]">
        <h2 class="text-ink mb-3 text-2xl font-extrabold">Lorem ipsum dolor sit amet.</h2>
        <figure class="mb-4">
          <img
            src="../../assets/ice-2.jpg"
            class="max-h-24 w-full rounded-xl object-cover object-bottom"
            alt="Ice hummocks close-up"
            loading="lazy"
            decoding="async"
          />
        </figure>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias magnam sequi eaque esse
        repellat molestias, explicabo ad veniam placeat error quibusdam? Atque officia vitae iure
        rem consequuntur. Delectus aliquid expedita consequatur beatae nostrum assumenda iste
        explicabo quis, qui repellendus ipsa? Minus dignissimos iusto repudiandae ipsa, quos,
        dolores illum perspiciatis fugit nostrum iste magni laborum beatae?
      </div>
    </div>

    <div class="py-4 text-center text-6xl uppercase sm:text-8xl">
      <span class="inline-block pl-10 sm:pl-40">Lorem</span><br />
      <span class="inline-block pr-16 sm:pr-60">ipsum</span><br />
      <span class="inline-block pl-20 sm:pl-80">dolor</span><br />
      <span class="inline-block pr-10 sm:pr-30">sit</span><br />
      <span class="inline-block pl-14 sm:pl-50">amet</span><br />
      <span class="inline-block pr-14 sm:pr-50">consectetur</span><br />
      <span class="inline-block pl-10 sm:pl-30">adipisicing</span><br />
      <span class="inline-block pr-14 sm:pr-50">elit</span>
    </div>

    <div class="border-ink/10 flex flex-col justify-between gap-8 border-t py-10 sm:flex-row">
      <p class="text-ink-soft flex-1 basis-1/3 text-justify">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit veritatis aspernatur
        corrupti consequatur quas pariatur ut eos? Voluptas voluptates nostrum qui sit, sequi
        provident cupiditate natus quaerat quo libero mollitia, officiis odit facilis eveniet quis
        inventore repellat pariatur quisquam exercitationem?
      </p>
      <p class="text-ink-soft flex-1 basis-1/3 self-center text-justify">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam velit, animi earum beatae
        molestias facere? Cupiditate rerum adipisci ex amet accusamus quasi at animi dolor
        voluptates cumque. Dolorem eligendi amet quis reiciendis atque eius itaque facilis maiores,
        beatae, pariatur voluptatem.
      </p>
      <p class="text-ink-soft flex-1 basis-1/3 self-end text-justify">
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
