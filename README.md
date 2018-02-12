## Google Tango + DeepLearnJS + WebAR で物体認識アプリ

画面にとらえた物体の位置を把握し、それが何かをAIで検知、ARで表示するWebアプリです。  


開発環境として ([DeepLearnJS](https://github.com/PAIR-code/deeplearnjs/tree/master/starter/es6/) を使用しています。環境設定等に躓いたら参考にしてください。  

### 環境構築

```bash
$ yarn prep # Installs node modules and prepares the environment.
```

### ビルド

```
$ yarn build
```

`dist/bundle.js` が作られます。  

```
$ yarn deploy
```

`dist/bundle.min.js` も作られます。  

eof  
