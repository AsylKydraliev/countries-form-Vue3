<template>
  <form>
    <base-alert :show="showAlert" :text="alertText"/>
    <div>
      <countries-list
          :countries="countries"
          @selected-value="fetchRegions"
      />
    </div>
    <div v-if="regions.length">
      <regions-list
          :regions="regions"
          @selected-value="fetchCities"
      />
    </div>
    <div v-if="cities.length">
      <cities-l-ist
          label="Выберите город"
          :cities="cities"
      />
    </div>
    <div v-if="loading">Загрузка...</div>
  </form>
</template>

<script>

import { getCitiesByRegion, getCountries, getRegionsByCountry } from "@/services/CountriesService";
import CountriesList from "@/components/CountriesList.vue";
import RegionsList from "@/components/RegionsList.vue";
import CitiesLIst from "@/components/CitiesLIst.vue";
import BaseAlert from "@/shared/BaseAlert.vue";

export default {
  name: 'FormView',
  components: {CitiesLIst, RegionsList, CountriesList, BaseAlert},
  data() {
    return {
      selectedCountry: '',
      selectedRegion: '',
      selectedCity: '',
      countries: [],
      regions: [],
      cities: [],
      showAlert: false,
      loading: false,
      alertText: '',
    }
  },
  async created() {
    await this.fetchCountries();
  },
  methods: {
    async fetchCountries() {
      try {
        this.countries = await getCountries();
        this.countryOptionsFormatter(this.countries);
      } catch (e) {
        this.alertText = 'Что-то пошло не так. Попробуйте еще раз';
      }
    },

    async fetchRegions(countryName) {
      try {
        this.showAlert = false;
        this.loading = true;
        this.regions = await getRegionsByCountry(countryName);

        if (this.cities === []) {
          this.showAlert = true;
          this.alertText = 'Список регионов этой страны отсутствует';
        } else {
          this.showAlert = false;
        }
        this.regionOptionsFormatter(this.regions);
      } catch (e) {
        this.alertText = 'Что-то пошло не так. Попробуйте еще раз';
      } finally {
        this.loading = false;
      }
    },

    async fetchCities(regionName) {
      try {
        this.loading = true;
        this.cities = await getCitiesByRegion(regionName);

        if (!this.cities.length) {
          this.showAlert = true;
          this.alertText = 'Список городов этого региона отсутствует';
        } else {
          this.showAlert = false;
        }
        this.citiesOptionsFormatter(this.cities);
      } catch (e) {
        this.alertText = 'Что-то пошло не так. Попробуйте еще раз';
      } finally {
        this.loading = false;
      }
    },

    countryOptionsFormatter(options) {
      this.countries = options.map((option) => {
        return {
          text: option.country_name,
          key: option.country_short_name,
          value: option.country_name,
        }
      })
    },

    regionOptionsFormatter(options) {
      this.regions = options.map((option) => {
        return {
          text: option.state_name,
          key: option.state_name,
          value: option.state_name,
        }
      })
    },

    citiesOptionsFormatter(options) {
      this.cities = options.map((option) => {
        return {
          text: option.city_name,
          key: option.city_name,
          value: option.city_name,
        }
      })
    }
  }
}
</script>
