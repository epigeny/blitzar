<template>
  <div>
    <BlitzForm :schema="schema" v-model="formData" :columnCount="3" />

    <CodeBlock :content="`// formData\n${JSON.stringify(formData, undefined, 2)}`" />
  </div>
</template>

<script>
const schema = [
  {
    id: 'firstName',
    component: 'input',
    label: 'First name',
  },
  {
    id: 'lastName',
    component: 'input',
    label: 'Last name',
  },
  {
    id: 'fullName',
    component: 'input',
    label: 'Full name (computed)',
    disabled: true,
    parseValue: (val, { formData }) =>
      `${formData.firstName || ''} ${formData.lastName || ''}`.trim(),
  },
]

export default {
  data() {
    return { schema, formData: {} }
  },
}
</script>
