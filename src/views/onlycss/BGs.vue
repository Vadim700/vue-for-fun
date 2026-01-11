<template>
  <h1 class="text-4xl my-6 text-center text-red-800 uppercase font-bold">BG's on css</h1>
  <div class="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-4">
    <div
      v-for="item of bgs"
      :key="item.id"
      v-bind="getDataAttributes(item)"
      class="aspect-video rounded-sm cursor-pointer"
      @click="handleClick"
    ></div>
  </div>
</template>

<script setup>
import { useBgStore } from '@/stores/bgs'
import { formatObjectToCSS } from '../../use/useFormatObjectToCss'

const store = useBgStore()

const handleClick = (e) => {
  const styles = window.getComputedStyle(e.target, '::after')

  store.setCurrentItem(styles)
}

const bgs = Array.from(Array(48)).map((_, i) => ({ id: i }))

const getDataAttributes = (item) => ({
  [`data-bg-${item.id}`]: '',
})
</script>

<style lang="scss" scoped>
[data-bg-0],
[data-bg-1],
[data-bg-2],
[data-bg-3],
[data-bg-4],
[data-bg-5],
[data-bg-6],
[data-bg-7],
[data-bg-8],
[data-bg-9],
[data-bg-10],
[data-bg-11],
[data-bg-12],
[data-bg-13],
[data-bg-14],
[data-bg-15],
[data-bg-16],
[data-bg-17],
[data-bg-18],
[data-bg-19],
[data-bg-20],
[data-bg-21],
[data-bg-22],
[data-bg-23],
[data-bg-24],
[data-bg-25],
[data-bg-26],
[data-bg-27],
[data-bg-28],
[data-bg-29],
[data-bg-30],
[data-bg-31],
[data-bg-32],
[data-bg-33],
[data-bg-34],
[data-bg-35],
[data-bg-36],
[data-bg-37],
[data-bg-38],
[data-bg-39],
[data-bg-40],
[data-bg-41],
[data-bg-42],
[data-bg-43],
[data-bg-44],
[data-bg-45],
[data-bg-46],
[data-bg-47] {
  position: relative;
  overflow: hidden;

  &:hover {
    &::after {
      scale: 1.41;
    }
  }

  &::after {
    content: '';
    transition: all 0.5s;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 2;
  }
}

[data-bg-0] {
  &::after {
    background:
      linear-gradient(135deg, #eceddc 25%, transparent 25%) -50px 0,
      linear-gradient(225deg, #eceddc 25%, transparent 25%) -50px 0,
      linear-gradient(315deg, #eceddc 25%, transparent 25%),
      linear-gradient(45deg, #eceddc 25%, transparent 25%);
    background-size: 100px 100px;
    background-color: #ec173a;
  }
}

[data-bg-1] {
  &::after {
    background-color: #269;
    background-size:
      100px 100px,
      100px 100px,
      20px 20px,
      20px 20px;
    background-position:
      -2px -2px,
      -2px -2px,
      -1px -1px,
      -1px -1px;
    background-image:
      -webkit-linear-gradient(white 2px, transparent 2px),
      -webkit-linear-gradient(0, white 2px, transparent 2px),
      -webkit-linear-gradient(rgba(255, 255, 255, 0.3) 1px, transparent 1px),
      -webkit-linear-gradient(0, rgba(255, 255, 255, 0.3) 1px, transparent 1px);
    background-image:
      -moz-linear-gradient(white 2px, transparent 2px),
      -moz-linear-gradient(0, white 2px, transparent 2px),
      -moz-linear-gradient(rgba(255, 255, 255, 0.3) 1px, transparent 1px),
      -moz-linear-gradient(0, rgba(255, 255, 255, 0.3) 1px, transparent 1px);
    background-image:
      linear-gradient(white 2px, transparent 2px),
      linear-gradient(90deg, white 2px, transparent 2px),
      linear-gradient(rgba(255, 255, 255, 0.3) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255, 255, 255, 0.3) 1px, transparent 1px);
  }
}

[data-bg-2] {
  &::after {
    background-size: 50px 50px;
    background-color: #3d5762;
    background-image: -webkit-linear-gradient(
      rgba(255, 255, 255, 0.2) 50%,
      transparent 50%,
      transparent
    );
    background-image: -moz-linear-gradient(
      rgba(255, 255, 255, 0.2) 50%,
      transparent 50%,
      transparent
    );
    background-image: linear-gradient(rgba(255, 255, 255, 0.2) 50%, transparent 50%, transparent);
  }
}
[data-bg-3] {
  &::after {
    background-size: 50px 50px;
    background-color: #726144;
    background-image: -webkit-linear-gradient(0deg, #5a4e39 50%, transparent 50%, transparent);
    background-image: -moz-linear-gradient(0deg, #5a4e39 50%, transparent 50%, transparent);
    background-image: linear-gradient(90deg, #5a4e39 50%, transparent 50%, transparent);
  }
}
[data-bg-4] {
  &::after {
    background-size: 50px 50px;
    background-color: #ddd;
    background-image:
      -webkit-linear-gradient(transparent 50%, rgba(0, 108, 21, 0.5) 50%, rgba(0, 108, 21, 0.5)),
      -webkit-linear-gradient(
          0deg,
          transparent 50%,
          rgba(0, 108, 21, 0.5) 50%,
          rgba(0, 108, 21, 0.5)
        );
    background-image:
      -moz-linear-gradient(transparent 50%, rgba(0, 108, 21, 0.5) 50%, rgba(0, 108, 21, 0.5)),
      -moz-linear-gradient(0deg, transparent 50%, rgba(0, 108, 21, 0.5) 50%, rgba(0, 108, 21, 0.5));
    background-image:
      linear-gradient(transparent 50%, rgba(0, 108, 21, 0.5) 50%, rgba(0, 108, 21, 0.5)),
      linear-gradient(90deg, transparent 50%, rgba(0, 108, 21, 0.5) 50%, rgba(0, 108, 21, 0.5));
  }
}
[data-bg-5] {
  &::after {
    background-size: 50px 50px;
    background-color: #740064;
    background-image: -webkit-linear-gradient(
      45deg,
      rgba(255, 255, 255, 0.2) 25%,
      transparent 25%,
      transparent 50%,
      rgba(255, 255, 255, 0.2) 50%,
      rgba(255, 255, 255, 0.2) 75%,
      transparent 75%,
      transparent
    );
    background-image: -moz-linear-gradient(
      45deg,
      rgba(255, 255, 255, 0.2) 25%,
      transparent 25%,
      transparent 50%,
      rgba(255, 255, 255, 0.2) 50%,
      rgba(255, 255, 255, 0.2) 75%,
      transparent 75%,
      transparent
    );
    background-image: linear-gradient(
      45deg,
      rgba(255, 255, 255, 0.2) 25%,
      transparent 25%,
      transparent 50%,
      rgba(255, 255, 255, 0.2) 50%,
      rgba(255, 255, 255, 0.2) 75%,
      transparent 75%,
      transparent
    );
  }
}
[data-bg-6] {
  &::after {
    background-size: 50px 50px;
    background-color: #0c6e12;
    background-image: -webkit-linear-gradient(
      -45deg,
      rgba(255, 255, 255, 0.2) 25%,
      transparent 25%,
      transparent 50%,
      rgba(255, 255, 255, 0.2) 50%,
      rgba(255, 255, 255, 0.2) 75%,
      transparent 75%,
      transparent
    );
    background-image: -moz-linear-gradient(
      -45deg,
      rgba(255, 255, 255, 0.2) 25%,
      transparent 25%,
      transparent 50%,
      rgba(255, 255, 255, 0.2) 50%,
      rgba(255, 255, 255, 0.2) 75%,
      transparent 75%,
      transparent
    );
    background-image: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.2) 25%,
      transparent 25%,
      transparent 50%,
      rgba(255, 255, 255, 0.2) 50%,
      rgba(255, 255, 255, 0.2) 75%,
      transparent 75%,
      transparent
    );
  }
}
[data-bg-7] {
  &::after {
    background-color: #eee;
    background-size: 60px 60px;
    background-position:
      0 0,
      30px 30px;
    background-image:
      -webkit-linear-gradient(45deg, black 25%, transparent 25%, transparent 75%, black 75%, black),
      -webkit-linear-gradient(45deg, black 25%, transparent 25%, transparent 75%, black 75%, black);
    background-image:
      -moz-linear-gradient(45deg, black 25%, transparent 25%, transparent 75%, black 75%, black),
      -moz-linear-gradient(45deg, black 25%, transparent 25%, transparent 75%, black 75%, black);
    background-image:
      linear-gradient(45deg, black 25%, transparent 25%, transparent 75%, black 75%, black),
      linear-gradient(45deg, black 25%, transparent 25%, transparent 75%, black 75%, black);
  }
}
[data-bg-8] {
  &::after {
    background:
      linear-gradient(45deg, #292929 25%, transparent 25%, transparent 75%, #292929 75%),
      linear-gradient(45deg, #292929 25%, transparent 25%, transparent 75%, #292929 75%) 0.1875em
        0.1875em,
      radial-gradient(at 50% 0, #484847, #090909);
    background-size:
      0.375em 0.375em,
      0.375em 0.375em,
      100% 100%;
  }
}
[data-bg-9] {
  &::after {
    background-color: #eee;
    background-size: 60px 60px;
    background-image:
      -webkit-linear-gradient(45deg, black 25%, transparent 25%, transparent 75%, black 75%, black),
      -webkit-linear-gradient(-45deg, black 25%, transparent 25%, transparent 75%, black 75%, black);
    background-image:
      -moz-linear-gradient(45deg, black 25%, transparent 25%, transparent 75%, black 75%, black),
      -moz-linear-gradient(-45deg, black 25%, transparent 25%, transparent 75%, black 75%, black);
    background-image:
      linear-gradient(45deg, black 25%, transparent 25%, transparent 75%, black 75%, black),
      linear-gradient(135deg, black 25%, transparent 25%, transparent 75%, black 75%, black);
  }
}
[data-bg-10] {
  &::after {
    background:
      -webkit-linear-gradient(126deg, #232927 4%, transparent 4%) -70px 43px,
      -webkit-linear-gradient(54deg, #232927 4%, transparent 4%) 30px 43px,
      -webkit-linear-gradient(18deg, #e3d7bf 8.5%, transparent 8.5%) 30px 43px,
      -webkit-linear-gradient(162deg, #e3d7bf 8.5%, transparent 8.5%) -70px 43px,
      -webkit-linear-gradient(234deg, #e3d7bf 7.5%, transparent 7.5%) -70px 23px,
      -webkit-linear-gradient(-54deg, #e3d7bf 7.5%, transparent 7.5%) 30px 23px,
      -webkit-linear-gradient(126deg, #232927 4%, transparent 4%) -20px 93px,
      -webkit-linear-gradient(54deg, #232927 4%, transparent 4%) 80px 93px,
      -webkit-linear-gradient(18deg, #e3d7bf 8.5%, transparent 8.5%) 80px 93px,
      -webkit-linear-gradient(162deg, #e3d7bf 8.5%, transparent 8.5%) -20px 93px,
      -webkit-linear-gradient(234deg, #e3d7bf 7.5%, transparent 7.5%) -20px 73px,
      -webkit-linear-gradient(-54deg, #e3d7bf 7.5%, transparent 7.5%) 80px 73px;
    background:
      -moz-linear-gradient(126deg, #232927 4%, transparent 4%) -70px 43px,
      -moz-linear-gradient(54deg, #232927 4%, transparent 4%) 30px 43px,
      -moz-linear-gradient(18deg, #e3d7bf 8.5%, transparent 8.5%) 30px 43px,
      -moz-linear-gradient(162deg, #e3d7bf 8.5%, transparent 8.5%) -70px 43px,
      -moz-linear-gradient(234deg, #e3d7bf 7.5%, transparent 7.5%) -70px 23px,
      -moz-linear-gradient(-54deg, #e3d7bf 7.5%, transparent 7.5%) 30px 23px,
      -moz-linear-gradient(126deg, #232927 4%, transparent 4%) -20px 93px,
      -moz-linear-gradient(54deg, #232927 4%, transparent 4%) 80px 93px,
      -moz-linear-gradient(18deg, #e3d7bf 8.5%, transparent 8.5%) 80px 93px,
      -moz-linear-gradient(162deg, #e3d7bf 8.5%, transparent 8.5%) -20px 93px,
      -moz-linear-gradient(234deg, #e3d7bf 7.5%, transparent 7.5%) -20px 73px,
      -moz-linear-gradient(-54deg, #e3d7bf 7.5%, transparent 7.5%) 80px 73px;
    background:
      linear-gradient(324deg, #232927 4%, transparent 4%) -70px 43px,
      linear-gradient(36deg, #232927 4%, transparent 4%) 30px 43px,
      linear-gradient(72deg, #e3d7bf 8.5%, transparent 8.5%) 30px 43px,
      linear-gradient(288deg, #e3d7bf 8.5%, transparent 8.5%) -70px 43px,
      linear-gradient(216deg, #e3d7bf 7.5%, transparent 7.5%) -70px 23px,
      linear-gradient(144deg, #e3d7bf 7.5%, transparent 7.5%) 30px 23px,
      linear-gradient(324deg, #232927 4%, transparent 4%) -20px 93px,
      linear-gradient(36deg, #232927 4%, transparent 4%) 80px 93px,
      linear-gradient(72deg, #e3d7bf 8.5%, transparent 8.5%) 80px 93px,
      linear-gradient(288deg, #e3d7bf 8.5%, transparent 8.5%) -20px 93px,
      linear-gradient(216deg, #e3d7bf 7.5%, transparent 7.5%) -20px 73px,
      linear-gradient(144deg, #e3d7bf 7.5%, transparent 7.5%) 80px 73px;
    background-color: #232927;
    background-size: 100px 100px;
  }
}
[data-bg-11] {
  &::after {
    background-color: #ff7d9d;
    background-size: 58px 58px;
    background-position:
      0px 2px,
      4px 35px,
      29px 31px,
      33px 6px,
      0px 36px,
      4px 2px,
      29px 6px,
      33px 30px;
    background-image:
      -webkit-linear-gradient(115deg, #c90032 23px, transparent 23px),
      -webkit-linear-gradient(295deg, #c90032 23px, transparent 23px),
      -webkit-linear-gradient(115deg, #c90032 23px, transparent 23px),
      -webkit-linear-gradient(295deg, #c90032 23px, transparent 23px),
      -webkit-linear-gradient(115deg, #c90032 10px, transparent 10px),
      -webkit-linear-gradient(295deg, #c90032 10px, transparent 10px),
      -webkit-linear-gradient(115deg, #c90032 10px, transparent 10px),
      -webkit-linear-gradient(295deg, #c90032 10px, transparent 10px);
    background-image:
      -moz-linear-gradient(115deg, #c90032 23px, transparent 23px),
      -moz-linear-gradient(295deg, #c90032 23px, transparent 23px),
      -moz-linear-gradient(115deg, #c90032 23px, transparent 23px),
      -moz-linear-gradient(295deg, #c90032 23px, transparent 23px),
      -moz-linear-gradient(115deg, #c90032 10px, transparent 10px),
      -moz-linear-gradient(295deg, #c90032 10px, transparent 10px),
      -moz-linear-gradient(115deg, #c90032 10px, transparent 10px),
      -moz-linear-gradient(295deg, #c90032 10px, transparent 10px);
    background-image:
      linear-gradient(335deg, #c90032 23px, transparent 23px),
      linear-gradient(155deg, #c90032 23px, transparent 23px),
      linear-gradient(335deg, #c90032 23px, transparent 23px),
      linear-gradient(155deg, #c90032 23px, transparent 23px),
      linear-gradient(335deg, #c90032 10px, transparent 10px),
      linear-gradient(155deg, #c90032 10px, transparent 10px),
      linear-gradient(335deg, #c90032 10px, transparent 10px),
      linear-gradient(155deg, #c90032 10px, transparent 10px);
  }
}
[data-bg-12] {
  &::after {
    background:
      -webkit-linear-gradient(63deg, #151515 5px, transparent 5px) 0 5px,
      -webkit-linear-gradient(243deg, #151515 5px, transparent 5px) 10px 0px,
      -webkit-linear-gradient(63deg, #222 5px, transparent 5px) 0px 10px,
      -webkit-linear-gradient(243deg, #222 5px, transparent 5px) 10px 5px,
      -webkit-linear-gradient(0deg, #1b1b1b 10px, transparent 10px),
      -webkit-linear-gradient(
          #1d1d1d 25%,
          #1a1a1a 25%,
          #1a1a1a 50%,
          transparent 50%,
          transparent 75%,
          #242424 75%,
          #242424
        );
    background:
      -moz-linear-gradient(63deg, #151515 5px, transparent 5px) 0 5px,
      -moz-linear-gradient(243deg, #151515 5px, transparent 5px) 10px 0px,
      -moz-linear-gradient(63deg, #222 5px, transparent 5px) 0px 10px,
      -moz-linear-gradient(243deg, #222 5px, transparent 5px) 10px 5px,
      -moz-linear-gradient(0deg, #1b1b1b 10px, transparent 10px),
      -moz-linear-gradient(
          #1d1d1d 25%,
          #1a1a1a 25%,
          #1a1a1a 50%,
          transparent 50%,
          transparent 75%,
          #242424 75%,
          #242424
        );
    background:
      linear-gradient(27deg, #151515 5px, transparent 5px) 0 5px,
      linear-gradient(207deg, #151515 5px, transparent 5px) 10px 0px,
      linear-gradient(27deg, #222 5px, transparent 5px) 0px 10px,
      linear-gradient(207deg, #222 5px, transparent 5px) 10px 5px,
      linear-gradient(90deg, #1b1b1b 10px, transparent 10px),
      linear-gradient(
        #1d1d1d 25%,
        #1a1a1a 25%,
        #1a1a1a 50%,
        transparent 50%,
        transparent 75%,
        #242424 75%,
        #242424
      );
    background-size: 20px 20px;
    background-color: #131313;
  }
}
[data-bg-13] {
  &::after {
    background-color: #026873;
    background-size:
      13px 13px,
      29px 29px,
      37px 37px,
      53px 53px;
    background-image:
      -webkit-linear-gradient(0, rgba(255, 255, 255, 0.07) 50%, transparent 50%),
      -webkit-linear-gradient(0, rgba(255, 255, 255, 0.13) 50%, transparent 50%),
      -webkit-linear-gradient(0, transparent 50%, rgba(255, 255, 255, 0.17) 50%),
      -webkit-linear-gradient(0, transparent 50%, rgba(255, 255, 255, 0.19) 50%);
    background-image:
      -moz-linear-gradient(0, rgba(255, 255, 255, 0.07) 50%, transparent 50%),
      -moz-linear-gradient(0, rgba(255, 255, 255, 0.13) 50%, transparent 50%),
      -moz-linear-gradient(0, transparent 50%, rgba(255, 255, 255, 0.17) 50%),
      -moz-linear-gradient(0, transparent 50%, rgba(255, 255, 255, 0.19) 50%);
    background-image:
      linear-gradient(90deg, rgba(255, 255, 255, 0.07) 50%, transparent 50%),
      linear-gradient(90deg, rgba(255, 255, 255, 0.13) 50%, transparent 50%),
      linear-gradient(90deg, transparent 50%, rgba(255, 255, 255, 0.17) 50%),
      linear-gradient(90deg, transparent 50%, rgba(255, 255, 255, 0.19) 50%);
  }
}
[data-bg-14] {
  &::after {
    background-blend-mode: screen;
    background-blend-mode: multiply;
    background-blend-mode: overlay;
    background-blend-mode: darken;
    background-blend-mode: soft-light;
    background-blend-mode: luminosity;
    background:
      linear-gradient(red, transparent), linear-gradient(to top left, lime, transparent),
      linear-gradient(to top right, blue, transparent);
  }
}
[data-bg-15] {
  &::after {
    background:
      radial-gradient(
        ellipse farthest-corner at right bottom,
        #fedb37 0%,
        #fdb931 8%,
        #9f7928 30%,
        #8a6e2f 40%,
        transparent 80%
      ),
      radial-gradient(
        ellipse farthest-corner at left top,
        #ffffff 0%,
        #ffffac 8%,
        #d1b464 25%,
        #5d4a1f 62.5%,
        #5d4a1f 100%
      );
  }
}
[data-bg-16] {
  &::after {
    background-image:
      linear-gradient(45deg, #eee 25%, transparent 25%, transparent 75%, #eee 75%, #eee 100%),
      linear-gradient(45deg, #eee 25%, white 25%, white 75%, #eee 75%, #eee 100%);
    background-position:
      0px 0px,
      10px 10px;
    background-size: 20px 20px;
  }
}
[data-bg-17] {
  &::after {
    background:
      linear-gradient(90deg, transparent 50%, rgba(255, 0, 0, 0.6) 50%),
      linear-gradient(0, transparent 49%, rgba(255, 0, 0, 0.6) 50%);
    background-size: 30px 30px;
  }
}
[data-bg-18] {
  &::after {
    background-blend-mode: multiply;
    background:
      repeating-linear-gradient(
        floralwhite,
        floralwhite 10px,
        lightcoral 10px,
        lightcoral 15px,
        floralwhite 15px,
        floralwhite 20px,
        lightcoral 15px,
        lightcoral 40px,
        floralwhite 40px,
        floralwhite 45px,
        lightcoral 45px,
        lightcoral 50px,
        floralwhite 50px,
        floralwhite 80px
      ),
      repeating-linear-gradient(
        90deg,
        floralwhite,
        floralwhite 10px,
        lightcoral 10px,
        lightcoral 15px,
        floralwhite 15px,
        floralwhite 20px,
        lightcoral 15px,
        lightcoral 40px,
        floralwhite 40px,
        floralwhite 45px,
        lightcoral 45px,
        lightcoral 50px,
        floralwhite 50px,
        floralwhite 80px
      );
  }
}
[data-bg-19] {
  &::after {
    background-color: #58a;
    background-size:
      10px 10px,
      10px 10px,
      50px 50px,
      50px 50px;
    background-image:
      linear-gradient(hsla(0, 0%, 100%, 0.3) 1px, transparent 0),
      linear-gradient(90deg, hsla(0, 0%, 100%, 0.3) 1px, transparent 0),
      linear-gradient(white 2px, transparent 0), linear-gradient(90deg, white 2px, transparent 0);
  }
}
[data-bg-20] {
  &::after {
    background:
      linear-gradient(
        90deg,
        rgba(204, 204, 204, 0) 48%,
        rgb(255, 255, 255) 48%,
        rgb(255, 255, 255) 50%,
        rgba(204, 204, 204, 0) 50%,
        rgba(204, 204, 204, 0) 100%
      ),
      linear-gradient(
        0,
        #3498db 48%,
        rgb(255, 255, 255) 48%,
        rgb(255, 255, 255) 50%,
        #3498db 50%,
        #3498db 100%
      );
    background-size: 30px 30px;
  }
}
[data-bg-21] {
  &::after {
    background-color: #000;
    background-image:
      repeating-linear-gradient(
        transparent,
        transparent 50px,
        rgba(0, 255, 255, 0.25) 50px,
        rgba(0, 255, 255, 0.25) 100px
      ),
      repeating-linear-gradient(
        90deg,
        rgba(0, 255, 255, 0.25),
        rgba(0, 255, 255, 0.25) 50px,
        transparent 50px,
        transparent 100px
      ),
      repeating-linear-gradient(
        135deg,
        transparent,
        transparent 4px,
        rgba(255, 255, 255, 0.1) 4px,
        rgba(255, 255, 255, 0.1) 8px
      ),
      repeating-linear-gradient(
        45deg,
        transparent,
        transparent 4px,
        rgba(255, 255, 255, 0.1) 4px,
        rgba(255, 255, 255, 0.1) 8px
      ),
      repeating-linear-gradient(
        transparent,
        transparent 20px,
        rgba(100, 250, 250, 0.2) 20px,
        rgba(100, 250, 250, 0.2) 21px,
        transparent 21px,
        transparent 29px,
        rgba(100, 250, 250, 0.2) 29px,
        rgba(100, 250, 250, 0.2) 30px,
        transparent 30px,
        transparent 50px
      ),
      repeating-linear-gradient(
        90deg,
        transparent,
        transparent 20px,
        rgba(100, 250, 250, 0.2) 20px,
        rgba(100, 250, 250, 0.2) 21px,
        transparent 21px,
        transparent 29px,
        rgba(100, 250, 250, 0.2) 29px,
        rgba(100, 250, 250, 0.2) 30px,
        transparent 30px,
        transparent 50px
      );
  }
}
[data-bg-22] {
  &::after {
    background: repeating-linear-gradient(135deg, black, black 0.25em, #0092b7 0, #0092b7 0.75em);
  }
}
[data-bg-23] {
  &::after {
    background: repeating-linear-gradient(
      45deg,
      rgba(171, 0, 0, 0.6) 10px,
      transparent 10px,
      transparent 20px,
      rgba(0, 186, 255, 0.6) 20px,
      rgba(0, 186, 255, 0.6) 30px,
      transparent 30px,
      transparent 40px,
      rgba(10, 53, 10, 0.6) 40px,
      rgba(10, 53, 10, 0.6) 50px,
      transparent 50px,
      transparent 60px,
      rgba(191, 128, 12, 0.6) 60px,
      rgba(191, 128, 12, 0.6) 70px,
      transparent 70px,
      transparent 80px,
      rgba(165, 165, 28, 0.6) 80px,
      rgba(165, 165, 28, 0.6) 90px,
      transparent 90px
    );
  }
}
[data-bg-24] {
  &::after {
    background-image: repeating-linear-gradient(
      -45deg,
      #777 20px,
      #888 40px,
      hsla(300, 50%, 50%, 0.9) 50px
    );
  }
}
[data-bg-25] {
  &::after {
    background-image: repeating-linear-gradient(-45deg, red 0, red 10px, green 10px, green 20px);
  }
}
[data-bg-26] {
  &::after {
    background-image: repeating-linear-gradient(45deg, yellow 0, yellow 10px, #000 10px, #000 20px);
  }
}
[data-bg-27] {
  &::after {
    background-image: repeating-linear-gradient(
      to top right,
      rgba(255, 165, 0, 0.8) 5%,
      khaki 10%,
      plum 15%
    );
  }
}
[data-bg-28] {
  &::after {
    background: linear-gradient(
      150deg,
      #ffa500 25%,
      rgba(255, 165, 0, 0.5) 25%,
      rgba(255, 165, 0, 0.5) 50%,
      #ffa500 50%,
      #ffa500 75%,
      rgba(255, 165, 0, 0.5) 75%
    );
    background-color: gray;
    background-size: 32px 18.4px;
  }
}
[data-bg-29] {
  &::after {
    background: linear-gradient(
      135deg,
      #333333 25%,
      rgba(51, 51, 51, 0.5) 25%,
      rgba(51, 51, 51, 0.5) 50%,
      #333333 50%,
      #333333 75%,
      rgba(51, 51, 51, 0.5) 75%
    );
    background-color: gray;
    background-size: 32px 32px;
  }
}
[data-bg-30] {
  &::after {
    background-image: repeating-linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5) 10px,
      white 10px,
      white 20px
    );
    background-color: gray;
  }
}
[data-bg-31] {
  &::after {
    background: linear-gradient(
      135deg,
      rgba(108, 188, 99, 0.25) 25%,
      rgba(108, 188, 99, 0.34) 25%,
      rgba(108, 188, 99, 0.34) 50%,
      rgba(108, 188, 99, 0.25) 50%,
      rgba(108, 188, 99, 0.25) 75%,
      rgba(108, 188, 99, 0.34) 75%
    );
    background-color: #fafafa;
    background-size: 5rem 5rem;
  }
}
[data-bg-32] {
  &::after {
    background-color: #d8dbe2;
    background-image:
      repeating-radial-gradient(
        circle at 0 100%,
        rgba(27, 27, 30, 0.1),
        rgba(88, 164, 176, 0.15) 1px,
        rgba(216, 219, 226, 0.2) 2px,
        rgba(88, 164, 176, 0.15) 3px,
        rgba(27, 27, 30, 0.1) 4px
      ),
      radial-gradient(circle at 0 100%, #1b1b1e, #373f51, #58a4b0, #a9bcd0, #d8dbe2);
  }
}
[data-bg-33] {
  &::after {
    background-color: #6d6875;
    background-image:
      linear-gradient(
        135deg,
        rgba(109, 104, 117, 0.2) 0%,
        rgba(255, 180, 162, 0.1) 25%,
        rgba(109, 104, 117, 0.2) 50%,
        rgba(255, 180, 162, 0.1) 75%,
        rgba(109, 104, 117, 0.2) 100%
      ),
      linear-gradient(90deg, #6d6875, #b5838d, #e5989b, #ffb4a2, #ffcdb2);
    background-size:
      6px 6px,
      100%;
  }
}
[data-bg-34] {
  &::after {
    background-color: #303641;
    background-image:
      linear-gradient(
        135deg,
        rgba(0, 0, 0, 0.2) 0%,
        rgba(0, 0, 0, 0.1) 25%,
        rgba(0, 0, 0, 0.2) 50%,
        rgba(0, 0, 0, 0.1) 75%,
        rgba(0, 0, 0, 0.2) 100%
      ),
      linear-gradient(90deg, #192129, #303641, #484e57);
    background-size:
      8px 8px,
      100%;
  }
}
[data-bg-35] {
  &::after {
    background-color: #62bbd3;
    background-image:
      linear-gradient(
        30deg,
        #80c9dd 12%,
        transparent 12.5%,
        transparent 87%,
        #80c9dd 87.5%,
        #80c9dd
      ),
      linear-gradient(
        150deg,
        #80c9dd 12%,
        transparent 12.5%,
        transparent 87%,
        #80c9dd 87.5%,
        #80c9dd
      ),
      linear-gradient(
        30deg,
        #80c9dd 12%,
        transparent 12.5%,
        transparent 87%,
        #80c9dd 87.5%,
        #80c9dd
      ),
      linear-gradient(
        150deg,
        #80c9dd 12%,
        transparent 12.5%,
        transparent 87%,
        #80c9dd 87.5%,
        #80c9dd
      ),
      linear-gradient(60deg, #d5eaf0 25%, transparent 25.5%, transparent 75%, #d5eaf0 75%, #d5eaf0),
      linear-gradient(60deg, #d5eaf0 25%, transparent 25.5%, transparent 75%, #d5eaf0 75%, #d5eaf0);
    background-size: 40px 70px;
    background-position:
      0 0,
      0 0,
      20px 35px,
      20px 35px,
      0 0,
      20px 35px;
  }
}
[data-bg-36] {
  &::after {
    background-color: pink;
    background-image:
      radial-gradient(white 20%, transparent 0), radial-gradient(white 20%, transparent 0);
    background-size: 30px 30px;
    background-position:
      0 0,
      15px 15px;
  }
}
[data-bg-37] {
  &::after {
    background:
      radial-gradient(circle at 25% 25%, #ce0042 10%, rgba(0, 0, 0, 0) 15%),
      radial-gradient(circle at 75% 75%, #ce0042 10%, rgba(0, 0, 0, 0) 15%);
    background-size: 20px 20px;
  }
}
[data-bg-38] {
  &::after {
    background:
      linear-gradient(135deg, #bbf 25%, transparent 25%) -50px 0,
      linear-gradient(225deg, #bbf 25%, transparent 25%) -50px 0,
      linear-gradient(315deg, #bbf 25%, transparent 25%),
      linear-gradient(45deg, #bbf 25%, transparent 25%);
    background-size: 25px 25px;
  }
}
[data-bg-39] {
  &::after {
    background: repeating-radial-gradient(
      circle at 50% 50%,
      #386ad8 4%,
      #386ad8 7%,
      transparent 12%
    );
    background-size: 48px 50px;
  }
}
[data-bg-40] {
  &::after {
    background: repeating-radial-gradient(
      circle at 50% 50%,
      transparent 15%,
      #d2006a 18%,
      #d2006a 23%,
      transparent 22%
    );
    background-size: 25px 50px;
  }
}
[data-bg-41] {
  &::after {
    background:
      repeating-radial-gradient(transparent 0, transparent 40%, white 40%, white 41%) center
        center/2em 2em,
      #99dfd7;
  }
}
[data-bg-42] {
  &::after {
    background-color: #f3a183;
    background-image:
      linear-gradient(
        transparent 0px,
        transparent 49px,
        rgba(255, 255, 255, 0.2) 50px,
        transparent 51px,
        transparent 99px,
        rgba(255, 255, 255, 0.2) 100px
      ),
      linear-gradient(
        120deg,
        transparent 0,
        transparent 48px,
        rgba(255, 255, 255, 0.2) 49px,
        transparent 50px,
        transparent 98px,
        rgba(255, 255, 255, 0.2) 99px,
        transparent 100px
      ),
      linear-gradient(
        60deg,
        transparent 0,
        transparent 48px,
        rgba(255, 255, 255, 0.2) 49px,
        transparent 50px,
        transparent 98px,
        rgba(255, 255, 255, 0.2) 99px,
        transparent 100px
      ),
      linear-gradient(90deg, #f3a183, #ec6f66);
    background-size:
      100px 100px,
      115px 100px,
      115px 100px,
      auto;
  }
}
[data-bg-43] {
  &::after {
    background:
      repeating-linear-gradient(
        50deg,
        #f7a37b,
        #f7a37b 1em,
        #ffdea8 1em,
        #ffdea8 2em,
        #d0e4b0 2em,
        #d0e4b0 3em,
        #7cc5d0 3em,
        #7cc5d0 4em,
        #00a2e1 4em,
        #00a2e1 5em,
        #0085c8 5em,
        #0085c8 6em
      ),
      repeating-linear-gradient(
        -50deg,
        #f7a37b,
        #f7a37b 1em,
        #ffdea8 1em,
        #ffdea8 2em,
        #d0e4b0 2em,
        #d0e4b0 3em,
        #7cc5d0 3em,
        #7cc5d0 4em,
        #00a2e1 4em,
        #00a2e1 5em,
        #0085c8 5em,
        #0085c8 6em
      );
    background-blend-mode: multiply;
  }
}
[data-bg-44] {
  &::after {
    background:
      radial-gradient(
        transparent 0,
        transparent 2em,
        lightblue 2em,
        lightblue 2.5em,
        transparent 2.5em,
        transparent 100%
      ),
      radial-gradient(
        transparent 0,
        transparent 2em,
        aquamarine 2em,
        aquamarine 2.5em,
        transparent 2.5em,
        transparent 100%
      ),
      radial-gradient(
        transparent 0,
        transparent 2em,
        khaki 2em,
        khaki 2.5em,
        transparent 2.5em,
        transparent 100%
      ),
      radial-gradient(
        transparent 0,
        transparent 2em,
        pink 2em,
        pink 2.5em,
        transparent 2.5em,
        transparent 100%
      ),
      linen;
    background-blend-mode: multiply;
    background-size: 5em 5em;
    background-position:
      0 2.5em,
      2.5em 0,
      2.5em 2.5em,
      0 0;
  }
}
[data-bg-45] {
  &::after {
    background:
      radial-gradient(
        at bottom right,
        dodgerblue 0,
        dodgerblue 1em,
        lightskyblue 1em,
        lightskyblue 2em,
        deepskyblue 2em,
        deepskyblue 3em,
        gainsboro 3em,
        gainsboro 4em,
        lightsteelblue 4em,
        lightsteelblue 5em,
        deepskyblue 5em,
        deepskyblue 6em,
        lightskyblue 6em,
        lightskyblue 7em,
        transparent 7em,
        transparent 8em
      ),
      radial-gradient(
        at top left,
        transparent 0,
        transparent 1em,
        lightskyblue 1em,
        lightskyblue 2em,
        deepskyblue 2em,
        deepskyblue 3em,
        lightsteelblue 3em,
        lightsteelblue 4em,
        gainsboro 4em,
        gainsboro 5em,
        deepskyblue 5em,
        deepskyblue 6em,
        skyblue 6em,
        skyblue 7em,
        dodgerblue 7em,
        dodgerblue 8em,
        transparent 8em,
        transparent 20em
      ),
      radial-gradient(circle at center bottom, coral, darkslateblue);
    background-blend-mode: overlay;
    background-size:
      8em 8em,
      8em 8em,
      cover;
  }
}
[data-bg-46] {
  &::after {
    background:
      repeating-linear-gradient(-45deg, transparent, transparent 25%, tomato 0, tomato 50%),
      repeating-linear-gradient(45deg, transparent, transparent 25%, dodgerblue 0, dodgerblue 50%),
      wheat;
    background-size: 10em 10em;
    background-blend-mode: multiply;
  }
}
[data-bg-47] {
  &::after {
    background:
      linear-gradient(
        45deg,
        rgba(171, 0, 0, 0.6) 10%,
        transparent 10%,
        transparent 20%,
        rgba(0, 186, 255, 0.6) 20%,
        rgba(0, 186, 255, 0.6) 30%,
        transparent 30%,
        transparent 40%,
        rgba(10, 53, 10, 0.6) 40%,
        rgba(10, 53, 10, 0.6) 50%,
        transparent 50%,
        transparent 60%,
        rgba(191, 128, 12, 0.6) 60%,
        rgba(191, 128, 12, 0.6) 70%,
        transparent 70%,
        transparent 80%,
        rgba(165, 165, 28, 0.6) 80%,
        rgba(165, 165, 28, 0.6) 90%,
        transparent 90%,
        transparent 100%
      ),
      linear-gradient(
        135deg,
        rgba(171, 0, 0, 0.6) 10%,
        transparent 10%,
        transparent 20%,
        rgba(0, 186, 255, 0.6) 20%,
        rgba(0, 186, 255, 0.6) 30%,
        transparent 30%,
        transparent 40%,
        rgba(10, 53, 10, 0.6) 40%,
        rgba(10, 53, 10, 0.6) 50%,
        transparent 50%,
        transparent 60%,
        rgba(191, 128, 12, 0.6) 60%,
        rgba(191, 128, 12, 0.6) 70%,
        transparent 70%,
        transparent 80%,
        rgba(165, 165, 28, 0.6) 80%,
        rgba(165, 165, 28, 0.6) 90%,
        transparent 90%,
        transparent 100%
      );
  }
}
</style>
