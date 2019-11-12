<template>
  <div class="antialiased text-gray-900">
    <div class="bg-gray-800 min-h-screen py-32 px-6">
      <AccountDropdown/>
    </div>
  </div>
</template>

<script>
import AccountDropdown from '@/components/AccountDropdown'
export default {
  name: 'Dropdown',
  components: {
    AccountDropdown
  },
}
</script>