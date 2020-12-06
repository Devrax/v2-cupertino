<template>
  <div class="cupertino-container">
    <div class="cupertino-pane" ref="pane">
      <keep-alive>
        <component :is="entryComponent"></component>
      </keep-alive>
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { CupertinoPane, CupertinoSettings } from "cupertino-pane";
import Vue from 'vue';

export interface Data{
  cupertino: CupertinoPane | null;
  staticOpts: {[props: string]: unknown} | null ;
}

export const CUPERTINODEFAULTOPTS: CupertinoSettings = {
    initialBreak: "bottom",
    breaks: {
      middle: {
        enabled: true,
        height: 500,
        bounce: true,
      },
      bottom: {
        enabled: true,
        height: 100,
        bounce: true,
      },
    },
  };

export default Vue.extend({
  name: "V2Cupertino",
  props: {
    isPresent: {
      default: true,
      type: Boolean
    },
    entryAnimation: {
      default: true,
      type: Boolean
    },
    entryComponent: {
      default: null,
      type: Object
    },
    drawerOptions: {
      type: Object,
      default: () => Object.assign({}, CUPERTINODEFAULTOPTS)
    }
  },
  data() {
    const data: Data = {
      cupertino: null,
      staticOpts: null
    };

    return data;
  },
  methods: {
    initCupertino: function (options: CupertinoSettings): CupertinoPane {
      this.cupertino = new CupertinoPane(
        ".cupertino-pane",
        options
      ) as CupertinoPane;

      if(this.isPresent) this.cupertino.present({ animate: (this.entryAnimation as boolean) });

      return this.cupertino;
    },
    didDismiss: function() {
      this.$emit('did-dismiss');
    },
    willDismiss: function() {
      this.$emit('will-dismiss');
    },
    didPresent: function() {
      this.$emit('did-present', this.cupertino);
    },
    willPresent: function() {
      this.$emit('will-present', this.cupertino);
    },
    dragStart: function() {
      this.$emit('drag-start',  Math.round((this.$refs.pane as HTMLDivElement).getBoundingClientRect().y));
    },
    drag: function() {
      this.$emit('drag',  Math.round((this.$refs.pane as HTMLDivElement).getBoundingClientRect().y));
    },
    dragEnd: function() {
      this.$emit('drag-end',  Math.round((this.$refs.pane as HTMLDivElement).getBoundingClientRect().y));
    },
    backdropTap: function() {
      this.$emit('backdrop-tap');
    },
    transitionStart: function() {
      this.$emit('transition-start');
    },
    transitionEnd: function() {
      this.$emit('transition-end');
    }
  },
  watch: {
    drawerOptions() {
      (this.cupertino as CupertinoPane).destroy({animate: (this.entryAnimation as boolean)});
      setTimeout(
        () => this.initCupertino(Object.assign<Partial<CupertinoSettings>, CupertinoSettings>(this.drawerOptions as object, this.staticOpts as {[prop: string]: unknown})),
        1000
      );
    },
    isPresent() {
      this.isPresent 
      ? (this.cupertino as CupertinoPane).present({ animate: (this.entryAnimation as boolean) }) 
      : (this.cupertino as CupertinoPane).hide();
    }
  },
  mounted: function () {
    this.staticOpts = {
      parentElement: ".cupertino-container",
      onDidDismiss: this.didDismiss.bind(this),
      onWillDismiss: this.willDismiss.bind(this),
      onDidPresent: this.didPresent.bind(this),
      onWillPresent: this.willPresent.bind(this),
      onDragStart: this.dragStart.bind(this),
      onDrag: this.drag.bind(this),
      onDragEnd: this.dragEnd.bind(this),
      onBackdropTap: this.backdropTap.bind(this),
      onTransitionStart: this.transitionStart.bind(this),
      onTransitionEnd: this.transitionEnd.bind(this)
    };

    this.initCupertino(Object.assign(this.drawerOptions, this.staticOpts));
  }
})

</script>