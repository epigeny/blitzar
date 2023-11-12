var e=`<template>
  <div>
    <BlitzTable
      :schemaColumns="schemaColumns"
      :schemaGrid="schemaGrid"
      :rows="rows"
      :gridToggleField="{ component: blitzGridToggle }"
      :gridBlitzFormOptions="{ columnCount: 2 }"
    />
  </div>
</template>

<style scoped>
::v-deep(.blitz-table--grid-card) {
  border: thin solid #dfe2e5;
}
::v-deep(.blitz-table--grid-card .blitz-field__label) {
  font-weight: 200;
}
</style>

<script>
import { markRaw } from 'vue'
import { BlitzGridToggle } from 'blitzar'
import 'blitzar/dist/style.css'

const blitzGridToggle = markRaw(BlitzGridToggle)

const schemaColumns = [
  { id: 'firstName', label: 'First Name' },
  { id: 'lastName', label: 'Last Name' },
  { id: 'company', label: 'Company' },
  { id: 'birthdate', label: 'Birthdate' },
  { id: 'balance', label: 'Balance', parseValue: (val) => val.toLocaleString() },
]

const schemaGrid = [
  { id: 'company', label: 'Company', span: true },
  { id: 'firstName', label: 'First Name', span: 1 },
  { id: 'lastName', label: 'Last Name', span: 1 },
]

const rows = [
  {
    balance: 93683,
    birthdate: '1946-07-22',
    firstName: 'Harper',
    lastName: 'Nolan',
    company: 'Tortor At Risus LLC',
  },
  { balance: 69632, birthdate: '1945-11-27', firstName: 'Whoopi', lastName: 'David', company: 'Ipsum Institute' }, // prettier-ignore
  { balance: 75903, birthdate: '1955-10-01', firstName: 'Peter', lastName: 'Mendez', company: 'Curabitur Dictum LLC' }, // prettier-ignore
  { balance: 53509, birthdate: '1977-06-21', firstName: 'Harrison', lastName: 'Miller', company: 'Enim Etiam Imperdiet Industries' }, // prettier-ignore
  { balance: 93450, birthdate: '2017-11-27', firstName: 'Wendy', lastName: 'Strong', company: 'Ac PC' }, // prettier-ignore
  { balance: 64590, birthdate: '1975-12-10', firstName: 'Kyla', lastName: 'Dalton', company: 'Urna Nec Luctus PC' }, // prettier-ignore
  { balance: 72444, birthdate: '2001-07-31', firstName: 'Aimee', lastName: 'Stephens', company: 'Tempus Incorporated' }, // prettier-ignore
  { balance: 99856, birthdate: '1972-01-28', firstName: 'Phelan', lastName: 'Jennings', company: 'Consectetuer Adipiscing Elit LLP' }, // prettier-ignore
  { balance: 83325, birthdate: '1966-11-17', firstName: 'Xena', lastName: 'Emerson', company: 'Mollis Foundation' }, // prettier-ignore
  { balance: 50981, birthdate: '1995-07-26', firstName: 'Althea', lastName: 'Mcdaniel', company: 'Non Foundation' }, // prettier-ignore
  { balance: 97869, birthdate: '1945-10-01', firstName: 'Shad', lastName: 'Beard', company: 'Mollis Incorporated' }, // prettier-ignore
]

export default {
  setup() {
    return {
      rows,
      schemaColumns,
      schemaGrid,
      blitzGridToggle,
    }
  },
}
<\/script>
`;export{e as default};
