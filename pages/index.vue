<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" app>
      <v-list>
        <v-list-item>
          <v-list-item-title class="text-h6">
            ガイドライン
          </v-list-item-title>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :href="item.to"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Vuetify デザインシステム</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <v-container class="pa-6">
        <!-- はじめに -->
        <section id="introduction" class="mb-10" style="padding-top: 120px;">
          <div class="d-flex align-center mb-6">
            <v-icon size="large" class="mr-3">mdi-information-outline</v-icon>
            <h1 class="text-h3">はじめに</h1>
          </div>
          <v-card class="pa-6">
            <p class="text-body-1 mb-4">
              Vuetifyとは、Vueで広く使われているUIフレームワークライブラリです。
            </p>
            <p class="text-body-1 mb-4">
              ある程度綺麗な画面を作れる上、付属のコンポーネントにも便利なものが多くてとても良いライブラリなのですが、
              その分柔軟性も高く、油断すると画面の統一感が無くなってしまうことがあります。
            </p>
            <p class="text-body-1">
              そんな時のため、指標とできるようなガイドラインを作成しました。
              よろしければぜひご活用ください。
            </p>
          </v-card>
        </section>

        <!-- 色 -->
        <section id="colors" class="mb-10" style="padding-top: 120px;">
          <div class="d-flex align-center mb-6">
            <v-icon size="large" class="mr-3">mdi-palette</v-icon>
            <h2 class="text-h4">色</h2>
          </div>
          <v-card class="pa-6 mb-6">
            <p class="text-body-1 mb-4">
              Vuetifyでは以下のように、役割に応じて色を設定することができます。
            </p>
            <v-code class="mb-4">
              <pre>colors: {
  background: '#FFFFFF',
  surface: '#FFFFFF',
  'surface-bright': '#FFFFFF',
  'surface-light': '#EEEEEE',
  'surface-variant': '#424242',
  'on-surface-variant': '#EEEEEE',
  primary: '#1867C0',
  'primary-darken-1': '#1F5592',
  secondary: '#48A9A6',
  'secondary-darken-1': '#018786',
  error: '#B00020',
  info: '#2196F3',
  success: '#4CAF50',
  warning: '#FB8C00'
}</pre>
            </v-code>
            <v-alert type="warning" class="mb-4">
              無闇に色を使ってしまう画面が見づらくなってしまうため、<strong>基本的に役割が設定された色のみ使う</strong>ようにしましょう。
            </v-alert>
            <p class="text-body-1">
              色の設定はcreateVuetifyのthemeというオプションで追加編集が可能です。必要に応じて編集してください。
            </p>
          </v-card>

          <!-- カラーパレット -->
          <v-card class="pa-6">
            <h3 class="text-h6 mb-4">カラーパレット</h3>
            <v-row>
              <v-col v-for="color in colors" :key="color.name" cols="12" md="6" lg="4">
                <v-card class="pa-4" :color="color.name">
                  <v-card-title class="text-body-1" :class="color.textClass">
                    {{ color.label }}
                  </v-card-title>
                  <v-card-subtitle :class="color.textClass">
                    {{ color.name }}
                  </v-card-subtitle>
                </v-card>
              </v-col>
            </v-row>
          </v-card>
        </section>

        <!-- レイアウト -->
        <section id="layout" class="mb-10" style="padding-top: 120px;">
          <div class="d-flex align-center mb-6">
            <v-icon size="large" class="mr-3">mdi-view-dashboard</v-icon>
            <h2 class="text-h4">レイアウト</h2>
          </div>
          <v-card class="pa-6">
            <p class="text-body-1 mb-4">
              レイアウトは統一感を出すために非常に重要な要素です。
              画面内で何をどのように配置するか、必ず事前にチームで決めておくべきでしょう。
            </p>
            <p class="text-body-1 mb-4">
              以下のような、ほとんどのアプリケーションに存在する要素について、予めどのように配置していくかを考えておきましょう。
            </p>
            <v-list class="mb-4">
              <v-list-item v-for="item in layoutItems" :key="item">
                <v-list-item-title>{{ item }}</v-list-item-title>
              </v-list-item>
            </v-list>
            <p class="text-body-1 mb-4">
              幸い、Vuetifyにはこれらの大きなレイアウトのためのコンポーネントがすでに用意されているため、活用していきましょう。
            </p>
            <v-btn
              href="https://vuetifyjs.com/ja/features/application-layout/"
              target="_blank"
              color="primary"
              variant="outlined"
            >
              参考: Vuetify Application Layout
              <v-icon class="ml-2">mdi-open-in-new</v-icon>
            </v-btn>
          </v-card>
        </section>

        <!-- 余白 -->
        <section id="spacing" class="mb-10" style="padding-top: 120px;">
          <div class="d-flex align-center mb-6">
            <v-icon size="large" class="mr-3">mdi-ruler</v-icon>
            <h2 class="text-h4">余白</h2>
          </div>
          <v-card class="pa-6">
            <p class="text-body-1 mb-4">
              余白はレイアウトと混同しがちな概念ですが、本記事ではレイアウトは画面構成全体のことで、
              余白は要素同士の間隔のことを示すようにします。
            </p>
            <p class="text-body-1 mb-4">
              余白も規則を決めておかないと、まとまりが無くなる上にコンテンツが見難くなります。
              「何と何はどれくらい余白を取るべきか」を明文化するようにしましょう。
            </p>
            <p class="text-body-1 mb-4">例として以下です。</p>
            <v-list class="mb-4">
              <v-list-item v-for="item in spacingItems" :key="item">
                <v-list-item-title>{{ item }}</v-list-item-title>
              </v-list-item>
            </v-list>
            <p class="text-body-1 mb-4">
              余白関連のスタイルはVuetifyの方でユーティリティクラスとして定義されてますので、
              こちらも積極的に使うようにしましょう。
            </p>
            <v-btn
              href="https://vuetifyjs.com/ja/styles/spacing/#section-4f7f304465b9"
              target="_blank"
              color="primary"
              variant="outlined"
            >
              参考: Vuetify Spacing
              <v-icon class="ml-2">mdi-open-in-new</v-icon>
            </v-btn>
          </v-card>
        </section>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import { ref } from 'vue'

const drawer = ref(false)

const items = ref([
  {
    title: 'はじめに',
    to: '#introduction'
  },
  {
    title: '色',
    to: '#colors'
  },
  {
    title: 'レイアウト',
    to: '#layout'
  },
  {
    title: '余白',
    to: '#spacing'
  }
])

const colors = ref([
  { name: 'primary', label: 'Primary', textClass: 'text-white' },
  { name: 'secondary', label: 'Secondary', textClass: 'text-white' },
  { name: 'success', label: 'Success', textClass: 'text-white' },
  { name: 'info', label: 'Info', textClass: 'text-white' },
  { name: 'warning', label: 'Warning', textClass: 'text-white' },
  { name: 'error', label: 'Error', textClass: 'text-white' },
  { name: 'surface', label: 'Surface', textClass: 'text-black' },
  { name: 'surface-light', label: 'Surface Light', textClass: 'text-black' }
])

const layoutItems = ref([
  'グローバルヘッダー',
  'サイドバー',
  '画面ヘッダー',
  '画面コンテンツ',
  'フッター'
])

const spacingItems = ref([
  'コンテンツの横幅は〇〇px',
  'タイトルとコンテンツの間は〇〇px',
  'リストの間は〇〇px',
  '...etc'
])
</script>