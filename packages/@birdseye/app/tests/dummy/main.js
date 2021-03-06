import Vue from 'vue'
import birdseye from '@/main'
import { createInstrument } from '@birdseye/vue'
import BaseInput from '@/components/BaseInput.vue'
import BaseInputText from '@/components/BaseInputText.vue'
import ButtonPlusMinus from '@/components/ButtonPlusMinus.vue'
import PanelPattern from '@/components/PanelPattern.vue'
import style from './style.css'

const load = ctx => ctx.keys().map(ctx)
const components = load(require.context('./components', true, /\.vue$/)).concat(
  [BaseInputText, ButtonPlusMinus, BaseInput, PanelPattern]
)

// For debug
style.__inject__(document.head)
const instrument = createInstrument(Vue, {
  shadowRoot: document.head
})

birdseye('#app', instrument(components), {
  experimental: true
})
