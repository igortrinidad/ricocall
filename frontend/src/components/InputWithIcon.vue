<template>
  <div class="block w-full mt-2">
    <label v-if="label" :for="getId" class="block mb-2"><span class="border-b-2 border-yellow">{{label}}</span></label>
    <div class="relative check-input">
      <input
        :id="getId"
        :type="getType"
        :placeholder="label"
        v-bind:value="value"
        v-on:input="$emit('input', $event.target.value)"
        @keydown.enter="makeAction()"
        :autocapitalize="autocapitalize"
        :required="required"
        :aria-required="required"
        aria-labelledby="#id"
        :class="{'border-red' : validation.filled && validation.hasError}"
        :aria-invalid="validation.hasError"
        class="block appearance-none outline-none w-full h-full border-2 border-grey-medium focus:border-yellow bg-grey-light text-grey-darker text-lg py-2 pr-4 pl-10"
      />
      <div class="text-black icon-highlight h-full absolute pin-y top-0 flex items-center text-grey pointer-events-none pl-2">
        <feather class="icon-highlight" :type="icon"></feather>
      </div>
      <button v-if="type === 'password'" @click="showPassword = !showPassword" class="h-full absolute pin-y top-0 right-0 mr-3 flex items-center text-grey pl-2 text-black hover:shadow-sm focus:outline-none focus:shadow">
        <feather :type="showPassword ? 'eye-off' : 'eye'" size="18"></feather>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "InputWithIcon",
  props: {
    icon: {
      type: String,
      default: 'plus'
    },
    type: {
      type: String,
      default: 'text'
    },
    placeholder: {
      type: String,
      default: ''
    },
    value: {
      required: true,
    },
    id: {
      required: false,
    },
    label: {
      type: String,
      default: ''
    },
    action: {
      type: Function,
      required: false
    },
    autocapitalize: {
      type: String,
      default: 'sentences'
    },
    required: {
      type: Boolean,
      default: false
    },
    validation: {
      type: Object,
      default: () => {
        return { hasError: false, checked: false }
      }
    },
  },
  data() {
    return {
      showPassword: false
    }
  },
  computed: {
    getId() {
      if(this.id) return this.id
      return this.label.replace(/[^\w\s]/gi, '').toLowerCase()
    },
    getType() {
      if(this.type !== 'password') return this.type
      if(this.type === 'password' && this.showPassword) return 'text'
      return this.type
    }
  },
  methods: {
    change() {
      this.$emit("input", this.value);
    },
    makeAction() {
      if(this.action && typeof(this.action) == 'function') this.action()
    }
  }
};
</script>
<style>
  input:focus + .icon-highlight{
    color: #FFC400;
  }

  input.border-red + label {
    color: #ff0f4a;
  }

  .border-red {
    border-color: #ff0f4a !important;
  }
</style>
