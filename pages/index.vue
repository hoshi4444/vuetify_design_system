<template>
  <v-app>
    <v-navigation-drawer permanent app width="320">
      <v-list class="pt-4">
        
        <!-- 基本ガイドライン -->
        <v-list-item
          v-for="(item, i) in basicItems"
          :key="i"
          :href="item.to"
        >
          <template v-slot:prepend>
            <v-icon>{{ item.icon }}</v-icon>
          </template>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
        
        <v-divider class="my-2"></v-divider>
        
        <!-- コンポーネント -->
        <v-list-item>
          <template v-slot:prepend>
            <v-icon>mdi-view-module</v-icon>
          </template>
          <v-list-item-title class="font-weight-bold">コンポーネント</v-list-item-title>
        </v-list-item>
        
        <v-list-item
          v-for="(component, i) in componentItems"
          :key="i"
          :href="component.to"
          :title="component.title"
          class="pl-8"
        >
          <template v-slot:prepend>
            <v-icon>{{ component.icon }}</v-icon>
          </template>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app>
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

        <!-- アクション要素 -->
        <section id="action-components" class="mb-10" style="padding-top: 120px;">
          <div class="d-flex align-center mb-6">
            <v-icon size="large" class="mr-3">mdi-gesture-tap</v-icon>
            <h2 class="text-h4">アクション要素</h2>
          </div>

          <v-card class="pa-6 mb-8">
            
            <h4 class="text-h6 mb-3">ボタン (v-btn)</h4>
            <p class="text-body-2 mb-4 text-medium-emphasis">
              ボタンはWEB画面において、操作の起点となる非常に重要な要素です。
              色も考慮し、テキストやアイコンもどのように出すかもしっかり決めましょう。
            </p>
            
            <v-table class="mb-4">
              <thead>
                <tr>
                  <th>ボタンの種類</th>
                  <th>用途例</th>
                  <th>使用数</th>
                  <th>色</th>
                  <th>variant</th>
                  <th>アイコン</th>
                  <th>備考</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>プライマリ</td>
                  <td>確定ボタンなど、画面内で最も重要な操作</td>
                  <td>画面に1つ</td>
                  <td>primary</td>
                  <td>elevated</td>
                  <td>prepend-icon: mdi-check</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>セカンダリ</td>
                  <td>キャンセルボタンやダウンロードボタンなど、補助的な操作</td>
                  <td>複数可</td>
                  <td>secondary</td>
                  <td>outlined</td>
                  <td>なし</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>テキスト</td>
                  <td>リンクなど優先度が低い操作</td>
                  <td>複数可</td>
                  <td>default</td>
                  <td>text</td>
                  <td>なし</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>アイコンボタン</td>
                  <td>ファイルのダウンロードやSlackのリンクなど、操作内容が明確な場合のみ使用可</td>
                  <td>複数可</td>
                  <td>primary/secondary</td>
                  <td>text</td>
                  <td>必須（操作内容が明確な場合）</td>
                  <td>ツールチップでホバー時に詳細の表示が必須</td>
                </tr>
              </tbody>
            </v-table>
            
            <div class="d-flex flex-wrap gap-3 mb-4">
              <v-btn color="primary" variant="elevated" prepend-icon="mdi-check">
                プライマリ
              </v-btn>
              <v-btn color="secondary" variant="outlined">
                セカンダリ
              </v-btn>
              <v-btn variant="text">
                テキスト
              </v-btn>
              <v-tooltip text="ダウンロード">
                <template v-slot:activator="{ props }">
                  <v-btn v-bind="props" icon="mdi-download" color="primary" variant="text"></v-btn>
                </template>
              </v-tooltip>
            </div>

            <h4 class="text-h6 mb-3">チップ (v-chip)</h4>
            <p class="text-body-2 mb-4 text-medium-emphasis">
              チップは主にタグやステータス、選択された項目を表示するために使用します。
              情報の分類や状態表示において重要な役割を果たします。
            </p>
            
            <v-table class="mb-4">
              <thead>
                <tr>
                  <th>チップの種類</th>
                  <th>用途例</th>
                  <th>色</th>
                  <th>variant</th>
                  <th>アイコン</th>
                  <th>備考</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>ステータス</td>
                  <td>完了、進行中、エラーなどの状態表示</td>
                  <td>success/warning/error</td>
                  <td>elevated</td>
                  <td>prepend-icon: 状態に応じて</td>
                  <td>削除不可</td>
                </tr>
                <tr>
                  <td>タグ</td>
                  <td>カテゴリ分類、ラベル表示</td>
                  <td>primary/secondary</td>
                  <td>outlined</td>
                  <td>なし</td>
                  <td>削除可能な場合はclosableを使用</td>
                </tr>
                <tr>
                  <td>選択項目</td>
                  <td>フィルター、選択済みアイテム</td>
                  <td>primary</td>
                  <td>elevated</td>
                  <td>なし</td>
                  <td>削除可能、クリック可能</td>
                </tr>
                <tr>
                  <td>情報表示</td>
                  <td>数値、件数などの補足情報</td>
                  <td>default</td>
                  <td>text</td>
                  <td>なし</td>
                  <td>削除不可、クリック不可</td>
                </tr>
              </tbody>
            </v-table>
            
            <div class="d-flex flex-wrap gap-2 mb-4">
              <v-chip color="success" variant="elevated" prepend-icon="mdi-check-circle">
                完了
              </v-chip>
              <v-chip color="warning" variant="elevated" prepend-icon="mdi-clock">
                進行中
              </v-chip>
              <v-chip color="primary" variant="outlined" closable>
                カテゴリ
              </v-chip>
              <v-chip color="default" variant="text">
                25件
              </v-chip>
            </div>
          </v-card>

        </section>

        <!-- フォーム・入力 -->
        <section id="form-components" class="mb-10" style="padding-top: 120px;">
          <div class="d-flex align-center mb-6">
            <v-icon size="large" class="mr-3">mdi-form-textbox</v-icon>
            <h2 class="text-h4">フォーム・入力</h2>
          </div>

          <v-card class="pa-6 mb-8">
            <p class="text-body-2 mb-4 text-medium-emphasis">
              フォーム要素は最も基本的なユーザー入力インターフェースです。
              ユーザビリティとバリデーション表示の一貫性が重要です。
            </p>
            
            <h4 class="text-h6 mb-3">テキスト入力 (v-text-field)</h4>
            <v-table class="mb-4">
              <thead>
                <tr>
                  <th>項目</th>
                  <th>設定値</th>
                  <th>備考</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>variant</td>
                  <td>outlined</td>
                  <td>統一感のため全てoutlinedを使用</td>
                </tr>
                <tr>
                  <td>density</td>
                  <td>default</td>
                  <td>基本的にdefault、省スペース時のみcompact</td>
                </tr>
                <tr>
                  <td>hide-details</td>
                  <td>false</td>
                  <td>エラーメッセージ表示のため基本的に無効</td>
                </tr>
                <tr>
                  <td>clearable</td>
                  <td>true</td>
                  <td>入力内容をクリアできるよう設定</td>
                </tr>
                <tr>
                  <td>placeholder</td>
                  <td>具体的な入力例</td>
                  <td>"例: 山田太郎" のように具体例を記載</td>
                </tr>
              </tbody>
            </v-table>

            <h4 class="text-h6 mb-3">セレクト (v-select)</h4>
            <v-table class="mb-4">
              <thead>
                <tr>
                  <th>項目</th>
                  <th>設定値</th>
                  <th>備考</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>variant</td>
                  <td>outlined</td>
                  <td>フォーム要素と統一</td>
                </tr>
                <tr>
                  <td>density</td>
                  <td>default</td>
                  <td>基本的にdefault使用</td>
                </tr>
                <tr>
                  <td>clearable</td>
                  <td>true</td>
                  <td>選択解除を可能にする</td>
                </tr>
                <tr>
                  <td>chips</td>
                  <td>multiple時にtrue</td>
                  <td>複数選択時は選択項目をチップで表示</td>
                </tr>
                <tr>
                  <td>no-data-text</td>
                  <td>"データがありません"</td>
                  <td>選択肢がない場合のメッセージ</td>
                </tr>
              </tbody>
            </v-table>

            <h4 class="text-h6 mb-3">オートコンプリート (v-autocomplete)</h4>
            <v-table class="mb-4">
              <thead>
                <tr>
                  <th>項目</th>
                  <th>設定値</th>
                  <th>備考</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>variant</td>
                  <td>outlined</td>
                  <td>フォーム要素と統一</td>
                </tr>
                <tr>
                  <td>clearable</td>
                  <td>true</td>
                  <td>選択解除を可能にする</td>
                </tr>
                <tr>
                  <td>no-filter</td>
                  <td>false</td>
                  <td>検索機能を有効にする</td>
                </tr>
                <tr>
                  <td>chips</td>
                  <td>multiple時にtrue</td>
                  <td>複数選択時は選択項目をチップで表示</td>
                </tr>
                <tr>
                  <td>no-data-text</td>
                  <td>"該当する項目がありません"</td>
                  <td>検索結果がない場合のメッセージ</td>
                </tr>
              </tbody>
            </v-table>

            <h4 class="text-h6 mb-3">チェックボックス (v-checkbox)</h4>
            <v-table class="mb-4">
              <thead>
                <tr>
                  <th>項目</th>
                  <th>設定値</th>
                  <th>備考</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>color</td>
                  <td>primary</td>
                  <td>選択時の色をプライマリカラーに統一</td>
                </tr>
                <tr>
                  <td>density</td>
                  <td>default</td>
                  <td>基本的にdefault使用</td>
                </tr>
                <tr>
                  <td>hide-details</td>
                  <td>true</td>
                  <td>単体使用時はエラー表示領域を非表示</td>
                </tr>
              </tbody>
            </v-table>

            <h4 class="text-h6 mb-3">ラジオボタン (v-radio)</h4>
            <v-table class="mb-4">
              <thead>
                <tr>
                  <th>項目</th>
                  <th>設定値</th>
                  <th>備考</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>color</td>
                  <td>primary</td>
                  <td>選択時の色をプライマリカラーに統一</td>
                </tr>
                <tr>
                  <td>density</td>
                  <td>default</td>
                  <td>基本的にdefault使用</td>
                </tr>
              </tbody>
            </v-table>

            <h4 class="text-h6 mb-3">スイッチ (v-switch)</h4>
            <v-table class="mb-4">
              <thead>
                <tr>
                  <th>項目</th>
                  <th>設定値</th>
                  <th>備考</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>color</td>
                  <td>primary</td>
                  <td>有効時の色をプライマリカラーに統一</td>
                </tr>
                <tr>
                  <td>inset</td>
                  <td>false</td>
                  <td>基本的には標準スタイルを使用</td>
                </tr>
                <tr>
                  <td>hide-details</td>
                  <td>true</td>
                  <td>単体使用時はエラー表示領域を非表示</td>
                </tr>
              </tbody>
            </v-table>

            <h4 class="text-h6 mb-3">スライダー (v-slider)</h4>
            <v-table class="mb-4">
              <thead>
                <tr>
                  <th>項目</th>
                  <th>設定値</th>
                  <th>備考</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>color</td>
                  <td>primary</td>
                  <td>スライダーの色をプライマリカラーに統一</td>
                </tr>
                <tr>
                  <td>step</td>
                  <td>用途に応じて設定</td>
                  <td>適切な刻み幅を設定</td>
                </tr>
                <tr>
                  <td>show-ticks</td>
                  <td>必要に応じてtrue</td>
                  <td>目盛り表示で値を分かりやすく</td>
                </tr>
                <tr>
                  <td>thumb-label</td>
                  <td>true</td>
                  <td>選択中の値を表示</td>
                </tr>
              </tbody>
            </v-table>

            <h4 class="text-h6 mb-3">ファイル入力 (v-file-input)</h4>
            <v-table class="mb-4">
              <thead>
                <tr>
                  <th>項目</th>
                  <th>設定値</th>
                  <th>備考</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>variant</td>
                  <td>outlined</td>
                  <td>フォーム要素と統一</td>
                </tr>
                <tr>
                  <td>show-size</td>
                  <td>true</td>
                  <td>ファイルサイズを表示</td>
                </tr>
                <tr>
                  <td>clearable</td>
                  <td>true</td>
                  <td>選択解除を可能にする</td>
                </tr>
                <tr>
                  <td>accept</td>
                  <td>適切な形式を指定</td>
                  <td>受け入れ可能なファイル形式を制限</td>
                </tr>
              </tbody>
            </v-table>
            
            <v-row>
              <v-col cols="12" md="6">
                <v-text-field
                  label="お名前"
                  placeholder="例: 山田太郎"
                  variant="outlined"
                  clearable
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-select
                  label="都道府県"
                  :items="['東京都', '大阪府', '愛知県', '北海道', '福岡県']"
                  variant="outlined"
                  clearable
                ></v-select>
              </v-col>
              <v-col cols="12">
                <v-textarea
                  label="お問い合わせ内容"
                  placeholder="ご質問やご要望をお聞かせください"
                  variant="outlined"
                  rows="3"
                  auto-grow
                  counter="500"
                ></v-textarea>
              </v-col>
              <v-col cols="12" md="6">
                <div class="mb-3">
                  <v-checkbox
                    label="メールマガジンを受け取る"
                    color="primary"
                    hide-details
                  ></v-checkbox>
                </div>
                <v-switch
                  label="通知を有効にする"
                  color="primary"
                  hide-details
                ></v-switch>
              </v-col>
              <v-col cols="12" md="6">
                <v-slider
                  label="満足度"
                  :min="1"
                  :max="10"
                  :step="1"
                  show-ticks
                  thumb-label
                  color="primary"
                ></v-slider>
              </v-col>
            </v-row>
          </v-card>

        </section>

        <!-- データ表示 -->
        <section id="data-components" class="mb-10" style="padding-top: 120px;">
          <div class="d-flex align-center mb-6">
            <v-icon size="large" class="mr-3">mdi-table</v-icon>
            <h2 class="text-h4">データ表示</h2>
          </div>

          <v-card class="pa-6 mb-8">
            <p class="text-body-2 mb-4 text-medium-emphasis">
              データ表示コンポーネントは情報を整理して視覚的に分かりやすく提示します。
              リストは構造化されたデータを縦方向に表示し、アイコンは左端に統一配置します。
              データテーブルは大量のデータを表形式で表示・操作し、1ページあたり25-50件を基本とし、ヘッダーには適切なソート機能を実装しましょう。
            </p>
            
            <h4 class="text-h6 mb-3">リスト (v-list)</h4>
            <v-list class="mb-4">
              <v-list-item
                prepend-icon="mdi-account"
                title="ユーザー管理"
                subtitle="ユーザーの追加・編集・削除"
              ></v-list-item>
              <v-divider></v-divider>
              <v-list-item
                prepend-icon="mdi-cog"
                title="システム設定"
                subtitle="基本設定とセキュリティ"
              ></v-list-item>
              <v-divider></v-divider>
              <v-list-item
                prepend-icon="mdi-chart-line"
                title="レポート"
                subtitle="データ分析と統計情報"
              ></v-list-item>
            </v-list>

            <h4 class="text-h6 mb-3">データテーブル (v-data-table)</h4>
            <v-data-table
              :headers="tableHeaders"
              :items="tableItems"
              :items-per-page="5"
              hover
              class="elevation-1"
            ></v-data-table>
          </v-card>

        </section>

        <!-- フィードバック・通知 -->
        <section id="feedback-components" class="mb-10" style="padding-top: 120px;">
          <div class="d-flex align-center mb-6">
            <v-icon size="large" class="mr-3">mdi-bell</v-icon>
            <h2 class="text-h4">フィードバック・通知</h2>
          </div>

          <v-card class="pa-6 mb-8">
            <p class="text-body-2 mb-4 text-medium-emphasis">
              フィードバック・通知コンポーネントは重要な情報をユーザーに伝えるためのコンポーネントです。
            </p>
            
            <h4 class="text-h6 mb-3">アラート (v-alert)</h4>
            <v-table class="mb-4">
              <thead>
                <tr>
                  <th>項目</th>
                  <th>設定値</th>
                  <th>備考</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>type</td>
                  <td>success/info/warning/error</td>
                  <td>内容に応じて適切なタイプを選択</td>
                </tr>
                <tr>
                  <td>closable</td>
                  <td>一時的なメッセージはtrue</td>
                  <td>ユーザーが閉じられるよう設定</td>
                </tr>
                <tr>
                  <td>prominent</td>
                  <td>重要度高い場合true</td>
                  <td>強調表示が必要な場合のみ</td>
                </tr>
                <tr>
                  <td>variant</td>
                  <td>tonal</td>
                  <td>基本的にはtonalで統一</td>
                </tr>
              </tbody>
            </v-table>
            
            <v-alert
              type="success"
              variant="tonal"
              class="mb-4"
              closable
            >
              データの保存が完了しました。
            </v-alert>

            <v-alert
              type="warning"
              variant="tonal"
              class="mb-4"
              closable
            >
              一部の項目が未入力です。確認してください。
            </v-alert>

            <v-alert
              type="error"
              variant="tonal"
              class="mb-4"
              closable
            >
              ネットワークエラーが発生しました。再度お試しください。
            </v-alert>

            <div class="d-flex align-center gap-3 mb-4">
              <v-progress-circular
                color="primary"
                indeterminate
                size="24"
              ></v-progress-circular>
              <span>処理中...</span>
            </div>

            <div class="d-flex align-center gap-3">
              <v-badge content="3" color="error">
                <v-icon>mdi-bell</v-icon>
              </v-badge>
              <span>通知 (3件)</span>
            </div>
          </v-card>

        </section>

        <!-- レイアウト・コンテナ -->
        <section id="layout-components" class="mb-10" style="padding-top: 120px;">
          <div class="d-flex align-center mb-6">
            <v-icon size="large" class="mr-3">mdi-view-grid</v-icon>
            <h2 class="text-h4">レイアウト・コンテナ</h2>
          </div>

          <v-card class="pa-6 mb-8">
            <p class="text-body-1 mb-6">
              レイアウト・コンテナコンポーネントは、コンテンツの配置と構造化に使用します。
            </p>

            <h3 class="text-h5 mb-4">#### コンテナ</h3>
            <p class="text-body-1 mb-4">
              ページ全体のコンテンツ幅を制御し、レスポンシブレイアウトの基盤となります。
            </p>

            <h4 class="text-h6 mb-3">コンテナ (v-container)</h4>
            <v-table class="mb-4">
              <thead>
                <tr>
                  <th>項目</th>
                  <th>設定値</th>
                  <th>備考</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>fluid</td>
                  <td>false</td>
                  <td>基本的には最大幅制限ありで使用</td>
                </tr>
                <tr>
                  <td>class</td>
                  <td>用途に応じて設定</td>
                  <td>pa-4, pa-6などでパディングを統一</td>
                </tr>
              </tbody>
            </v-table>

            <h4 class="text-h6 mb-3">カード (v-card)</h4>
            <v-table class="mb-4">
              <thead>
                <tr>
                  <th>項目</th>
                  <th>設定値</th>
                  <th>備考</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>variant</td>
                  <td>elevated</td>
                  <td>基本的にはelevatedで影をつける</td>
                </tr>
                <tr>
                  <td>class</td>
                  <td>pa-4, pa-6</td>
                  <td>内部パディングを統一</td>
                </tr>
              </tbody>
            </v-table>

            <v-row class="mb-6">
              <v-col cols="12" md="6">
                <v-card variant="elevated" class="pa-4">
                  <v-card-title>カードタイトル</v-card-title>
                  <v-card-text>
                    カードのコンテンツ例です。関連する情報をグループ化して表示できます。
                  </v-card-text>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn variant="text">キャンセル</v-btn>
                    <v-btn variant="contained" color="primary">確定</v-btn>
                  </v-card-actions>
                </v-card>
              </v-col>
            </v-row>
          </v-card>
        </section>

        <!-- ナビゲーション -->
        <section id="navigation-components" class="mb-10" style="padding-top: 120px;">
          <div class="d-flex align-center mb-6">
            <v-icon size="large" class="mr-3">mdi-navigation</v-icon>
            <h2 class="text-h4">ナビゲーション</h2>
          </div>

          <v-card class="pa-6 mb-8">
            <p class="text-body-1 mb-6">
              ナビゲーションコンポーネントは、ユーザーがアプリケーション内を移動するための導線を提供します。
            </p>

            <h4 class="text-h6 mb-3">タブ (v-tabs)</h4>
            <v-table class="mb-4">
              <thead>
                <tr>
                  <th>項目</th>
                  <th>設定値</th>
                  <th>備考</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>color</td>
                  <td>primary</td>
                  <td>アクティブタブの色を統一</td>
                </tr>
                <tr>
                  <td>density</td>
                  <td>default</td>
                  <td>基本的にはdefault使用</td>
                </tr>
                <tr>
                  <td>show-arrows</td>
                  <td>モバイル時true</td>
                  <td>横スクロール時の操作性向上</td>
                </tr>
              </tbody>
            </v-table>

            <v-tabs color="primary" class="mb-4">
              <v-tab>タブ1</v-tab>
              <v-tab>タブ2</v-tab>
              <v-tab>タブ3</v-tab>
            </v-tabs>

            <h4 class="text-h6 mb-3">ブレッドクラム (v-breadcrumbs)</h4>
            <v-table class="mb-4">
              <thead>
                <tr>
                  <th>項目</th>
                  <th>設定値</th>
                  <th>備考</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>divider</td>
                  <td>"/"</td>
                  <td>区切り文字を統一</td>
                </tr>
                <tr>
                  <td>items</td>
                  <td>階層に応じて設定</td>
                  <td>適切なリンクとラベルを設定</td>
                </tr>
              </tbody>
            </v-table>

            <v-breadcrumbs 
              :items="['ホーム', 'カテゴリ', '現在のページ']"
              divider="/"
              class="mb-4"
            ></v-breadcrumbs>
          </v-card>
        </section>

        <!-- オーバーレイ -->
        <section id="overlay-components" class="mb-10" style="padding-top: 120px;">
          <div class="d-flex align-center mb-6">
            <v-icon size="large" class="mr-3">mdi-layers</v-icon>
            <h2 class="text-h4">オーバーレイ</h2>
          </div>

          <v-card class="pa-6 mb-8">
            <p class="text-body-1 mb-6">
              オーバーレイコンポーネントは、モーダルウィンドウやポップアップなどの重要な情報表示に使用します。
            </p>

            <h4 class="text-h6 mb-3">ダイアログ (v-dialog)</h4>
            <v-table class="mb-4">
              <thead>
                <tr>
                  <th>項目</th>
                  <th>設定値</th>
                  <th>備考</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>max-width</td>
                  <td>600px</td>
                  <td>基本的な最大幅を設定</td>
                </tr>
                <tr>
                  <td>persistent</td>
                  <td>重要な場合true</td>
                  <td>背景クリックで閉じないよう設定</td>
                </tr>
                <tr>
                  <td>scrollable</td>
                  <td>内容が長い場合true</td>
                  <td>コンテンツのスクロールを可能にする</td>
                </tr>
              </tbody>
            </v-table>

            <h4 class="text-h6 mb-3">メニュー (v-menu)</h4>
            <v-table class="mb-4">
              <thead>
                <tr>
                  <th>項目</th>
                  <th>設定値</th>
                  <th>備考</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>close-on-click</td>
                  <td>true</td>
                  <td>項目選択時に自動で閉じる</td>
                </tr>
                <tr>
                  <td>offset-y</td>
                  <td>true</td>
                  <td>アクティベーター要素と重ならないよう配置</td>
                </tr>
              </tbody>
            </v-table>

            <v-menu>
              <template v-slot:activator="{ props }">
                <v-btn v-bind="props" variant="outlined">
                  メニューボタン
                  <v-icon end>mdi-chevron-down</v-icon>
                </v-btn>
              </template>
              <v-list>
                <v-list-item>
                  <v-list-item-title>オプション1</v-list-item-title>
                </v-list-item>
                <v-list-item>
                  <v-list-item-title>オプション2</v-list-item-title>
                </v-list-item>
                <v-list-item>
                  <v-list-item-title>オプション3</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </v-card>
        </section>

        <!-- ピッカー・選択 -->
        <section id="picker-components" class="mb-10" style="padding-top: 120px;">
          <div class="d-flex align-center mb-6">
            <v-icon size="large" class="mr-3">mdi-calendar</v-icon>
            <h2 class="text-h4">ピッカー・選択</h2>
          </div>

          <v-card class="pa-6 mb-8">
            <p class="text-body-1 mb-6">
              ピッカー・選択コンポーネントは、日付、時間、色などの特定の値を選択するために使用します。
            </p>

            <h4 class="text-h6 mb-3">日付ピッカー (v-date-picker)</h4>
            <v-table class="mb-4">
              <thead>
                <tr>
                  <th>項目</th>
                  <th>設定値</th>
                  <th>備考</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>color</td>
                  <td>primary</td>
                  <td>選択日の色をプライマリカラーに統一</td>
                </tr>
                <tr>
                  <td>locale</td>
                  <td>'ja'</td>
                  <td>日本語表示に設定</td>
                </tr>
                <tr>
                  <td>first-day-of-week</td>
                  <td>0</td>
                  <td>日曜日を週の始まりに設定</td>
                </tr>
              </tbody>
            </v-table>

            <h4 class="text-h6 mb-3">評価 (v-rating)</h4>
            <v-table class="mb-4">
              <thead>
                <tr>
                  <th>項目</th>
                  <th>設定値</th>
                  <th>備考</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>color</td>
                  <td>'amber'</td>
                  <td>星の色は黄色系で統一</td>
                </tr>
                <tr>
                  <td>half-increments</td>
                  <td>用途に応じて設定</td>
                  <td>0.5刻みの評価が必要な場合</td>
                </tr>
                <tr>
                  <td>readonly</td>
                  <td>表示のみの場合true</td>
                  <td>評価表示と入力で使い分け</td>
                </tr>
              </tbody>
            </v-table>

            <div class="mb-4">
              <p class="text-body-2 mb-2">評価サンプル:</p>
              <v-rating 
                v-model="rating" 
                color="amber" 
                half-increments
              ></v-rating>
            </div>
          </v-card>
        </section>

        <!-- メディア・表示 -->
        <section id="media-components" class="mb-10" style="padding-top: 120px;">
          <div class="d-flex align-center mb-6">
            <v-icon size="large" class="mr-3">mdi-image</v-icon>
            <h2 class="text-h4">メディア・表示</h2>
          </div>

          <v-card class="pa-6 mb-8">
            <p class="text-body-2 mb-4 text-medium-emphasis">
              メディア・表示コンポーネントは視覚的な要素でユーザー体験を向上させます。
            </p>
            
            <h4 class="text-h6 mb-3">アバター (v-avatar)</h4>
            <v-table class="mb-4">
              <thead>
                <tr>
                  <th>項目</th>
                  <th>設定値</th>
                  <th>備考</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>size</td>
                  <td>40px</td>
                  <td>基本サイズを40pxに統一</td>
                </tr>
                <tr>
                  <td>color</td>
                  <td>画像なしの場合設定</td>
                  <td>ランダム色またはユーザー固有色</td>
                </tr>
              </tbody>
            </v-table>
            
            <h4 class="text-h6 mb-3">評価 (v-rating)</h4>
            <v-table class="mb-4">
              <thead>
                <tr>
                  <th>項目</th>
                  <th>設定値</th>
                  <th>備考</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>color</td>
                  <td>amber</td>
                  <td>星の色は黄色系で統一</td>
                </tr>
                <tr>
                  <td>half-increments</td>
                  <td>用途に応じて設定</td>
                  <td>0.5刻みの評価が必要な場合</td>
                </tr>
                <tr>
                  <td>readonly</td>
                  <td>表示のみの場合true</td>
                  <td>評価表示と入力で使い分け</td>
                </tr>
              </tbody>
            </v-table>
            
            <div class="d-flex align-center gap-4 mb-4">
              <v-avatar color="primary" size="40">
                <span class="text-white">山田</span>
              </v-avatar>
              <div>
                <div class="font-weight-bold">山田太郎</div>
                <div class="text-caption text-medium-emphasis">管理者</div>
              </div>
            </div>

            <div class="d-flex align-center gap-3 mb-4">
              <v-icon color="primary">mdi-home</v-icon>
              <v-icon color="success">mdi-check</v-icon>
              <v-icon color="warning">mdi-alert</v-icon>
              <v-icon color="error">mdi-close</v-icon>
            </div>

            <v-rating
              v-model="rating"
              color="amber"
              half-increments
              hover
            ></v-rating>
          </v-card>
        </section>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import { ref } from 'vue'


const basicItems = ref([
  {
    title: 'はじめに',
    to: '#introduction',
    icon: 'mdi-information-outline'
  },
  {
    title: '色',
    to: '#colors',
    icon: 'mdi-palette'
  },
  {
    title: 'レイアウト',
    to: '#layout',
    icon: 'mdi-view-dashboard'
  },
  {
    title: '余白',
    to: '#spacing',
    icon: 'mdi-ruler'
  }
])

const componentItems = ref([
  {
    title: 'アクション要素',
    to: '#action-components',
    icon: 'mdi-gesture-tap'
  },
  {
    title: 'フォーム・入力',
    to: '#form-components',
    icon: 'mdi-form-textbox'
  },
  {
    title: 'レイアウト・コンテナ',
    to: '#layout-components',
    icon: 'mdi-view-grid'
  },
  {
    title: 'ナビゲーション',
    to: '#navigation-components',
    icon: 'mdi-navigation'
  },
  {
    title: 'データ表示',
    to: '#data-components',
    icon: 'mdi-table'
  },
  {
    title: 'フィードバック・通知',
    to: '#feedback-components',
    icon: 'mdi-bell'
  },
  {
    title: 'オーバーレイ',
    to: '#overlay-components',
    icon: 'mdi-layers'
  },
  {
    title: 'ピッカー・選択',
    to: '#picker-components',
    icon: 'mdi-calendar'
  },
  {
    title: 'メディア・表示',
    to: '#media-components',
    icon: 'mdi-image'
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

const rating = ref(4.5)

const tableHeaders = ref([
  { title: 'ID', value: 'id' },
  { title: '名前', value: 'name' },
  { title: 'メール', value: 'email' },
  { title: 'ステータス', value: 'status' },
  { title: 'アクション', value: 'actions', sortable: false }
])

const tableItems = ref([
  { id: 1, name: '山田太郎', email: 'yamada@example.com', status: 'アクティブ' },
  { id: 2, name: '佐藤花子', email: 'sato@example.com', status: 'アクティブ' },
  { id: 3, name: '田中次郎', email: 'tanaka@example.com', status: '無効' },
  { id: 4, name: '鈴木美咲', email: 'suzuki@example.com', status: 'アクティブ' },
  { id: 5, name: '高橋健太', email: 'takahashi@example.com', status: 'アクティブ' }
])
</script>