<template>
    <form @submit.prevent="checkValue" class="text-center border-2 border-emerald-600 p-3 rounded-lg xl:w-1/2 w-80 mx-auto">
        <div>
            <label for="currencies-list-from-choice">From: </label>
            <input
            v-model="fromCurrency"
            list="currencies-list-from"
            name="currencies-list-from-choice"
            id="currencies-list-from-choice"
            class="border-2 border-emerald-600 rounded-md mb-2 xl:w-1/2 w-full uppercase px-2 py-1 mr-14"
            required
            >
            <datalist id="currencies-list-from">
                <option :value="key" v-for="(value, key) in currencies" :key="key">{{ key.toUpperCase() }} - {{ value }}</option>
            </datalist>
        </div>

        <div>
            <label for="currencies-list-to-choice">To: </label>
            <input v-model="toCurrency" list="currencies-list-to" name="currencies-list-to-choice" id="currencies-list-to-choice"
            class="border-2 border-emerald-600 rounded-md mb-2 xl:w-1/2 w-full uppercase px-2 py-1 mr-14" required>
            <datalist id="currencies-list-to">
                <option :value="key" v-for="(value, key) in currencies" :key="key">{{ key.toUpperCase() }} - {{ value }}</option>
            </datalist>
        </div>
        <label for="amount">Amount: </label>
        <input id="amount" name="amount" type="number" step="0.01" v-model="convertMoney"
        class="border-2 border-emerald-600 rounded-md mb-2 xl:w-1/2 w-full uppercase px-2 py-1 mr-14" required>
        <button class="block mx-auto bg-emerald-500 font-bold text-white border rounded-lg px-4 py-2" type="submit">CONVERT</button>
    </form>
    <p v-if="price" class="text-4xl text-center mt-6 border-b border-rose-100 sm:w-1/2 md:w-1/4 w-1/6 mx-auto">{{ price }} <span class="text-emerald-600 font-semibold">{{ currentCurrency.toUpperCase() }}</span></p>
</template>

<script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        fromCurrency: '',
        toCurrency: '',
        convertMoney: '',
        price: 0,
        currencies: [],
        currentCurrency: '',
      };
    },
    async created() {
        await axios.get('/api/convert', {
            headers: {'Access-Control-Allow-Origin': true},
            mode: 'cors',
        }).then(response => {
            console.log(response.data);
            this.currencies = response.data;
        })
    },
    methods: {
        async checkValue() {
            try {
                const response = await axios.post(`/api/convert`, {
                    fromCurrency: this.fromCurrency,
                    toCurrency: this.toCurrency,
                    convertMoney: this.convertMoney,
                    headers: {'Access-Control-Allow-Origin': true},
                    mode: 'cors',
                });
                this.currentCurrency = this.toCurrency,
                this.price = response.data;
            } catch (error) {
                console.error(error);
            }
        }
    }
  };
</script>

<style scoped>
label {
    display: inline-block;
    width: 60px;
    margin-right: 5px;
}
</style>