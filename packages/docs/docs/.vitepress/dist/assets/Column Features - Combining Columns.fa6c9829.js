var n=`<template>
  <div>
    <BlitzTable
      :schemaColumns="schemaColumnsAndGrid"
      :schemaGrid="schemaColumnsAndGrid"
      :rows="rows"
      :rowsPerPage="5"
      :searchField="{
        component: blitzInput,
        placeholder: 'Search...',
        debounce: 300,
        clearable: true,
      }"
      :gridToggleField="{ component: blitzGridToggle }"
      :paginationField="{ component: blitzPagination }"
      :rowsPerPageField="{
        label: 'Rows per page:',
        component: blitzInput,
        type: 'select',
        options: [
          { value: 5, label: '5' },
          { value: 10, label: '10' },
          { value: 20, label: '20' },
          { value: 50, label: '50' },
          { value: 100, label: '100' },
        ],
      }"
      :shownRowsInfoField="{ component: 'div' }"
    />
  </div>
</template>

<style scoped>
::v-deep(.blitz-table--grid-card) {
  border: thin solid #dfe2e5;
}
</style>

<script>
import { markRaw, onMounted, ref } from 'vue'
import { BlitzInput, BlitzGridToggle, BlitzPagination } from 'blitzar'
import 'blitzar/dist/style.css'

const blitzInput = markRaw(BlitzInput)
const blitzGridToggle = markRaw(BlitzGridToggle)
const blitzPagination = markRaw(BlitzPagination)

const schemaColumnsAndGrid = [
  {
    // you need to add a column \`id\` even if it doesn't have/need one
    //   just to make the column searchable
    id: 'fullName',
    label: 'Full Name',
    parseValue: (val, { formData }) => \`\${formData.firstName} \${formData.lastName}\`,
  },
  {
    // you need to add a column \`id\` even if it doesn't have/need one
    //   just to make the column searchable
    id: 'initials',
    label: 'Initials',
    parseValue: (val, { formData }) => \`\${formData.firstName[0]}.\${formData.lastName[0]}.\`,
  },
]

export default {
  setup() {
    const rows = ref([
      {
        firstName: 'Harper',
        lastName: 'Nolan',
      },
      // other rows loaded asynchronously
    ])

    onMounted(async () => {
      const _module = await import('./users.json')
      const users = _module.default
      rows.value = users
    })

    return {
      blitzInput,
      blitzGridToggle,
      blitzPagination,
      schemaColumnsAndGrid,
      rows,
    }
  },
}
<\/script>
`;export{n as default};
