<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-col align="center" justify="center" cols="6">
        <v-card class="card-design">
          <v-tabs
            v-model="tab"
            color="deep-purple-accent-4"
            align-tabs="center"
          >
            <v-tab :value="'update'">Update profile</v-tab>
            <v-tab :value="'settings'">Account settings</v-tab>
          </v-tabs>
          <v-window v-model="tab">
            <v-window-item :value="'update'">
              <div>
                <UpdateProfileComponent
                  @updateUserData="handleUserData"
                ></UpdateProfileComponent>
              </div>
            </v-window-item>

            <v-window-item :value="'settings'">
              <div>
                <AccountSettingsComponent></AccountSettingsComponent></div
            ></v-window-item>
          </v-window>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import UpdateProfileComponent from "@/components/UpdateProfileComponent.vue";
import AccountSettingsComponent from "@/components/AccountSettingsComponent.vue";
export default {
  data: () => ({
    tab: "update",
  }),
  components: {
    UpdateProfileComponent,
    AccountSettingsComponent,
  },
};
</script>

<style>
.card-design {
  width: 800px;
  height: fit-content;
}
.text-field-design {
  font-size: 16px;
  width: 300px;
  height: 48px;
  margin-bottom: 50px;
  color: #000000;
}
</style>