var n=`<template>
  <div>
    <BlitzForm :schema="schema" v-model="formData" :columnCount="2" />

    <CodeBlock :content="\`// formData\\n\${JSON.stringify(formData, undefined, 2)}\`" />
  </div>
</template>

<script>
import { showToast } from '../../components/toasts'

const schema = [
  {
    id: 'focusMe',
    component: 'input',
    label: 'Focus me',
    events: {
      focus: (val, { id, label }) => showToast(\`focussed: \u300C\${label}\u300D\`, \` (field id: \${id})\`),
    },
  },
  {
    id: 'typeInMe',
    component: 'input',
    label: 'Type something',
    events: {
      'update:modelValue': (val) => showToast('Typed:', val),
    },
  },
]

export default {
  data() {
    return { schema, formData: {} }
  },
}
<\/script>
`;export{n as default};
