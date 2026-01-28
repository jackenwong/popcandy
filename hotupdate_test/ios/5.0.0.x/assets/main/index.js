System.register("chunks:///_virtual/App.ts", ['cc', './AppRes.ts', './AppHelper.ts', './AppNative.ts', './AppAudio.ts', './AppData.ts', './AppUser.ts', './PopData.ts', './AppViewMgr.ts', './AppUI.ts', './AppAdHelper.ts', './AppStoreHelper.ts', './AppRemoteConfig.ts', './AppHotUpdate.ts', './AppDirector.ts', './AppResolution.ts'], function (exports) {
  var cclegacy, Component, Node, director, _decorator, AppRes, AppHelper, AppNative, AppAudio, AppDataCtl, AppUser, PopDataCtl, AppViewMgr, AppUI, AppAdHelper, AppStoreHelper, AppRemoteConfig, AppHotUpdate, AppDirector, AppResolution;

  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      Component = module.Component;
      Node = module.Node;
      director = module.director;
      _decorator = module._decorator;
    }, function (module) {
      AppRes = module.AppRes;
    }, function (module) {
      AppHelper = module.AppHelper;
    }, function (module) {
      AppNative = module.AppNative;
    }, function (module) {
      AppAudio = module.AppAudio;
    }, function (module) {
      AppDataCtl = module.AppDataCtl;
    }, function (module) {
      AppUser = module.AppUser;
    }, function (module) {
      PopDataCtl = module.PopDataCtl;
    }, function (module) {
      AppViewMgr = module.AppViewMgr;
    }, function (module) {
      AppUI = module.AppUI;
    }, function (module) {
      AppAdHelper = module.AppAdHelper;
    }, function (module) {
      AppStoreHelper = module.AppStoreHelper;
    }, function (module) {
      AppRemoteConfig = module.AppRemoteConfig;
    }, function (module) {
      AppHotUpdate = module.AppHotUpdate;
    }, function (module) {
      AppDirector = module.AppDirector;
    }, function (module) {
      AppResolution = module.AppResolution;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "f39fdwhJ9lMkLbJ00uMsLKA", "App", undefined);

      const {
        ccclass,
        property
      } = _decorator;
      let gAppHelper = exports('gAppHelper', null); // export let gAppLayoutHelper:AppLayoutHelper = null;

      let gAppRes = exports('gAppRes', null);
      let gAppAudio = exports('gAppAudio', null);
      let gAppNative = exports('gAppNative', null);
      let gAppResolution = exports('gAppResolution', null);
      let gAppViewMgr = exports('gAppViewMgr', null);
      let gAppUI = exports('gAppUI', null);
      let gAppDirector = exports('gAppDirector', null);
      let gAppAdHelper = exports('gAppAdHelper', null);
      let gAppStoreHelper = exports('gAppStoreHelper', null);
      let gAppHotUpdate = exports('gAppHotUpdate', null);

      function setupComponents() {
        gAppHelper = exports('gAppHelper', gApp.addComponent(AppHelper)); // gAppLayoutHelper = gApp.addComponent(AppLayoutHelper);

        gAppRes = exports('gAppRes', gApp.addComponent(AppRes));
        gAppAudio = exports('gAppAudio', gApp.addComponent(AppAudio));
        gAppNative = exports('gAppNative', gApp.addComponent(AppNative));
        gAppResolution = exports('gAppResolution', gApp.addComponent(AppResolution));
        gAppViewMgr = exports('gAppViewMgr', gApp.addComponent(AppViewMgr));
        gAppUI = exports('gAppUI', gApp.addComponent(AppUI));
        gAppDirector = exports('gAppDirector', gApp.addComponent(AppDirector));
        gAppAdHelper = exports('gAppAdHelper', gApp.addComponent(AppAdHelper));
        gAppStoreHelper = exports('gAppStoreHelper', gApp.addComponent(AppStoreHelper));
        gAppHotUpdate = exports('gAppHotUpdate', gApp.addComponent(AppHotUpdate));
        gApp.addComponent(AppRemoteConfig);
        gApp.addComponent(AppDataCtl);
        gApp.addComponent(AppUser);
        gApp.addComponent(PopDataCtl);
      } // two ways to init gApp.
      // 1. (code) call App.init() in the first scene.
      // 2. (drag and drop)drag App component onto the first scene. 


      let App = exports('App', (_dec = ccclass('App'), _dec(_class = class App extends Component {
        static init() {
          if (!gApp) {
            let appNode = new Node('App');
            appNode.addComponent(App);
            director.getScene().addChild(appNode);
          }
        }

        onLoad() {
          if (!gApp) {
            gApp = exports('gApp', this);
            director.addPersistRootNode(this.node);
            setupComponents();
          }
        }

      }) || _class));
      let gApp = exports('gApp', null);

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/AppAboutUsUI.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './App.ts', './gAppConfig.ts'], function (exports) {
  var _applyDecoratedDescriptor, _initializerDefineProperty, cclegacy, TextAsset, RichText, Label, Node, _decorator, Component, sys, gAppHelper, gAppHotUpdate, gAppConfig;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      TextAsset = module.TextAsset;
      RichText = module.RichText;
      Label = module.Label;
      Node = module.Node;
      _decorator = module._decorator;
      Component = module.Component;
      sys = module.sys;
    }, function (module) {
      gAppHelper = module.gAppHelper;
      gAppHotUpdate = module.gAppHotUpdate;
    }, function (module) {
      gAppConfig = module.gAppConfig;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;

      cclegacy._RF.push({}, "bafaaTLMbZFvbHSE2fO4rIp", "AppAboutUsUI", undefined);

      const {
        ccclass,
        property
      } = _decorator;
      let AppAboutUsUI = exports('AppAboutUsUI', (_dec = ccclass('AppAboutUsUI'), _dec2 = property(TextAsset), _dec3 = property(RichText), _dec4 = property(Label), _dec5 = property(Node), _dec(_class = (_class2 = class AppAboutUsUI extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "txtAsset", _descriptor, this);

          _initializerDefineProperty(this, "labelContent", _descriptor2, this);

          _initializerDefineProperty(this, "labelVersion", _descriptor3, this);

          _initializerDefineProperty(this, "loading", _descriptor4, this);
        }

        start() {
          gAppHelper.showPanel(this);
          this.scheduleOnce(() => {
            this.labelContent.string = this.txtAsset.text;
            this.loading.active = false;
          }, 0.2);
          this.labelVersion.string = "v" + (sys.isNative ? gAppHotUpdate.getLocalVersion() : gAppConfig.version);
        }

        onCloseClick() {
          gAppHelper.closePanel(this);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "txtAsset", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "labelContent", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "labelVersion", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "loading", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/AppAdHelper.ts", ['cc', './App.ts', './AppUser.ts', './AppData.ts', './gAppConfig.ts'], function (exports) {
  var cclegacy, Component, sys, randomRangeInt, _decorator, gAppNative, gAppUI, gAppHelper, gUserData, gAppData, gAppConfig;

  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      Component = module.Component;
      sys = module.sys;
      randomRangeInt = module.randomRangeInt;
      _decorator = module._decorator;
    }, function (module) {
      gAppNative = module.gAppNative;
      gAppUI = module.gAppUI;
      gAppHelper = module.gAppHelper;
    }, function (module) {
      gUserData = module.gUserData;
    }, function (module) {
      gAppData = module.gAppData;
    }, function (module) {
      gAppConfig = module.gAppConfig;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "9de03e1NpFHqpsEdldKfY+Q", "AppAdHelper", undefined);

      const {
        ccclass,
        property
      } = _decorator;
      let AppAdHelper = exports('AppAdHelper', (_dec = ccclass('AppAdHelper'), _dec(_class = class AppAdHelper extends Component {
        constructor(...args) {
          super(...args);
          this._isRewardedAdReady = false;
          this.RewardedAdShowedTime = 0;
          this._isInterstitialAdReady = false;
          this.interstitialAdShowedTime = 0;
          this.bannerAdShowing = false;
        }

        start() {
          gAppNative.node.on(gAppNative.MSG_INTERSTITIAL_AD_READY, param => {
            this._isInterstitialAdReady = param == "1";
          }, this);
          gAppNative.node.on(gAppNative.MSG_REWARDED_AD_READY, param => {
            this._isRewardedAdReady = param == "1";
          }, this);
          gAppNative.node.on(gAppNative.MSG_REWARDED_AD_BONUS, this.onRewardedAdBonus, this);
          this.schedule(() => {
            if (this.canLoadAd() && !this.isRewardedAdReady()) {
              gAppNative.requestRewardedAd();
            }
          }, 60, 1000, 60);
          this.schedule(() => {
            if (gUserData.adRemoved) {
              return;
            }

            if (this.canLoadAd() && !this.isInterstitialAdReady()) {
              gAppNative.requestInterstitialAd();
            }
          }, 60, 1000, 60);
        }

        canLoadAd() {
          return gAppData.appDuration > 60 * 30 || gAppConfig.testing;
        }

        isRewardedAdReady() {
          let result = false;

          if (sys.os === sys.OS.ANDROID) {
            result = this._isRewardedAdReady;
          } else {
            result = gAppNative.isRewardedAdReady();
          }

          console.log("isRewardedAdReady():", result);
          return result;
        }

        showRewardedAd() {
          if (this.isRewardedAdReady()) {
            this.RewardedAdShowedTime = sys.now();
            gAppNative.showRewardedAd();
          }
        }

        onRewardedAdBonus() {
          gAppUI.showRewardMessage(randomRangeInt(5, 10), () => {});
        }

        isInterstitialAdReady() {
          let result = false;

          if (sys.os === sys.OS.ANDROID) {
            result = this._isInterstitialAdReady;
          } else {
            result = gAppNative.isInterstitialAdReady();
          }

          console.log("isInterstitialAdReady():", result);
          return result;
        }

        isTimeToShowInterstitialAd() {
          // if video ad or interstitial ad showed recently, then not to show that frequencely.
          let interval = gAppConfig.interstitial_ad_interval * 1000;

          if (sys.now() - this.interstitialAdShowedTime > interval && sys.now() - this.RewardedAdShowedTime > interval) {
            return true;
          }

          return false;
        }

        showInterstitialAd() {
          if (this.isInterstitialAdReady() && this.isTimeToShowInterstitialAd()) {
            this.interstitialAdShowedTime = sys.now();
            gAppNative.showInterstitialAd();
          }
        }

        isBannerAdEnabled() {
          if (gAppHelper.isChannelApproved() || gAppData.launchCount > 5 && gAppData.appDuration > 60 * 60 * 3) {
            if (!gUserData.adRemoved) {
              return true;
            }
          }

          return false;
        }

        isBannerAdShowing() {
          return this.bannerAdShowing;
        }

        showBannerAd() {
          if (this.isBannerAdEnabled()) {
            this.bannerAdShowing = true;
            gAppNative.showBannerAd(); // gAppNative.callFunction(gNativeFunctionInfo.showBannerAd);
          }
        }

        hideBannerAd() {
          this.bannerAdShowing = false;
          gAppNative.hideBannerAd(); // gAppNative.callFunction(gNativeFunctionInfo.hideBannerAd);
        }

      }) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/AppAudio.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './AppData.ts', './gAppUtils.ts'], function (exports) {
  var _applyDecoratedDescriptor, _initializerDefineProperty, cclegacy, AudioSource, _decorator, Component, clamp01, gAppData, gAppUtils;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      AudioSource = module.AudioSource;
      _decorator = module._decorator;
      Component = module.Component;
      clamp01 = module.clamp01;
    }, function (module) {
      gAppData = module.gAppData;
    }, function (module) {
      gAppUtils = module.gAppUtils;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;

      cclegacy._RF.push({}, "da0b3BIJdFBp4tjGTZOhZUB", "AppAudio", undefined);

      const {
        ccclass,
        property
      } = _decorator;
      let AppAudio = exports('AppAudio', (_dec = ccclass('AppAudio'), _dec2 = property(AudioSource), _dec3 = property(AudioSource), _dec(_class = (_class2 = class AppAudio extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "musicAudioSource", _descriptor, this);

          _initializerDefineProperty(this, "soundAudioSource", _descriptor2, this);

          this.curPlayingMusic = null;
        }

        onLoad() {
          this.musicAudioSource = gAppUtils.addComponentNodeTo(AudioSource, this.node);
          this.soundAudioSource = gAppUtils.addComponentNodeTo(AudioSource, this.node);
        }

        start() {
          console.log("AppAudio.start()");
          this.musicAudioSource.volume = gAppData.musicVolume;
          this.soundAudioSource.volume = gAppData.soundVolume;
        }

        pauseMusic() {
          this.musicAudioSource.pause();
        }

        playMusic(clip, loop) {
          if (this.musicAudioSource.volume < 0.5) {
            return;
          } // if(clip && typeof(clip) == 'string' && clip.length > 0){
          //     clip = gAppRes.getAudioClip(clip);
          // }


          if (!clip) {
            console.warn("clip is null");
            return;
          }

          if (this.curPlayingMusic == clip) {
            return;
          }

          this.musicAudioSource.stop();
          this.musicAudioSource.clip = null;
          this.scheduleOnce(() => {
            this.musicAudioSource.loop = true; //loop?true:false;        

            this.musicAudioSource.clip = clip;
            this.musicAudioSource.play();
            this.curPlayingMusic = clip;
          });
        }

        playSound(clip) {
          if (this.soundAudioSource.volume < 0.5) {
            return;
          } // if(clip && typeof(clip) == 'string' && clip.length > 0){
          //     clip = gAppRes.getAudioClip(clip);
          // }


          if (!clip) {
            console.warn("clip is null");
            return;
          } //let volScale = this.audioSource.volume ? this.soundVolume/this.audioSource.volume : 0;


          this.soundAudioSource.playOneShot(clip, 1);
        }

        setMusicVolume(flag) {
          flag = clamp01(flag);
          gAppData.musicVolume = flag;
          this.musicAudioSource.volume = flag;
        }

        setSoundVolume(flag) {
          gAppData.soundVolume = flag;
          this.soundAudioSource.volume = flag;
        }

        openMusic() {
          this.setMusicVolume(1.0);
        }

        closeMusic() {
          this.setMusicVolume(0);
        }

        openSound() {
          this.setSoundVolume(1.0);
        }

        closeSound() {
          this.setSoundVolume(0);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "musicAudioSource", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "soundAudioSource", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/AppAudioSounds.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _initializerDefineProperty, cclegacy, AudioClip, _decorator, Component, log, js, warn, assetManager;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      AudioClip = module.AudioClip;
      _decorator = module._decorator;
      Component = module.Component;
      log = module.log;
      js = module.js;
      warn = module.warn;
      assetManager = module.assetManager;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _dec29, _dec30, _dec31, _dec32, _dec33, _dec34, _dec35, _dec36, _dec37, _dec38, _dec39, _dec40, _dec41, _dec42, _dec43, _dec44, _dec45, _dec46, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24, _descriptor25, _descriptor26, _descriptor27, _descriptor28, _descriptor29, _descriptor30, _descriptor31, _descriptor32, _descriptor33, _descriptor34, _descriptor35, _descriptor36, _descriptor37, _descriptor38, _descriptor39, _descriptor40, _descriptor41, _descriptor42, _descriptor43, _descriptor44, _descriptor45, _class3;

      cclegacy._RF.push({}, "e40d9+RpidMZ7sJmBrjRyl3", "AppAudioSounds", undefined);

      const {
        ccclass,
        property
      } = _decorator;
      let AppAudioSounds = exports('AppAudioSounds', (_dec = ccclass('AppAudioSounds'), _dec2 = property(AudioClip), _dec3 = property(AudioClip), _dec4 = property(AudioClip), _dec5 = property(AudioClip), _dec6 = property(AudioClip), _dec7 = property(AudioClip), _dec8 = property(AudioClip), _dec9 = property(AudioClip), _dec10 = property(AudioClip), _dec11 = property(AudioClip), _dec12 = property(AudioClip), _dec13 = property(AudioClip), _dec14 = property(AudioClip), _dec15 = property(AudioClip), _dec16 = property(AudioClip), _dec17 = property(AudioClip), _dec18 = property(AudioClip), _dec19 = property(AudioClip), _dec20 = property(AudioClip), _dec21 = property(AudioClip), _dec22 = property(AudioClip), _dec23 = property(AudioClip), _dec24 = property(AudioClip), _dec25 = property(AudioClip), _dec26 = property(AudioClip), _dec27 = property(AudioClip), _dec28 = property(AudioClip), _dec29 = property(AudioClip), _dec30 = property(AudioClip), _dec31 = property(AudioClip), _dec32 = property(AudioClip), _dec33 = property(AudioClip), _dec34 = property(AudioClip), _dec35 = property(AudioClip), _dec36 = property(AudioClip), _dec37 = property(AudioClip), _dec38 = property(AudioClip), _dec39 = property(AudioClip), _dec40 = property(AudioClip), _dec41 = property(AudioClip), _dec42 = property(AudioClip), _dec43 = property(AudioClip), _dec44 = property(AudioClip), _dec45 = property({
        type: AudioClip
      }), _dec46 = property({
        type: AudioClip
      }), _dec(_class = (_class2 = (_class3 = class AppAudioSounds extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "BuyMagics", _descriptor, this);

          _initializerDefineProperty(this, "CalcRemaining", _descriptor2, this);

          _initializerDefineProperty(this, "CalcRemainingEnd", _descriptor3, this);

          _initializerDefineProperty(this, "Hit", _descriptor4, this);

          _initializerDefineProperty(this, "PopStar", _descriptor5, this);

          _initializerDefineProperty(this, "Firework", _descriptor6, this);

          _initializerDefineProperty(this, "GainBonus", _descriptor7, this);

          _initializerDefineProperty(this, "GameOver", _descriptor8, this);

          _initializerDefineProperty(this, "LevelEnd", _descriptor9, this);

          _initializerDefineProperty(this, "MainMenuBg", _descriptor10, this);

          _initializerDefineProperty(this, "GamePlayBg", _descriptor11, this);

          _initializerDefineProperty(this, "MoveDown", _descriptor12, this);

          _initializerDefineProperty(this, "MoveDown2", _descriptor13, this);

          _initializerDefineProperty(this, "NewHighScore", _descriptor14, this);

          _initializerDefineProperty(this, "ReplaceGem", _descriptor15, this);

          _initializerDefineProperty(this, "Select", _descriptor16, this);

          _initializerDefineProperty(this, "SelectGem", _descriptor17, this);

          _initializerDefineProperty(this, "StageIntroIn", _descriptor18, this);

          _initializerDefineProperty(this, "StageIntroOut", _descriptor19, this);

          _initializerDefineProperty(this, "StartGame", _descriptor20, this);

          _initializerDefineProperty(this, "TargetClear", _descriptor21, this);

          _initializerDefineProperty(this, "Bomb", _descriptor22, this);

          _initializerDefineProperty(this, "Shuffle", _descriptor23, this);

          _initializerDefineProperty(this, "AddGold", _descriptor24, this);

          _initializerDefineProperty(this, "ReduceGold", _descriptor25, this);

          _initializerDefineProperty(this, "GoodJob", _descriptor26, this);

          _initializerDefineProperty(this, "GoodJob1", _descriptor27, this);

          _initializerDefineProperty(this, "GoodJob2", _descriptor28, this);

          _initializerDefineProperty(this, "GoodJob3", _descriptor29, this);

          _initializerDefineProperty(this, "GoodJob4", _descriptor30, this);

          _initializerDefineProperty(this, "GoodJob5", _descriptor31, this);

          _initializerDefineProperty(this, "Combo1", _descriptor32, this);

          _initializerDefineProperty(this, "Combo2", _descriptor33, this);

          _initializerDefineProperty(this, "Combo3", _descriptor34, this);

          _initializerDefineProperty(this, "Combo4", _descriptor35, this);

          _initializerDefineProperty(this, "Combo5", _descriptor36, this);

          _initializerDefineProperty(this, "Combo6", _descriptor37, this);

          _initializerDefineProperty(this, "Combo7", _descriptor38, this);

          _initializerDefineProperty(this, "Combo8", _descriptor39, this);

          _initializerDefineProperty(this, "Combo9", _descriptor40, this);

          _initializerDefineProperty(this, "Combo10", _descriptor41, this);

          _initializerDefineProperty(this, "Combo11", _descriptor42, this);

          _initializerDefineProperty(this, "Combo12", _descriptor43, this);

          _initializerDefineProperty(this, "GoodJobs", _descriptor44, this);

          _initializerDefineProperty(this, "Combos", _descriptor45, this);
        }

        onLoad() {
          log(`${js.getClassName(this)}.onLoad()`);
          SND = exports('SND', this);
        }

        static loadClips(onComplete) {
          log(`AppAudioSounds.loadClips()`);

          if (this.bLoaded) {
            warn(`bLoaded already loaded.`);
            return;
          }

          let bundleName = "audio";
          assetManager.loadBundle(bundleName, (err, data) => {
            if (err) {
              warn(`loadBundle(${bundleName}) error!`);
              return;
            }

            let bundle = data;
            let dir = "./";
            log(`loadDir(${dir})`);
            bundle.loadDir(dir, (err, data) => {
              if (err) {
                log(`loadDir(${dir}) error!`);
                return;
              } // log(`${data.toString()}`);


              data.forEach(e => {
                SND[e.name] = e;
              });
              SND.GoodJobs = [SND.GoodJob1, SND.GoodJob2, SND.GoodJob3, SND.GoodJob4, SND.GoodJob5];
              SND.Combos = [SND.Combo1, SND.Combo2, SND.Combo3, SND.Combo4, SND.Combo5, SND.Combo6, SND.Combo7, SND.Combo8, SND.Combo9, SND.Combo10, SND.Combo11, SND.Combo12];
              this.bLoaded = true;
              onComplete && onComplete();
            });
          });
        }

      }, _class3.bLoaded = false, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "BuyMagics", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "CalcRemaining", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "CalcRemainingEnd", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "Hit", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "PopStar", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "Firework", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "GainBonus", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "GameOver", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "LevelEnd", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "MainMenuBg", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "GamePlayBg", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "MoveDown", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "MoveDown2", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "NewHighScore", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "ReplaceGem", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "Select", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "SelectGem", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "StageIntroIn", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "StageIntroOut", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, "StartGame", [_dec21], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, "TargetClear", [_dec22], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, "Bomb", [_dec23], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor23 = _applyDecoratedDescriptor(_class2.prototype, "Shuffle", [_dec24], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor24 = _applyDecoratedDescriptor(_class2.prototype, "AddGold", [_dec25], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor25 = _applyDecoratedDescriptor(_class2.prototype, "ReduceGold", [_dec26], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor26 = _applyDecoratedDescriptor(_class2.prototype, "GoodJob", [_dec27], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor27 = _applyDecoratedDescriptor(_class2.prototype, "GoodJob1", [_dec28], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor28 = _applyDecoratedDescriptor(_class2.prototype, "GoodJob2", [_dec29], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor29 = _applyDecoratedDescriptor(_class2.prototype, "GoodJob3", [_dec30], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor30 = _applyDecoratedDescriptor(_class2.prototype, "GoodJob4", [_dec31], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor31 = _applyDecoratedDescriptor(_class2.prototype, "GoodJob5", [_dec32], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor32 = _applyDecoratedDescriptor(_class2.prototype, "Combo1", [_dec33], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor33 = _applyDecoratedDescriptor(_class2.prototype, "Combo2", [_dec34], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor34 = _applyDecoratedDescriptor(_class2.prototype, "Combo3", [_dec35], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor35 = _applyDecoratedDescriptor(_class2.prototype, "Combo4", [_dec36], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor36 = _applyDecoratedDescriptor(_class2.prototype, "Combo5", [_dec37], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor37 = _applyDecoratedDescriptor(_class2.prototype, "Combo6", [_dec38], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor38 = _applyDecoratedDescriptor(_class2.prototype, "Combo7", [_dec39], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor39 = _applyDecoratedDescriptor(_class2.prototype, "Combo8", [_dec40], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor40 = _applyDecoratedDescriptor(_class2.prototype, "Combo9", [_dec41], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor41 = _applyDecoratedDescriptor(_class2.prototype, "Combo10", [_dec42], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor42 = _applyDecoratedDescriptor(_class2.prototype, "Combo11", [_dec43], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor43 = _applyDecoratedDescriptor(_class2.prototype, "Combo12", [_dec44], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor44 = _applyDecoratedDescriptor(_class2.prototype, "GoodJobs", [_dec45], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor45 = _applyDecoratedDescriptor(_class2.prototype, "Combos", [_dec46], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      })), _class2)) || _class));
      let SND = exports('SND', new AppAudioSounds());

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/AppBlockerUI.ts", ['cc'], function (exports) {
  var cclegacy, Component, _decorator;

  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      Component = module.Component;
      _decorator = module._decorator;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "da6cefnN2RMXpm9tLQHPl1z", "AppBlockerUI", undefined);

      const {
        ccclass,
        property
      } = _decorator;
      let AppBlockerUI = exports('AppBlockerUI', (_dec = ccclass('AppBlockerUI'), _dec(_class = class AppBlockerUI extends Component {
        start() {// [3]
        } // static create(){
        //     // const comp = instantiate(prefab).getComponent(AppBlockerUI);
        //     const comp = gAppHelper.instantiateComponent(AppBlockerUI);
        //     return comp;
        // }
        // static show(){
        //     console.log("AppBlocker.show()");
        //     let comp = AppBlockerUI.create();
        //     comp.node.parent = find("Canvas");
        // }
        // static hide(){
        //     console.log("AppBlocker.hide()");
        //     let waiting = find("Canvas/"+js.getClassName(AppBlockerUI));
        //     if(!waiting)
        //         console.warn("can't find 'Canvas/AppBlockerUI' node.");
        //     if(waiting){
        //         waiting.active = true;
        //         waiting.destroy();
        //     }
        // }
        // static antiDoubleClicks(){
        //     AppBlockerUI.show();
        //     gAppHelper.scheduleOnce(()=>{AppBlockerUI.hide();}, 0.1);
        // }


      }) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/AppCanvasBg.ts", ['cc', './App.ts', './AppResolution.ts'], function (exports) {
  var cclegacy, Component, size, UITransform, _decorator, gAppResolution, AppResolution;

  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      Component = module.Component;
      size = module.size;
      UITransform = module.UITransform;
      _decorator = module._decorator;
    }, function (module) {
      gAppResolution = module.gAppResolution;
    }, function (module) {
      AppResolution = module.AppResolution;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "a3d20aJgbhFvoTfYwPOWu8W", "AppCanvasBg", undefined); // import { AppCanvas, gAppCanvas } from './AppCanvas';


      const {
        ccclass,
        property
      } = _decorator;
      let AppCanvasBg = exports('AppCanvasBg', (_dec = ccclass('AppCanvasBg'), _dec(_class = class AppCanvasBg extends Component {
        constructor(...args) {
          super(...args);
          this.sizeBgOrg = size(0, 0);
        }

        onLoad() {
          this.sizeBgOrg = this.node.getComponent(UITransform).contentSize;
          gAppResolution.node.on(AppResolution.EVT_SIZE_CHANGED, () => {
            this.updateBg();
          }, this);
        }

        start() {
          this.updateBg();
        }

        updateBg() {
          let canvasW = gAppResolution.size.width;
          let canvasH = gAppResolution.size.height;
          let bgOrgW = this.sizeBgOrg.width;
          let bgOrgH = this.sizeBgOrg.height;
          let trans = this.node.getComponent(UITransform);
          trans.width = canvasW;
          trans.height = trans.width / bgOrgW * bgOrgH;

          if (trans.height < canvasH) {
            trans.height = canvasH;
            trans.width = trans.height / bgOrgH * bgOrgW;
          }
        }

      }) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/AppCoinInfo.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './AppUser.ts', './App.ts', './gAppConfig.ts', './gAppConstant.ts'], function (exports) {
  var _applyDecoratedDescriptor, _initializerDefineProperty, cclegacy, Label, Node, v3, _decorator, Component, find, instantiate, Widget, UIOpacity, tween, log, gUserData, gAppUser, AppUser, gAppUI, gAppConfig, LAYER_FG2;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      Label = module.Label;
      Node = module.Node;
      v3 = module.v3;
      _decorator = module._decorator;
      Component = module.Component;
      find = module.find;
      instantiate = module.instantiate;
      Widget = module.Widget;
      UIOpacity = module.UIOpacity;
      tween = module.tween;
      log = module.log;
    }, function (module) {
      gUserData = module.gUserData;
      gAppUser = module.gAppUser;
      AppUser = module.AppUser;
    }, function (module) {
      gAppUI = module.gAppUI;
    }, function (module) {
      gAppConfig = module.gAppConfig;
    }, function (module) {
      LAYER_FG2 = module.LAYER_FG2;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _class3;

      cclegacy._RF.push({}, "3a6cboYSqNJMriulId73y4m", "AppCoinInfo", undefined);

      const {
        ccclass,
        property
      } = _decorator;
      let topLayerCoinInfo = null;
      let AppCoinInfo = exports('AppCoinInfo', (_dec = ccclass('AppCoinInfo'), _dec2 = property(Label), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Label), _dec6 = property(Label), _dec(_class = (_class2 = (_class3 = class AppCoinInfo extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "labelCoinValue", _descriptor, this);

          _initializerDefineProperty(this, "nodeSymbolAdd", _descriptor2, this);

          _initializerDefineProperty(this, "nodeCoinIcon", _descriptor3, this);

          _initializerDefineProperty(this, "labelAdd", _descriptor4, this);

          _initializerDefineProperty(this, "labelSubtract", _descriptor5, this);
        }

        onLoad() {
          if (find(LAYER_FG2) != this.node.parent) {
            AppCoinInfo.instance = this;
          }
        }

        start() {
          this.nodeSymbolAdd.active = gAppConfig.storeEnabled;

          if (!topLayerCoinInfo) {
            let clone = instantiate(this.node);
            topLayerCoinInfo = clone.getComponent(AppCoinInfo);
            topLayerCoinInfo.getComponent(Widget).enabled = false;
            topLayerCoinInfo.node.parent = find(LAYER_FG2);
            topLayerCoinInfo.node.active = false;
          }

          this.labelCoinValue.string = gUserData.coin.toString();
          gAppUser.node.on(AppUser.EVT_COIN_CHANGED, delta => {
            this.updateCoin(delta);
          }, this);
          this.scheduleOnce(() => {
            AppCoinInfo.coinWorldPos = v3(this.nodeCoinIcon.worldPosition);

            if (topLayerCoinInfo && this != topLayerCoinInfo) {
              let worldPos = v3(this.node.worldPosition);
              topLayerCoinInfo.node.setWorldPosition(worldPos);
            }
          });

          if (topLayerCoinInfo && this != topLayerCoinInfo) {
            this.getComponent(UIOpacity).opacity = 0;
            tween(this.getComponent(UIOpacity)).to(0.5, {
              opacity: 255
            }).start();
          }
        }

        updateCoin(delta) {
          if (!this.node.active) {
            this.node.active = true;
          }

          this.labelCoinValue.string = gUserData.coin.toString();
          AppCoinInfo.showOnTopLayer(delta);
          if (this == topLayerCoinInfo) ;else {
            let worldPos = v3(this.node.worldPosition);
            topLayerCoinInfo.node.setWorldPosition(worldPos);
          }
        }

        static showOnTopLayer(delta) {
          log(`AppCoinInfo.showOnTopLayer(), topTweenCount:${AppCoinInfo.topTweenCount}`);
          topLayerCoinInfo.node.active = true;
          tween(topLayerCoinInfo.labelCoinValue.node).to(0.1, {
            scale: v3(1.2, 1.2, 1.2)
          }).to(0.1, {
            scale: v3(1, 1, 1)
          }).delay(1.5).call(() => {
            AppCoinInfo.showOnOriginLayer();
          }).start();
          AppCoinInfo.topTweenCount++;
          let lableDelta = instantiate(delta > 0 ? topLayerCoinInfo.labelAdd.node : topLayerCoinInfo.labelSubtract.node);
          lableDelta.getComponent(Label).string = delta > 0 ? `+${delta}` : `${delta}`;
          lableDelta.parent = topLayerCoinInfo.node.parent;
          let worldPosLabelDelta = v3(topLayerCoinInfo.labelCoinValue.node.worldPosition);
          worldPosLabelDelta.y -= 30;
          lableDelta.worldPosition = worldPosLabelDelta;
          lableDelta.active = true;
          tween(lableDelta).by(1.0, {
            worldPosition: v3(0, 60)
          }).destroySelf().start();
        }

        static showOnOriginLayer() {
          log(`AppCoinInfo.showOnOriginLayer(), topTweenCount:${AppCoinInfo.topTweenCount}`);
          AppCoinInfo.topTweenCount--;

          if (AppCoinInfo.topTweenCount <= 0) {
            topLayerCoinInfo.node.active = false;
          }
        }

        onAddClick() {
          if (!gAppConfig.storeEnabled) {
            return;
          }

          gAppUI.showStore();
        }

      }, _class3.instance = null, _class3.coinWorldPos = v3(), _class3.topTweenCount = 0, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "labelCoinValue", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "nodeSymbolAdd", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "nodeCoinIcon", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "labelAdd", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "labelSubtract", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/AppData.ts", ['cc', './ViewModel.ts', './gAppConfig.ts', './gAppUtils.ts'], function (exports) {
  var cclegacy, Component, log, macro, _decorator, VM, gAppConfig, gAppUtils;

  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      Component = module.Component;
      log = module.log;
      macro = module.macro;
      _decorator = module._decorator;
    }, function (module) {
      VM = module.VM;
    }, function (module) {
      gAppConfig = module.gAppConfig;
    }, function (module) {
      gAppUtils = module.gAppUtils;
    }],
    execute: function () {
      var _dec, _class3;

      cclegacy._RF.push({}, "9e145cP+2pFOpxwWcS0W4Ed", "AppData", undefined);

      const {
        ccclass,
        property
      } = _decorator;

      class AppData {
        constructor() {
          this.version = gAppConfig.version;
          this.launchCount = 0;
          this.appDuration = 0;
          this.musicVolume = 0.8;
          this.soundVolume = 1.0;
          this.privacyPolicyAccepted = false;
          this.ratedVersion = "0.1";
          this.inAppRatingFirstShowTime = 0;
          this.inAppRatingShowedCount = 0;
          this.dataImportedFrom = "";
        }

      }

      const gAppData = exports('gAppData', new AppData());
      const keyV1_Candy = "DataApp";
      const keyV1 = keyV1_Candy;
      const key = "AppDataV2";
      const vmTag = "gAppData"; // VM tag

      let data = gAppData;
      let AppDataCtl = exports('AppDataCtl', (_dec = ccclass('AppDataCtl'), _dec(_class3 = class AppDataCtl extends Component {
        onLoad() {
          log(`AppDataCtl.onLoad()`); // debugger;

          if (!gAppDataCtl) {
            gAppDataCtl = exports('gAppDataCtl', this); // this.node.parent = gApp.node;

            this.loadData();
            this.bindVM();
          }

          localStorage.setItem("version", gAppConfig.version);
          data.launchCount++;
          this.schedule(this.updateAppStats, 5, macro.REPEAT_FOREVER, 1);
        }

        updateAppStats(interval) {
          //        console.log("interval:"+interval);
          data.appDuration += interval;
          data.appDuration = Math.floor(data.appDuration); // log(`AppStatsCtl app_duration:${Math.floor(data.appDuration/60)} minute(s)`, );
          // console.log("AppStatsCtl app_duration(minutes):" + Math.floor(data.appDuration/60));
          // console.log("cc.director.getTotalTime():", director.getTotalTime()/60000);
        }

        bindVM() {
          VM.add(data, vmTag, true); // user for ViewModel components

          VM.bindPath(vmTag, (n, o, path) => {
            this.scheduleOnce(() => {
              this.saveData();
            });
          }, this);
        }

        loadData() {
          // {
          //     let len = localStorage.length;
          //     for (let i = 0; i < len; i++) {
          //         let key = localStorage.key(i); 
          //         let value = localStorage.getItem(key);
          //         log(`key:${key},value:${value}`);
          //     }
          // }        
          const keyPrev = keyV1;
          let strPrevData = localStorage.getItem(keyPrev);

          if (strPrevData && strPrevData.length > 0) {
            log(`Loading previous data of ${keyPrev}, ${strPrevData}`);
            let item = localStorage.getItem(keyPrev);

            if (item) {
              let info = JSON.parse(item);

              if (info && info.screenDuration > 0) {
                data.appDuration = info.screenDuration;
              }
            }

            gAppUtils.loadObject(keyPrev, data);
            localStorage.removeItem(keyPrev);
            let keyAppStats = "AppStats";
            let strAppStats = localStorage.getItem(keyAppStats);

            if (strAppStats && strAppStats.length > 0) {
              gAppUtils.loadObject(keyAppStats, data);
              localStorage.removeItem(keyAppStats);
            }

            this.saveData();
            return;
          }

          gAppUtils.loadObject(key, data);
        }

        saveData() {
          gAppUtils.saveObject(key, data);
        }

      }) || _class3));
      let gAppDataCtl = exports('gAppDataCtl', null);

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/AppDebugBg.ts", ['cc', './gAppConfig.ts'], function (exports) {
  var cclegacy, Component, UIOpacity, _decorator, gAppConfig;

  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      Component = module.Component;
      UIOpacity = module.UIOpacity;
      _decorator = module._decorator;
    }, function (module) {
      gAppConfig = module.gAppConfig;
    }],
    execute: function () {
      var _dec, _dec2, _class;

      cclegacy._RF.push({}, "71fa5Fk2TtDLLADgUwXNe0K", "AppDebugBg", undefined);

      const {
        ccclass,
        property,
        executeInEditMode
      } = _decorator;
      let AppDebugBg = exports('AppDebugBg', (_dec = ccclass('AppDebugBg'), _dec2 = executeInEditMode(true), _dec(_class = _dec2(_class = class AppDebugBg extends Component {
        start() {
          this.getComponent(UIOpacity).opacity = 0; //255;

          this.node.children[0].active = gAppConfig.testing;
        }

        update(dt) {}

      }) || _class) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/AppDebugUI.ts", ['cc', './App.ts', './gAppCommon.ts', './gAppUtils.ts', './gAppConfig.ts'], function (exports) {
  var cclegacy, Component, find, instantiate, Label, game, _decorator, gAppHelper, gAppHotUpdate, setObjKeysAsValues, gAppUtils, gAppConfig;

  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      Component = module.Component;
      find = module.find;
      instantiate = module.instantiate;
      Label = module.Label;
      game = module.game;
      _decorator = module._decorator;
    }, function (module) {
      gAppHelper = module.gAppHelper;
      gAppHotUpdate = module.gAppHotUpdate;
    }, function (module) {
      setObjKeysAsValues = module.setObjKeysAsValues;
    }, function (module) {
      gAppUtils = module.gAppUtils;
    }, function (module) {
      gAppConfig = module.gAppConfig;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "5e1f5jjR2FC6oy+akTBhHaN", "AppDebugUI", undefined);

      const {
        ccclass,
        property
      } = _decorator;

      var configs = /*#__PURE__*/function (configs) {
        configs["testing"] = "";
        configs["storeEnabled"] = "";
        configs["isVideoAdEnabled"] = "";
        configs["clearHotUpdateCache"] = "";
        return configs;
      }(configs || {});

      setObjKeysAsValues(configs);
      let AppDebugUI = exports('AppDebugUI', (_dec = ccclass('AppDebugUI'), _dec(_class = class AppDebugUI extends Component {
        start() {
          let nodeConfigs = find("Panel/Configs", this.node);
          let arrConfigs = Object.getOwnPropertyNames(configs);

          for (let i = 0; i < arrConfigs.length; i++) {
            const e = arrConfigs[i];
            let item = i < nodeConfigs.children.length ? nodeConfigs.children[i] : instantiate(nodeConfigs.children[0]);
            item.parent = nodeConfigs;
            item.name = e;
            gAppUtils.bindClick(item, this.onItemClick, this, e);
          }

          this.updateItems();
          gAppHelper.showPanel(this);
        }

        updateItems() {
          let arrItems = find("Panel/Configs", this.node);
          arrItems.children.forEach(e => {
            e.getChildByName("LabelTitle").getComponent(Label).string = e.name;
            e.getChildByName("LabelValue").getComponent(Label).string = gAppConfig[e.name];
          });
        }

        onItemClick(e) {
          if (e == configs.testing) {
            gAppConfig.testing = !gAppConfig.testing;
          } else if (e == configs.storeEnabled) {
            gAppConfig.storeEnabled = !gAppConfig.storeEnabled;
          } else if (e == configs.clearHotUpdateCache) {
            gAppHotUpdate.clearAssetsDir();
            game.restart();
          }

          this.updateItems();
        }

        onOKClick() {
          gAppHelper.closePanel(this);
        }

      }) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/AppDirector.ts", ['cc', './App.ts', './gAppConstant.ts'], function (exports) {
  var cclegacy, _decorator, Component, log, find, instantiate, gAppRes, SCENE_BUNDLE;

  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
      log = module.log;
      find = module.find;
      instantiate = module.instantiate;
    }, function (module) {
      gAppRes = module.gAppRes;
    }, function (module) {
      SCENE_BUNDLE = module.SCENE_BUNDLE;
    }],
    execute: function () {
      var _dec, _class, _class2;

      cclegacy._RF.push({}, "d1b56eniHhM4p7xYxbg7kXJ", "AppDirector", undefined);

      const {
        ccclass,
        property
      } = _decorator;

      function viewNameByScene(sceneName) {
        return `${sceneName}View`;
      }

      let AppDirector = exports('AppDirector', (_dec = ccclass('AppDirector'), _dec(_class = (_class2 = class AppDirector extends Component {
        preloadScene(sceneName, onComplete) {
          log(`AppDirector.preloadScene(${sceneName})`);
          let sceneViewName = viewNameByScene(sceneName);
          gAppRes.loadBundlePrefabs(SCENE_BUNDLE[sceneName], () => {
            let prefab = gAppRes.getPrefab(sceneViewName);

            if (prefab) {
              onComplete && onComplete();
            }
          });
        }

        loadScene(sceneName, onComplete) {
          log(`AppDirector.loadScene(${sceneName})`);
          let sceneViewName = viewNameByScene(sceneName);
          let prefab = gAppRes.getPrefab(sceneViewName);

          if (prefab) {
            let layer = find("Canvas/LayerView");

            for (let i = 0; i < layer.children.length; i++) {
              const e = layer.children[i];
              e.destroy();
            } // layer.removeAllChildren();


            let sceneView = instantiate(prefab);
            layer.addChild(sceneView);
            onComplete && onComplete();
          } else {
            gAppRes.loadBundlePrefabs(SCENE_BUNDLE[sceneName], () => {
              let prefab = gAppRes.getPrefab(sceneViewName);

              if (prefab) {
                this.loadScene(sceneName, onComplete);
              }
            });
          }
        }

      }, _class2.EVT_SceneLoaded = "EVT_SceneLoaded", _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/AppFadeOutUI.ts", ['cc'], function (exports) {
  var cclegacy, Component, UIOpacity, tween, _decorator;

  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      Component = module.Component;
      UIOpacity = module.UIOpacity;
      tween = module.tween;
      _decorator = module._decorator;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "722ebr1z/VDKpYFkvYWjQw5", "AppFadeOutUI", undefined);

      const {
        ccclass,
        property
      } = _decorator;
      let AppFadeOutUI = exports('AppFadeOutUI', (_dec = ccclass('AppFadeOutUI'), _dec(_class = class AppFadeOutUI extends Component {
        constructor(...args) {
          super(...args);
          this.interval = 0.6;
        }

        start() {
          let opac = this.getComponent(UIOpacity);
          opac.opacity = 255;
          tween(opac).to(this.interval, {
            opacity: 0
          }).start();
        }

      }) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/AppGrid.ts", ['cc'], function (exports) {
  var cclegacy, Component, size, UITransform, log, Layout, _decorator;

  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      Component = module.Component;
      size = module.size;
      UITransform = module.UITransform;
      log = module.log;
      Layout = module.Layout;
      _decorator = module._decorator;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "c27a0zNCclLF6YUWY0yXurM", "AppGrid", undefined);

      const {
        ccclass,
        property
      } = _decorator;
      let AppGrid = exports('AppGrid', (_dec = ccclass('AppGrid'), _dec(_class = class AppGrid extends Component {
        constructor(...args) {
          super(...args);
          this.trans = null;
          this.transContainer = null;
          this.transContainerSize = size(0, 0);
        }

        start() {
          this.trans = this.getComponent(UITransform);
          this.transContainer = this.node.parent.getComponent(UITransform);
          this.transContainerSize = size(this.transContainer.width, this.transContainer.height);
        }

        update(deltaTime) {
          if (this.transContainer.width == this.transContainerSize.width && this.transContainer.height == this.transContainerSize.height) {
            return;
          } // log('update, old canvas size:', Math.floor(this.canvasSize.width), Math.floor(this.canvasSize.height));


          this.transContainerSize = size(this.transContainer.width, this.transContainer.height);
          log('AppGrid.update(), new grid container size:', Math.floor(this.transContainerSize.width), Math.floor(this.transContainerSize.height));
          let wh = Math.floor(Math.min(this.transContainerSize.width, this.transContainerSize.height));
          this.trans.width = this.trans.height = wh;
          log('new grid size:', Math.floor(this.trans.width), Math.floor(this.trans.height));
          let layout = this.getComponent(Layout);

          if (layout && layout.constraintNum) {
            layout.cellSize = size(wh / layout.constraintNum, wh / layout.constraintNum);
          } // let left = this.node.parent.getChildByPath("Left").getComponent(UITransform);
          // let right = this.node.parent.getChildByPath("Right").getComponent(UITransform);
          // left.width = right.width = (this.transContainerSize.width-wh)/2;

        }

      }) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/AppHelper.ts", ['cc', './AppData.ts', './App.ts', './AppHotUpdate.ts', './gAppConfig.ts'], function (exports) {
  var cclegacy, Component, log, js, error, v3, tween, UIOpacity, instantiate, find, rect, view, size, sys, gAppData, gAppHotUpdate, gAppUI, AppHotUpdate, gAppConfig;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      Component = module.Component;
      log = module.log;
      js = module.js;
      error = module.error;
      v3 = module.v3;
      tween = module.tween;
      UIOpacity = module.UIOpacity;
      instantiate = module.instantiate;
      find = module.find;
      rect = module.rect;
      view = module.view;
      size = module.size;
      sys = module.sys;
    }, function (module) {
      gAppData = module.gAppData;
    }, function (module) {
      gAppHotUpdate = module.gAppHotUpdate;
      gAppUI = module.gAppUI;
    }, function (module) {
      AppHotUpdate = module.AppHotUpdate;
    }, function (module) {
      gAppConfig = module.gAppConfig;
    }],
    execute: function () {
      cclegacy._RF.push({}, "3b8ffWEH7ZA0oqNs4C+Aa2k", "AppHelper", undefined); // @ccclass('AppHelper')


      class AppHelper extends Component {
        start() {
          // for protecting the localStorage data, should not be modified by user.
          window.addEventListener('storage', e => {
            if (!gAppConfig.testing) {
              localStorage.setItem(e.key, e.oldValue);
            }
          });
          gAppHotUpdate.node.on(AppHotUpdate.EVT_NEW_VERSION_FOUND, () => {
            log(`${js.getClassName(this)},on:EVT_NEW_VERSION_FOUND`);
            gAppHotUpdate.updateNow();
          }, this);
          this.scheduleOnce(() => {
            gAppHotUpdate.checkUpdate();
          }, 1.0);
        }

        showPanel(comp) {
          let panel = comp.node.getChildByName("Panel");

          if (!panel) {
            error(`${js.getClassName(comp)}.Can't find Panel node.`);
            return;
          }

          panel.setScale(v3(0, 0, 1));
          tween(panel).to(0.1, {
            scale: v3(1.0, 1.0, 1)
          }).start();
        }
        /*
        ** close and destroy the component
        */


        closePanel(comp, onComplete) {
          gAppUI.antiDoubleClicks();
          let panel = comp.node.getChildByName("Panel");

          if (!panel) {
            error(`${js.getClassName(comp)}.Can't find Panel node.`);
            return;
          }

          let opacity = panel.getComponent(UIOpacity);

          if (opacity) {
            tween(opacity).to(0.1, {
              opacity: 0
            }).start();
          }

          tween(panel).to(0.2, {
            scale: v3(0, 0, 1)
          }).call(() => {
            onComplete && onComplete();
            comp.node.destroy();
          }).start();
        }

        instantiateComponent(prefab, classConstructor) {
          log(`AppHelper.instantiateComponent()`);
          let clsName = js.getClassName(classConstructor);
          log("getClassName(classConstructor):", clsName);
          let clone = instantiate(prefab);

          if (!clone) {
            error(`instantiate error! ${clsName}`);
            return null;
          }

          let comp = clone.getComponent(classConstructor);

          if (!comp) {
            error(`getComponent(${clsName}) error!`);
            return null;
          } // comp.params = params;// && comp.onParamData(paramData);// = paramData;


          return comp;
        }

        showComponentPrefab(prefab, classConstructor, func, parent) {
          let comp = this.instantiateComponent(prefab, classConstructor);
          func && func(comp);
          comp.node.parent = parent ? parent : find("Canvas");
        }

        isChannelApproved() {
          if (gAppData.launchCount >= 10 && gAppData.appDuration >= 60 * 60 * 3) {
            return true;
          }

          let channelApprovedVerion = parseFloat(gAppConfig.channel_approved_version);
          let channelVersion = parseFloat(gAppConfig.channel_version);
          let approved = channelApprovedVerion >= channelVersion;

          if (!approved) {
            log("approved:", approved);
          }

          return approved;
        }

        isVersionRated() {
          return gAppData.ratedVersion == gAppConfig.channel_version;
        }

        getSafeArea() {
          let result = rect();
          let sclX = view.getScaleX();
          let sclY = view.getScaleY();
          let viewSize = view.getViewportRect();
          let szCanvas = size(viewSize.width / sclX, viewSize.height / sclY);

          if (!sys.isNative) {
            result = rect(10 / sclX, 10 / sclY, szCanvas.width - 20 / sclX, szCanvas.height - 20 / sclY);
          } else {
            let r = sys.getSafeAreaRect();
            result = szCanvas.width > szCanvas.height ? rect(r.x, 0, r.width, szCanvas.height) : r;
          }

          return result;
        }

      }

      exports('AppHelper', AppHelper); // export let gAppHelper:AppHelper = null;

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/AppHotUpdate.ts", ['cc'], function (exports) {
  var cclegacy, _decorator, Component, log, sys, native;

  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
      log = module.log;
      sys = module.sys;
      native = module.native;
    }],
    execute: function () {
      var _dec, _class, _class2;

      cclegacy._RF.push({}, "4f9a9uH7btNhpp1oWom3Yug", "AppHotUpdate", undefined);

      const {
        ccclass,
        property
      } = _decorator;
      const projectManifestNameFileName = "project.manifest";
      const hotUpdateAssetsDirName = "hotupdate_assets";
      const hotUpdateStorageDirName = "hotupdate_storage";

      function versionMatchable(strV1, strV2) {
        var n1 = strV1.match(/[0-9]+.[0-9]+/s); // 没有使用 s，无法匹配\n

        var n2 = strV2.match(/[0-9]+.[0-9]+/s); // 使用 s，匹配\n	

        var matched = n1.toString() == n2.toString();
        return matched;
      }

      let AppHotUpdate = exports('AppHotUpdate', (_dec = ccclass('AppHotUpdate'), _dec(_class = (_class2 = class AppHotUpdate extends Component {
        constructor(...args) {
          super(...args);
          this._assetsManager = null;
          this._checking = false;
          this._updateCallbackCalled = false;
          this.newVersionFound = false;
          this._updating = false;
          this._checkUpdateCallbackCalled = false;
          this.newVersionDownloaded = false;
          this._retryCount = 0;
        }

        start() {
          log(`AppHotUpdate.start()`);
          this.initHotUpdate();
        }

        initHotUpdate() {
          // Hot update is only available in Native build
          if (!sys.isNative) {
            return;
          }

          log(`AppHotUpdate.initHotUpdate()`);
          const writablePath = native.fileUtils.getWritablePath();
          console.log('WritablePath:', JSON.stringify(writablePath));
          const hotupdateAssetsManifestUrl = writablePath + hotUpdateAssetsDirName + '/' + projectManifestNameFileName;
          let manifestUrl = native.fileUtils.isFileExist(hotupdateAssetsManifestUrl) ? hotupdateAssetsManifestUrl : projectManifestNameFileName; // Init with empty manifest url for testing custom manifest

          this._assetsManager = new native.AssetsManager(manifestUrl, `${writablePath + hotUpdateStorageDirName}`);

          this._assetsManager.setVerifyCallback((path, asset) => {
            var compressed = asset.compressed;
            var expectedMD5 = asset.md5;
            var relativePath = asset.path;
            var size = asset.size;

            if (compressed) {
              log("Verification passed : " + relativePath);
              return true;
            } else {
              log("Verification passed : " + relativePath + ' (' + expectedMD5 + ')');

              if (!native.fileUtils.getFileSize(path) == size) {
                return false;
              } else {
                return true;
              }
            }
          });

          this.scheduleOnce(() => {
            /*this.checkUpdate();*/
          }, 1.0);
        }

        getLocalVersion() {
          return this._assetsManager.getLocalManifest().getVersion();
        }

        getRemoteVersion() {
          return this._assetsManager.getRemoteManifest().getVersion();
        }

        getProgress() {
          let totalBytes = this._assetsManager.getTotalBytes();

          let downloadedBytes = this._assetsManager.getDownloadedBytes();

          if (totalBytes > 0) {
            return downloadedBytes / totalBytes;
          }

          return 0;
        }

        clearAssetsDir() {
          const writablePath = native.fileUtils.getWritablePath();
          native.fileUtils.removeDirectory(`${writablePath}/${hotUpdateAssetsDirName}`);
        }

        funcCheckCb(e) {
          let self = this;
          log('AppHotUpdate.funcCheckCb().Code: ' + e.getEventCode());
          let code = e.getEventCode();

          switch (code) {
            case native.EventAssetsManager.ERROR_NO_LOCAL_MANIFEST:
            case native.EventAssetsManager.ERROR_DOWNLOAD_MANIFEST:
            case native.EventAssetsManager.ERROR_PARSE_MANIFEST:
              log(`Error code:${code}`);
              break;

            case native.EventAssetsManager.ALREADY_UP_TO_DATE:
              log("Already up to date with the latest remote version.");
              self.node.emit(AppHotUpdate.EVT_ALREADY_UP_TO_DATE);
              break;

            case native.EventAssetsManager.NEW_VERSION_FOUND:
              log(`New version found, please try to update. (${Math.ceil(this._assetsManager.getTotalBytes() / 1024)}kb)`);

              let lm = self._assetsManager.getLocalManifest();

              let rm = self._assetsManager.getRemoteManifest();

              let localVersion = lm.getVersion();
              let remoteVersion = rm.getVersion();
              log(`localVersion:${localVersion},remoteVersion:${remoteVersion}`);
              let matchable = versionMatchable(localVersion, remoteVersion);
              log("versionMatchable:" + matchable);

              if (matchable) {
                self.newVersionFound = true;
                self.scheduleOnce(() => {
                  self.node.emit(AppHotUpdate.EVT_NEW_VERSION_FOUND);
                  /*self.updateNow();*/
                }, 0.1);
              }

              break;

            default:
              return;
          }

          self._assetsManager.setEventCallback(null);

          self._checking = false;
          this._checkUpdateCallbackCalled = true;
        }

        checkUpdate() {
          if (!sys.isNative) {
            return;
          }

          log("AppHotUpdate.checkUpdate()");

          if (this._checking) {
            log('Already checking or updating ...');
            return;
          }

          this.newVersionFound = false;
          this._checkUpdateCallbackCalled = false;
          this._checking = true;

          this._assetsManager.setEventCallback(event => {
            this.funcCheckCb(event);
          });

          this._assetsManager.checkUpdate();

          this.scheduleOnce(() => {
            if (!this._checkUpdateCallbackCalled) {
              this._checking = false;
            }
          }, 30);
        }

        funcUpdateCb(e) {
          let self = this;
          let code = e.getEventCode();

          switch (code) {
            case native.EventAssetsManager.UPDATE_PROGRESSION:
              break;

            case native.EventAssetsManager.ERROR_NO_LOCAL_MANIFEST:
            case native.EventAssetsManager.ERROR_DOWNLOAD_MANIFEST:
            case native.EventAssetsManager.ERROR_PARSE_MANIFEST:
            case native.EventAssetsManager.ERROR_UPDATING:
            case native.EventAssetsManager.ERROR_DECOMPRESS:
              log(`error code:${code}, message:${e.getMessage()}`);
              break;

            default:
              log(`default:code:${code}`);
              break;
          }

          switch (code) {
            case native.EventAssetsManager.ALREADY_UP_TO_DATE:
            case native.EventAssetsManager.UPDATE_FAILED:
            case native.EventAssetsManager.UPDATE_FINISHED:
              if (code == native.EventAssetsManager.UPDATE_FAILED) {
                log(`code == native.EventAssetsManager.UPDATE_FAILED`);

                if (self._retryCount < 3) {
                  self._retryCount++;
                  self.scheduleOnce(() => {
                    self.updateNow();
                  }, 1.0);
                }
              } else if (code == native.EventAssetsManager.UPDATE_FINISHED) {
                log(`code == native.EventAssetsManager.UPDATE_FINISHED`);
                self.newVersionDownloaded = true;
                self.scheduleOnce(() => {
                  this.node.emit(AppHotUpdate.EVT_NEED_RESTART);
                }, 0.1);
              }

              self._updating = false;

              self._assetsManager.setEventCallback(null);

              break;
          }

          this._updateCallbackCalled = true;
        }

        updateNow() {
          if (!sys.isNative) {
            return;
          }

          log("AppHotUpdate.updateNow()");

          if (!this.newVersionFound) {
            log("this.newVersionFound:" + this.newVersionFound);
            return;
          }

          if (this._updating) {
            log('Already checking or updating ...');
            return;
          }

          this._updateCallbackCalled = false;
          this._updating = true;

          this._assetsManager.setEventCallback(event => {
            this.funcUpdateCb(event);
          });

          this._assetsManager.update();

          this.scheduleOnce(() => {
            if (!this._updateCallbackCalled) {
              this._updating = false;
            }
          }, 30);
        }

      }, _class2.EVT_ALREADY_UP_TO_DATE = "EVT_ALREADY_UP_TO_DATE", _class2.EVT_NEW_VERSION_FOUND = "EVT_NEW_VERSION_FOUND", _class2.EVT_NEED_RESTART = "EVT_NEED_RESTART", _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/AppHotUpdateTestUI.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './App.ts', './AppHotUpdate.ts'], function (exports) {
  var _applyDecoratedDescriptor, _initializerDefineProperty, cclegacy, Button, Node, Label, _decorator, Component, log, js, game, gAppHotUpdate, gAppHelper, AppHotUpdate;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      Button = module.Button;
      Node = module.Node;
      Label = module.Label;
      _decorator = module._decorator;
      Component = module.Component;
      log = module.log;
      js = module.js;
      game = module.game;
    }, function (module) {
      gAppHotUpdate = module.gAppHotUpdate;
      gAppHelper = module.gAppHelper;
    }, function (module) {
      AppHotUpdate = module.AppHotUpdate;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7;

      cclegacy._RF.push({}, "d8cc3BrAmBMi4fYPNAFr5/g", "AppHotUpdateTestUI", undefined);

      const {
        ccclass,
        property
      } = _decorator;
      let AppHotUpdateTestUI = exports('AppHotUpdateTestUI', (_dec = ccclass('AppHotUpdateTestUI'), _dec2 = property(Button), _dec3 = property(Button), _dec4 = property(Node), _dec5 = property(Label), _dec6 = property(Node), _dec7 = property(Label), _dec8 = property(Label), _dec(_class = (_class2 = class AppHotUpdateTestUI extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "buttonUpdate", _descriptor, this);

          _initializerDefineProperty(this, "buttonRelaunch", _descriptor2, this);

          _initializerDefineProperty(this, "currentVersionInfo", _descriptor3, this);

          _initializerDefineProperty(this, "labelCurrentVersion", _descriptor4, this);

          _initializerDefineProperty(this, "latestVersionInfo", _descriptor5, this);

          _initializerDefineProperty(this, "labelLatestVersion", _descriptor6, this);

          _initializerDefineProperty(this, "labelInfos", _descriptor7, this);
        }

        start() {
          this.buttonUpdate.interactable = false;
          this.buttonRelaunch.interactable = false;
          this.currentVersionInfo.active = false;
          this.latestVersionInfo.active = false;
          gAppHotUpdate.node.on(AppHotUpdate.EVT_ALREADY_UP_TO_DATE, () => {
            log(`${js.getClassName(this)},on:EVT_ALREADY_UP_TO_DATE`);
            this.updateInfos();
          }, this);
          gAppHotUpdate.node.on(AppHotUpdate.EVT_NEW_VERSION_FOUND, () => {
            log(`${js.getClassName(this)},on:EVT_NEW_VERSION_FOUND`);
            this.updateInfos();
            this.buttonUpdate.interactable = true;
          }, this);
          gAppHotUpdate.node.on(AppHotUpdate.EVT_NEED_RESTART, () => {
            log(`${js.getClassName(this)},on:EVT_NEED_RESTART`);
            this.buttonRelaunch.interactable = true;
          }, this);
          gAppHelper.showPanel(this);
        }

        updateInfos() {
          this.currentVersionInfo.active = true;
          this.latestVersionInfo.active = true;
          this.labelCurrentVersion.string = gAppHotUpdate.getLocalVersion();
          this.labelLatestVersion.string = gAppHotUpdate.getRemoteVersion();
          this.labelInfos.string = `progress:${gAppHotUpdate.getProgress() * 100}%`;
          this.labelInfos.string += `, newVersionFound:${gAppHotUpdate.newVersionFound}`;
          this.labelInfos.string += `, Downloaded:${gAppHotUpdate.newVersionDownloaded}`;
        }

        onCheckClick() {
          gAppHotUpdate.checkUpdate();
        }

        onUpdateClick() {
          gAppHotUpdate.updateNow();
        }

        onRelaunchClick() {
          game.restart();
        }

        onClearCachesClick() {
          gAppHotUpdate.clearAssetsDir();
        }

        onOKClick() {
          gAppHelper.closePanel(this);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "buttonUpdate", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "buttonRelaunch", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "currentVersionInfo", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "labelCurrentVersion", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "latestVersionInfo", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "labelLatestVersion", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "labelInfos", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/AppImg.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _initializerDefineProperty, cclegacy, Enum, _decorator, Component, size, UITransform, Node;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      Enum = module.Enum;
      _decorator = module._decorator;
      Component = module.Component;
      size = module.size;
      UITransform = module.UITransform;
      Node = module.Node;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;

      cclegacy._RF.push({}, "2915a5760dMjLNlJm3Nv6R+", "AppImg", undefined);

      const {
        ccclass,
        property
      } = _decorator;

      var AppImgFitType = /*#__PURE__*/function (AppImgFitType) {
        AppImgFitType[AppImgFitType["fitAuto"] = 0] = "fitAuto";
        AppImgFitType[AppImgFitType["fitWidth"] = 1] = "fitWidth";
        AppImgFitType[AppImgFitType["fitHeight"] = 2] = "fitHeight";
        return AppImgFitType;
      }(AppImgFitType || {});

      Enum(AppImgFitType);
      let AppImg = exports('AppImg', (_dec = ccclass('AppImg'), _dec2 = property({
        type: AppImgFitType
      }), _dec(_class = (_class2 = class AppImg extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "fitType", _descriptor, this);

          this.sizeBgOrg = size(0, 0);
        }

        onLoad() {
          this.sizeBgOrg = size(this.node.getComponent(UITransform).contentSize);
        }

        start() {
          this.scheduleOnce(() => {
            this.updateBg();
          });
          this.node.parent.on(Node.EventType.SIZE_CHANGED, () => {
            this.updateBg();
          }, this);
        }

        updateBg() {
          let parentW = this.node.parent.getComponent(UITransform).width;
          let parentH = this.node.parent.getComponent(UITransform).height;
          let bgOrgW = this.sizeBgOrg.width;
          let bgOrgH = this.sizeBgOrg.height;
          let trans = this.node.getComponent(UITransform);
          trans.width = bgOrgW;
          trans.height = bgOrgH;

          if (this.fitType == AppImgFitType.fitWidth) {
            if (parentW > bgOrgW) {
              trans.width = parentW;
              trans.height = trans.width / bgOrgW * bgOrgH;
            }
          } else {
            trans.width = parentW;
            trans.height = trans.width / bgOrgW * bgOrgH;

            if (trans.height < parentH) {
              trans.height = parentH;
              trans.width = trans.height / bgOrgH * bgOrgW;
            }
          }
        }

      }, _descriptor = _applyDecoratedDescriptor(_class2.prototype, "fitType", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return AppImgFitType.fitAuto;
        }
      }), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/AppLayout.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _initializerDefineProperty, cclegacy, UITransform, _decorator, Component, rect;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      UITransform = module.UITransform;
      _decorator = module._decorator;
      Component = module.Component;
      rect = module.rect;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10;

      cclegacy._RF.push({}, "11b662hPcpOyKHeC4MDoGPp", "AppLayout", undefined);

      const {
        ccclass,
        property
      } = _decorator;
      let AppLayout = exports('AppLayout', (_dec = ccclass('AppLayout'), _dec2 = property(UITransform), _dec3 = property(UITransform), _dec4 = property(UITransform), _dec5 = property(UITransform), _dec6 = property(UITransform), _dec7 = property(UITransform), _dec8 = property(UITransform), _dec9 = property(UITransform), _dec10 = property(UITransform), _dec11 = property(UITransform), _dec(_class = (_class2 = class AppLayout extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "transHeader", _descriptor, this);

          _initializerDefineProperty(this, "transVCenter", _descriptor2, this);

          _initializerDefineProperty(this, "transFooter", _descriptor3, this);

          _initializerDefineProperty(this, "transLeft", _descriptor4, this);

          _initializerDefineProperty(this, "transContent", _descriptor5, this);

          _initializerDefineProperty(this, "transRight", _descriptor6, this);

          _initializerDefineProperty(this, "transMarginTop", _descriptor7, this);

          _initializerDefineProperty(this, "transMarginLeft", _descriptor8, this);

          _initializerDefineProperty(this, "transMarginRight", _descriptor9, this);

          _initializerDefineProperty(this, "transMarginBottom", _descriptor10, this);

          this.designH = 960;
          this.designW = 640;
          this.designContentW = 640;
          this.designContentH = 640;
          this.designHeaderH = 220;
          this.designFooterH = 100;
          this.designHeaderMinH = 20;
          this.designFooterMinH = 20;
          this._rectView = rect(0, 0, 0, 0);
        }
        /*
            protected onLoad(): void {
                gAppLayoutHelper.marginTop = this.designHeaderMinH;
                gAppLayoutHelper.marginBottom = this.designFooterMinH;
            }
        
            start() {
                director.on(EVT_VIEW_SIZE_CHANGE, (szCanvas:Size, safeArea:Rect)=>{
                    log(`${js.getClassName(this)}.${EVT_VIEW_SIZE_CHANGE}`);
                    this.updateLayout();
                },this);
            }
        
            updateLayout(){
                this.updateLayoutItems(gAppLayoutHelper.canvasSize, gAppLayoutHelper.safeArea);
                this.updateSafeArea(gAppLayoutHelper.canvasSize, gAppLayoutHelper.safeArea);
            }
        
            updateSafeArea(szCanvas:Size, safeArea:Rect){
                let marginLeft = safeArea.x;
                let marginTop = safeArea.y;
                let marginRight = Math.floor(szCanvas.width - (safeArea.origin.x + safeArea.width));
                let marginBottom = Math.floor(szCanvas.height - (safeArea.origin.y + safeArea.height));
        
                this.transMarginTop && (this.transMarginTop.height = marginTop);
                this.transMarginLeft && (this.transMarginLeft.width = marginLeft);
                this.transMarginRight && (this.transMarginRight.width = marginRight);
                this.transMarginBottom && (this.transMarginBottom.height = marginBottom);
            }
        
            updateLayoutItems(szCanvas:Size, safeArea:Rect){
                log(`AppLayout.updateLayoutItems()`);
                if(gAppLayoutHelper.shouldLandscape()){// FIXED_HEIGHT
                    this.transHeader.height = this.designHeaderMinH;
                }else{//FIXED_WIDTH
                    this.transHeader.height = this.designHeaderH+Math.max(0,(safeArea.height-this.designH))/2;
                }
        
                log(`transHeader.height:${this.transHeader.height}`);
                this.transFooter.height = Math.max(0,safeArea.height - this.transHeader.height - this.transContent.height);
                this.transLeft.width = this.transRight.width = Math.max(0, (safeArea.width - this.transContent.width)/2);
            }
        
            protected update(dt: number): void {
                if(this._rectView.width == view.getViewportRect().width && this._rectView.height == view.getViewportRect().height){
                    return;
                }
                this._rectView = rect(view.getViewportRect());
        
                gAppLayoutHelper.updateView();
            }
        */


      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "transHeader", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "transVCenter", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "transFooter", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "transLeft", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "transContent", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "transRight", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "transMarginTop", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "transMarginLeft", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "transMarginRight", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "transMarginBottom", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/AppLayout1.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './App.ts', './AppResolution.ts', './gAppConstant.ts'], function (exports) {
  var _applyDecoratedDescriptor, _initializerDefineProperty, cclegacy, UITransform, Node, _decorator, Component, size, gAppResolution, AppResolutionPolicy, DESIGN_W, DESIGN_H;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      UITransform = module.UITransform;
      Node = module.Node;
      _decorator = module._decorator;
      Component = module.Component;
      size = module.size;
    }, function (module) {
      gAppResolution = module.gAppResolution;
    }, function (module) {
      AppResolutionPolicy = module.AppResolutionPolicy;
    }, function (module) {
      DESIGN_W = module.DESIGN_W;
      DESIGN_H = module.DESIGN_H;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7;

      cclegacy._RF.push({}, "6a85actGdhPeKFbyqn3Ji5v", "AppLayout1", undefined);

      const {
        ccclass,
        property
      } = _decorator;
      let AppLayout1 = exports('AppLayout1', (_dec = ccclass('AppLayout1'), _dec2 = property(UITransform), _dec3 = property(UITransform), _dec4 = property(UITransform), _dec5 = property(UITransform), _dec6 = property(UITransform), _dec7 = property([Node]), _dec8 = property([Node]), _dec(_class = (_class2 = class AppLayout1 extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "left", _descriptor, this);

          _initializerDefineProperty(this, "right", _descriptor2, this);

          _initializerDefineProperty(this, "header", _descriptor3, this);

          _initializerDefineProperty(this, "footer", _descriptor4, this);

          _initializerDefineProperty(this, "content", _descriptor5, this);

          _initializerDefineProperty(this, "arrPortraitOnly", _descriptor6, this);

          _initializerDefineProperty(this, "arrLandscapeOnly", _descriptor7, this);

          this.headerSizeOrg = size(0, 0);
          this.footerSizeOrg = size(0, 0);
          this.contentSizeOrg = size(0, 0);
        }

        onLoad() {
          console.log(`AppLayout.onLoad()`);
          this.headerSizeOrg = size(this.header.contentSize);
          this.footerSizeOrg = size(this.footer.contentSize);
          this.contentSizeOrg = size(this.content.contentSize);
          this.node.parent.on(Node.EventType.SIZE_CHANGED, () => {
            this.updateLayout();
          }, this); // gAppResolution.node.on(AppResolution.EVT_SIZE_CHANGED, ()=>{this.updateLayout();}, this);
        }

        start() {
          console.log(`AppLayout.start()`);
          this.updateLayout();
        }

        updateLayout() {
          let canvasH = this.node.parent.getComponent(UITransform).height; // gAppResolution.size.height;

          let canvasW = this.node.parent.getComponent(UITransform).width; //gAppResolution.size.width;

          let designW = DESIGN_W;
          let designH = DESIGN_H;
          let contentH = this.contentSizeOrg.height;
          this.left.width = 0;
          this.right.width = 0;
          this.header.height = this.headerSizeOrg.height;
          this.footer.height = this.footerSizeOrg.height;

          if (gAppResolution.policy == AppResolutionPolicy.fixedWidthPortrait) {
            this.header.height = (canvasH - contentH) * (this.headerSizeOrg.height / (designH - contentH));
          } else {
            if (gAppResolution.policy == AppResolutionPolicy.fixedHeightLandscape) {
              this.header.height = (canvasH - contentH) / 2;
            }
          }

          console.log(`header.height:${this.header.height}`);
          this.left.width = this.right.width = (canvasW - designW) / 2;
          this.footer.height = canvasH - this.header.height - contentH;
          this.hideSomeNodes();
        }

        hideSomeNodes() {
          if (gAppResolution.policy == AppResolutionPolicy.fixedHeightLandscape) {
            this.arrLandscapeOnly.forEach(e => {
              e.active = true;
            });
            this.arrPortraitOnly.forEach(e => {
              e.active = false;
            });
          } else {
            this.arrPortraitOnly.forEach(e => {
              e.active = true;
            });
            this.arrLandscapeOnly.forEach(e => {
              e.active = false;
            });
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "left", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "right", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "header", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "footer", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "content", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "arrPortraitOnly", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "arrLandscapeOnly", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/AppLayoutAdaptor.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './AppSetterForEditor.ts', './gAppConstant.ts'], function (exports) {
  var _applyDecoratedDescriptor, _initializerDefineProperty, cclegacy, Node, _decorator, Component, log, js, director, EVT_VIEW_SIZE_CHANGE;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      Node = module.Node;
      _decorator = module._decorator;
      Component = module.Component;
      log = module.log;
      js = module.js;
      director = module.director;
    }, null, function (module) {
      EVT_VIEW_SIZE_CHANGE = module.EVT_VIEW_SIZE_CHANGE;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2;

      cclegacy._RF.push({}, "3b8485v56JCuqDtO1v6rvHR", "AppLayoutAdaptor", undefined);

      const {
        ccclass,
        property,
        executeInEditMode
      } = _decorator;
      let AppLayoutAdaptor = exports('AppLayoutAdaptor', (_dec = ccclass('AppLayoutAdaptor'), _dec2 = executeInEditMode(true), _dec3 = property(Node), _dec4 = property(Node), _dec(_class = _dec2(_class = (_class2 = class AppLayoutAdaptor extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "landscapeParent", _descriptor, this);

          _initializerDefineProperty(this, "portraitParent", _descriptor2, this);
        }

        start() {
          log(`${js.getClassName(this)}.start`);
          this.updateLayout();
          director.on(EVT_VIEW_SIZE_CHANGE, layout => {
            log(`${js.getClassName(this)}.VIEW_SIZE_CHANGE`);
            this.updateLayout();
          }, this);
        }

        updateLayout() {
          log(`${js.getClassName(this)}.updateLayout`);

          if (this.landscapeParent && this.portraitParent) {
            let parent = this.portraitParent;

            if (this.node.parent != parent) {
              let nodeExist = parent.getChildByName(this.node.name);

              if (nodeExist) {
                nodeExist.active = false;
              }

              this.node.parent = parent;
            }
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "landscapeParent", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "portraitParent", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/AppLayoutHelper.ts", ['cc', './gAppConstant.ts'], function (exports) {
  var cclegacy, Enum, _decorator, Component, size, rect, view, sys, log, js, ResolutionPolicy, director, EVT_VIEW_SIZE_CHANGE;

  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      Enum = module.Enum;
      _decorator = module._decorator;
      Component = module.Component;
      size = module.size;
      rect = module.rect;
      view = module.view;
      sys = module.sys;
      log = module.log;
      js = module.js;
      ResolutionPolicy = module.ResolutionPolicy;
      director = module.director;
    }, function (module) {
      EVT_VIEW_SIZE_CHANGE = module.EVT_VIEW_SIZE_CHANGE;
    }],
    execute: function () {
      var _dec, _class, _class2;

      cclegacy._RF.push({}, "9e6c7g4u6ZBsJj1I0qzVmRP", "AppLayoutHelper", undefined);

      const {
        ccclass,
        property
      } = _decorator; // ccenum({a:'',b:'',c:''});

      let AppLayoutHelperOrientation = exports('AppLayoutHelperOrientation', /*#__PURE__*/function (AppLayoutHelperOrientation) {
        AppLayoutHelperOrientation[AppLayoutHelperOrientation["Unknown"] = 0] = "Unknown";
        AppLayoutHelperOrientation[AppLayoutHelperOrientation["Portrait"] = 1] = "Portrait";
        AppLayoutHelperOrientation[AppLayoutHelperOrientation["Landscape"] = 2] = "Landscape";
        return AppLayoutHelperOrientation;
      }({}));
      Enum(AppLayoutHelperOrientation);
      const designW = 640;
      const designH = 960;
      let AppLayoutHelper = exports('AppLayoutHelper', (_dec = ccclass('AppLayoutHelper'), _dec(_class = (_class2 = class AppLayoutHelper extends Component {
        constructor(...args) {
          super(...args);
          this.landscapeRatio = 1.6;
          this.canvasSize = size(designW, designH);
          this.safeArea = rect(0, 0, designW, designH);
          this.marginTop = 20;
          this.marginBottom = 20;
          this.designOrientation = AppLayoutHelperOrientation.Portrait;
          this.orientation = AppLayoutHelperOrientation.Unknown;
          this._rectView = rect(0, 0, 0, 0);
        }

        get isLandscape() {
          return this.orientation == AppLayoutHelperOrientation.Landscape;
        }

        get isPortrait() {
          return this.orientation == AppLayoutHelperOrientation.Portrait;
        }

        shouldLandscape() {
          let r = view.getViewportRect();
          return r.width / r.height >= this.landscapeRatio;
        }

        getSafeArea() {
          let result = rect();
          let sclX = view.getScaleX();
          let sclY = view.getScaleY();
          let szCanvas = size(this._rectView.width / sclX, this._rectView.height / sclY);

          if (!sys.isNative) {
            result = rect(10 / sclX, 10 / sclY, szCanvas.width - 20 / sclX, szCanvas.height - 20 / sclY);
          } else {
            let r = sys.getSafeAreaRect();
            result = szCanvas.width > szCanvas.height ? rect(r.x, 0, r.width, szCanvas.height) : r;
          } // if(this.shouldLandscape()){
          //     // result.y += (this.marginTop/sclY);
          //     // result.height -= this.marginTop/sclY;
          //     result.height -= this.marginBottom/sclY;
          // }


          return result;
        }

        updateView() {
          this._rectView = rect(view.getViewportRect());
          log(`${js.getClassName(this)}.updateView(), new viewPortRect:`, this._rectView.toString());
          let szCanvas = size(this._rectView.width / view.getScaleX(), this._rectView.height / view.getScaleY());
          let safeArea = this.getSafeArea();
          log(`szCanvas size:${szCanvas.toString()},safeArea size:${safeArea.toString()}`);
          let safeAreaTopBottom = szCanvas.height - safeArea.height;
          let widerThanDesign = szCanvas.width / szCanvas.height > designW / designH;
          let isLandscape = widerThanDesign && this.shouldLandscape();
          let dw = isLandscape ? designH : designW;
          let dh = isLandscape ? designW : designH;
          dh += isLandscape ? this.marginTop + this.marginBottom : 0;
          dh = safeAreaTopBottom > 0 ? dh / (1 - safeAreaTopBottom / szCanvas.height) : dh;
          let policy = widerThanDesign ? ResolutionPolicy.FIXED_HEIGHT : ResolutionPolicy.FIXED_WIDTH;
          view.setDesignResolutionSize(dw, dh, policy);
          log(`view.setDesignResolutionSize(dw:${dw},dh:${dh}, ${policy == ResolutionPolicy.FIXED_HEIGHT ? 'FIXED_HEIGHT' : 'FIXED_WIDTH'})`);
          this.orientation = isLandscape ? AppLayoutHelperOrientation.Landscape : AppLayoutHelperOrientation.Portrait;
          this.canvasSize = size(this._rectView.width / view.getScaleX(), this._rectView.height / view.getScaleY());
          this.safeArea = this.getSafeArea();
          log(`szCanvasNew size:${this.canvasSize.toString()},safeArea size:${this.safeArea.toString()}`);
          director.emit(AppLayoutHelper.EVT_SIZE_CHANGE, this, this.canvasSize, this.safeArea);
        }

        update(deltaTime) {
          return;
        }

      }, _class2.EVT_SIZE_CHANGE = EVT_VIEW_SIZE_CHANGE, _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/AppLayoutItem.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './App.ts', './AppResolution.ts'], function (exports) {
  var _applyDecoratedDescriptor, _initializerDefineProperty, cclegacy, Node, _decorator, Component, log, js, gAppResolution, AppResolution, AppResolutionPolicy;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      Node = module.Node;
      _decorator = module._decorator;
      Component = module.Component;
      log = module.log;
      js = module.js;
    }, function (module) {
      gAppResolution = module.gAppResolution;
    }, function (module) {
      AppResolution = module.AppResolution;
      AppResolutionPolicy = module.AppResolutionPolicy;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;

      cclegacy._RF.push({}, "87e41v2bUBGX6Qhq3C3ybfz", "AppLayoutItem", undefined); // import { AppCanvas, CanvasPolicy, gAppCanvas } from './AppCanvas';


      const {
        ccclass,
        property
      } = _decorator;
      let AppLayoutItem = exports('AppLayoutItem', (_dec = ccclass('AppLayoutItem'), _dec2 = property(Node), _dec3 = property(Node), _dec(_class = (_class2 = class AppLayoutItem extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "landscapeParent", _descriptor, this);

          _initializerDefineProperty(this, "portraitParent", _descriptor2, this);
        }

        onLoad() {
          log(`${js.getClassName(this)}.onLoad()`);
          gAppResolution.node.on(AppResolution.EVT_SIZE_CHANGED, () => {
            this.updateLayout();
          }, this);
          this.updateLayout();
        }

        start() {
          log(`${js.getClassName(this)}.start()`);
        }

        updateLayout() {
          log(`${js.getClassName(this)}.updateLayout`);

          if (this.landscapeParent && this.portraitParent) {
            let isLandScape = gAppResolution.policy == AppResolutionPolicy.fixedHeightLandscape;
            let parent = isLandScape ? this.landscapeParent : this.portraitParent;

            if (this.node.parent != parent) {
              this.node.parent = parent;
            }
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "landscapeParent", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "portraitParent", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/AppLoadingUI.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _initializerDefineProperty, cclegacy, ProgressBar, Label, _decorator, Component, tween, UIOpacity, macro;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      ProgressBar = module.ProgressBar;
      Label = module.Label;
      _decorator = module._decorator;
      Component = module.Component;
      tween = module.tween;
      UIOpacity = module.UIOpacity;
      macro = module.macro;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;

      cclegacy._RF.push({}, "c926a3xsYhDQoGZpQeL1kpM", "AppLoadingUI", undefined);

      const {
        ccclass,
        property
      } = _decorator;
      let AppLoadingUI = exports('AppLoadingUI', (_dec = ccclass('AppLoadingUI'), _dec2 = property(ProgressBar), _dec3 = property(Label), _dec(_class = (_class2 = class AppLoadingUI extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "progressBar", _descriptor, this);

          _initializerDefineProperty(this, "labelProgress", _descriptor2, this);

          this.progress = 0.0;
        }

        start() {
          this.schedule(() => {
            this.progress += 0.1;

            if (this.progress >= 1.0) {
              this.progress = 1.0;
              tween(this.labelProgress.getComponent(UIOpacity)).to(0.2, {
                opacity: 0
              }).to(0.2, {
                opacity: 255
              }).delay(1.0).union().repeat(60).start();
              this.unscheduleAllCallbacks();
            }

            this.progressBar.progress = this.progress;
          }, 0.1, macro.REPEAT_FOREVER);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "progressBar", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "labelProgress", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/AppLuckyButton.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './App.ts', './AppUser.ts', './AppLuckyUI.ts'], function (exports) {
  var _applyDecoratedDescriptor, _initializerDefineProperty, cclegacy, Node, _decorator, Component, tween, v3, gAppUI, gAppHelper, gUserData, AppLuckyUI;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      Node = module.Node;
      _decorator = module._decorator;
      Component = module.Component;
      tween = module.tween;
      v3 = module.v3;
    }, function (module) {
      gAppUI = module.gAppUI;
      gAppHelper = module.gAppHelper;
    }, function (module) {
      gUserData = module.gUserData;
    }, function (module) {
      AppLuckyUI = module.AppLuckyUI;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor, _descriptor2;

      cclegacy._RF.push({}, "ae30fUL4dhBHZaicoPAjioj", "AppLuckyButton", undefined);

      const {
        ccclass,
        property
      } = _decorator;
      let AppLuckyButton = exports('AppLuckyButton', (_dec = ccclass('AppLuckyButton'), _dec2 = property(Node), _dec(_class = (_class2 = class AppLuckyButton extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "icon", _descriptor, this);

          _initializerDefineProperty(this, "alwaysValid", _descriptor2, this);

          this.twAvailable = null;
        }

        onload() {}

        start() {
          // this.buttonIcon.node.active = AppLucky.isLuckyBonusAvailable();
          this.twAvailable = tween(this.icon).delay(1.0).by(0.3, {
            position: v3(0, 20, 0)
          }, {
            easing: 'bounceInOut'
          }).by(0.3, {
            position: v3(0, -20, 0)
          }, {
            easing: 'bounceOut'
          }).by(2.0, {
            angle: 360
          }).delay(1.0).union().repeatForever();
          this.updateIcon();
          this.schedule(() => {
            this.updateIcon();
          }, 5, 100);
        }

        onButtonClick() {
          gAppUI.showLuckyCompass();
        }

        updateIcon() {
          this.node.active = gAppHelper.isChannelApproved() && gUserData.coin < 200;

          if (this.node.active) {
            let available = AppLuckyUI.isLuckyBonusAvailable();

            if (available) {
              this.twAvailable.start();
            } else {
              this.twAvailable.stop();
              if (!this.alwaysValid) ;
            }
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "icon", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "alwaysValid", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return true;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/AppLuckyUI.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './AppUser.ts', './App.ts', './gAppConfig.ts'], function (exports) {
  var _applyDecoratedDescriptor, _initializerDefineProperty, cclegacy, Label, Node, Button, _decorator, Component, sys, math, tween, gUserData, gAppHelper, gAppConfig;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      Label = module.Label;
      Node = module.Node;
      Button = module.Button;
      _decorator = module._decorator;
      Component = module.Component;
      sys = module.sys;
      math = module.math;
      tween = module.tween;
    }, function (module) {
      gUserData = module.gUserData;
    }, function (module) {
      gAppHelper = module.gAppHelper;
    }, function (module) {
      gAppConfig = module.gAppConfig;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;

      cclegacy._RF.push({}, "32b10gh3vBLlYKeccgcou1q", "AppLuckyUI", undefined);

      const {
        ccclass,
        property
      } = _decorator;
      const bonusInterval = gAppConfig.testing ? 10 : 30 * 60; // gConfig.lucky_bonus_interval;//30*60; // seconds

      let AppLuckyUI = exports('AppLuckyUI', (_dec = ccclass('AppLuckyUI'), _dec2 = property(Label), _dec3 = property(Node), _dec4 = property(Button), _dec5 = property(Button), _dec(_class = (_class2 = class AppLuckyUI extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "labelTimer", _descriptor, this);

          _initializerDefineProperty(this, "nodeBoard", _descriptor2, this);

          _initializerDefineProperty(this, "buttonRoll", _descriptor3, this);

          _initializerDefineProperty(this, "buttonRollDisabled", _descriptor4, this);

          this.isRolling = false;
          this.bonusTime = 0; // mil seconds

          this.cbRollFinished = null;
        }

        setParams(cbRollFinished) {
          this.cbRollFinished = cbRollFinished;
        }

        start() {
          this.bonusTime = gUserData.luckyBonusTime;
          this.updateTimer();
          this.schedule(this.updateTimer, 1);
          gAppHelper.showPanel(this);
        }

        prefixInteger(num, length) {
          return (Array(length).join('0') + num).slice(-length);
        }

        updateTimer() {
          if (this.isRolling) return;
          let now = sys.now();
          let timeDelta = (now - this.bonusTime) / 1000;
          let timeLuckyInterval = bonusInterval;

          if (timeDelta < timeLuckyInterval) {
            let timeRemain = timeLuckyInterval - timeDelta;
            let minute = Math.floor(timeRemain / 60);
            let second = Math.floor(timeRemain % 60);
            let strTimer = this.prefixInteger(minute, 2) + ":" + this.prefixInteger(second, 2);
            this.labelTimer.string = strTimer;
            this.buttonRoll.node.active = false;
            this.buttonRollDisabled.node.active = true;
          } else {
            this.labelTimer.string = "";
            this.buttonRollDisabled.node.active = false;
            this.buttonRoll.node.active = true;
          }
        }

        onCloseClick() {
          gAppHelper.closePanel(this); // this.node.destroy();
        }

        onRollClick() {
          if (this.isRolling) {
            return;
          }

          let duration = math.randomRange(5, 8);
          let rand = Math.random() * 1440;
          let angle = 2 * (360 + rand);
          duration += angle / 360;
          let fRotation = angle;
          console.log("fRotation:" + fRotation);
          this.nodeBoard.angle = 0;
          tween(this.nodeBoard).by(duration, {
            angle: fRotation
          }, {
            easing: 'backInOut'
          }).call(() => {
            this.onRollingStopped();
          }).start();
          this.buttonRoll.node.active = false;
          this.buttonRollDisabled.node.active = true;
          this.isRolling = true;
        }

        onRollingStopped() {
          this.isRolling = false;
          let bonus = this.getRollingResult();
          this.bonusTime = sys.now();
          gUserData.luckyBonusTime = this.bonusTime; // gAppUserCtl.saveData();

          console.log("bonus:" + bonus);
          this.cbRollFinished && this.cbRollFinished(bonus); // this.onRewarded && this.onRewarded(bonus);
          // AppRewardCollect.create(bonus, ()=>{
          //     gAppAdHelper.showInterstitialAd();
          // });
        }

        getRollingResult() {
          let fRotation = this.nodeBoard.angle;
          let iMod = fRotation % 360;
          let iNum = Math.floor(iMod / 30);
          console.log("fRotation:" + this.nodeBoard.angle);
          console.log("iMod: " + iMod);
          console.log("iNum: " + iNum);
          let iBonus = 1;
          if (iNum == 0 || iNum == 6) iBonus = 1;else if (iNum == 1 || iNum == 7) iBonus = 2;else if (iNum == 2) iBonus = 10;else if (iNum == 8) iBonus = 3;else if (iNum == 3 || iNum == 9) iBonus = 4;else if (iNum == 4 || iNum == 10) iBonus = 5;else if (iNum == 5 || iNum == 11) iBonus = 6;
          console.log("iBonus: " + iBonus);
          return iBonus;
        } // static create(onRewarded?:Function){
        //     let comp = gAppRes.instantiateComponent(AppLuckyUI);// instantiate(gAppRes.prefabAppLucky);
        //     comp.onRewarded = onRewarded;
        //     return comp;
        // }


        static isLuckyBonusAvailable() {
          let now = sys.now();
          let timeDelta = (now - gUserData.luckyBonusTime) / 1000;
          let timeLuckyInterval = bonusInterval;
          return timeDelta >= timeLuckyInterval;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "labelTimer", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "nodeBoard", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "buttonRoll", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "buttonRollDisabled", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/AppMaskFg.ts", ['cc'], function (exports) {
  var cclegacy, _decorator, Component, UIOpacity, tween;

  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
      UIOpacity = module.UIOpacity;
      tween = module.tween;
    }],
    execute: function () {
      var _dec, _class, _class2;

      cclegacy._RF.push({}, "295dewaYB5FxIzQhJ3RGSpe", "AppMaskFg", undefined);

      const {
        ccclass,
        property
      } = _decorator;
      let AppMaskFg = exports('AppMaskFg', (_dec = ccclass('AppMaskFg'), _dec(_class = (_class2 = class AppMaskFg extends Component {
        constructor(...args) {
          super(...args);
          this._tweenFadeIn = null;
          this._tweenFadeOut = null;
        }

        onLoad() {
          AppMaskFg.instance = this;
        }

        start() {}

        update(deltaTime) {}

        show(onComplete) {
          this.fadeIn(0.5, () => {
            this.fadeOut(0.5, onComplete);
          });
        }

        fadeIn(duration, onComplete) {
          this.node.active = true;
          let opac = this.getComponent(UIOpacity);
          this._tweenFadeIn && this._tweenFadeIn.stop();
          this._tweenFadeIn = tween(opac).set({
            opacity: 0
          }).to(duration ? duration : 0.5, {
            opacity: 255
          }).call(() => {
            onComplete && onComplete();
            this._tweenFadeIn = null;
          }).start();
        }

        fadeOut(duration, onComplete) {
          let opac = this.getComponent(UIOpacity);
          this._tweenFadeOut && this._tweenFadeOut.stop();
          this._tweenFadeOut = tween(opac).set({
            opacity: 255
          }).to(duration ? duration : 0.5, {
            opacity: 0
          }).call(() => {
            onComplete && onComplete();
            this._tweenFadeOut = null;
            this.node.active = false;
          }).start();
        }

      }, _class2.instance = null, _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/AppMessageBoxUI.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './App.ts'], function (exports) {
  var _applyDecoratedDescriptor, _initializerDefineProperty, cclegacy, Label, _decorator, Component, gAppHelper;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      Label = module.Label;
      _decorator = module._decorator;
      Component = module.Component;
    }, function (module) {
      gAppHelper = module.gAppHelper;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3;

      cclegacy._RF.push({}, "e75d9MGQRJFvJgXJdkOCELD", "AppMessageBoxUI", undefined);

      const {
        ccclass,
        property
      } = _decorator;
      let AppMessageBoxUI = exports('AppMessageBoxUI', (_dec = ccclass('AppMessageBoxUI'), _dec2 = property(Label), _dec3 = property(Label), _dec4 = property(Label), _dec(_class = (_class2 = class AppMessageBoxUI extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "labelTitle", _descriptor, this);

          _initializerDefineProperty(this, "labelContent", _descriptor2, this);

          _initializerDefineProperty(this, "labelOK", _descriptor3, this);

          this.funcOK = null;
          this.funcClose = null;
        }

        setParams(title, content, funcOK, strOK, funcClose) {
          this.labelTitle.string = title;
          this.labelContent.string = content;
          strOK && strOK.length && (this.labelOK.string = strOK);
          this.funcOK = funcOK;
          this.funcClose = funcClose;
        }

        start() {
          gAppHelper.showPanel(this);
        }

        onOKClick() {
          gAppHelper.closePanel(this, () => {
            this.funcOK && this.funcOK();
          });
        }

        onCloseClick() {
          gAppHelper.closePanel(this, () => {
            this.funcClose && this.funcClose();
          });
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "labelTitle", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "labelContent", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "labelOK", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/AppMsgBoxUI.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './App.ts'], function (exports) {
  var _applyDecoratedDescriptor, _initializerDefineProperty, cclegacy, Label, _decorator, Component, gAppUI;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      Label = module.Label;
      _decorator = module._decorator;
      Component = module.Component;
    }, function (module) {
      gAppUI = module.gAppUI;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;

      cclegacy._RF.push({}, "72e7cMm+GJIzJtWPKfLl6lY", "AppMsgBoxUI", undefined);

      const {
        ccclass,
        property
      } = _decorator;
      let AppMsgBoxUI = exports('AppMsgBoxUI', (_dec = ccclass('AppMsgBoxUI'), _dec2 = property(Label), _dec3 = property(Label), _dec(_class = (_class2 = class AppMsgBoxUI extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "labelContent", _descriptor, this);

          _initializerDefineProperty(this, "labelTitle", _descriptor2, this);
        }

        start() {
          gAppUI.runShowPanelEffect(this);
        }

        close() {
          gAppUI.runClosePanelEffect(this, () => {// this.node.destroy();
          });
        }

        onOKClick() {
          this.close();
        }

        onCloseClick() {
          this.close();
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "labelContent", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "labelTitle", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/AppNative.ts", ['cc', './gAppUtils.ts'], function (exports) {
  var cclegacy, Component, log, js, warn, sys, native, gAppUtils;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      Component = module.Component;
      log = module.log;
      js = module.js;
      warn = module.warn;
      sys = module.sys;
      native = module.native;
    }, function (module) {
      gAppUtils = module.gAppUtils;
    }],
    execute: function () {
      cclegacy._RF.push({}, "72e77oKpuFJiYIw+l9mMk4u", "AppNative", undefined); // function setObjKeysAsValues(eObj:any){ for (const key in eObj) { if (Object.prototype.hasOwnProperty.call(eObj, key)) { let v = eObj[key];if((typeof(v)!='string' || v.trim().length<=0)  && isNaN(Number(key))){ eObj[key] = key; } } } }


      let AppNativeF = exports('AppNativeF', /*#__PURE__*/function (AppNativeF) {
        AppNativeF["isInterstitialAdReady"] = "";
        AppNativeF["requestInterstitialAd"] = "";
        AppNativeF["showInterstitialAd"] = "";
        AppNativeF["isRewardedAdReady"] = "";
        AppNativeF["requestRewardedAd"] = "";
        AppNativeF["showRewardedAd"] = "";
        AppNativeF["isRewardedInterstitialAdReady"] = "";
        AppNativeF["requestRewardedInterstitialAd"] = "";
        AppNativeF["showRewardedInterstitialAd"] = "";
        AppNativeF["setBannerAdMaxHeight"] = "";
        AppNativeF["showBannerAd"] = "";
        AppNativeF["hideBannerAd"] = "";
        AppNativeF["showInAppRating"] = "";
        AppNativeF["openAppStoreReview"] = "";
        AppNativeF["purchaseProduct"] = "";
        AppNativeF["restorePurchase"] = "";
        AppNativeF["reportScore"] = "";
        AppNativeF["reportMagics"] = "";
        AppNativeF["showRank"] = "";
        AppNativeF["showShareMenu"] = "";
        AppNativeF["getDeviceModel"] = "";
        AppNativeF["getSystemVersion"] = "";
        AppNativeF["canOpenURL"] = "";
        AppNativeF["setupConfigs"] = "";
        AppNativeF["loadModule"] = "";
        AppNativeF["getInfos"] = "";
        return AppNativeF;
      }({}));
      gAppUtils.enumSetKeysAsValues(AppNativeF);
      const info = AppNativeF; // @ccclass('AppNative')

      class AppNative extends Component {
        constructor(...args) {
          super(...args);
          this.MSG_SHARE_COMPLETE = "MSG_SHARE_COMPLETE";
          this.MSG_SYS_SHARE_COMPLETE = "MSG_SYS_SHARE_COMPLETE";
          this.MSG_IAP_PURCHASE_BEGIN = "MSG_IAP_PURCHASE_BEGIN";
          this.MSG_IAP_PURCHASE_FINISHED = "MSG_IAP_PURCHASE_FINISHED";
          this.MSG_IAP_PURCHASE_RESTORED = "MSG_IAP_PURCHASE_RESTORED";
          this.MSG_IAP_PURCHASE_FAILED = "MSG_IAP_PURCHASE_FAILED";
          this.MSG_BANNER_AD_CLOSE_CLICKED = "MSG_BANNER_AD_CLOSE_CLICKED";
          this.MSG_INTERSTITIAL_AD_READY = "MSG_INTERSTITIAL_AD_READY";
          this.MSG_REWARDED_AD_READY = "MSG_REWARDED_AD_READY";
          this.MSG_REWARDED_AD_BONUS = "MSG_REWARDED_AD_BONUS";
          this.MSG_REWARDED_INSTERSTITIAL_AD_READY = "MSG_REWARDED_INSTERSTITIAL_AD_READY";
          this.MSG_REWARDED_INSTERSTITIAL_AD_BONUS = "MSG_REWARDED_INSTERSTITIAL_AD_BONUS";
          this._infos = null;
        }

        static get instance() {
          return AppNative._instance;
        }

        onLoad() {
          log(`${js.getClassName(this)} onLoad()`);

          if (AppNative._instance) {
            warn(`${js.getClassName(this)}} instance already existed!`);
            this.node.active = false;
            return;
          }

          AppNative._instance = this;
          window['gNative'] = this;

          if (sys.isNative) {
            native.bridge.onNative = (arg0, arg1) => {
              this.notify(arg0, arg1);
            };
          }
        }

        callFunction(functionName, param) {
          console.log("AppNative::callFunction():" + functionName + " param:" + param);
          let result = "";
          param = param ? param : "";

          if (sys.isNative) {
            if (sys.os === sys.OS.ANDROID) {
              // result = native.reflection.callStaticMethod("com/cocos/game/NativeHelper", "onScriptCommand", "(Ljava/lang/String;Ljava/lang/String;)Ljava/lang/String;", functionName, param);
              native.bridge.sendToNative(functionName, param);
            } else if (sys.os === sys.OS.IOS || sys.os === sys.OS.OSX) {
              result = native.reflection.callStaticMethod("NativeHelper", functionName + ":", param);
            }
          } else if (sys.platform == sys.Platform.WECHAT_GAME) ;

          console.log("AppNative::callFunction() typeof(result):" + typeof result);
          console.log("AppNative::callFunction() return:" + result);
          return result;
        }

        notify(eventName, param) {
          console.log("AppNative::notify():" + eventName + " param:" + param);
          this.node.emit(eventName, param);
        }

        showBannerAd() {
          return this.callFunction(info.showBannerAd);
        }

        hideBannerAd() {
          return this.callFunction(info.hideBannerAd);
        }

        isInterstitialAdReady() {
          let ret = this.callFunction(info.isInterstitialAdReady);
          return ret == "1";
        }

        requestInterstitialAd() {
          return this.callFunction(info.requestInterstitialAd);
        }

        showInterstitialAd() {
          return this.callFunction(info.showInterstitialAd);
        }

        isRewardedAdReady() {
          let ret = this.callFunction(info.isRewardedAdReady);
          return ret == "1";
        }

        requestRewardedAd() {
          return this.callFunction(info.requestRewardedAd);
        }

        showRewardedAd() {
          return this.callFunction(info.showRewardedAd);
        }

        isRewardedInterstitialAdReady() {
          let ret = this.callFunction(info.isRewardedInterstitialAdReady);
          return ret == "1";
        }

        requestRewardedInterstitialAd() {
          return this.callFunction(info.requestRewardedInterstitialAd);
        }

        showRewardedInterstitialAd() {
          return this.callFunction(info.showRewardedInterstitialAd);
        } // 4 times a year in AppStore


        showInAppRating() {
          return this.callFunction(info.showInAppRating);
        }

        openAppStoreReview() {
          return this.callFunction(info.openAppStoreReview);
        }

        purchaseProduct(productID) {
          return this.callFunction(info.purchaseProduct, productID);
        }

        restorePurchase() {
          return this.callFunction(info.restorePurchase);
        }

        showShareMenu(content, url) {
          return this.callFunction(info.showShareMenu, JSON.stringify({
            content: content,
            url: url
          }));
        }

        getDeviceModel() {
          return this.callFunction(info.getDeviceModel);
        }

        getSystemVersion() {
          return this.callFunction(info.getSystemVersion);
        }

        reportScore(score) {
          return this.callFunction(info.reportScore, score.toString());
        }

        reportMagics(magics) {
          return this.callFunction(info.reportMagics, magics.toString());
        }

        showRank() {
          return this.callFunction(info.showRank);
        }

        canOpenURL(strURL) {
          let ret = this.callFunction(info.canOpenURL, strURL);
          return ret == "1";
        }

        getInfos() {
          if (!this._infos) {
            let strInfos = this.callFunction(info.getInfos);

            if (strInfos && strInfos.length > 0) {
              this._infos = JSON.parse(strInfos);
            }
          }

          return this._infos;
        }

        setupConfigs(strConfigs) {
          return this.callFunction(info.setupConfigs, strConfigs);
        }

        loadModule(moduleName) {
          return this.callFunction(info.loadModule, moduleName);
        }

      }

      exports('AppNative', AppNative);
      AppNative._instance = null;

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/AppPrivacyDialogUI.ts", ['cc', './App.ts'], function (exports) {
  var cclegacy, Component, _decorator, gAppHelper;

  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      Component = module.Component;
      _decorator = module._decorator;
    }, function (module) {
      gAppHelper = module.gAppHelper;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "26e17MkgrFDdId2dZlUDugY", "AppPrivacyDialogUI", undefined);

      const {
        ccclass,
        property
      } = _decorator;
      let AppPrivacyDialogUI = exports('AppPrivacyDialogUI', (_dec = ccclass('AppPrivacyDialogUI'), _dec(_class = class AppPrivacyDialogUI extends Component {
        constructor(...args) {
          super(...args);
          this.funcOK = null;
        }

        start() {
          this.show();
        }

        show() {
          gAppHelper.showPanel(this);
        }

        close() {
          gAppHelper.closePanel(this);
        }

        onAcceptClick() {
          // gAppData.privacyPolicyAccepted = true;
          // gAppDataCtl.saveData();
          if (this.funcOK) {
            this.funcOK();
          }

          this.close();
        }

      }) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/AppPrivacyPolicy.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './App.ts'], function (exports) {
  var _applyDecoratedDescriptor, _initializerDefineProperty, cclegacy, TextAsset, _decorator, Component, gAppUI;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      TextAsset = module.TextAsset;
      _decorator = module._decorator;
      Component = module.Component;
    }, function (module) {
      gAppUI = module.gAppUI;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;

      cclegacy._RF.push({}, "8d1287GlERPIo30TYtiKAKt", "AppPrivacyPolicy", undefined);

      const {
        ccclass,
        property
      } = _decorator;
      let AppPrivacyPolicy = exports('AppPrivacyPolicy', (_dec = ccclass('AppPrivacyPolicy'), _dec2 = property(TextAsset), _dec3 = property(TextAsset), _dec(_class = (_class2 = class AppPrivacyPolicy extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "txtPrivacyPolicy", _descriptor, this);

          _initializerDefineProperty(this, "txtTermsCondition", _descriptor2, this);
        }

        start() {// [3]
        }

        onPrivacyPolicyClick() {
          gAppUI.showTextViewer(this.txtPrivacyPolicy.text, "Privacy Policy");
        }

        onTermsConditionClick() {
          gAppUI.showTextViewer(this.txtTermsCondition.text, "Terms&Conditions");
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "txtPrivacyPolicy", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "txtTermsCondition", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/AppRatingBoxUI.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './App.ts', './AppData.ts', './gAppConfig.ts'], function (exports) {
  var _applyDecoratedDescriptor, _initializerDefineProperty, cclegacy, Node, _decorator, Component, gAppHelper, gAppUI, gAppNative, gAppData, gAppConfig;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      Node = module.Node;
      _decorator = module._decorator;
      Component = module.Component;
    }, function (module) {
      gAppHelper = module.gAppHelper;
      gAppUI = module.gAppUI;
      gAppNative = module.gAppNative;
    }, function (module) {
      gAppData = module.gAppData;
    }, function (module) {
      gAppConfig = module.gAppConfig;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;

      cclegacy._RF.push({}, "518e4YdwaJDcqexFhoGsroi", "AppRatingBoxUI", undefined);

      const {
        ccclass,
        property
      } = _decorator;
      let AppRatingBoxUI = exports('AppRatingBoxUI', (_dec = ccclass('AppRatingBoxUI'), _dec2 = property(Node), _dec3 = property(Node), _dec(_class = (_class2 = class AppRatingBoxUI extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "coinInfo", _descriptor, this);

          _initializerDefineProperty(this, "stars", _descriptor2, this);

          this.cbOK = null;
          this.selectedStar = 5;
        }

        start() {
          this.coinInfo.active = gAppHelper.isChannelApproved();
          gAppHelper.showPanel(this);
        }

        onRatingClick() {
          if (!gAppHelper.isVersionRated()) {
            gAppData.ratedVersion = gAppConfig.channel_version;
            gAppHelper.scheduleOnce(() => {
              gAppUI.showRewardCollect(this.selectedStar + 5, () => {});
            }, 10);
          }

          gAppData.inAppRatingShowedCount++;

          if (gAppData.inAppRatingShowedCount < 4) {
            gAppNative.showInAppRating();
          } else {
            gAppNative.openAppStoreReview();
          }

          this.cbOK && this.cbOK(this.selectedStar);
          this.onCloseClick();
        }

        onCloseClick() {
          gAppHelper.closePanel(this);
        }

        onStarClick(evt) {
          let item = evt.target;

          if (item) {
            console.log("onStarClick(), type:", item.name);
            this.selectedStar = parseInt(item.name);

            if (this.selectedStar > 0) {
              let arr = this.stars.children;

              for (let i = 0; i < arr.length; i++) {
                let e = arr[i];

                if (e.children.length > 0) {
                  let highlight = e.children[0];
                  let starE = parseInt(e.name);
                  highlight.active = starE <= this.selectedStar;
                }
              }
            }
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "coinInfo", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "stars", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/AppRatingButton.ts", ['cc', './App.ts'], function (exports) {
  var cclegacy, Component, _decorator, gAppHelper, gAppUI;

  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      Component = module.Component;
      _decorator = module._decorator;
    }, function (module) {
      gAppHelper = module.gAppHelper;
      gAppUI = module.gAppUI;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "1110cbEl9tOdaJaF8pZYr0A", "AppRatingButton", undefined);

      const {
        ccclass,
        property
      } = _decorator;
      let AppRatingButton = exports('AppRatingButton', (_dec = ccclass('AppRatingButton'), _dec(_class = class AppRatingButton extends Component {
        start() {
          if (!gAppHelper.isChannelApproved()) {
            this.node.active = false;
          } else if (gAppHelper.isVersionRated()) {
            this.node.active = false;
          }
        }

        onClick() {
          gAppUI.showRatingBox(numStars => {});
        }

      }) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/AppRemoteConfig.ts", ['cc', './gAppConfig.ts', './gAppUtils.ts'], function (exports) {
  var cclegacy, _decorator, Component, gAppConfig, gAppUtils;

  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
    }, function (module) {
      gAppConfig = module.gAppConfig;
    }, function (module) {
      gAppUtils = module.gAppUtils;
    }],
    execute: function () {
      var _dec, _class, _class2;

      cclegacy._RF.push({}, "415edTcpihJUbJRhAQEdujR", "AppRemoteConfig", undefined);

      const {
        ccclass,
        property
      } = _decorator;
      const REMOTE_SECRECT_CODE = "good";
      const key = "AppRemoteConfig";
      const data = gAppConfig;
      let AppRemoteConfig = exports('AppRemoteConfig', (_dec = ccclass('AppRemoteConfig'), _dec(_class = (_class2 = class AppRemoteConfig extends Component {
        constructor(...args) {
          super(...args);
          this.downloaded = false;
        }

        onLoad() {
          console.log("AppRemoteConfigCtl onLoad()");
          this.loadData();
          console.log("RemoteConfig:", data);
          this.schedule(() => {
            if (!this.downloaded) {
              this.downloadRemote();
            }
          }, 60, 3, 1);
        }

        start() {
          console.log("AppRemoteConfigCtl start()");
        }

        loadData() {
          gAppUtils.loadObject(key, data);
        }

        saveData() {//gLibUtils.saveObject(key, data);
        }

        downloadRemote() {
          let strUrl = data.remote_config_url; // no cached

          gAppUtils.request(strUrl, (err, txt) => {
            console.log(txt);

            if (!err) {
              let info = txt;

              try {
                info = JSON.parse(txt);
              } catch (exception) {
                console.error(txt);
              }

              if (info.secrect_code == REMOTE_SECRECT_CODE) {
                console.log("AppRemoteConfig:good!");
                gAppUtils.saveObject(key, info);
                this.loadData();
                this.downloaded = true;
                this.node.emit(AppRemoteConfig.EVT_UPDATED);
              } else {
                console.log("AppRemoteConfig: no valid secrect.");
              }
            }
          });
        }

      }, _class2.EVT_UPDATED = "EVT_UPDATED", _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/AppRes.ts", ['cc', './gAppConstant.ts'], function (exports) {
  var cclegacy, Component, log, resources, Prefab, warn, assetManager, error, _decorator, BUNDLE_APP, EVT_PREFAB_LOADED, BUNDLE_HOME, PREFAB_DIR;

  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      Component = module.Component;
      log = module.log;
      resources = module.resources;
      Prefab = module.Prefab;
      warn = module.warn;
      assetManager = module.assetManager;
      error = module.error;
      _decorator = module._decorator;
    }, function (module) {
      BUNDLE_APP = module.BUNDLE_APP;
      EVT_PREFAB_LOADED = module.EVT_PREFAB_LOADED;
      BUNDLE_HOME = module.BUNDLE_HOME;
      PREFAB_DIR = module.PREFAB_DIR;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "4daaba2wvBNcozRYTWNz5ba", "AppRes", undefined);

      const {
        ccclass,
        property
      } = _decorator;
      const arrPreloadBundles = [BUNDLE_APP, BUNDLE_HOME];
      let AppRes = exports('AppRes', (_dec = ccclass("AppRes"), _dec(_class = class AppRes extends Component {
        constructor(...args) {
          super(...args);
          this.mapBundles = new Map();
          this.mapPrefabs = new Map();
          this.isPrefabDirLoaded = false;
        }

        start() {
          log(`AppRes.start()`);
          this.mapBundles.set("resources", resources);

          this._loadBundles(0);
        }

        _loadBundles(bundleIndex) {
          if (bundleIndex >= arrPreloadBundles.length) {
            return;
          }

          this.loadBundle(arrPreloadBundles[bundleIndex], () => {
            this.loadBundlePrefabs(arrPreloadBundles[bundleIndex], () => {});

            this._loadBundles(bundleIndex + 1);
          });
        }

        loadBundlePrefabs(bundleName, onComplete) {
          log(`AppRes.loadBundlePrefabs(${bundleName})`);
          const dir = PREFAB_DIR;
          let bundle = this.getBundle(bundleName);

          if (!bundle) {
            this.loadBundle(bundleName, () => {
              this.loadBundlePrefabs(bundleName, onComplete);
            });
          } else {
            bundle.loadDir(`${dir}`, Prefab, (err, arrData) => {
              if (err) {
                warn(`loadDir(${dir}) error:${err.message}`);
                return;
              }

              for (let i = 0; i < arrData.length; i++) {
                log(`prefabs: arrData[i]:${arrData[i].name}`);
                this.mapPrefabs.set(arrData[i].name, arrData[i]);
              }

              if (bundleName == BUNDLE_APP) {
                // notify when bundle app prefabs are ready.
                this.isPrefabDirLoaded = true;
                this.node.emit(EVT_PREFAB_LOADED, BUNDLE_APP);
              }

              onComplete && onComplete(arrData);
            });
          }
        }

        loadBundle(bundleName, onComplete) {
          log(`AppRes.loadBundle(${bundleName})`);
          assetManager.loadBundle(bundleName, (err, data) => {
            if (err) {
              error(`loadBundle(${bundleName}) error:${err}`);
              return;
            }

            log(`AppRes bundle loaded:${bundleName}`);
            this.mapBundles.set(bundleName, data);
            onComplete && onComplete(data);
          });
        }

        getBundle(bundleName) {
          log(`AppRes.getBundle(${bundleName})`);
          let result = null;
          result = this.mapBundles.get(bundleName);

          if (!result) {
            warn(`bundle ${bundleName} not loaded!`);
          }

          return result;
        }

        getPrefab(prefabName) {
          log(`AppRes.getPrefab(${prefabName})`);
          let result = null;
          result = this.mapPrefabs.get(prefabName);

          if (!result) {
            warn(`getPrefab(${prefabName}) error!`);
          }

          return result;
        }

      }) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/AppResolution.ts", ['cc', './gAppConstant.ts'], function (exports) {
  var cclegacy, _decorator, Component, size, view, screen, ResolutionPolicy, DESIGN_RATIO_LANDSCAPE, DESIGN_H, DESIGN_W, DESIGN_RATIO_PORTRAIT;

  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
      size = module.size;
      view = module.view;
      screen = module.screen;
      ResolutionPolicy = module.ResolutionPolicy;
    }, function (module) {
      DESIGN_RATIO_LANDSCAPE = module.DESIGN_RATIO_LANDSCAPE;
      DESIGN_H = module.DESIGN_H;
      DESIGN_W = module.DESIGN_W;
      DESIGN_RATIO_PORTRAIT = module.DESIGN_RATIO_PORTRAIT;
    }],
    execute: function () {
      var _dec, _class, _class2;

      cclegacy._RF.push({}, "4ba73XI1tJFV6v6Y2VfHO4m", "AppResolution", undefined);

      let AppResolutionPolicy = exports('AppResolutionPolicy', /*#__PURE__*/function (AppResolutionPolicy) {
        AppResolutionPolicy[AppResolutionPolicy["fixedHeightPortrait"] = 0] = "fixedHeightPortrait";
        AppResolutionPolicy[AppResolutionPolicy["fixedHeightLandscape"] = 1] = "fixedHeightLandscape";
        AppResolutionPolicy[AppResolutionPolicy["fixedWidthPortrait"] = 2] = "fixedWidthPortrait";
        return AppResolutionPolicy;
      }({}));
      const MARGIN_TOP = 50;
      const CHECK_INTERVAL = 0.1;
      const {
        ccclass,
        property
      } = _decorator;
      let AppResolution = exports('AppResolution', (_dec = ccclass('AppResolution'), _dec(_class = (_class2 = class AppResolution extends Component {
        constructor(...args) {
          super(...args);
          this._policy = AppResolutionPolicy.fixedHeightPortrait;
          this._winSize = size();
          this.lastCheckTime = 0;
        }

        get size() {
          return size(view.getVisibleSize());
        }

        get policy() {
          return this._policy;
        }

        set policy(value) {
          this._policy = value;
        }

        start() {
          this.adjustResolutionPolicy();
          window.addEventListener('resize', () => {
            this.adjustResolutionPolicy();
          });
        }

        update(deltaTime) {
          this.lastCheckTime += deltaTime;

          if (this.lastCheckTime < CHECK_INTERVAL) {
            return;
          }

          this.lastCheckTime = 0;
          this.adjustResolutionPolicy();
        }

        adjustResolutionPolicy() {
          let winSizeNew = screen.windowSize;

          if (!this._winSize.equals(winSizeNew)) {
            let windowRatio = winSizeNew.width / winSizeNew.height;

            if (windowRatio > DESIGN_RATIO_LANDSCAPE) {
              this.policy = AppResolutionPolicy.fixedHeightLandscape;
              view.setDesignResolutionSize(DESIGN_H, DESIGN_W + MARGIN_TOP, ResolutionPolicy.FIXED_HEIGHT);
            } else if (windowRatio > DESIGN_RATIO_PORTRAIT) {
              this.policy = AppResolutionPolicy.fixedHeightPortrait;
              view.setDesignResolutionSize(DESIGN_W, DESIGN_H, ResolutionPolicy.FIXED_HEIGHT);
            } else {
              this.policy = AppResolutionPolicy.fixedWidthPortrait;
              view.setDesignResolutionSize(DESIGN_W, DESIGN_H, ResolutionPolicy.FIXED_WIDTH);
            }

            this._winSize.set(winSizeNew);

            this.node.emit(AppResolution.EVT_SIZE_CHANGED);
          }
        }

      }, _class2.EVT_SIZE_CHANGED = "EVT_SIZE_CHANGED", _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/AppRewardCollectUI.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './App.ts', './AppCoinInfo.ts', './AppUser.ts', './AppAudioSounds.ts'], function (exports) {
  var _applyDecoratedDescriptor, _initializerDefineProperty, cclegacy, Node, Label, _decorator, Component, v3, tween, quat, find, instantiate, bezier, sys, gAppHelper, gAppAudio, AppCoinInfo, gAppUser, SND;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      Node = module.Node;
      Label = module.Label;
      _decorator = module._decorator;
      Component = module.Component;
      v3 = module.v3;
      tween = module.tween;
      quat = module.quat;
      find = module.find;
      instantiate = module.instantiate;
      bezier = module.bezier;
      sys = module.sys;
    }, function (module) {
      gAppHelper = module.gAppHelper;
      gAppAudio = module.gAppAudio;
    }, function (module) {
      AppCoinInfo = module.AppCoinInfo;
    }, function (module) {
      gAppUser = module.gAppUser;
    }, function (module) {
      SND = module.SND;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3;

      cclegacy._RF.push({}, "38dbcTKQupCa7BuY0YeJSmZ", "AppRewardCollectUI", undefined);

      const {
        ccclass,
        property
      } = _decorator;
      let AppRewardCollectUI = exports('AppRewardCollectUI', (_dec = ccclass('AppRewardCollectUI'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Label), _dec(_class = (_class2 = class AppRewardCollectUI extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "lighting", _descriptor, this);

          _initializerDefineProperty(this, "coinIcon", _descriptor2, this);

          _initializerDefineProperty(this, "labelCount", _descriptor3, this); //@property(Node) giftIcon:Node = null;


          this.destroyOnClose = false;
          this.onComplete = null;
          this.count = 0;
          this.coinScaleOrg = v3(1, 1, 1);
        }

        setParams(rewardCount, onComplete) {
          this.destroyOnClose = true;
          this.count = rewardCount;
          this.onComplete = onComplete;
        }

        onLoad() {
          this.coinScaleOrg = v3(this.coinIcon.scale);
          this.labelCount.node.active = false;
        }

        start() {
          this.show();
        }

        show() {
          gAppHelper.showPanel(this);
          tween(this.coinIcon).set({
            scale: v3(0, 0, 1)
          }).to(0.2, {
            scale: this.coinScaleOrg
          }).start();
          this.scheduleOnce(this.onGiftClick, 0.5);
        }

        close() {
          gAppHelper.closePanel(this);
        }

        onGiftClick() {
          //this.giftIcon.active = false;
          tween(this.lighting).by(10, {
            rotation: quat(0, 0, 1, 0)
          }).repeatForever().start();
          this.coinIcon.active = true;
          let delay = this.collectCoins();
          this.scheduleOnce(() => {
            this.onComplete && this.onComplete();
            this.close();
          }, delay);
        }

        collectCoins() {
          let lastPlaySoundTime = 0;
          let posWorld = v3(AppCoinInfo.coinWorldPos);
          let canvas = find("Canvas");
          let delay = 0.1;
          let count = this.count; //parseInt(this.labelCount.string);

          for (let i = 0; i < count; i++) {
            let i1 = i;
            let clone = instantiate(this.coinIcon);
            clone.parent = canvas;
            let posClone = clone.worldPosition;
            tween(clone).delay(delay).call(() => {
              this.labelCount.node.active = true;
              this.labelCount.string = (i + 1).toString();
            }).to(0.5, {
              scale: v3(0.1, 0.1, 1)
            }, {
              onUpdate: (arg, ratio) => {
                let bezierNum = 20;
                let x = bezier(clone.worldPosition.x, clone.worldPosition.x + bezierNum, posWorld.x + bezierNum, posWorld.x, ratio);
                let y = bezier(clone.worldPosition.y, clone.worldPosition.y + bezierNum, posWorld.y + bezierNum, posWorld.y, ratio);
                clone.worldPosition = v3(x, y, clone.worldPosition.z);
              }
            }).call(() => {
              if (i1 < count - 1) {
                gAppUser.addCoin(1);

                if (sys.now() - lastPlaySoundTime >= 100) {
                  gAppAudio.playSound(SND.AddGold);
                  lastPlaySoundTime = sys.now();
                }
              } else {
                gAppUser.addCoin(1);
                gAppAudio.playSound(SND.BuyMagics); //let panel = this.node.getChildByName("Panel");

                tween(this.coinIcon).to(0.1, {
                  scale: v3(this.coinScaleOrg.x * 1.5, this.coinScaleOrg.y * 1.5, 1)
                }).delay(0.1).to(0.1, {
                  scale: this.coinScaleOrg
                }).start(); ////tween(this.coinIcon).to(0.1, {scale:v3(1.5,1.5,1)}).delay(0.2).to(0.1, {scale:v3(1,1,1)}).start();
              }
            }).removeSelf().start();
            delay += i < 9 ? 0.1 : 0.05;
          }

          delay += 0.8;
          return delay;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "lighting", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "coinIcon", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "labelCount", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/AppRewardMessageUI.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './App.ts', './AppCoinInfo.ts', './AppUser.ts'], function (exports) {
  var _applyDecoratedDescriptor, _initializerDefineProperty, cclegacy, Label, Node, Button, _decorator, Component, v3, tween, find, instantiate, gAppUI, AppCoinInfo, gAppUser;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      Label = module.Label;
      Node = module.Node;
      Button = module.Button;
      _decorator = module._decorator;
      Component = module.Component;
      v3 = module.v3;
      tween = module.tween;
      find = module.find;
      instantiate = module.instantiate;
    }, function (module) {
      gAppUI = module.gAppUI;
    }, function (module) {
      AppCoinInfo = module.AppCoinInfo;
    }, function (module) {
      gAppUser = module.gAppUser;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;

      cclegacy._RF.push({}, "0be0eviaolFFJi0XuVBpoZW", "AppRewardMessageUI", undefined);

      const {
        ccclass,
        property
      } = _decorator;
      let AppRewardMessageUI = exports('AppRewardMessageUI', (_dec = ccclass('AppRewardMessageUI'), _dec2 = property(Label), _dec3 = property(Node), _dec4 = property(Button), _dec5 = property(Node), _dec(_class = (_class2 = class AppRewardMessageUI extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "labelRewardCount", _descriptor, this);

          _initializerDefineProperty(this, "nodeCoinIcon", _descriptor2, this);

          _initializerDefineProperty(this, "buttonOK", _descriptor3, this);

          _initializerDefineProperty(this, "lighting", _descriptor4, this);

          this.destroyOnClose = false;
          this.funcCollected = null;
        }

        setParams(rewardCount, onCollected) {
          this.destroyOnClose = true;
          this.labelRewardCount.string = rewardCount.toString();
          this.funcCollected = onCollected;
        }

        start() {
          this.show();
        }

        show() {
          let panel = this.node.getChildByName("Panel");
          panel.setScale(v3(0, 0, 1));
          tween(panel).to(0.1, {
            scale: v3(1.0, 1.0, 1)
          }).start();
          tween(this.lighting).by(5, {
            angle: -360
          }).union().repeatForever().start();
        }

        close() {
          let panel = this.node.getChildByName("Panel");
          tween(panel).to(0.1, {
            scale: v3(0, 0, 1)
          }).call(() => {
            if (this.destroyOnClose) {
              this.node.destroy();
            } else {
              this.node.active = false;
            }
          }).start();
        }

        onOKClick() {
          let count = parseInt(this.labelRewardCount.string);
          gAppUI.showRewardCollect(count, this.funcCollected); // AppRewardCollectUI.create(count, this.funcCollected);

          this.close();
        }

        onCloseClick() {
          gAppUI.antiDoubleClicks(); // AppBlockerUI.antiDoubleClicks();

          this.close();
        }

        collectCoins() {
          let posWorld = v3(AppCoinInfo.coinWorldPos);
          let canvas = find("Canvas");
          let delay = 0;
          let count = parseInt(this.labelRewardCount.string);

          for (let i = 0; i < count; i++) {
            let i1 = i;
            let clone = instantiate(this.nodeCoinIcon);
            clone.parent = canvas;
            tween(clone).delay(delay).call(() => {
              this.labelRewardCount.string = (parseInt(this.labelRewardCount.string) - 1).toString();
            }).to(0.5, {
              worldPosition: posWorld,
              scale: v3(0.1, 0.1, 1)
            }).call(() => {
              i1 < count - 1 ? gAppUser.addCoin(1) : gAppUser.addCoin(1);
            }).removeSelf().start();
            delay += 0.1;
          }

          return delay;
        } // static create(rewardCount:number, onCollected?:Function){
        //     let comp = gAppRes.instantiateComponent(AppRewardMessageUI);// instantiate(gApp.res.prefabAppRewardCollectMessage);
        //     comp.destroyOnClose = true;
        //     comp.labelRewardCount.string = rewardCount.toString();   
        //     comp.funcCollected = onCollected;
        //     return comp;
        // }


      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "labelRewardCount", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "nodeCoinIcon", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "buttonOK", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "lighting", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/AppSceneLoaderUI.ts", ['cc', './App.ts'], function (exports) {
  var cclegacy, Component, UIOpacity, tween, director, Label, _decorator, gAppUI;

  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      Component = module.Component;
      UIOpacity = module.UIOpacity;
      tween = module.tween;
      director = module.director;
      Label = module.Label;
      _decorator = module._decorator;
    }, function (module) {
      gAppUI = module.gAppUI;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "caac5sBN5FBRaQDTAWvcO/t", "AppSceneLoaderUI", undefined);

      const {
        ccclass,
        property
      } = _decorator;
      let AppSceneLoaderUI = exports('AppSceneLoaderUI', (_dec = ccclass('AppSceneLoaderUI'), _dec(_class = class AppSceneLoaderUI extends Component {
        constructor(...args) {
          super(...args);
          this.strScene = "";
        }

        start() {
          var _this$node$getChildBy;

          let comp = this.node.getComponent(UIOpacity);

          if (!comp) {
            console.error("compnent missing: UIOpacity");
          }

          comp.opacity = 0;
          tween(comp).to(0.3, {
            opacity: 255
          }).call(() => {
            director.loadScene(this.strScene, (err, scene) => {
              gAppUI.showFadeOut();
            });
          }).start();
          let loadingInfo = (_this$node$getChildBy = this.node.getChildByName("LabelLoading")) == null ? void 0 : _this$node$getChildBy.getComponent(Label);

          if (loadingInfo) {
            tween(loadingInfo.node).hide().delay(3.0).show().call(() => {
              let strOrg = loadingInfo.string;
              let i = 0;
              let arr = ['.', '..', '...'];
              this.schedule(() => {
                loadingInfo.string = strOrg + arr[i++ % arr.length];
              }, 0.5, 100);
            }).start();
          }
        } // static loadScene(strSceneName:string, bDirectLoad?:boolean){
        //     AppBlockerUI.show();
        //     if(bDirectLoad){
        //         director.loadScene(strSceneName);
        //     }else{
        //         //let pref = LibRes.instance.prefabSceneLoader;//.getPrefab(js.getClassName(SceneLoader));// resources.get("Prefab/MessageBox", Prefab);
        //         let comp = gAppRes.instantiateComponent(AppSceneLoaderUI);
        //         comp.strScene = strSceneName;
        //         comp.node.parent = find("Canvas");
        //     }
        // }


      }) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/AppSetterForEditor.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _initializerDefineProperty, cclegacy, _decorator, Component;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor, _descriptor2, _class3;

      cclegacy._RF.push({}, "64f8ciH2c5LkIz8BBAHk9Zq", "AppSetterForEditor", undefined);

      const {
        ccclass,
        property,
        executeInEditMode
      } = _decorator;
      let AppSetterForEditor = exports('AppSetterForEditor', (_dec = ccclass('AppSetterForEditor'), _dec2 = executeInEditMode(true), _dec(_class = _dec2(_class = (_class2 = (_class3 = class AppSetterForEditor extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "isPortrait", _descriptor, this);

          _initializerDefineProperty(this, "isLandscape", _descriptor2, this);
        }

        start() {}

        update(deltaTime) {}

      }, _class3.EVT_SETTING_CHANGE = 'EVT_SETTING_CHANGE', _class3.landscaping = false, _class3.portraiting = false, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "isPortrait", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return true;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "isLandscape", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return true;
        }
      })), _class2)) || _class) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/AppShareButton.ts", ['cc', './App.ts', './PopData.ts', './gAppConfig.ts'], function (exports) {
  var cclegacy, Component, log, sys, _decorator, gAppNative, gPopData, gAppConfig;

  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      Component = module.Component;
      log = module.log;
      sys = module.sys;
      _decorator = module._decorator;
    }, function (module) {
      gAppNative = module.gAppNative;
    }, function (module) {
      gPopData = module.gPopData;
    }, function (module) {
      gAppConfig = module.gAppConfig;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "028c1csa6xN8bru2DBisTgv", "AppShareButton", undefined);

      const {
        ccclass,
        property
      } = _decorator;
      let AppShareButton = exports('AppShareButton', (_dec = ccclass('AppShareButton'), _dec(_class = class AppShareButton extends Component {
        start() {}

        onClick() {
          log(`AppShareButton.onClick()`);
          let url = gAppConfig.share_url;
          let title = `My HighScore:(${gPopData.highScore}).\n Come play with me in PopCandy Game.`;

          if (sys.isBrowser) {
            if (navigator.share) {
              navigator.share({
                title: title,
                url: url
              }).then(() => {
                console.log('Thanks for sharing!');
              }).catch(console.error);
            }
          } else {
            gAppNative.showShareMenu(title, url);
          }
        }

      }) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/AppSoundButton.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './App.ts', './AppData.ts'], function (exports) {
  var _applyDecoratedDescriptor, _initializerDefineProperty, cclegacy, Node, _decorator, Component, gAppAudio, gAppData;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      Node = module.Node;
      _decorator = module._decorator;
      Component = module.Component;
    }, function (module) {
      gAppAudio = module.gAppAudio;
    }, function (module) {
      gAppData = module.gAppData;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;

      cclegacy._RF.push({}, "ccd241YjN9FT7PenXEdTmLy", "AppSoundButton", undefined);

      const {
        ccclass,
        property
      } = _decorator;
      let AppSoundButton = exports('AppSoundButton', (_dec = ccclass('AppSoundButton'), _dec2 = property(Node), _dec3 = property(Node), _dec(_class = (_class2 = class AppSoundButton extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "soundOn", _descriptor, this);

          _initializerDefineProperty(this, "soundOff", _descriptor2, this);
        }

        start() {
          this.updateButtton();
        }

        updateButtton() {
          this.soundOn.active = gAppData.musicVolume >= 0.5;
          this.soundOff.active = !this.soundOn.active;
        }

        onClick() {
          let volume = gAppData.musicVolume > 0.5 ? 0 : 1.0;
          gAppAudio.setMusicVolume(volume);
          gAppAudio.setSoundVolume(volume);
          this.updateButtton();
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "soundOn", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "soundOff", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/AppStoreHelper.ts", ['cc', './App.ts', './AppUser.ts', './gAppConfig.ts'], function (exports) {
  var cclegacy, Component, log, _decorator, gAppNative, gAppUI, gAppAdHelper, gUserData, gAppConfig;

  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      Component = module.Component;
      log = module.log;
      _decorator = module._decorator;
    }, function (module) {
      gAppNative = module.gAppNative;
      gAppUI = module.gAppUI;
      gAppAdHelper = module.gAppAdHelper;
    }, function (module) {
      gUserData = module.gUserData;
    }, function (module) {
      gAppConfig = module.gAppConfig;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "84e49ZktYlMFITaEYqCgy+T", "AppStoreHelper", undefined);

      const {
        ccclass,
        property
      } = _decorator;
      let AppStoreHelper = exports('AppStoreHelper', (_dec = ccclass('AppStoreHelper'), _dec(_class = class AppStoreHelper extends Component {
        constructor(...args) {
          super(...args);
          this.isPurchasing = false;
        } // idCoins = [
        //     {id:Config.product_buy5, coins:5},
        //     {id:Config.product_buy18, coins:18},
        //     {id:Config.product_buy35, coins:35},
        //     {id:Config.product_buy50, coins:50},
        //     {id:Config.product_buy100, coins:100},
        // ]


        start() {
          gAppNative.node.on(gAppNative.MSG_IAP_PURCHASE_BEGIN, e => {
            console.log("MSG_IAP_PURCHASE_BEGIN:" + e);
            gAppUI.showWaiting();
            this.isPurchasing = true;
          });
          gAppNative.node.on(gAppNative.MSG_IAP_PURCHASE_FINISHED, e => {
            console.log("MSG_IAP_PURCHASE_FINISHED:" + e);
            this.handlePurchaseFinished(e);
            gAppUI.hideWaiting();
            this.isPurchasing = false;
          });
          gAppNative.node.on(gAppNative.MSG_IAP_PURCHASE_FAILED, e => {
            console.log("MSG_IAP_PURCHASE_FAILED:" + e);
            gAppUI.hideWaiting();

            if (e && e.length > 0) {
              if (e != "user_canceled") {
                gAppUI.showTips(`Purchase error:, ${e}`);
              }
            } else {
              gAppUI.showTips("Purchase error!");
            }

            this.isPurchasing = false;
          });
          gAppNative.node.on(gAppNative.MSG_IAP_PURCHASE_RESTORED, e => {
            console.log("MSG_IAP_PURCHASE_RESTORED:" + e);
            this.handlePurchasedRestored(e);
            gAppUI.hideWaiting();
            this.isPurchasing = false;
          });
        }

        purchase(product) {
          log(`AppStoreHelper.purchase(${product})`);
          let found = gAppConfig.products.find((value, index, arr) => {
            return value.id == product;
          });

          if (!found) {
            gAppUI.showTips(`No product found for:${product}`);
          }

          gAppNative.purchaseProduct(found.id);
        }

        restorePurchasedItems() {
          gAppNative.restorePurchase();
        }

        coinsOfProduct(product) {
          let coins = 0;
          let found = gAppConfig.products.find((value, index, arr) => {
            return value.id == product;
          });

          if (found) {
            coins = found.count;
          }

          return coins;
        }

        handlePurchaseFinished(product) {
          let coins = this.coinsOfProduct(product);

          if (coins > 0) {
            gAppUI.showRewardCollect(coins, () => {}); // gAppUserStats.reportUserPurchase(coins);
          } else if (product == gAppConfig.product_remove_ad) {
            gUserData.adRemoved = true;
            gAppAdHelper.hideBannerAd();
          }
        }

        handlePurchasedRestored(product) {
          if (product == gAppConfig.product_remove_ad) {
            gUserData.adRemoved = true;
            gAppAdHelper.hideBannerAd();
            gAppUI.showTips("Purchased item restoring completed!");
          }
        } // showUI(onComplete?:Function){
        //     AppStoreUI.create(find("Canvas/StoreLayer"), onComplete);    
        // }


      }) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/AppStoreItem.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './gAppConfig.ts'], function (exports) {
  var _applyDecoratedDescriptor, _initializerDefineProperty, cclegacy, Node, Label, _decorator, Component, log, gAppConfig;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      Node = module.Node;
      Label = module.Label;
      _decorator = module._decorator;
      Component = module.Component;
      log = module.log;
    }, function (module) {
      gAppConfig = module.gAppConfig;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class2, _class3, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _class4;

      cclegacy._RF.push({}, "9b0a0DP75lNzb064Qosogds", "AppStoreItem", undefined);

      const {
        ccclass,
        property
      } = _decorator;

      class AppStoreItemInfo {
        constructor() {
          this.id = "";
          this.icon = "coin";
          this.xSymbol = "x";
          this.count = 0;
          this.description = "";
          this.currency = "$";
          this.price = "0.99";
          this.hot = false;
        }

      }

      exports('AppStoreItemInfo', AppStoreItemInfo);
      let AppStoreItem = exports('AppStoreItem', (_dec = ccclass('AppStoreItem'), _dec2 = property(Node), _dec3 = property(Label), _dec4 = property(Label), _dec5 = property(Label), _dec6 = property(Label), _dec7 = property(Label), _dec8 = property(Node), _dec9 = property(Node), _dec(_class2 = (_class3 = (_class4 = class AppStoreItem extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "icon", _descriptor, this);

          _initializerDefineProperty(this, "labelX", _descriptor2, this);

          _initializerDefineProperty(this, "labelCount", _descriptor3, this);

          _initializerDefineProperty(this, "labelDescriptioin", _descriptor4, this);

          _initializerDefineProperty(this, "labelCurrency", _descriptor5, this);

          _initializerDefineProperty(this, "labelPrice", _descriptor6, this);

          _initializerDefineProperty(this, "hotItem", _descriptor7, this);

          _initializerDefineProperty(this, "adRewardItem", _descriptor8, this);

          this.itemId = "";
        }

        start() {
          log(`AppStoreItem.start()`);
        }

        update(deltaTime) {}

        updateItem(info) {
          this.itemId = info.id;
          this.icon.active = info.icon.length > 0;
          this.labelX.string = info.xSymbol;
          this.labelX.node.active = info.xSymbol.length > 0;
          this.labelCount.string = `${info.count}`;
          this.labelCount.node.active = info.xSymbol.length > 0;
          this.labelDescriptioin.string = info.description;

          if (this.labelDescriptioin.string.length > 0) {
            this.labelDescriptioin.fontSize = 26;
          }

          this.labelCurrency.string = info.currency;
          this.labelCurrency.node.active = info.currency.length > 0;
          this.labelPrice.string = info.price;

          if (!this.labelCurrency.node.active) {
            this.labelPrice.fontSize = 26;
          }

          this.hotItem.active = info.hot;
          this.adRewardItem.active = this.itemId == gAppConfig.product_rewarded_ad;
        }

        onItemButtonClick(evt) {
          log(`AppStoreItem.onItemButtonClick()`);
          log(`itemId: ${this.itemId}`);
          this.node.emit(AppStoreItem.EVT_ITEM_CLICK, this.itemId);
        }

      }, _class4.EVT_ITEM_CLICK = "EVT_ITEM_CLICK", _class4), (_descriptor = _applyDecoratedDescriptor(_class3.prototype, "icon", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class3.prototype, "labelX", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class3.prototype, "labelCount", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class3.prototype, "labelDescriptioin", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class3.prototype, "labelCurrency", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class3.prototype, "labelPrice", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class3.prototype, "hotItem", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class3.prototype, "adRewardItem", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class3)) || _class2));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/AppStoreUI.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './App.ts', './AppStoreItem.ts', './gAppConfig.ts', './gAppConstant.ts'], function (exports) {
  var _applyDecoratedDescriptor, _initializerDefineProperty, cclegacy, Node, Label, _decorator, Component, instantiate, log, gAppUI, gAppAdHelper, gAppStoreHelper, AppStoreItem, gAppConfig, EFFECT_SLIDE_UP_DOWN;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      Node = module.Node;
      Label = module.Label;
      _decorator = module._decorator;
      Component = module.Component;
      instantiate = module.instantiate;
      log = module.log;
    }, function (module) {
      gAppUI = module.gAppUI;
      gAppAdHelper = module.gAppAdHelper;
      gAppStoreHelper = module.gAppStoreHelper;
    }, function (module) {
      AppStoreItem = module.AppStoreItem;
    }, function (module) {
      gAppConfig = module.gAppConfig;
    }, function (module) {
      EFFECT_SLIDE_UP_DOWN = module.EFFECT_SLIDE_UP_DOWN;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;

      cclegacy._RF.push({}, "2418cOEU4JDOLqbYuSUKLnv", "AppStoreUI", undefined);

      const {
        ccclass,
        property
      } = _decorator;
      const arrItems = gAppConfig.products;
      let showTimes = 0;
      let AppStoreUI = exports('AppStoreUI', (_dec = ccclass('AppStoreUI'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Label), _dec5 = property(Node), _dec(_class = (_class2 = class AppStoreUI extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "content", _descriptor, this);

          _initializerDefineProperty(this, "waiting", _descriptor2, this);

          _initializerDefineProperty(this, "labelWaiting", _descriptor3, this);

          _initializerDefineProperty(this, "loading", _descriptor4, this);

          this.waitingTicks = 0;
          this.strWaitingOrg = "Please Wait";
          this.waitingClickCount = 0;
        }

        start() {
          this.strWaitingOrg = this.labelWaiting.string;
          gAppUI.runShowPanelEffect(this, EFFECT_SLIDE_UP_DOWN);
          let sample = this.content.children[0];
          this.content.children.forEach(e => {
            e.active = false;
          });
          this.scheduleOnce(() => {
            for (let i = 0; i < arrItems.length; i++) {
              const e = arrItems[i];
              let item = i < this.content.children.length ? this.content.children[i] : instantiate(sample);
              item.parent = this.content;
              item.active = true;
              item.getComponent(AppStoreItem).updateItem(e);
              item.on(AppStoreItem.EVT_ITEM_CLICK, this.onItemButtonClick, this);
            }

            this.scheduleOnce(() => {
              this.loading.active = false;
            });
          }, showTimes++ ? 0.3 : 1.0);
        }

        onItemButtonClick(itemId) {
          log(`AppStoreUI.onItemButtonClick(${itemId})`);
          gAppUI.antiDoubleClicks();

          if (gAppConfig.product_rewarded_ad == itemId) {
            if (gAppAdHelper.isRewardedAdReady()) {
              gAppUI.showVideoAdMessage(() => {
                gAppAdHelper.showRewardedAd();
              });
            } else {
              gAppUI.showTips("Rewarded video is not ready.\nPlease try again later.");
            }
          } else if (gAppConfig.product_restore_purchased == itemId) {
            this.onRestorePurchasedClick();
          } else {
            this.buy(itemId);
          }
        }

        onCloseClick() {
          // gAppHelper.closePanel(this);
          gAppUI.runClosePanelEffect(this, () => {}, EFFECT_SLIDE_UP_DOWN);
        }

        buy(productId) {
          if (gAppStoreHelper.isPurchasing) {
            gAppUI.showTips("Purchase item is under progressing.");
            return;
          }

          if (gAppConfig.testing) {
            gAppUI.showRewardCollect(gAppStoreHelper.coinsOfProduct(productId), () => {});
            return;
          }

          gAppStoreHelper.purchase(productId);
        }

        onRestorePurchasedClick() {
          if (gAppStoreHelper.isPurchasing) {
            gAppUI.showTips("Purchase item is under progressing.");
            return;
          }

          gAppUI.antiDoubleClicks();
          gAppStoreHelper.restorePurchasedItems();
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "content", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "waiting", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "labelWaiting", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "loading", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/AppTextViewerUI.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './App.ts'], function (exports) {
  var _applyDecoratedDescriptor, _initializerDefineProperty, cclegacy, Label, RichText, Node, _decorator, Component, gAppHelper;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      Label = module.Label;
      RichText = module.RichText;
      Node = module.Node;
      _decorator = module._decorator;
      Component = module.Component;
    }, function (module) {
      gAppHelper = module.gAppHelper;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3;

      cclegacy._RF.push({}, "fa59fT21NxKapz0eo1XT8YK", "AppTextViewerUI", undefined);

      const {
        ccclass,
        property
      } = _decorator;
      let AppTextViewerUI = exports('AppTextViewerUI', (_dec = ccclass('AppTextViewerUI'), _dec2 = property(Label), _dec3 = property(RichText), _dec4 = property(Node), _dec(_class = (_class2 = class AppTextViewerUI extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "labelTitle", _descriptor, this); // @property(Label) labelContent:Label = null;


          _initializerDefineProperty(this, "labelContent", _descriptor2, this);

          _initializerDefineProperty(this, "loading", _descriptor3, this);

          this.strContent = "";
          this.onClose = null;
        }

        setParams(content, title, onClose) {
          this.strContent = content;
          this.labelTitle.string = title;
          this.onClose = onClose;
        }

        start() {
          this.show();
        }

        show() {
          gAppHelper.showPanel(this);
          this.scheduleOnce(() => {
            this.labelContent.string = this.strContent;
            this.loading.active = false;
          }, 0.5);
        }

        close() {
          gAppHelper.closePanel(this);
        }

        onCloseClick() {
          if (this.onClose) {
            this.onClose();
          }

          this.close();
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "labelTitle", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "labelContent", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "loading", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/AppTipsUI.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './App.ts'], function (exports) {
  var _applyDecoratedDescriptor, _initializerDefineProperty, cclegacy, Label, _decorator, Component, gAppHelper;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      Label = module.Label;
      _decorator = module._decorator;
      Component = module.Component;
    }, function (module) {
      gAppHelper = module.gAppHelper;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;

      cclegacy._RF.push({}, "e5b47hu9+lBB7l10N5DRXNy", "AppTipsUI", undefined);

      const {
        ccclass,
        property
      } = _decorator;
      let AppTipsUI = exports('AppTipsUI', (_dec = ccclass('AppTipsUI'), _dec2 = property(Label), _dec(_class = (_class2 = class AppTipsUI extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "labelContent", _descriptor, this);

          this.duration = 3;
        }

        setPrarams(tips, duration) {
          this.labelContent.string = tips;
          duration && (this.duration = duration);
        }

        start() {
          gAppHelper.showPanel(this);
          this.scheduleOnce(() => {
            gAppHelper.closePanel(this);
          }, this.duration);
        }

      }, _descriptor = _applyDecoratedDescriptor(_class2.prototype, "labelContent", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/AppUI.ts", ['cc', './AppRewardCollectUI.ts', './AppRewardMessageUI.ts', './AppMessageBoxUI.ts', './AppTipsUI.ts', './AppStoreUI.ts', './AppAboutUsUI.ts', './AppBlockerUI.ts', './AppFadeOutUI.ts', './AppPrivacyDialogUI.ts', './AppTextViewerUI.ts', './AppLuckyUI.ts', './App.ts', './AppVideoAdMessageUI.ts', './AppDebugUI.ts', './AppWaitingUI.ts', './AppRatingBoxUI.ts', './AppHotUpdateTestUI.ts', './gAppConstant.ts', './AppMsgBoxUI.ts', './AppLoadingUI.ts'], function (exports) {
  var cclegacy, Component, find, instantiate, error, js, v3, tween, view, UIOpacity, _decorator, AppRewardCollectUI, AppRewardMessageUI, AppMessageBoxUI, AppTipsUI, AppStoreUI, AppAboutUsUI, AppBlockerUI, AppFadeOutUI, AppPrivacyDialogUI, AppTextViewerUI, AppLuckyUI, gAppRes, gAppAdHelper, AppVideoAdMessageUI, AppDebugUI, AppWaitingUI, AppRatingBoxUI, AppHotUpdateTestUI, PREFAB_AppMsgBoxUI, AppMsgBoxUI, AppLoadingUI;

  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      Component = module.Component;
      find = module.find;
      instantiate = module.instantiate;
      error = module.error;
      js = module.js;
      v3 = module.v3;
      tween = module.tween;
      view = module.view;
      UIOpacity = module.UIOpacity;
      _decorator = module._decorator;
    }, function (module) {
      AppRewardCollectUI = module.AppRewardCollectUI;
    }, function (module) {
      AppRewardMessageUI = module.AppRewardMessageUI;
    }, function (module) {
      AppMessageBoxUI = module.AppMessageBoxUI;
    }, function (module) {
      AppTipsUI = module.AppTipsUI;
    }, function (module) {
      AppStoreUI = module.AppStoreUI;
    }, function (module) {
      AppAboutUsUI = module.AppAboutUsUI;
    }, function (module) {
      AppBlockerUI = module.AppBlockerUI;
    }, function (module) {
      AppFadeOutUI = module.AppFadeOutUI;
    }, function (module) {
      AppPrivacyDialogUI = module.AppPrivacyDialogUI;
    }, function (module) {
      AppTextViewerUI = module.AppTextViewerUI;
    }, function (module) {
      AppLuckyUI = module.AppLuckyUI;
    }, function (module) {
      gAppRes = module.gAppRes;
      gAppAdHelper = module.gAppAdHelper;
    }, function (module) {
      AppVideoAdMessageUI = module.AppVideoAdMessageUI;
    }, function (module) {
      AppDebugUI = module.AppDebugUI;
    }, function (module) {
      AppWaitingUI = module.AppWaitingUI;
    }, function (module) {
      AppRatingBoxUI = module.AppRatingBoxUI;
    }, function (module) {
      AppHotUpdateTestUI = module.AppHotUpdateTestUI;
    }, function (module) {
      PREFAB_AppMsgBoxUI = module.PREFAB_AppMsgBoxUI;
    }, function (module) {
      AppMsgBoxUI = module.AppMsgBoxUI;
    }, function (module) {
      AppLoadingUI = module.AppLoadingUI;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "03fd28/pahI4KZ2XuVPmlY0", "AppUI", undefined);

      const {
        ccclass,
        property
      } = _decorator;

      function getLayerUI() {
        return find("Canvas/LayerUI");
      }

      let AppUI = exports('AppUI', (_dec = ccclass('AppUI'), _dec(_class = class AppUI extends Component {
        // protected instantiateComponent<T extends Component>(classConstructor: _compConstructor<T>){
        //     log(`AppUI.instantiateComponent()`);
        //     let prefabName = js.getClassName(classConstructor);
        //     // let prefab:Prefab = gAppRes[prefabName];
        //     let prefab:Prefab = gAppRes.getPrefab(prefabName);
        //     if(!prefab){
        //         error(`!prefab!!!${js.getClassName(this)}:${prefabName}`);
        //         return;
        //     }
        //     this.removeComponent(classConstructor);
        //     return gAppHelper.instantiateComponent(prefab, classConstructor);
        // }
        // protected removeComponent<T extends Component>(classConstructor: _compConstructor<T>){
        //     let comp = findCanvas().getChildByName(`${js.getClassName(classConstructor)}`);
        //     if(comp){
        //         comp.destroy();
        //     }
        // }
        addNode(uiNode) {
          getLayerUI().addChild(uiNode);
        }

        showPrefab(prefabName, onIntantiated) {
          let uiNode = instantiate(gAppRes.getPrefab(`${prefabName}`));

          if (uiNode) {
            onIntantiated && onIntantiated(uiNode);
            this.addNode(uiNode);
          }

          return uiNode;
        }

        runShowPanelEffect(comp, effectType) {
          let panel = comp.node.getChildByName("Panel");

          if (!panel) {
            error(`${js.getClassName(comp)}.Can't find Panel node.`);
            return;
          }

          if (!effectType) {
            panel.setScale(v3(0, 0, 1));
            tween(panel).to(0.1, {
              scale: v3(1.0, 1.0, 1)
            }).start();
          } else {
            let posPanel = v3(panel.position);
            let delta = view.getVisibleSize().height;
            tween(panel).set({
              position: v3(posPanel.x, posPanel.y + delta, posPanel.z)
            }).by(0.2, {
              position: v3(0, -delta, 0)
            }).start();
          }
        }

        runClosePanelEffect(comp, onComplete, effectType) {
          this.antiDoubleClicks();
          let panel = comp.node.getChildByName("Panel");

          if (!panel) {
            error(`${js.getClassName(comp)}.Can't find Panel node.`);
            return;
          }

          let func = () => {
            onComplete && onComplete();
            comp.node.destroy();
          };

          if (!effectType) {
            let opacity = panel.getComponent(UIOpacity);

            if (opacity) {
              tween(opacity).to(0.18, {
                opacity: 0
              }).start();
            }

            tween(panel).to(0.18, {
              scale: v3(0.01, 0.01, 1)
            }).call(() => {
              func();
            }).start();
          } else {
            let delta = view.getVisibleSize().height;
            tween(panel).by(0.2, {
              position: v3(0, delta, 0)
            }).call(() => {
              func();
            }).start();
          }
        }

        showTips(tips) {
          this.showPrefab(js.getClassName(AppTipsUI), uiNode => {
            let comp = uiNode.getComponent(AppTipsUI);
            comp.setPrarams(tips);
          });
        }

        showTextViewer(content, title, onClose) {
          this.showPrefab(js.getClassName(AppTextViewerUI), uiNode => {
            let comp = uiNode.getComponent(AppTextViewerUI);
            comp.setParams(content, title, onClose);
          });
        }

        showLuckyCompass() {
          let funcRollStoped = bonus => {
            this.showRewardCollect(bonus, () => {
              gAppAdHelper.showInterstitialAd();
            });
          };

          this.showPrefab(js.getClassName(AppLuckyUI), uiNode => {
            let comp = uiNode.getComponent(AppLuckyUI);
            comp.setParams(funcRollStoped);
          });
        }

        showRewardMessage(rewardCount, onCollected) {
          this.showPrefab(js.getClassName(AppRewardMessageUI), uiNode => {
            let comp = uiNode.getComponent(AppRewardMessageUI);
            comp.setParams(rewardCount, onCollected);
          });
        }

        showRewardCollect(rewardCount, onCollected) {
          this.showPrefab(js.getClassName(AppRewardCollectUI), uiNode => {
            let comp = uiNode.getComponent(AppRewardCollectUI);
            comp.setParams(rewardCount, onCollected);
          });
        }

        showMessageBox(title, content, funcOK, strOK) {
          this.showPrefab(js.getClassName(AppMessageBoxUI), uiNode => {
            let comp = uiNode.getComponent(AppMessageBoxUI);
            comp.setParams(title, content, funcOK, strOK);
          });
        }

        showStore() {
          let nodeFound = getLayerUI().getChildByName(`${js.getClassName(AppStoreUI)}`);

          if (nodeFound) {
            return;
          }

          this.showPrefab(js.getClassName(AppStoreUI), uiNode => {});
        }

        showPrivacyDialog(onAccepted) {
          this.showPrefab(js.getClassName(AppPrivacyDialogUI), uiNode => {
            let comp = uiNode.getComponent(AppPrivacyDialogUI);
            comp.funcOK = onAccepted;
          });
        }

        showAboutUs() {
          this.showPrefab(js.getClassName(AppAboutUsUI), uiNode => {});
        }

        showVideoAdMessage(cbOK) {
          this.showPrefab(js.getClassName(AppVideoAdMessageUI), uiNode => {
            let comp = uiNode.getComponent(AppVideoAdMessageUI);
            cbOK && (comp.cbOK = cbOK);
          });
        }

        showRatingBox(cbOK) {
          this.showPrefab(js.getClassName(AppRatingBoxUI), uiNode => {
            let comp = uiNode.getComponent(AppRatingBoxUI);
            cbOK && (comp.cbOK = cbOK);
          });
        }

        showDebug() {
          this.showPrefab(js.getClassName(AppDebugUI), uiNode => {});
        }

        showHotUpdateTest() {
          this.showPrefab(js.getClassName(AppHotUpdateTestUI), uiNode => {});
        }

        showFadeOut() {
          this.showPrefab(js.getClassName(AppFadeOutUI), uiNode => {});
        }

        showBlocker() {
          this.showPrefab(js.getClassName(AppBlockerUI), uiNode => {});
        }

        hideBlocker() {
          let waiting = getLayerUI().getChildByName(`${js.getClassName(AppBlockerUI)}`);

          if (waiting) {
            waiting.destroy();
            waiting.removeFromParent();
          }
        }

        showWaiting(maxTouchCount) {
          this.showPrefab(js.getClassName(AppWaitingUI), uiNode => {
            let comp = uiNode.getComponent(AppWaitingUI);
            maxTouchCount && (comp.maxTouchCount = maxTouchCount);
          });
        }

        hideWaiting() {
          let waiting = getLayerUI().getChildByName(`${js.getClassName(AppWaitingUI)}`);

          if (waiting) {
            waiting.destroy();
            waiting.removeFromParent();
          }
        }

        showLoading() {
          this.showPrefab(js.getClassName(AppLoadingUI), uiNode => {
            let comp = uiNode.getComponent(AppLoadingUI);
          });
        }

        hideLoading() {
          let waiting = getLayerUI().getChildByName(`${js.getClassName(AppLoadingUI)}`);

          if (waiting) {
            waiting.destroy();
            waiting.removeFromParent();
          }
        }

        antiDoubleClicks() {
          this.showBlocker();
          this.scheduleOnce(() => {
            this.hideBlocker();
          }, 0.3);
        }

        showMsgBox(content, title) {
          this.showPrefab(PREFAB_AppMsgBoxUI, uiNode => {
            let ui = uiNode.getComponent(AppMsgBoxUI);
            ui.labelContent.string = content;
            title && (ui.labelTitle.string = title);
          });
        }

      }) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/AppUser.ts", ['cc', './ViewModel.ts', './gAppUtils.ts'], function (exports) {
  var cclegacy, _decorator, Component, log, VM, gAppUtils;

  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
      log = module.log;
    }, function (module) {
      VM = module.VM;
    }, function (module) {
      gAppUtils = module.gAppUtils;
    }],
    execute: function () {
      var _dec, _class2, _class3;

      cclegacy._RF.push({}, "17b89CEjGZEz7deG939ysEa", "AppUser", undefined);

      const {
        ccclass,
        property
      } = _decorator;
      /*
      class DataUser {
          userId = "";
          userName = '';
          coin = 100;
           purchasedCoin = 0;
          adRemoved = false;
           luckyBonusTime=0;
      }
      const key = "DataUser";     // localStorage key
      */

      class UserData {
        constructor() {
          this.userId = "";
          this.userName = '';
          this.coin = 100;
          this.purchasedCoin = 0;
          this.adRemoved = false;
          this.luckyBonusTime = 0;
        }

      }

      const gUserData = exports('gUserData', new UserData());
      const keyV1_Candy = "DataUser";
      const keyV1 = keyV1_Candy;
      const key = "UserDataV2"; // localStorage key

      const vmTag = "gUserData"; // VM tag

      let data = gUserData;
      let AppUser = exports('AppUser', (_dec = ccclass('AppUser'), _dec(_class2 = (_class3 = class AppUser extends Component {
        onLoad() {
          log(`AppDataCtl.onLoad()`); // debugger;

          if (!gAppUser) {
            gAppUser = exports('gAppUser', this); // this.node.parent = gApp.node;

            this.loadData();
            this.bindVM();
          }
        }

        bindVM() {
          VM.add(data, vmTag, true); // user for ViewModel components

          VM.bindPath(vmTag, (n, o, path) => {
            this.scheduleOnce(() => {
              this.saveData();
            });
          }, this);
        }

        loadData() {
          log(`AppUser.loadData()`);
          const keyPrev = keyV1;
          let strPrevData = localStorage.getItem(keyPrev);

          if (strPrevData && strPrevData.length > 0) {
            log(`Loading previous data of ${keyPrev}, ${strPrevData}`);
            gAppUtils.loadObject(keyPrev, data);
            this.saveData();
            localStorage.removeItem(keyPrev);
            return;
          }

          gAppUtils.loadObject(key, data);
        }

        saveData() {
          gAppUtils.saveObject(key, data);
        }

        addCoin(delta) {
          data.coin += delta;
          this.node.emit(AppUser.EVT_COIN_CHANGED, delta);
        }

        setAdRemoved() {
          data.adRemoved = true;
        }

      }, _class3.EVT_COIN_CHANGED = "EVT_COIN_CHANGED", _class3)) || _class2));
      let gAppUser = exports('gAppUser', null);

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/AppVideoAdButton.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './App.ts'], function (exports) {
  var _applyDecoratedDescriptor, _initializerDefineProperty, cclegacy, Node, _decorator, Component, UITransform, gAppAdHelper, gAppUI;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      Node = module.Node;
      _decorator = module._decorator;
      Component = module.Component;
      UITransform = module.UITransform;
    }, function (module) {
      gAppAdHelper = module.gAppAdHelper;
      gAppUI = module.gAppUI;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;

      cclegacy._RF.push({}, "dc1beZ8tXdDm6HYXo5WKbNi", "AppVideoAdButton", undefined);

      const {
        ccclass,
        property
      } = _decorator;
      let AppVideoAdButton = exports('AppVideoAdButton', (_dec = ccclass('AppVideoAdButton'), _dec2 = property(Node), _dec(_class = (_class2 = class AppVideoAdButton extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "symbol", _descriptor, this);

          this.width = 60;
        }

        start() {
          this.width = this.node.getComponent(UITransform).width;
          this.updateButton();
          this.schedule(this.updateButton, 60, 100, 10);
        }

        updateButton() {
          this.node.active = gAppAdHelper.isRewardedAdReady();
        }

        onClick() {
          this.symbol.active = false;
          gAppUI.showVideoAdMessage(() => {
            gAppAdHelper.showRewardedAd();
            this.node.active = false;
          });
        }

      }, _descriptor = _applyDecoratedDescriptor(_class2.prototype, "symbol", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/AppVideoAdMessageUI.ts", ['cc', './App.ts'], function (exports) {
  var cclegacy, Component, _decorator, gAppHelper;

  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      Component = module.Component;
      _decorator = module._decorator;
    }, function (module) {
      gAppHelper = module.gAppHelper;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "bdc87M4T65EF5oad3LdS549", "AppVideoAdMessageUI", undefined);

      const {
        ccclass,
        property
      } = _decorator;
      let AppVideoAdMessageUI = exports('AppVideoAdMessageUI', (_dec = ccclass('AppVideoAdMessageUI'), _dec(_class = class AppVideoAdMessageUI extends Component {
        constructor(...args) {
          super(...args);
          this.cbOK = null;
        }

        start() {
          gAppHelper.showPanel(this);
        }

        onWatchClick() {
          this.cbOK && this.cbOK();
          gAppHelper.closePanel(this);
        }

        onCloseClick() {
          gAppHelper.closePanel(this);
        }

      }) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/AppViewMgr.ts", ['cc'], function (exports) {
  var cclegacy, Component, log, warn, resources, assetManager, instantiate, find, _decorator;

  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      Component = module.Component;
      log = module.log;
      warn = module.warn;
      resources = module.resources;
      assetManager = module.assetManager;
      instantiate = module.instantiate;
      find = module.find;
      _decorator = module._decorator;
    }],
    execute: function () {
      var _dec, _class3;

      cclegacy._RF.push({}, "5c8feWruf1Gt7OwIVmO9x0g", "AppViewMgr", undefined);

      const {
        ccclass,
        property
      } = _decorator;

      class ViewInfo {
        constructor() {
          this.bundleName = '';
          this.viewName = '';
        }

      }

      exports('ViewInfo', ViewInfo);
      const views = new Map();
      let AppViewMgr = exports('AppViewMgr', (_dec = ccclass('AppViewMgr'), _dec(_class3 = class AppViewMgr extends Component {
        constructor(...args) {
          super(...args);
          this.curView = null;
        }

        onLoad() {// for (const key in VIEW) {
          //     if (Object.prototype.hasOwnProperty.call(VIEW, key)) {
          //         const e = VIEW[key];
          //         views.set(key, {bundle:null, bundleName:e.bundleName, viewName:e.viewName});
          //     }
          // }
        }

        _loadView(viewInfo, onComplete) {
          log(`AppViewMgr._loadView()`);
          let viewDetail = views.get(viewInfo.viewName);

          if (!viewDetail) {
            warn(`no view found for ${viewInfo.viewName}`);
            return;
          }

          let func = () => {
            let prefabPath = `${viewDetail.viewName}`;
            viewDetail.bundle.load(prefabPath, (err, data) => {
              if (err) {
                warn(`bundle.load(${prefabPath}) error!`);
                return;
              }

              onComplete && onComplete(data);
            });
          };

          if (viewDetail.bundle) {
            func();
          } else if (viewDetail.bundleName.length <= 0) {
            viewDetail.bundle = resources;
          } else {
            assetManager.loadBundle(viewDetail.bundleName, (err, data) => {
              if (err) {
                warn(`loadBundle(${viewDetail.bundleName}), error!`);
                return;
              }

              viewDetail.bundle = data;
              func();
            });
          }
        }

        preloadView(viewInfo, onComplete) {
          this._loadView(viewInfo, onComplete);
        }

        loadView(viewInfo, onComplete) {
          log(`AppViewMgr.loadView()`); // AppBlockerUI.antiDoubleClicks();

          this._loadView(viewInfo, data => {
            if (this.curView && this.curView.isValid) {
              this.curView.destroy();
              this.curView = null;
            }

            let clone = instantiate(data);
            let parent = find("Canvas/LayerView");
            clone.parent = parent ? parent : find("Canvas");
            onComplete && onComplete();
            this.curView = clone;
          });
        }

      }) || _class3));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/AppWaitingUI.ts", ['cc'], function (exports) {
  var cclegacy, Component, find, Label, Node, _decorator;

  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      Component = module.Component;
      find = module.find;
      Label = module.Label;
      Node = module.Node;
      _decorator = module._decorator;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "bad78TgmNtDiZ82YEvbcxs7", "AppWaitingUI", undefined);

      const {
        ccclass,
        property
      } = _decorator;
      let AppWaitingUI = exports('AppWaitingUI', (_dec = ccclass('AppWaitingUI'), _dec(_class = class AppWaitingUI extends Component {
        constructor(...args) {
          super(...args);
          this.maxTouchCount = 100;
          this.touchCount = 0;
        }

        start() {
          let nodeLabel = find("Panel/Label", this.node);
          let label = nodeLabel ? nodeLabel.getComponent(Label) : null;

          if (label) {
            let i = 0;
            let strOrg = label.string;
            let strs = ['.', '..', '...', ''];
            this.schedule(() => {
              label.string = strOrg + strs[i++ % strs.length];
            }, 1, 100);
          }

          let bg = find("Bg", this.node);
          bg.on(Node.EventType.TOUCH_START, () => {
            this.touchCount++;

            if (this.touchCount >= this.maxTouchCount) {
              this.node.destroy();
            }
          }, this);
        }

      }) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/AppWidgetMaxWH.ts", ['cc', './gAppConstant.ts'], function (exports) {
  var cclegacy, Component, Widget, view, _decorator, MAX_WIDTH, MAX_HEIGHT;

  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      Component = module.Component;
      Widget = module.Widget;
      view = module.view;
      _decorator = module._decorator;
    }, function (module) {
      MAX_WIDTH = module.MAX_WIDTH;
      MAX_HEIGHT = module.MAX_HEIGHT;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "e9c29+8siBHf799cmQ3oqcH", "AppWidgetMaxWH", undefined);

      const {
        ccclass,
        property
      } = _decorator;
      let AppWidgetMaxWH = exports('AppWidgetMaxWH', (_dec = ccclass('AppWidgetMaxWH'), _dec(_class = class AppWidgetMaxWH extends Component {
        constructor(...args) {
          super(...args); // @property 

          this.maxWidth = MAX_WIDTH; // @property 

          this.maxHeight = MAX_HEIGHT;
          this.leftOrg = 0;
          this.rightOrg = 0;
          this.topOrg = 0;
          this.bottomOrg = 0;
        }

        start() {// let widget = this.getComponent(Widget);
          // this.leftOrg = widget.left;
          // this.rightOrg = widget.right;
          // this.topOrg = widget.top;
          // this.bottomOrg = widget.bottom;
          // this.updateLayout();
          // gAppResolution.node.on(AppResolution.EVT_SIZE_CHANGED, ()=>{this.updateLayout();}, this);
        }

        updateLayout() {
          let widget = this.getComponent(Widget);
          widget.left = this.leftOrg;
          widget.right = this.rightOrg;
          widget.top = this.topOrg;
          widget.bottom = this.bottomOrg;
          let viewSize = view.getVisibleSize();

          if (viewSize.width > this.maxWidth) {
            widget.left = widget.right = (viewSize.width - this.maxWidth) / 2;
          }

          if (viewSize.height > this.maxHeight) {
            widget.top = widget.bottom = (viewSize.height - this.maxHeight) / 2;
          } // widget.updateAlignment();

        }

      }) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/CandyRopes.ts", ['cc', './App.ts', './AppResolution.ts'], function (exports) {
  var cclegacy, Component, UIOpacity, tween, randomRange, v3, Layout, UITransform, instantiate, randomRangeInt, _decorator, gAppResolution, AppResolution;

  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      Component = module.Component;
      UIOpacity = module.UIOpacity;
      tween = module.tween;
      randomRange = module.randomRange;
      v3 = module.v3;
      Layout = module.Layout;
      UITransform = module.UITransform;
      instantiate = module.instantiate;
      randomRangeInt = module.randomRangeInt;
      _decorator = module._decorator;
    }, function (module) {
      gAppResolution = module.gAppResolution;
    }, function (module) {
      AppResolution = module.AppResolution;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "fa4d2gf6btITZeZ9dmMpS7O", "CandyRopes", undefined); // import { AppCanvas, gAppCanvas } from '../app/AppCanvas';


      const {
        ccclass,
        property
      } = _decorator;
      const orgPosY = 250;
      let CandyRopes = exports('CandyRopes', (_dec = ccclass('CandyRopes'), _dec(_class = class CandyRopes extends Component {
        constructor(...args) {
          super(...args);
          this.arrItems = [];
          this.arrDropDowns = [];
          this.droppingIndex = 0;
          this._arrTweens = [];
        }

        onLoad() {
          for (let i = 0; i < this.node.children.length; i++) {
            const e = this.node.children[i];
            this.arrItems[i] = this.node.children[i];
          }
        }

        onDestroy() {
          this._arrTweens.forEach(e => {
            e.stop();
          });
        }

        start() {
          this.updateLayout();
          gAppResolution.node.on(AppResolution.EVT_SIZE_CHANGED, () => {
            this.updateLayout();
          }, this);
          let op = this.getComponent(UIOpacity);

          if (op) {
            let opOrg = op.opacity;
            op.opacity = 0;
            this.scheduleOnce(() => {
              op.opacity = opOrg;

              for (let i = 0; i < this.node.children.length; i++) {
                const e = this.node.children[i];
                e.position = e.position.add3f(0, 200, 0);
                tween(e).by(randomRange(0.2, 0.6), {
                  position: v3(0, -200, 0)
                }).start();
              }
            });
          }
        }

        updateLayout() {
          let canvasW = gAppResolution.size.width;
          let w = 0;
          let spaceX = this.getComponent(Layout).spacingX;
          let count = 0;

          for (let i = 0; i < 50; i++) {
            for (let j = 0; j < this.arrItems.length; j++) {
              const e = this.arrItems[j];
              w += e.getComponent(UITransform).width + spaceX;

              if (w >= canvasW) {
                break;
              }

              count++;
            }

            if (w >= canvasW) {
              // debugger;
              break;
            }
          }

          if (this.node.children.length <= count) {
            for (let i = this.node.children.length; i < count; i++) {
              let itemNew = instantiate(this.arrItems[i % this.arrItems.length]);
              itemNew.parent = this.node;
            }
          } else {
            for (let i = this.node.children.length - 1; i >= count; i--) {
              const e = this.node.children[i];
              e.removeFromParent();
            }
          }

          let arrChildren = this.node.children.slice(); // this.arrDropDowns = arr.sort((a,b)=>{return randomRangeInt(-50, 50);});

          this._arrTweens.forEach(e => {
            e.stop();
          });

          this._arrTweens = [];
          this.scheduleOnce(() => {
            arrChildren.forEach(e => {
              e.position = v3(e.position.x, orgPosY, e.position.z);
            });
            this.ropeDown();
          }, 3);
        }

        ropeDown() {
          if (this._arrTweens.length > 0) {
            return;
          }

          let arrChildren = this.node.children.slice();
          arrChildren = arrChildren.sort((a, b) => {
            return randomRangeInt(-50, 50);
          });
          let downCount = 1; //Math.min(randomRangeInt(1,4), arrChildren.length);

          for (let i = 0; i < downCount; i++) {
            let obj = arrChildren[i];
            let posOrg = v3(obj.position);
            let tw = tween(obj).set({
              position: v3(posOrg.x, orgPosY, posOrg.z)
            }).delay(i == 0 ? 1.0 : randomRange(1.5, 3.0)).by(0.2, {
              position: v3(0, i > 0 ? 0 : 10, 0)
            }, {
              easing: `linear`
            }).by(0.3, {
              position: v3(0, i > 0 ? 0 : -20, 0)
            }, {
              easing: `linear`
            }).by(0.2, {
              position: v3(0, i > 0 ? 0 : 10, 0)
            }, {
              easing: `linear`
            }).by(1.0, {
              position: v3(0, -100, 0)
            }).by(1.0, {
              position: v3(0, 100, 0)
            }).call(() => {
              this._arrTweens.splice(this._arrTweens.indexOf(tw), 1);
            }).start();

            this._arrTweens.push(tw);

            if (i == 0) {
              this.scheduleOnce(() => {
                this.ropeDown();
              }, 7.0);
            }
          }
        }

        ropeDown1() {
          if (this._arrTweens.length > 0) {
            return;
          }

          let arrChildren = this.node.children;
          let arrToDrop = [this.droppingIndex];
          let randCount = randomRangeInt(1, arrChildren.length + 1);

          while (arrToDrop.length < randCount) {
            for (let i = randomRangeInt(0, randCount); i < arrChildren.length; i++) {
              if (arrToDrop.indexOf(i) < 0) {
                arrToDrop.push(i);
                break;
              }
            }
          }

          arrToDrop = arrToDrop.sort((a, b) => {
            if (a == this.droppingIndex) return 1;else {
              return randomRangeInt(-50, 50);
            }
          });
          console.log(`arrToDrop:${arrToDrop.toString()}`);

          for (let i = 0; i < arrToDrop.length; i++) {
            const e = arrToDrop[i];
            let obj = arrChildren[e];
            let posOrg = v3(obj.position);
            let tw = tween(obj).set({
              position: v3(posOrg.x, 0, posOrg.z)
            }).delay(i == 0 ? 1.0 : randomRange(1.5, 2.0)).by(1.0, {
              position: v3(0, -100, 0)
            }).by(1.0, {
              position: v3(0, 100, 0)
            }).call(() => {
              this._arrTweens.splice(this._arrTweens.indexOf(tw), 1);
            }).start();

            this._arrTweens.push(tw);

            if (i == 0) {
              this.scheduleOnce(() => {
                this.droppingIndex = (this.droppingIndex + 1) % this.node.children.length;
                this.ropeDown();
              }, 7.0);
            }
          }
        }

      }) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/debug-view-runtime-control.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _initializerDefineProperty, cclegacy, Node, _decorator, Component, Color, Canvas, UITransform, instantiate, Label, RichText, Toggle, Button, director;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      Node = module.Node;
      _decorator = module._decorator;
      Component = module.Component;
      Color = module.Color;
      Canvas = module.Canvas;
      UITransform = module.UITransform;
      instantiate = module.instantiate;
      Label = module.Label;
      RichText = module.RichText;
      Toggle = module.Toggle;
      Button = module.Button;
      director = module.director;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3;

      cclegacy._RF.push({}, "b2bd1+njXxJxaFY3ymm06WU", "debug-view-runtime-control", undefined);

      const {
        ccclass,
        property
      } = _decorator;
      let DebugViewRuntimeControl = exports('DebugViewRuntimeControl', (_dec = ccclass('internal.DebugViewRuntimeControl'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec(_class = (_class2 = class DebugViewRuntimeControl extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "compositeModeToggle", _descriptor, this);

          _initializerDefineProperty(this, "singleModeToggle", _descriptor2, this);

          _initializerDefineProperty(this, "EnableAllCompositeModeButton", _descriptor3, this);

          this._single = 0;
          this.strSingle = ['No Single Debug', 'Vertex Color', 'Vertex Normal', 'Vertex Tangent', 'World Position', 'Vertex Mirror', 'Face Side', 'UV0', 'UV1', 'UV Lightmap', 'Project Depth', 'Linear Depth', 'Fragment Normal', 'Fragment Tangent', 'Fragment Binormal', 'Base Color', 'Diffuse Color', 'Specular Color', 'Transparency', 'Metallic', 'Roughness', 'Specular Intensity', 'IOR', 'Direct Diffuse', 'Direct Specular', 'Direct All', 'Env Diffuse', 'Env Specular', 'Env All', 'Emissive', 'Light Map', 'Shadow', 'AO', 'Fresnel', 'Direct Transmit Diffuse', 'Direct Transmit Specular', 'Env Transmit Diffuse', 'Env Transmit Specular', 'Transmit All', 'Direct Internal Specular', 'Env Internal Specular', 'Internal All', 'Fog'];
          this.strComposite = ['Direct Diffuse', 'Direct Specular', 'Env Diffuse', 'Env Specular', 'Emissive', 'Light Map', 'Shadow', 'AO', 'Normal Map', 'Fog', 'Tone Mapping', 'Gamma Correction', 'Fresnel', 'Transmit Diffuse', 'Transmit Specular', 'Internal Specular', 'TT'];
          this.strMisc = ['CSM Layer Coloration', 'Lighting With Albedo'];
          this.compositeModeToggleList = [];
          this.singleModeToggleList = [];
          this.miscModeToggleList = [];
          this.textComponentList = [];
          this.labelComponentList = [];
          this.textContentList = [];
          this.hideButtonLabel = void 0;
          this._currentColorIndex = 0;
          this.strColor = ['<color=#ffffff>', '<color=#000000>', '<color=#ff0000>', '<color=#00ff00>', '<color=#0000ff>'];
          this.color = [Color.WHITE, Color.BLACK, Color.RED, Color.GREEN, Color.BLUE];
        }

        start() {
          // get canvas resolution
          const canvas = this.node.parent.getComponent(Canvas);

          if (!canvas) {
            console.error('debug-view-runtime-control should be child of Canvas');
            return;
          }

          const uiTransform = this.node.parent.getComponent(UITransform);
          const halfScreenWidth = uiTransform.width * 0.5;
          const halfScreenHeight = uiTransform.height * 0.5;
          let x = -halfScreenWidth + halfScreenWidth * 0.1,
              y = halfScreenHeight - halfScreenHeight * 0.1;
          const width = 200,
                height = 20; // new nodes

          const miscNode = this.node.getChildByName('MiscMode');
          const buttonNode = instantiate(miscNode);
          buttonNode.parent = this.node;
          buttonNode.name = 'Buttons';
          const titleNode = instantiate(miscNode);
          titleNode.parent = this.node;
          titleNode.name = 'Titles'; // title

          for (let i = 0; i < 2; i++) {
            const newLabel = instantiate(this.EnableAllCompositeModeButton.getChildByName('Label'));
            newLabel.setPosition(x + (i > 0 ? 50 + width * 2 : 150), y, 0.0);
            newLabel.setScale(0.75, 0.75, 0.75);
            newLabel.parent = titleNode;
            const labelComponent = newLabel.getComponent(Label);
            labelComponent.string = i ? '----------Composite Mode----------' : '----------Single Mode----------';
            labelComponent.color = Color.WHITE;
            labelComponent.overflow = 0;
            this.labelComponentList[this.labelComponentList.length] = labelComponent;
          }

          y -= height; // single

          let currentRow = 0;

          for (let i = 0; i < this.strSingle.length; i++, currentRow++) {
            if (i === this.strSingle.length >> 1) {
              x += width;
              currentRow = 0;
            }

            const newNode = i ? instantiate(this.singleModeToggle) : this.singleModeToggle;
            newNode.setPosition(x, y - height * currentRow, 0.0);
            newNode.setScale(0.5, 0.5, 0.5);
            newNode.parent = this.singleModeToggle.parent;
            const textComponent = newNode.getComponentInChildren(RichText);
            textComponent.string = this.strSingle[i];
            this.textComponentList[this.textComponentList.length] = textComponent;
            this.textContentList[this.textContentList.length] = textComponent.string;
            newNode.on(Toggle.EventType.TOGGLE, this.toggleSingleMode, this);
            this.singleModeToggleList[i] = newNode;
          }

          x += width; // buttons

          this.EnableAllCompositeModeButton.setPosition(x + 15, y, 0.0);
          this.EnableAllCompositeModeButton.setScale(0.5, 0.5, 0.5);
          this.EnableAllCompositeModeButton.on(Button.EventType.CLICK, this.enableAllCompositeMode, this);
          this.EnableAllCompositeModeButton.parent = buttonNode;
          let labelComponent = this.EnableAllCompositeModeButton.getComponentInChildren(Label);
          this.labelComponentList[this.labelComponentList.length] = labelComponent;
          const changeColorButton = instantiate(this.EnableAllCompositeModeButton);
          changeColorButton.setPosition(x + 90, y, 0.0);
          changeColorButton.setScale(0.5, 0.5, 0.5);
          changeColorButton.on(Button.EventType.CLICK, this.changeTextColor, this);
          changeColorButton.parent = buttonNode;
          labelComponent = changeColorButton.getComponentInChildren(Label);
          labelComponent.string = 'TextColor';
          this.labelComponentList[this.labelComponentList.length] = labelComponent;
          const HideButton = instantiate(this.EnableAllCompositeModeButton);
          HideButton.setPosition(x + 200, y, 0.0);
          HideButton.setScale(0.5, 0.5, 0.5);
          HideButton.on(Button.EventType.CLICK, this.hideUI, this);
          HideButton.parent = this.node.parent;
          labelComponent = HideButton.getComponentInChildren(Label);
          labelComponent.string = 'Hide UI';
          this.labelComponentList[this.labelComponentList.length] = labelComponent;
          this.hideButtonLabel = labelComponent; // misc

          y -= 40;

          for (let i = 0; i < this.strMisc.length; i++) {
            const newNode = instantiate(this.compositeModeToggle);
            newNode.setPosition(x, y - height * i, 0.0);
            newNode.setScale(0.5, 0.5, 0.5);
            newNode.parent = miscNode;
            const textComponent = newNode.getComponentInChildren(RichText);
            textComponent.string = this.strMisc[i];
            this.textComponentList[this.textComponentList.length] = textComponent;
            this.textContentList[this.textContentList.length] = textComponent.string;
            const toggleComponent = newNode.getComponent(Toggle);
            toggleComponent.isChecked = i ? true : false;
            newNode.on(Toggle.EventType.TOGGLE, i ? this.toggleLightingWithAlbedo : this.toggleCSMColoration, this);
            this.miscModeToggleList[i] = newNode;
          } // composite


          y -= 150;

          for (let i = 0; i < this.strComposite.length; i++) {
            const newNode = i ? instantiate(this.compositeModeToggle) : this.compositeModeToggle;
            newNode.setPosition(x, y - height * i, 0.0);
            newNode.setScale(0.5, 0.5, 0.5);
            newNode.parent = this.compositeModeToggle.parent;
            const textComponent = newNode.getComponentInChildren(RichText);
            textComponent.string = this.strComposite[i];
            this.textComponentList[this.textComponentList.length] = textComponent;
            this.textContentList[this.textContentList.length] = textComponent.string;
            newNode.on(Toggle.EventType.TOGGLE, this.toggleCompositeMode, this);
            this.compositeModeToggleList[i] = newNode;
          }
        }

        isTextMatched(textUI, textDescription) {
          let tempText = new String(textUI);
          const findIndex = tempText.search('>');

          if (findIndex === -1) {
            return textUI === textDescription;
          } else {
            tempText = tempText.substr(findIndex + 1);
            tempText = tempText.substr(0, tempText.search('<'));
            return tempText === textDescription;
          }
        }

        toggleSingleMode(toggle) {
          const debugView = director.root.debugView;
          const textComponent = toggle.getComponentInChildren(RichText);

          for (let i = 0; i < this.strSingle.length; i++) {
            if (this.isTextMatched(textComponent.string, this.strSingle[i])) {
              debugView.singleMode = i;
            }
          }
        }

        toggleCompositeMode(toggle) {
          const debugView = director.root.debugView;
          const textComponent = toggle.getComponentInChildren(RichText);

          for (let i = 0; i < this.strComposite.length; i++) {
            if (this.isTextMatched(textComponent.string, this.strComposite[i])) {
              debugView.enableCompositeMode(i, toggle.isChecked);
            }
          }
        }

        toggleLightingWithAlbedo(toggle) {
          const debugView = director.root.debugView;
          debugView.lightingWithAlbedo = toggle.isChecked;
        }

        toggleCSMColoration(toggle) {
          const debugView = director.root.debugView;
          debugView.csmLayerColoration = toggle.isChecked;
        }

        enableAllCompositeMode(button) {
          const debugView = director.root.debugView;
          debugView.enableAllCompositeMode(true);

          for (let i = 0; i < this.compositeModeToggleList.length; i++) {
            const toggleComponent = this.compositeModeToggleList[i].getComponent(Toggle);
            toggleComponent.isChecked = true;
          }

          let toggleComponent = this.miscModeToggleList[0].getComponent(Toggle);
          toggleComponent.isChecked = false;
          debugView.csmLayerColoration = false;
          toggleComponent = this.miscModeToggleList[1].getComponent(Toggle);
          toggleComponent.isChecked = true;
          debugView.lightingWithAlbedo = true;
        }

        hideUI(button) {
          const titleNode = this.node.getChildByName('Titles');
          const activeValue = !titleNode.active;
          this.singleModeToggleList[0].parent.active = activeValue;
          this.miscModeToggleList[0].parent.active = activeValue;
          this.compositeModeToggleList[0].parent.active = activeValue;
          this.EnableAllCompositeModeButton.parent.active = activeValue;
          titleNode.active = activeValue;
          this.hideButtonLabel.string = activeValue ? 'Hide UI' : 'Show UI';
        }

        changeTextColor(button) {
          this._currentColorIndex++;

          if (this._currentColorIndex >= this.strColor.length) {
            this._currentColorIndex = 0;
          }

          for (let i = 0; i < this.textComponentList.length; i++) {
            this.textComponentList[i].string = this.strColor[this._currentColorIndex] + this.textContentList[i] + '</color>';
          }

          for (let i = 0; i < this.labelComponentList.length; i++) {
            this.labelComponentList[i].color = this.color[this._currentColorIndex];
          }
        }

        onLoad() {}

        update(deltaTime) {}

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "compositeModeToggle", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "singleModeToggle", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "EnableAllCompositeModeButton", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/FloatingClouds.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _initializerDefineProperty, cclegacy, _decorator, Component, Node, UITransform, view, randomRange, randomRangeInt, v3, instantiate, tween;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
      Node = module.Node;
      UITransform = module.UITransform;
      view = module.view;
      randomRange = module.randomRange;
      randomRangeInt = module.randomRangeInt;
      v3 = module.v3;
      instantiate = module.instantiate;
      tween = module.tween;
    }],
    execute: function () {
      var _dec, _class, _class2, _descriptor;

      cclegacy._RF.push({}, "e6bbcE1pupKQ6yeLp10xf6K", "FloatingClouds", undefined);

      const {
        ccclass,
        property
      } = _decorator;
      let FloatingClouds = exports('FloatingClouds', (_dec = ccclass('FloatingClouds'), _dec(_class = (_class2 = class FloatingClouds extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "speedScale", _descriptor, this);

          this.arrSamples = [];
        }

        start() {
          let arrChildren = this.node.children;
          arrChildren.forEach(e => {
            this.arrSamples.push(e);
            e.active = false;
          });
          this.createClouds();
          this.node.on(Node.EventType.SIZE_CHANGED, () => {
            this.recreateClouds();
          }, this);
        }

        recreateClouds() {
          this.removeClouds();
          this.createClouds();
        }

        removeClouds() {
          let arrChildren = this.node.children;

          for (let i = 0; i < arrChildren.length; i++) {
            const e = arrChildren[i];

            if (e.active) {
              e.destroy();
            }
          }
        }

        createClouds() {
          let cloudWidth = this.arrSamples[0].getComponent(UITransform).width;
          let cloudHeight = this.arrSamples[0].getComponent(UITransform).height;
          let viewSize = view.getVisibleSize();
          let itemWdith = cloudWidth * 2;
          let colCount = Math.max(2, Math.ceil(viewSize.width / itemWdith));
          let rowCount = (viewSize.height - 320) / 2 / (cloudHeight * 1.5);
          rowCount = Math.max(1, Math.floor(rowCount));

          for (let r = 0; r < rowCount; r++) {
            for (let c = 0; c < colCount; c++) {
              let x = itemWdith * c + (-viewSize.width / 2 + cloudWidth / 2 + randomRange(-cloudWidth / 2, cloudWidth));
              let y = -cloudHeight * r + viewSize.height / 2 + -cloudHeight / 2 + randomRange(-cloudHeight / 2, 0);
              this.createCloudAt(randomRangeInt(0, this.arrSamples.length), v3(x, y));
            }
          }
        }

        createCloudAt(type, pos) {
          let cloudWidth = this.arrSamples[0].getComponent(UITransform).width;
          let cloudHeight = this.arrSamples[0].getComponent(UITransform).height;
          let viewSize = view.getVisibleSize();
          let newCloud = instantiate(this.arrSamples[type >= 0 ? type : randomRangeInt(0, this.arrSamples.length)]);
          newCloud.active = true;
          newCloud.parent = this.node;
          newCloud.position = v3(pos);
          let duration = randomRange(1, 3);
          let speedX = randomRangeInt(-50, -20) * this.speedScale;
          let speedY = randomRangeInt(-10, 10);
          this.scheduleOnce(() => {
            tween(newCloud).by(duration, {
              position: v3(speedX, speedY, 0)
            }).by(duration, {
              position: v3(speedX, -speedY, 0)
            }).call(() => {
              let leftX = -viewSize.width / 2 - cloudWidth / 2;

              if (newCloud.position.x < leftX) {
                newCloud.destroy();
                this.createCloudAt(randomRangeInt(0, this.arrSamples.length), v3(viewSize.width / 2 + cloudWidth / 2, newCloud.position.y + randomRange(-100, 100), newCloud.position.z));
              }
            }).union().repeatForever().start();
          }, 1.0);
        }

      }, _descriptor = _applyDecoratedDescriptor(_class2.prototype, "speedScale", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 1.0;
        }
      }), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/FloatingSmokes.ts", ['cc'], function (exports) {
  var cclegacy, Component, log, view, UITransform, randomRangeInt, randomRange, v3, tween, _decorator;

  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      Component = module.Component;
      log = module.log;
      view = module.view;
      UITransform = module.UITransform;
      randomRangeInt = module.randomRangeInt;
      randomRange = module.randomRange;
      v3 = module.v3;
      tween = module.tween;
      _decorator = module._decorator;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "ac3ddVvx5RM7aNSR0KfnNEG", "FloatingSmokes", undefined);

      const {
        ccclass,
        property
      } = _decorator;
      let FloatingSmokes = exports('FloatingSmokes', (_dec = ccclass('FloatingSmokes'), _dec(_class = class FloatingSmokes extends Component {
        start() {
          log(`FloatingSmokes.start()`);
          this.scheduleOnce(() => {
            let viewSize = view.getVisibleSize();
            let arr = this.node.children;
            let h = arr[0].getComponent(UITransform).height;
            let arrPosX = [-480, -240, 0, 240, 480];
            let arrPosY = [-1 * h + h / 2, -2 * h + h / 2, -3 * h + h / 2, -4 * h + h / 2, -5 * h + h / 2];

            for (let i = 0; i < arr.length; i++) {
              const e = arr[i];
              let x = randomRangeInt(-200, -100);
              let y = randomRangeInt(-10, 10);
              let duration = randomRange(3, 5);
              let ax = arrPosX.splice(randomRangeInt(0, arrPosX.length), 1)[0] + randomRangeInt(-100, 100) + view.getVisibleSize().width;
              let ay = arrPosY.splice(0, 1)[0] + randomRangeInt(-30, 0);
              e.position = v3(ax, ay, e.position.z);

              if (viewSize.width > viewSize.height && i < 2 || -ay < this.node.getComponent(UITransform).height) {
                tween(e).by(duration, {
                  position: v3(x, y, 1)
                }).by(duration, {
                  position: v3(x, -y, 1)
                }).call(() => {
                  if (e.position.x < -view.getVisibleSize().width) {
                    e.position = v3(view.getVisibleSize().width, e.position.y, e.position.z);
                  }
                }).union().repeatForever().start();
              } else {
                e.active = false;
              }
            }
          }, 0.1);
        }

        update(deltaTime) {}

      }) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GameLayout.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './AppLayout1.ts', './App.ts', './AppResolution.ts'], function (exports) {
  var _applyDecoratedDescriptor, _initializerDefineProperty, cclegacy, UITransform, _decorator, Component, Node, sys, AppLayout1, gAppResolution, AppResolutionPolicy;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      UITransform = module.UITransform;
      _decorator = module._decorator;
      Component = module.Component;
      Node = module.Node;
      sys = module.sys;
    }, function (module) {
      AppLayout1 = module.AppLayout1;
    }, function (module) {
      gAppResolution = module.gAppResolution;
    }, function (module) {
      AppResolutionPolicy = module.AppResolutionPolicy;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7;

      cclegacy._RF.push({}, "ccd15PRPdlLqomc5TD9a1qZ", "GameLayout", undefined);

      const {
        ccclass,
        property
      } = _decorator;
      let GameLayout = exports('GameLayout', (_dec = ccclass('GameLayout'), _dec2 = property(AppLayout1), _dec3 = property(UITransform), _dec4 = property(UITransform), _dec5 = property(UITransform), _dec6 = property(UITransform), _dec7 = property(UITransform), _dec(_class = (_class2 = class GameLayout extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "appLayout", _descriptor, this);

          _initializerDefineProperty(this, "headerRow0", _descriptor2, this);

          _initializerDefineProperty(this, "headerRow1", _descriptor3, this);

          _initializerDefineProperty(this, "headerRow2", _descriptor4, this);

          _initializerDefineProperty(this, "headerRow3", _descriptor5, this);

          _initializerDefineProperty(this, "headerDecorate", _descriptor6, this);

          _initializerDefineProperty(this, "headerDecorateHeightOrg", _descriptor7, this);

          this.row0HeightOrg = 60;
          this.row1HeightOrg = 60;
          this.row2HeightOrg = 80;
          this.row3HeightOrg = 80;
        }

        onLoad() {
          this.row0HeightOrg = this.headerRow0.height;
          this.row1HeightOrg = this.headerRow1.height;
          this.row2HeightOrg = this.headerRow2.height;
          this.row3HeightOrg = this.headerRow3.height; // this.headerDecorateHeightOrg = this.headerDecorate.height;
        }

        start() {
          this.updateLayout();
          this.appLayout.node.on(Node.EventType.SIZE_CHANGED, () => {
            this.updateLayout();
          }, this);
        }

        update(deltaTime) {}

        updateLayout() {
          this.headerRow0.height = this.row0HeightOrg;
          this.headerRow1.height = this.row1HeightOrg;
          this.headerRow2.height = this.row2HeightOrg;
          this.headerRow3.height = this.row3HeightOrg;
          let safeRect = sys.getSafeAreaRect();

          if (gAppResolution.policy == AppResolutionPolicy.fixedHeightPortrait || gAppResolution.policy == AppResolutionPolicy.fixedWidthPortrait) {
            if (gAppResolution.size.width > gAppResolution.size.height) {
              this.headerRow0.height = 20;
              this.headerRow1.height = 0;
            } else if (this.appLayout.header.height - this.appLayout.headerSizeOrg.height > 20) {
              let row0H = Math.min(this.headerDecorateHeightOrg, this.appLayout.header.height - this.appLayout.headerSizeOrg.height);
              this.headerRow0.height = Math.max(safeRect.y, row0H);
            }

            this.headerRow3.height = this.appLayout.header.height - this.headerRow0.height - this.headerRow1.height - this.headerRow2.height;
          }

          this.headerDecorate && (this.headerDecorate.node.active = this.headerRow0.height >= 20);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "appLayout", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "headerRow0", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "headerRow1", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "headerRow2", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "headerRow3", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "headerDecorate", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "headerDecorateHeightOrg", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 160;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/gAppCommon.ts", ['cc', './gAppConstant.ts'], function (exports) {
  var cclegacy, find, CANVAS;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      find = module.find;
    }, function (module) {
      CANVAS = module.CANVAS;
    }],
    execute: function () {
      exports({
        findCanvas: findCanvas,
        setObjKeysAsValues: setObjKeysAsValues
      });

      cclegacy._RF.push({}, "6ea82GJ2EJE8YPYWmusSLV1", "gAppCommon", undefined);

      function setObjKeysAsValues(eObj) {
        for (const key in eObj) {
          if (Object.prototype.hasOwnProperty.call(eObj, key)) {
            let v = eObj[key];

            if ((typeof v != 'string' || v.trim().length <= 0) && isNaN(Number(key))) {
              eObj[key] = key;
            }
          }
        }
      }

      function findCanvas() {
        return find(CANVAS);
      }

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/gAppConfig.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "2d717OtshRGPZVmPL45lZP5", "gAppConfig", undefined);

      const product_rewarded_ad = "rewarded_ad";
      const product_buy5 = "com.hahamobile.PopCandy.buy5candies";
      const product_buy18 = "com.hahamobile.PopCandy.buy18candies";
      const product_buy35 = "com.hahamobile.PopCandy.buy35candies";
      const product_buy50 = "com.hahamobile.PopCandy.buy50candies";
      const product_buy100 = "com.hahamobile.PopCandy.buy100candies";
      const product_remove_ad = "com.hahamobile.PopCandy.removeAd";
      const product_restore_purchased = "product_restore_purchased";
      const products = [{
        id: product_rewarded_ad,
        icon: "coin",
        xSymbol: "x",
        count: 5,
        description: "",
        currency: "",
        price: "FREE",
        hot: false
      }, {
        id: product_buy100,
        icon: "coin",
        xSymbol: "x",
        count: 100,
        description: "",
        currency: "$",
        price: "9.99",
        hot: true
      }, {
        id: product_buy50,
        icon: "coin",
        xSymbol: "x",
        count: 50,
        description: "",
        currency: "$",
        price: "8.99",
        hot: false
      }, {
        id: product_buy35,
        icon: "coin",
        xSymbol: "x",
        count: 35,
        description: "",
        currency: "$",
        price: "5.99",
        hot: false
      }, {
        id: product_buy18,
        icon: "coin",
        xSymbol: "x",
        count: 18,
        description: "",
        currency: "$",
        price: "2.99",
        hot: false
      }, {
        id: product_buy5,
        icon: "coin",
        xSymbol: "x",
        count: 5,
        description: "",
        currency: "$",
        price: "0.99",
        hot: false
      }, {
        id: product_remove_ad,
        icon: "",
        xSymbol: "",
        count: 1,
        description: "REMOVE ADS",
        currency: "$",
        price: "0.99",
        hot: false
      }, {
        id: product_restore_purchased,
        icon: "",
        xSymbol: "",
        count: 1,
        description: "PURCHASED ITEM",
        currency: "",
        price: "RESTORE",
        hot: false
      }];
      const channel_version = "5.0";
      const gAppConfig = exports('gAppConfig', {
        testing: false,
        version: channel_version,
        // assets version
        channel_version: channel_version,
        channel_approved_version: "1.0",
        share_url: "https://popcandy.cc",
        remote_config_url: "https://popcandy.cc/api/ios/app_config.json",
        storeEnabled: true,
        isVideoAdEnabled: true,
        isInterstitialAdEnabled: false,
        maxSkillsToEquip: 3,
        interstitial_ad_interval: 5 * 60,
        product_rewarded_ad: product_rewarded_ad,
        product_buy5: product_buy5,
        product_buy18: product_buy18,
        product_buy35: product_buy35,
        product_buy50: product_buy50,
        product_buy100: product_buy100,
        product_remove_ad: product_remove_ad,
        product_restore_purchased: product_restore_purchased,
        products: products
      });
      /*
      const product_rewarded_ad = "rewarded_ad";
      const product_buy5 = "com.cocosbear.PopStarDash.buy5stars";
      const product_buy18 = "com.cocosbear.PopStarDash.buy18stars";
      const product_buy35 = "com.cocosbear.PopStarDash.buy35stars";
      const product_buy50 = "com.cocosbear.PopStarDash.buy50stars";
      const product_buy100 = "com.cocosbear.PopStarDash.buy100stars";
      const product_remove_ad = "com.cocosbear.PopStarDash.removeAd";
      const product_restore_purchased = "product_restore_purchased";
      const products = [
          { id: product_rewarded_ad, icon: "coin", xSymbol: "x", count: 5, description: "", currency: "", price: "FREE", hot: false },
          { id: product_buy100, icon: "coin", xSymbol: "x", count: 100, description: "", currency: "$", price: "9.99", hot: true },
          { id: product_buy50, icon: "coin", xSymbol: "x", count: 50, description: "", currency: "$", price: "8.99", hot: false },
          { id: product_buy35, icon: "coin", xSymbol: "x", count: 35, description: "", currency: "$", price: "5.99", hot: false },
          { id: product_buy18, icon: "coin", xSymbol: "x", count: 18, description: "", currency: "$", price: "2.99", hot: false },
          { id: product_buy5, icon: "coin", xSymbol: "x", count: 5, description: "", currency: "$", price: "0.99", hot: false },
          { id: product_remove_ad, icon: "", xSymbol: "", count: 1, description: "REMOVE ADS", currency: "$", price: "0.99", hot: false },
          { id: product_restore_purchased, icon: "", xSymbol: "", count: 1, description: "PURCHASED ITEM", currency: "", price: "RESTORE", hot: false }
      ]
       const channel_version = "3.6";
       export const gAppConfig  = {
          testing : true, 
          version : channel_version,    // assets version
          channel_version : channel_version,
          channel_approved_version:"1.0",
          share_url:"https://popstar.cc",
          remote_config_url:"https://popstar.cc/api/ios/app_config.json",
           storeEnabled: true,
          isVideoAdEnabled : true,
          isInterstitialAdEnabled : false,
          maxSkillsToEquip : 3,
           interstitial_ad_interval : 5*60,
           product_rewarded_ad: product_rewarded_ad,
          product_buy5:product_buy5,
          product_buy18:product_buy18,
          product_buy35:product_buy35,
          product_buy50:product_buy50,
          product_buy100:product_buy100,
          product_remove_ad:product_remove_ad,
          product_restore_purchased: product_restore_purchased,
           products:products,
      }
      */

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/gAppConstant.ts", ['cc'], function (exports) {
  var cclegacy, ResolutionPolicy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      ResolutionPolicy = module.ResolutionPolicy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "37284qrGdxJ6ZRA0IlI3W0/", "gAppConstant", undefined);

      const DESIGN_W = exports('DESIGN_W', 640);
      const DESIGN_H = exports('DESIGN_H', 960);
      const DESIGN_POLICY = exports('DESIGN_POLICY', ResolutionPolicy.FIXED_WIDTH);
      const DESIGN_RATIO_PORTRAIT = exports('DESIGN_RATIO_PORTRAIT', DESIGN_W / DESIGN_H);
      const DESIGN_RATIO_LANDSCAPE = exports('DESIGN_RATIO_LANDSCAPE', 1.6);
      const BUNDLE_RESOURCES = exports('BUNDLE_RESOURCES', 'resources');
      const BUNDLE_APP = exports('BUNDLE_APP', 'app');
      const BUNDLE_MAIN = exports('BUNDLE_MAIN', 'main');
      const BUNDLE_HOME = exports('BUNDLE_HOME', 'home');
      const BUNDLE_POP = exports('BUNDLE_POP', 'pop');
      const SCENE_WELCOME = exports('SCENE_WELCOME', 'WelcomeScene');
      const SCENE_APP_STARTER = exports('SCENE_APP_STARTER', 'AppStarterScene');
      const SCENE_MAIN = exports('SCENE_MAIN', 'MainScene');
      const SCENE_LOADING = exports('SCENE_LOADING', 'LoadingScene');
      const SCENE_HOME = exports('SCENE_HOME', 'HomeScene');
      const SCENE_POP = exports('SCENE_POP', 'PopScene');
      const SCENE_BUNDLE = exports('SCENE_BUNDLE', {
        LoadingScene: BUNDLE_APP,
        HomeScene: BUNDLE_HOME,
        PopScene: BUNDLE_POP
      });
      const PREFAB_DIR = exports('PREFAB_DIR', 'prefab'); // prefab dir name

      const PREFAB_AppMsgBoxUI = exports('PREFAB_AppMsgBoxUI', 'AppMsgBoxUI');
      const EVT_VIEW_SIZE_CHANGE = exports('EVT_VIEW_SIZE_CHANGE', 'EVT_VIEW_SIZE_CHANGE');
      const EVT_PREFAB_LOADED = exports('EVT_PREFAB_LOADED', 'EVT_PREFAB_LOADED');
      const MAX_WIDTH = exports('MAX_WIDTH', 1400);
      const MAX_HEIGHT = exports('MAX_HEIGHT', 1400);
      const EFFECT_SCALE_IN_OUT = exports('EFFECT_SCALE_IN_OUT', 0);
      const EFFECT_SLIDE_UP_DOWN = exports('EFFECT_SLIDE_UP_DOWN', 1);
      const CANVAS = exports('CANVAS', "Canvas");
      const LAYER_BG = exports('LAYER_BG', "Canvas/LayerBg");
      const LAYER_VIEW = exports('LAYER_VIEW', "Canvas/LayerView");
      const LAYER_UI = exports('LAYER_UI', "Canvas/LayerUI");
      const LAYER_FG1 = exports('LAYER_FG1', "Canvas/LayerFg1");
      const LAYER_FG2 = exports('LAYER_FG2', "Canvas/LayerFg2");
      const LAYER_FG3 = exports('LAYER_FG3', "Canvas/LayerFg3");

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/gAppUtils.ts", ['cc'], function (exports) {
  var cclegacy, log, Node, director, warn, js, Button, assetManager, error, view, find, UITransform, v3, tween;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      log = module.log;
      Node = module.Node;
      director = module.director;
      warn = module.warn;
      js = module.js;
      Button = module.Button;
      assetManager = module.assetManager;
      error = module.error;
      view = module.view;
      find = module.find;
      UITransform = module.UITransform;
      v3 = module.v3;
      tween = module.tween;
    }],
    execute: function () {
      cclegacy._RF.push({}, "6dfc197ba5ChYaKYXNNeJxP", "gAppUtils", undefined);

      class gAppUtils {
        static enumGetKeys(o) {
          return Object.keys(o).filter((v, i, arr) => {
            return isNaN(Number(v));
          });
        }

        static enumSetKeysAsValues(eObj) {
          for (const key in eObj) {
            if (Object.prototype.hasOwnProperty.call(eObj, key)) {
              let v = eObj[key];

              if ((typeof v != 'string' || v.trim().length <= 0) && isNaN(Number(key))) {
                eObj[key] = key;
              }
            }
          }
        }

        static createPersistNode(nodeName) {
          log(`createPersistNode(${nodeName}`);
          let node = new Node(nodeName);
          node.parent = director.getScene();
          director.addPersistRootNode(node);

          if (!director.isPersistRootNode(node)) {
            warn(`!director.isPersistRootNode()`);
          }

          return node;
        }

        static addComponentNodeTo(classConstructor, parent) {
          console.log(`AppUtils::addComponentNodeTo()`);
          let clsName = js.getClassName(classConstructor);
          console.log("js.getClassName(classConstructor):", clsName);
          let nd = new Node(clsName);
          let comp = nd.addComponent(classConstructor);
          nd.parent = parent;
          return comp;
        }

        static bindClick(nodeButton, func, target, data) {
          nodeButton.on(Button.EventType.CLICK, () => {
            func.call(target, data);
          }, target); // nodeButton.on(Button.EventType.CLICK, func, target);
        }

        static loadBundleRes(bundleName, resPath, onComplete) {
          log(`loadBundleRes(${bundleName},${resPath})`);
          assetManager.loadBundle(bundleName, (err, bundle) => {
            if (err) {
              error(`loadBundle${bundleName} error!`);
              return;
            }

            bundle.load(resPath, (err, data) => {
              if (err) {
                error(`bundle.load${resPath} error!`);
                return;
              }

              onComplete && onComplete(data);
            });
          });
        }

        static loadBundleDir(bundle, dirName, onComplete) {
          console.log(`loadBundleDir(bundle,${dirName})`);

          if (!bundle) {
            console.error(`bundle is null!`);
            return;
          }

          bundle.loadDir(dirName, (err1, assets) => {
            if (err1) {
              console.error("bundle.loadDir(Prefab) error:", err1);
              return;
            }

            onComplete(assets);
          });
        }

        static getBundleAsset(bundle, resPath) {
          //console.log("AppUtils.getBundleAsset:", resPath);
          let result = null;

          if (!bundle) {
            console.error("bundle null!");
            return result;
          }

          result = bundle.get(resPath);

          if (!result) {
            console.error(`bundle.get(${resPath}) error!`);
          }

          return result;
        }

        static getDateString() {
          let funcFormat = function (num) {
            if (num < 10) {
              return '0' + num;
            } else {
              return String(num);
            }
          };

          let funcFormatThousand = function (num) {
            if (num < 10) {
              return '00' + num;
            } else if (num < 100) {
              return '0' + num;
            } else {
              return String(num);
            }
          };

          var myDate = new Date();
          var year = funcFormat(myDate.getFullYear()); //获取完整的年份(4位,1970-????)

          var month = funcFormat(myDate.getMonth() + 1); //获取当前月份(1-12)

          var day = funcFormat(myDate.getDate()); //获取当前日(1-31)

          var hour = funcFormat(myDate.getHours());
          var minute = funcFormat(myDate.getMinutes());
          var sec = funcFormat(myDate.getSeconds());
          var millsec = funcFormatThousand(myDate.getMilliseconds());
          var str = year + month + day + hour + minute + sec + millsec;
          return str;
        }

        static loadObject(key, obj) {
          // let className = js.getClassName(obj);
          // console.log("loadObjectInfo::", className);
          let item = localStorage.getItem(key);

          if (item) {
            let info = JSON.parse(item);
            let keys = Object.getOwnPropertyNames(info);
            keys.forEach(e => {
              if (obj.hasOwnProperty(e)) {
                obj[e] = info[e];
              }
            });
          }
        }

        static saveObject(key, obj) {
          localStorage.setItem(key, JSON.stringify(obj));
        } //Common function


        static addItemTo(item, arr, maxCount) {
          arr.push(item);

          if (arr.length > maxCount) {
            let removeCount = arr.length - maxCount;

            if (removeCount > 0 && removeCount < arr.length) {
              arr.splice(0, removeCount);
            }
          }
        }

        static request(url, callback) {
          console.log("AppUtils::request()", url);
          let xhr = new XMLHttpRequest();

          xhr.onreadystatechange = () => {
            if (xhr.readyState == 4) {
              console.log("xhr.status:", xhr.status);

              if (xhr.status >= 200 && xhr.status < 400) {
                //console.log(xhr.responseText);
                callback(null, xhr.responseText);
              } else {
                callback('failed', xhr.status);
              }
            }
          };

          xhr.open("GET", url, true);
          xhr.send(); //xhr.setRequestHeader('Content-Type', 'application/json');
          //xhr.send(JSON.stringify(data));
        }
        /*
        JS: view.getDevicePixelRatio(): 2.6086957454681396
        JS: view.getScaleX(),view.getScaleY(): 1.6875 1.6875
        JS: view.getFrameSize(): 414 736
        JS: view.getCanvasSize(): 1080 1920
        JS: find('Canvas'): 640 1138
        JS: view.getVisibleSize(): 640 1138
        JS: view.getVisibleSizeInPixel(): 1080 1920
        JS: view.getViewportRect(): 0 0 1080 1920
        
        xcode: frame:414,736
        
        frame:414,736
        ad.adSize:414,65
        
        canvasH * view.getScaleY() = view.getCanvasSize();
        frameH * view.getDevicePixelRatio() = view.getCanvasSize();
        canvasH * view.getScaleY() = frameH * view.getDevicePixelRatio()
        
        view.getScaleY()/view.getDevicePixelRatio()
        1.6875 / 2.6087 = 0.64687
        frameSizeH = canvasH*(view.getScaleY()/view.getDevicePixelRatio())
        adSizeH = canvasRemainH * (view.getScaleY()/view.getDevicePixelRatio())
        */


        static printSizes() {
          let devicePixelRatio = view.getDevicePixelRatio();
          console.log("view.getDevicePixelRatio():", devicePixelRatio);
          console.log("view.getScaleX(),view.getScaleY():", view.getScaleX(), view.getScaleY());
          let sz = view.getFrameSize();
          console.log("view.getFrameSize():", sz.width, sz.height);
          sz = view.getCanvasSize();
          console.log("view.getCanvasSize():", sz.width, sz.height);
          let transCanvas = find("Canvas").getComponent(UITransform);
          console.log("find('Canvas'):", transCanvas.width, transCanvas.height);
          sz = view.getVisibleSize();
          console.log("view.getVisibleSize():", sz.width, sz.height);
          sz = view.getVisibleSizeInPixel();
          console.log("view.getVisibleSizeInPixel():", sz.width, sz.height);
          sz = view.getViewportRect();
          console.log("view.getViewportRect():", sz.x, sz.y, sz.width, sz.height);
          console.log("screen.width, height:", screen.width, screen.height);
          console.log("screen.availWidthHeight:", screen.availWidth, screen.availHeight);
          console.log("screen.pixelDepth:", screen.pixelDepth);
          console.log("window.devicePixelRatio:", window.devicePixelRatio);
        }
        /**
         *  二阶贝塞尔曲线 运动
         * @param target
         * @param {number} duration
         * @param {} c1 起点坐标
         * @param {} c2 控制点
         * @param {Vec3} to 终点坐标
         * @param opts
         * @returns {any}
         */


        static bezierTo(target, duration, c1, c2, to, opts) {
          opts = opts || Object.create(null);
          /**
           * @desc 二阶贝塞尔
           * @param {number} t 当前百分比
           * @param {} p1 起点坐标
           * @param {} cp 控制点
           * @param {} p2 终点坐标
           * @returns {any}
           */

          let twoBezier = (t, p1, cp, p2) => {
            let x = (1 - t) * (1 - t) * p1.x + 2 * t * (1 - t) * cp.x + t * t * p2.x;
            let y = (1 - t) * (1 - t) * p1.y + 2 * t * (1 - t) * cp.y + t * t * p2.y;
            return v3(x, y, 0);
          };

          opts.onUpdate = (arg, ratio) => {
            target.position = twoBezier(ratio, c1, c2, to);
          };

          return tween(target).to(duration, {}, opts);
        }

        static compareVersion(strV1, strV2) {
          let v1 = strV1.split('.');
          let v2 = strV2.split('.');
          const len = Math.max(v1.length, v2.length);

          while (v1.length < len) {
            v1.push('0');
          }

          while (v2.length < len) {
            v2.push('0');
          }

          for (let i = 0; i < len; i++) {
            const num1 = parseInt(v1[i]);
            const num2 = parseInt(v2[i]);

            if (num1 > num2) {
              return 1;
            } else if (num1 < num2) {
              return -1;
            }
          }

          return 0;
        }

        static formatFloat(f, digit) {
          let m = Math.pow(10, digit);
          return Math.round(f * m) / m;
        }

      }

      exports('gAppUtils', gAppUtils);

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/HomeSceneView.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './App.ts', './gAppConstant.ts', './PopData.ts', './AppAudioSounds.ts', './AppData.ts', './AppHotUpdate.ts', './AppCoinInfo.ts'], function (exports) {
  var _applyDecoratedDescriptor, _initializerDefineProperty, cclegacy, Node, _decorator, Component, log, UIOpacity, v3, tween, easing, randomRangeInt, macro, view, sys, js, game, gAppDirector, gAppAudio, gAppUI, gAppHotUpdate, gAppNative, SCENE_POP, gPopData, AppAudioSounds, SND, gAppData, AppHotUpdate, AppCoinInfo;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      Node = module.Node;
      _decorator = module._decorator;
      Component = module.Component;
      log = module.log;
      UIOpacity = module.UIOpacity;
      v3 = module.v3;
      tween = module.tween;
      easing = module.easing;
      randomRangeInt = module.randomRangeInt;
      macro = module.macro;
      view = module.view;
      sys = module.sys;
      js = module.js;
      game = module.game;
    }, function (module) {
      gAppDirector = module.gAppDirector;
      gAppAudio = module.gAppAudio;
      gAppUI = module.gAppUI;
      gAppHotUpdate = module.gAppHotUpdate;
      gAppNative = module.gAppNative;
    }, function (module) {
      SCENE_POP = module.SCENE_POP;
    }, function (module) {
      gPopData = module.gPopData;
    }, function (module) {
      AppAudioSounds = module.AppAudioSounds;
      SND = module.SND;
    }, function (module) {
      gAppData = module.gAppData;
    }, function (module) {
      AppHotUpdate = module.AppHotUpdate;
    }, function (module) {
      AppCoinInfo = module.AppCoinInfo;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3;

      cclegacy._RF.push({}, "f319cZynlNLGoo1N2LFWQe1", "HomeSceneView", undefined);

      const {
        ccclass,
        property
      } = _decorator;
      let bPopViewLoaded = false;
      let bHotUpdateMsgShowed = false;
      let HomeSceneView = exports('HomeSceneView', (_dec = ccclass('HomeSceneView'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property([Node]), _dec(_class = (_class2 = class HomeSceneView extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "title", _descriptor, this);

          _initializerDefineProperty(this, "shiningLight", _descriptor2, this); // @property(AudioClip) audioBg:AudioClip = null;


          _initializerDefineProperty(this, "arrAnimNodes", _descriptor3, this);
        }

        onDestroy() {
          log(`HomeSceneView.onDestroy()`);
        }

        start() {
          AppCoinInfo.instance.node.active = true;

          if (!bPopViewLoaded) {
            gAppDirector.preloadScene(SCENE_POP, () => {
              bPopViewLoaded = true;
              AppAudioSounds.loadClips(() => {
                gAppAudio.playMusic(SND.MainMenuBg);
              });
            });
          }

          for (let i = 0; i < this.arrAnimNodes.length; i++) {
            const e = this.arrAnimNodes[i];

            if (e) {
              let op = e.getComponent(UIOpacity);

              if (op) {
                let opOrg = op.opacity;
                op.opacity = 0;
                this.scheduleOnce(() => {
                  op.opacity = opOrg;
                  let scaleOrg = v3(e.scale);
                  tween(e).set({
                    scale: v3(0, 0, 1)
                  }).delay(0.3 + i * 0.15).to(0.3, {
                    scale: scaleOrg
                  }, {
                    easing: easing.backOut
                  }).start();
                });
              }
            }
          }

          {
            // title tween effects
            this.schedule(() => {
              this.title.children.forEach(e => {
                if (e.active) {
                  let direction = randomRangeInt(-50, 50) > 0 ? 1 : -1;
                  tween(e).by(0.3, {
                    angle: 5 * direction
                  }, {
                    easing: easing.backOut
                  }).by(0.3, {
                    angle: -10 * direction
                  }, {
                    easing: easing.backIn
                  }).by(0.3, {
                    angle: 5 * direction
                  }, {
                    easing: easing.smooth
                  }).start();
                }
              });
            }, 10, macro.REPEAT_FOREVER, 1.5);
            let posTitle = v3(this.title.position);
            let delta = view.getVisibleSize().height / 2;
            tween(this.title).set({
              position: v3(posTitle.x, 200 + delta + posTitle.y, posTitle.z)
            }).delay(1.0).by(0.6, {
              position: v3(0, -200 - delta, 0)
            }, {
              easing: 'backOut'
            }).call(() => {
              let x = 3; // randomRangeInt(-10, 10);

              let y = 10; // randomRangeInt(-30, 30);

              let duration = 1.2; // randomRange(1.0, 2.5);

              tween(this.title).by(duration, {
                position: v3(x, y, 0)
              }, {
                easing: easing.sineInOut
              }).by(duration * 2, {
                position: v3(-x, -y, 0)
              }, {
                easing: easing.sineInOut
              }).union().repeatForever().start();
            }).start();
            tween(this.shiningLight).by(3, {
              angle: -60
            }).repeatForever().start();
          }

          if (!gAppData.privacyPolicyAccepted) {
            gAppUI.showPrivacyDialog(() => {
              gAppData.privacyPolicyAccepted = true;
            });
          }

          if (sys.isNative) {
            this.scheduleOnce(() => {
              log(`newVersionDownloaded:${gAppHotUpdate.newVersionDownloaded}, bHotUpdateMsgShowed:${bHotUpdateMsgShowed}`);

              if (gAppHotUpdate.newVersionDownloaded) {
                if (!bHotUpdateMsgShowed) {
                  this.showHotUpdateMsg();
                }
              } else {
                gAppHotUpdate.node.on(AppHotUpdate.EVT_NEED_RESTART, () => {
                  log(`${js.getClassName(this)},on:EVT_NEED_RESTART`);

                  if (!bHotUpdateMsgShowed) {
                    this.showHotUpdateMsg();
                  }
                }, this);
              }
            }, 0.2);
          }

          gAppAudio.playMusic(SND.MainMenuBg);
        }

        showHotUpdateMsg() {
          gAppUI.showMessageBox("Update", "Resource update is available. \nApply update now?", () => {
            game.restart();
          }, "Apply");
          bHotUpdateMsgShowed = true;
        }

        onStartClick() {
          if (!bPopViewLoaded) {
            gAppUI.showLoading();
          }

          gAppAudio.playSound(SND.SelectGem);
          gAppDirector.loadScene(SCENE_POP, () => {
            gAppUI.hideLoading();
          });
        }

        onSettingClick() {// AppPrivacyDialog.create();
          // gAppUI.showPrivacyDialog();
        }

        onRankClick() {
          gAppNative.reportScore(gPopData.highScore);
          this.scheduleOnce(() => {
            gAppNative.showRank();
          }, 0.1);
        }

        onInfoClick() {
          gAppUI.showAboutUs(); // AppAboutUsUI.create();
        }

        onGiftClick() {
          sys.openURL("https://PopCandy.cc");
        }

        onBtnClick() {
          gAppUI.showWaiting(); // show waiting...

          gAppDirector.loadScene(SCENE_POP, () => {
            gAppUI.hideWaiting();
          });
        }

        onBtnMessageBoxClick() {
          // gAppUI.showMsgBox(`Hello! Welcome to play our game!`, `Info`);
          gAppUI.showAboutUs();
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "title", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "shiningLight", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "arrAnimNodes", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/JsonOb.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "1ffd3Wve91BGZGBFT0qs0S8", "JsonOb", undefined);
      /**
       * 实现动态绑定的核心部分，
       * 每次修改属性值，都会调用对应函数，并且获取值的路径
       */


      const OP = Object.prototype;
      const types = {
        obj: '[object Object]',
        array: '[object Array]'
      };
      const OAM = ['push', 'pop', 'shift', 'unshift', 'sort', 'reverse', 'splice'];
      /**
       * 实现属性拦截的类
       */

      class JsonOb {
        constructor(obj, callback) {
          this._callback = void 0;

          if (OP.toString.call(obj) !== types.obj && OP.toString.call(obj) !== types.array) {
            console.error('请传入一个对象或数组');
          }

          this._callback = callback;
          this.observe(obj, []);
        }
        /**对象属性劫持 */


        observe(obj, path) {
          if (OP.toString.call(obj) === types.array) {
            this.overrideArrayProto(obj, path);
          }

          Object.keys(obj).forEach(key => {
            let self = this;
            let oldVal = obj[key];
            let pathArray = path && path.slice();

            if (pathArray) {
              pathArray.push(key);
            } else {
              pathArray = [key];
            }

            Object.defineProperty(obj, key, {
              get: function () {
                return oldVal;
              },
              set: function (newVal) {
                //cc.log(newVal);
                if (oldVal !== newVal) {
                  let opType = OP.toString.call(newVal);

                  if (opType === types.obj || opType === types.array) {
                    self.observe(newVal, pathArray);
                  }

                  let oldValCopy = oldVal;
                  oldVal = newVal;

                  self._callback(newVal, oldValCopy, pathArray);
                }
              }
            });

            if (OP.toString.call(obj[key]) === types.obj || OP.toString.call(obj[key]) === types.array) {
              this.observe(obj[key], pathArray);
            }
          }, this);
        }
        /**
         * 对数组类型进行动态绑定
         * @param array 
         * @param path 
         */


        overrideArrayProto(array, path) {
          // 保存原始 Array 原型  
          var originalProto = Array.prototype; // 通过 Object.create 方法创建一个对象，该对象的原型是Array.prototype  

          var overrideProto = Object.create(Array.prototype);
          var self = this;
          var result; // 遍历要重写的数组方法  

          OAM.forEach(method => {
            Object.defineProperty(overrideProto, method, {
              value: function () {
                var oldVal = this.slice(); //调用原始原型上的方法  

                result = originalProto[method].apply(this, arguments); //继续监听新数组  

                self.observe(this, path);

                self._callback(this, oldVal, path);

                return result;
              }
            });
          }); // 最后 让该数组实例的 __proto__ 属性指向 假的原型 overrideProto  

          array['__proto__'] = overrideProto;
        }

      }

      exports('JsonOb', JsonOb);

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/LoadingSceneView.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './App.ts', './gAppConstant.ts', './gAppUtils.ts', './MainScene.ts'], function (exports) {
  var _applyDecoratedDescriptor, _initializerDefineProperty, cclegacy, Node, ProgressBar, Label, _decorator, Component, size, v3, UITransform, sys, log, js, tween, UIOpacity, assetManager, gAppRes, gAppDirector, gAppAudio, EVT_PREFAB_LOADED, SCENE_HOME, DESIGN_RATIO_LANDSCAPE, gAppUtils, MainScene;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      Node = module.Node;
      ProgressBar = module.ProgressBar;
      Label = module.Label;
      _decorator = module._decorator;
      Component = module.Component;
      size = module.size;
      v3 = module.v3;
      UITransform = module.UITransform;
      sys = module.sys;
      log = module.log;
      js = module.js;
      tween = module.tween;
      UIOpacity = module.UIOpacity;
      assetManager = module.assetManager;
    }, function (module) {
      gAppRes = module.gAppRes;
      gAppDirector = module.gAppDirector;
      gAppAudio = module.gAppAudio;
    }, function (module) {
      EVT_PREFAB_LOADED = module.EVT_PREFAB_LOADED;
      SCENE_HOME = module.SCENE_HOME;
      DESIGN_RATIO_LANDSCAPE = module.DESIGN_RATIO_LANDSCAPE;
    }, function (module) {
      gAppUtils = module.gAppUtils;
    }, function (module) {
      MainScene = module.MainScene;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6;

      cclegacy._RF.push({}, "2f014HpS2dPjJ7Q1tCw5SBq", "LoadingSceneView", undefined);

      const {
        ccclass,
        property
      } = _decorator;
      let LoadingSceneView = exports('LoadingSceneView', (_dec = ccclass('LoadingSceneView'), _dec2 = property(Node), _dec3 = property(ProgressBar), _dec4 = property(Label), _dec5 = property(Label), _dec6 = property(Node), _dec7 = property(Node), _dec(_class = (_class2 = class LoadingSceneView extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "sparkleBg", _descriptor, this);

          _initializerDefineProperty(this, "progressBar", _descriptor2, this);

          _initializerDefineProperty(this, "labelProgress", _descriptor3, this);

          _initializerDefineProperty(this, "labelWelcome", _descriptor4, this);

          _initializerDefineProperty(this, "sparklePoint", _descriptor5, this);

          _initializerDefineProperty(this, "candy", _descriptor6, this);

          this.bResLoaded = false;
          this.bHomeViewLoad = false;
          this.bReady = false;
          this.bSceneLoaded = false;
          this.timeStart = 0;
          this.sizeSparkleBgOrg = size(640, 960);
          this.posSparklePointOrg = v3(0, 0, 0);
          this.posSparklePointScaleY = 0.5;
          this._tweenCandy = null;
        }

        onLoad() {
          this.posSparklePointOrg = v3(this.sparklePoint.position);
          this.sizeSparkleBgOrg = size(this.sparklePoint.parent.getComponent(UITransform).contentSize);
        }

        start() {
          this.timeStart = sys.now(); // this.scheduleOnce(()=>{

          if (sys.isBrowser && window && document) {
            let element = document.getElementById("loading");
            element && element.remove();
          } // }, 1.0);


          this.progressBar.progress = 0;
          this.schedule(() => {
            this.updateProgress();
          }, 0.02, 90 - 1); // 90

          this.schedule(() => {
            this.updateProgress();
          }, 0.5, 5 - 1, 90 * 0.02); //5

          this.schedule(() => {
            this.updateProgress();
          }, 1.0, 4 - 1, 90 * 0.02 + 5 * 0.5); //4

          if (!gAppRes.isPrefabDirLoaded) {
            gAppRes.node.on(EVT_PREFAB_LOADED, () => {
              this.bResLoaded = true;
              this.readyGo();
            }, this);
          } else {
            this.bResLoaded = true;
            this.readyGo();
          } // // HomeView.preloadView();
          // gAppViewMgr.preloadView(VIEW.HomeView, ()=>{


          gAppDirector.preloadScene(SCENE_HOME, () => {
            this.bHomeViewLoad = true;
            log(`${js.getClassName(this)}.bHomeViewLoad=true`);
            this.readyGo();
          });
          this.scheduleOnce(() => {
            this.updateCandyPos();
            this._tweenCandy = tween(this.candy.children[1]).by(0.5, {
              angle: -45
            }).repeatForever().start();
          });
          this.node.on(Node.EventType.SIZE_CHANGED, () => {
            this.updateCandyPos();
          }, this);
        }

        onDestroy() {
          log(`LoadingSceneView.onDestroy()`);
        }

        updateCandyPos() {
          // let sizeSparlePointBg = this.node.getComponent(UITransform).contentSize;
          // this.sparklePoint.position = v3(this.posSparklePointOrg.x*sizeSparlePointBg.width/this.sizeSparkleBgOrg.width,
          //                          this.posSparklePointOrg.y*sizeSparlePointBg.height/this.sizeSparkleBgOrg.height, 
          //                          this.posSparklePointOrg.z);
          let sizeBg = this.node.getComponent(UITransform).contentSize;
          this.sparkleBg.active = sizeBg.width / sizeBg.height < DESIGN_RATIO_LANDSCAPE;
          let y = this.posSparklePointOrg.y * (sizeBg.height / this.sizeSparkleBgOrg.height);
          y = this.sparkleBg.active ? y : 0;
          this.sparklePoint.position = v3(this.sparklePoint.position.x, y, this.sparklePoint.position.z);
        }

        updateProgress() {
          // log(`before this.updateProgress().progress:${this.progressBar.progress}`);
          let f = gAppUtils.formatFloat(this.progressBar.progress + 0.01, 3);
          this.progressBar.progress = Math.min(1.0, f); // log(`after this.updateProgress().progress:${this.progressBar.progress}`);

          this.labelProgress.string = `${Math.floor(this.progressBar.progress * 100)}%`;

          if (this.progressBar.progress >= 1.0) {
            this.showHomeScene();
          }
        }

        readyGo() {
          log(`${js.getClassName(this)}.readGo()`);

          if (this.bHomeViewLoad && this.bResLoaded) {
            if (!this.bReady) {
              this.bReady = true;
              log(`${js.getClassName(this)}.bReady=true;`);
              this.schedule(() => {
                this.updateProgress();
              }, 0.02, 100);
            }
          }
        }

        showHomeScene() {
          if (!this.bSceneLoaded) {
            this.bSceneLoaded = true;

            let func = () => {
              MainScene.instance.maskFg.fadeIn(0.8, () => {
                gAppDirector.loadScene(SCENE_HOME);
                MainScene.instance.maskFg.fadeOut(0.8);
              });
            };

            tween(this.progressBar.getComponent(UIOpacity)).to(0.5, {
              opacity: 0
            }).start();
            tween(this.candy.children[1].getComponent(UIOpacity)).to(0.5, {
              opacity: 0
            }).start();
            tween(this.candy.children[0].getComponent(UIOpacity)).to(0.5, {
              opacity: 255
            }).start();
            tween(this.labelWelcome.getComponent(UIOpacity)).to(1.2, {
              opacity: 255
            }).start(); // this.candy.children[0].getComponent(Sprite).enabled = false;

            this._tweenCandy.stop(); // tween(this.candy).by(0.5, {angle:-45}).by(0.5, {angle:45}).union().repeat(2).call(()=>{
            //     func();
            // }).start();


            let dur = Math.abs(this.candy.angle / 45) * 0.5;
            if (dur > 0.5) dur = 0.5;else if (dur < 0.1) dur = 0.1;
            tween(this.candy).to(dur, {
              angle: 0
            }).by(0.5, {
              angle: -45
            }).by(0.5, {
              angle: 45
            }).by(0.5, {
              angle: -45
            }).by(0.5, {
              angle: 45
            }).delay(0.3).call(() => {
              func();
            }).start();
            let bundleName = "audio";
            assetManager.loadBundle(bundleName, (err0, bundle) => {
              if (!err0) {
                bundle.load('MainMenuBg', (err1, clip) => {
                  if (!err1) {
                    if (this.isValid) {
                      gAppAudio.playMusic(clip);
                    }
                  }
                });
              }
            });
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "sparkleBg", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "progressBar", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "labelProgress", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "labelWelcome", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "sparklePoint", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "candy", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/main", ['./debug-view-runtime-control.ts', './App.ts', './AppAdHelper.ts', './AppAudio.ts', './AppAudioSounds.ts', './AppData.ts', './AppDirector.ts', './AppHelper.ts', './AppHotUpdate.ts', './AppLayoutHelper.ts', './AppNative.ts', './AppRemoteConfig.ts', './AppRes.ts', './AppResolution.ts', './AppStoreHelper.ts', './AppUI.ts', './AppUser.ts', './AppViewMgr.ts', './AppCanvasBg.ts', './AppCoinInfo.ts', './AppDebugBg.ts', './AppGrid.ts', './AppImg.ts', './AppLayout.ts', './AppLayout1.ts', './AppLayoutAdaptor.ts', './AppLayoutItem.ts', './AppMaskFg.ts', './AppRatingButton.ts', './AppSetterForEditor.ts', './AppShareButton.ts', './AppSoundButton.ts', './AppVideoAdButton.ts', './AppWidgetMaxWH.ts', './CandyRopes.ts', './GameLayout.ts', './RotateForever.ts', './TapAndHold.ts', './gAppCommon.ts', './gAppConfig.ts', './gAppConstant.ts', './gAppUtils.ts', './AppAboutUsUI.ts', './AppBlockerUI.ts', './AppDebugUI.ts', './AppFadeOutUI.ts', './AppHotUpdateTestUI.ts', './AppLoadingUI.ts', './AppLuckyButton.ts', './AppLuckyUI.ts', './AppMessageBoxUI.ts', './AppMsgBoxUI.ts', './AppPrivacyDialogUI.ts', './AppPrivacyPolicy.ts', './AppRatingBoxUI.ts', './AppRewardCollectUI.ts', './AppRewardMessageUI.ts', './AppSceneLoaderUI.ts', './AppStoreItem.ts', './AppStoreUI.ts', './AppTextViewerUI.ts', './AppTipsUI.ts', './AppVideoAdMessageUI.ts', './AppWaitingUI.ts', './JsonOb.ts', './StringFormat.ts', './VMBase.ts', './VMLabel.ts', './ViewModel.ts', './Pop.ts', './PopCommon.ts', './PopConfirmDialogUI.ts', './PopData.ts', './PopEffect.ts', './PopGame.ts', './PopGameHelpUI.ts', './PopGameOverUI.ts', './PopGem.ts', './PopGlobal.ts', './PopGrid.ts', './PopHelper.ts', './PopInterstitialUI.ts', './PopMagic.ts', './PopMagicButton.ts', './PopMagicCollectUI.ts', './PopMagicStoreUI.ts', './PopNewHighScoreUI.ts', './PopRes.ts', './PopResultUI.ts', './PopRetryDialogUI.ts', './PopSettingUI.ts', './PopStageBg.ts', './PopStageIntroUI.ts', './PopStageStar.ts', './PopStarTest.ts', './PopUI.ts', './PopView.ts', './HomeSceneView.ts', './LoadingSceneView.ts', './MainScene.ts', './FloatingClouds.ts', './FloatingSmokes.ts'], function () {
  return {
    setters: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/MainScene.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './AppMaskFg.ts'], function (exports) {
  var _applyDecoratedDescriptor, _initializerDefineProperty, cclegacy, _decorator, Component, AppMaskFg;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
    }, function (module) {
      AppMaskFg = module.AppMaskFg;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor, _class3;

      cclegacy._RF.push({}, "12038pPrLhOqq7gANFxsZpj", "MainScene", undefined);

      const {
        ccclass,
        property
      } = _decorator;
      let MainScene = exports('MainScene', (_dec = ccclass('MainScene'), _dec2 = property(AppMaskFg), _dec(_class = (_class2 = (_class3 = class MainScene extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "maskFg", _descriptor, this);
        }

        static get instance() {
          return MainScene._instance;
        }

        onLoad() {
          MainScene._instance = this;
        }

        start() {}

      }, _class3._instance = null, _class3), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "maskFg", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Pop.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './PopGame.ts', './PopRes.ts', './PopEffect.ts', './PopGrid.ts', './PopMagic.ts', './PopUI.ts', './PopHelper.ts'], function (exports) {
  var _applyDecoratedDescriptor, _initializerDefineProperty, cclegacy, _decorator, Component, log, PopGame, PopRes, PopEffect, PopGrid, PopMagic, PopUI, PopHelper;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
      log = module.log;
    }, function (module) {
      PopGame = module.PopGame;
    }, function (module) {
      PopRes = module.PopRes;
    }, function (module) {
      PopEffect = module.PopEffect;
    }, function (module) {
      PopGrid = module.PopGrid;
    }, function (module) {
      PopMagic = module.PopMagic;
    }, function (module) {
      PopUI = module.PopUI;
    }, function (module) {
      PopHelper = module.PopHelper;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7;

      cclegacy._RF.push({}, "55a2czOv01B+r0fygcjhv20", "Pop", undefined);

      const {
        ccclass,
        property,
        executeInEditMode
      } = _decorator;
      let Pop = exports('Pop', (_dec = ccclass('Pop'), _dec2 = executeInEditMode(true), _dec3 = property(PopGame), _dec4 = property(PopRes), _dec5 = property(PopUI), _dec6 = property(PopHelper), _dec7 = property(PopEffect), _dec8 = property(PopGrid), _dec9 = property(PopMagic), _dec(_class = _dec2(_class = (_class2 = class Pop extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "game", _descriptor, this);

          _initializerDefineProperty(this, "res", _descriptor2, this);

          _initializerDefineProperty(this, "ui", _descriptor3, this);

          _initializerDefineProperty(this, "helper", _descriptor4, this);

          _initializerDefineProperty(this, "effect", _descriptor5, this);

          _initializerDefineProperty(this, "grid", _descriptor6, this);

          _initializerDefineProperty(this, "magic", _descriptor7, this);
        }

        onLoad() {
          log(`Pop.onLoad()`);
          gPop = exports('gPop', this);
          gPopGame = exports('gPopGame', this.game);
          gPopRes = exports('gPopRes', this.res);
          gPopUI = exports('gPopUI', this.ui);
          gPopHelper = exports('gPopHelper', this.helper);
          gPopEffect = exports('gPopEffect', this.effect);
          gPopGrid = exports('gPopGrid', this.grid);
          gPopMagic = exports('gPopMagic', this.magic);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "game", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "res", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "ui", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "helper", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "effect", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "grid", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "magic", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class) || _class));
      let gPop = exports('gPop', null);
      let gPopGame = exports('gPopGame', null);
      let gPopRes = exports('gPopRes', null);
      let gPopUI = exports('gPopUI', null);
      let gPopHelper = exports('gPopHelper', null);
      let gPopEffect = exports('gPopEffect', null);
      let gPopGrid = exports('gPopGrid', null);
      let gPopMagic = exports('gPopMagic', null);

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/PopCommon.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "92addg0IJ9AP7TL7KxkOHEl", "PopCommon", undefined);

      function setObjKeysAsValues(eObj) {
        for (const key in eObj) {
          if (Object.prototype.hasOwnProperty.call(eObj, key)) {
            let v = eObj[key];

            if ((typeof v != 'string' || v.trim().length <= 0) && isNaN(Number(key))) {
              eObj[key] = key;
            }
          }
        }
      }

      let PopStatus = exports('PopStatus', /*#__PURE__*/function (PopStatus) {
        PopStatus["init"] = "";
        PopStatus["ready"] = "";
        PopStatus["playing"] = "";
        PopStatus["paused"] = "";
        PopStatus["end"] = "";
        PopStatus["retry"] = "";
        PopStatus["passed"] = "";
        PopStatus["failed"] = "";
        return PopStatus;
      }({}));
      setObjKeysAsValues(PopStatus);
      let PopMagicId = exports('PopMagicId', /*#__PURE__*/function (PopMagicId) {
        PopMagicId["bomb"] = "";
        PopMagicId["color"] = "";
        PopMagicId["shuffle"] = "";
        return PopMagicId;
      }({}));
      setObjKeysAsValues(PopMagicId);
      const PopGemType = exports('PopGemType', {
        Empty: 0,
        Min: 1,
        Max: 5
      });
      const PopGemColors = exports('PopGemColors', ["#FFFFFF", "#30FF30", "#FC5050", "#00B8FF", "#EF30FF", "#FFFF30"]);

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/PopConfirmDialogUI.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _initializerDefineProperty, cclegacy, Toggle, Button, _decorator, Component, v3, tween, Sprite;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      Toggle = module.Toggle;
      Button = module.Button;
      _decorator = module._decorator;
      Component = module.Component;
      v3 = module.v3;
      tween = module.tween;
      Sprite = module.Sprite;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;

      cclegacy._RF.push({}, "a573dU0kNJENZCosiQKFj/T", "PopConfirmDialogUI", undefined);

      const {
        ccclass,
        property
      } = _decorator;
      let PopConfirmDialogUI = exports('PopConfirmDialogUI', (_dec = ccclass('PopConfirmDialogUI'), _dec2 = property(Toggle), _dec3 = property(Button), _dec(_class = (_class2 = class PopConfirmDialogUI extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "toggleConfirm", _descriptor, this);

          _initializerDefineProperty(this, "buttonOK", _descriptor2, this);

          this.funcOK = null;
          this.funcClose = null;
        }

        setParams(funcOK, funcClose) {
          this.funcOK = funcOK;
          this.funcClose = funcClose;
        }

        start() {
          this.updateButton();
          this.show();
        }

        show() {
          let panel = this.node.getChildByName("Panel");
          panel.setScale(v3(0, 0, 1));
          tween(panel).to(0.1, {
            scale: v3(1.0, 1.0, 1)
          }).start();
        }

        close() {
          let panel = this.node.getChildByName("Panel");
          tween(panel).to(0.1, {
            scale: v3(0, 0, 1)
          }).call(() => {
            this.node.destroy();
          }).start();
        }

        updateButton() {
          this.buttonOK.interactable = this.toggleConfirm.isChecked;
          this.buttonOK.getComponent(Sprite).grayscale = !this.buttonOK.interactable;
        }

        onToggleClick() {
          this.updateButton();
        }

        onOKClick() {
          this.funcOK && this.funcOK();
          this.close(); //this.node.destroy();
        }

        onCloseClick() {
          this.funcClose && this.funcClose();
          this.close(); //this.node.destroy();
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "toggleConfirm", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "buttonOK", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/PopData.ts", ['cc', './ViewModel.ts', './PopCommon.ts', './AppData.ts', './gAppConfig.ts', './gAppUtils.ts'], function (exports) {
  var cclegacy, _decorator, Component, log, randomRangeInt, js, warn, VM, PopStatus, gAppData, gAppConfig, gAppUtils;

  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
      log = module.log;
      randomRangeInt = module.randomRangeInt;
      js = module.js;
      warn = module.warn;
    }, function (module) {
      VM = module.VM;
    }, function (module) {
      PopStatus = module.PopStatus;
    }, function (module) {
      gAppData = module.gAppData;
    }, function (module) {
      gAppConfig = module.gAppConfig;
    }, function (module) {
      gAppUtils = module.gAppUtils;
    }],
    execute: function () {
      var _dec, _class2, _class3;

      cclegacy._RF.push({}, "1bb6bKJHaVKTaqgLQDuNsXE", "PopData", undefined);

      const {
        ccclass,
        property
      } = _decorator;
      const magicInfos = [{
        id: "bomb",
        count: 5,
        max: 5,
        price: 2,
        name: "BOMB"
      }, {
        id: "color",
        count: 5,
        max: 5,
        price: 2,
        name: "COLOR SWITCHER"
      }, {
        id: "shuffle",
        count: 5,
        max: 5,
        price: 1,
        name: "SHUFFLE"
      }];
      const targetInfos = [{
        id: "1",
        gemTypeCount: 5,
        target: 1000
      }, {
        id: "2",
        gemTypeCount: 4,
        target: 1500
      }, {
        id: "3",
        gemTypeCount: 4,
        target: 2000
      }, {
        id: "4",
        gemTypeCount: 5,
        target: 2000
      }, {
        id: "5",
        gemTypeCount: 5,
        target: 2500
      }, {
        id: "6",
        gemTypeCount: 5,
        target: 3000
      }, {
        id: "7",
        gemTypeCount: 4,
        target: 3000
      }, {
        id: "8",
        gemTypeCount: 4,
        target: 3000
      }, {
        id: "9",
        gemTypeCount: 5,
        target: 3500
      }, {
        id: "10",
        gemTypeCount: 3,
        target: 4000
      }, {
        id: "11",
        gemTypeCount: 5,
        target: 4500
      }, {
        id: "12",
        gemTypeCount: 4,
        target: 5000
      }, {
        id: "13",
        gemTypeCount: 5,
        target: 4500
      }, {
        id: "14",
        gemTypeCount: 5,
        target: 4000
      }, {
        id: "15",
        gemTypeCount: 5,
        target: 3500
      }];

      class PopData {
        constructor() {
          this.version = gAppConfig.version;
          this.curStage = 0;
          this.bestStage = 0;
          this.basicScore = 0;
          this.curScore = 0;
          this.targetScore = 1000;
          this.highScore = 0;
          this.status = PopStatus.init;
          this.row = 10;
          this.col = 10;
          this.arrGems = [];
          this.magicQuota = 5;
          this.magics = [{
            id: "bomb",
            count: 5
          }, {
            id: "color",
            count: 5
          }, {
            id: "shuffle",
            count: 5
          }];
          this.consecutiveWins = 0;
          this.consecutiveFails = 0;
          this.doubleClickModeOn = false;
        }

      }

      const gPopData = exports('gPopData', new PopData());
      const keyV1_Candy = "DataPop";
      const keyV1 = keyV1_Candy;
      const data = gPopData;
      const vmTag = "gPopData";
      const key = "PopDataV2";
      let PopDataCtl = exports('PopDataCtl', (_dec = ccclass('PopDataCtl'), _dec(_class2 = (_class3 = class PopDataCtl extends Component {
        onLoad() {
          log(`PopDataCtl.onLoad()`);

          if (!gPopDataCtl) {
            gPopDataCtl = exports('gPopDataCtl', this); // this.node.parent = gApp.node;

            this.loadData();
            this.bindVM();
          }
        }

        bindVM() {
          VM.add(data, vmTag, true); // user for ViewModel components

          VM.bindPath(vmTag, (n, o, path) => {
            this.scheduleOnce(() => {
              this.saveData();
            });
          }, this);
        }

        loadData() {
          const keyPrev = keyV1;
          let strPrevData = localStorage.getItem(keyPrev);

          if (strPrevData && strPrevData.length > 0) {
            log(`Loading previous data of ${keyPrev}, ${strPrevData}`);
            gAppUtils.loadObject(keyPrev, data);
            data.status = PopStatus.init;

            if (data.curStage > 0) {
              data.curScore = this.getTargetScore(data.curStage - 1);
              data.basicScore = data.curScore;
              this.saveData();
            }

            localStorage.removeItem(keyPrev);
            return;
          }

          gAppUtils.loadObject(key, data);
        }

        saveData() {
          gAppUtils.saveObject(key, data);
        }

        prepare() {
          switch (data.status) {
            case PopStatus.retry:
              data.curScore = data.basicScore; // data.status = PopStatus.init;

              break;

            case PopStatus.passed:
              data.curStage += 1;
              data.bestStage = Math.max(data.curStage, data.bestStage);
              data.status = PopStatus.init;
              break;

            case PopStatus.failed:
              data.curStage = Math.max(0, data.curStage - 1);
              data.curScore = data.curStage > 0 ? this.getTargetScore(data.curStage - 1) : 0;
              data.status = PopStatus.init;
              break;
          }

          if (PopStatus.init == data.status || PopStatus.retry == data.status) {
            if (PopStatus.init == data.status) {
              data.basicScore = data.curScore;
              data.targetScore = this.getTargetScore(data.curStage);
            }

            data.arrGems = this.generateGems();
            data.status = PopStatus.ready;
            data.magicQuota = this.getMagicMaxInCurrentStage(data.curStage);
          } // for (let i = 0; i < 100; i++) {
          //     let target = this.getTargetScore(i);
          //     log(`level:${i+1}:${target}`);
          // }


          console.log("DataPop:", JSON.stringify(data));
        }

        generateGems(typeCount) {
          let arrTypes = [1, 2, 3, 4, 5];
          let percentage = 0.01; // if (randomRangeInt(0, 100) < 90) {
          //     arrTypes.splice(Math.floor(Math.random() * arrTypes.length), 1);
          // }
          // let preTarget = this.getTargetScore(data.curStage-1);

          let delta = data.targetScore - data.curScore;

          if (data.curStage > 0) {
            if (delta >= 5000) {
              percentage = 100;
            } else if (delta >= 4000) {
              percentage = 80;
            } else if (delta >= 3000) {
              percentage = 50;
            } else {
              percentage = 20;
            }

            if (randomRangeInt(0, 100) < percentage) {
              arrTypes.splice(Math.floor(Math.random() * arrTypes.length), 1)[0];
            }
          }

          let arrGems = [];

          for (let index = 0; index < 100; index++) {
            arrGems[index] = arrTypes[Math.floor(Math.random() * arrTypes.length)];
          } // if(typeExcluded >= 1 && randomRangeInt(0,100) < 95){
          //     let arrNums = [];
          //     for (let i = 0; i < arrGems.length; i++) { arrNums[i] = i; }
          //     let typeExcludedCount = randomRangeInt(2, 10);
          //     for (let i = 0; i < typeExcludedCount; i++) {
          //         let j = arrNums.splice(Math.floor(Math.random() * arrNums.length), 1)[0];
          //         arrGems[j] = typeExcluded;
          //     }
          // }


          return arrGems;
        }

        generateGems_org(typeCount) {
          let arrTypes = [1, 2, 3, 4, 5]; // let arrTypes:number[] = [1,2,3];
          // if(typeCount > 0){
          //     if(typeCount <= 4){ arrTypes.splice(Math.floor(Math.random() * arrTypes.length), 1); }
          //     if(typeCount <= 3){ arrTypes.splice(Math.floor(Math.random() * arrTypes.length), 1); }
          // }else if(data.curStage < targetInfos.length){
          //     let gemTypeCount = targetInfos[data.curStage].gemTypeCount;
          //     if(gemTypeCount <= 4){ arrTypes.splice(Math.floor(Math.random() * arrTypes.length), 1); }
          //     if(gemTypeCount <= 3){ arrTypes.splice(Math.floor(Math.random() * arrTypes.length), 1); }
          // }else{

          let percentage = 0.01;

          if (data.targetScore - data.curScore <= 1000) {
            percentage = 10;
          } else if (data.targetScore - data.curScore <= 1500) {
            percentage = 20;
          } else if (data.targetScore - data.curScore <= 2000) {
            percentage = 50;
          } else if (data.targetScore - data.curScore <= 3000) {
            percentage = 60;
          } else if (data.targetScore - data.curScore <= 4000) {
            percentage = 80;
          } else if (data.targetScore - data.curScore <= 5000) {
            percentage = 100;
          }

          if (gAppData.launchCount < 3 && data.curStage == 0) {
            percentage = 100;
          } // else if (data.curStage < 9) { percentage = 100; }


          if (data.consecutiveFails >= 5) {
            percentage += data.consecutiveFails;
          }

          if (randomRangeInt(0, 100) < percentage) {
            arrTypes.splice(Math.floor(Math.random() * arrTypes.length), 1);
          } // let percentage2 = 5;
          // percentage2 = data.consecutiveFails >= 5 ? 30+data.consecutiveFails: percentage2;
          // if (randomRangeInt(0, 100) < percentage2) {
          //     arrTypes.splice(Math.floor(Math.random() * arrTypes.length), 1);
          // }
          // }


          let arrGems = [];

          for (let index = 0; index < 100; index++) {
            arrGems[index] = arrTypes[Math.floor(Math.random() * arrTypes.length)];
          }

          return arrGems;
        }

        resetData() {
          let dataInit = new PopData();
          gAppUtils.saveObject(key, dataInit);
          this.loadData();
        }

        addScore(delta) {
          data.curScore += delta;
        }

        setStatus(status) {
          data.status = status;
        }

        getTargetScore(level) {
          let i = level;
          let target = 0; // let targets:number[] = [1000,3000,6000,10000,15000,21000,28000,36000,45000,55000];
          // let arr = [3000,4000,5000,6000,7000,8000,9000,10000,10000,10000];

          let targets = [1000, 3000, 6000, 9000, 13000, 16000, 20000, 23000, 27000, 32000];
          let arr = [3000, 4000, 5000, 3000, 4000, 5000, 4000, 5000, 5000, 5000];
          let sum = 0;
          arr.forEach(e => {
            sum += e;
          });

          if (i < targets.length) {
            target = targets[i];
          } else {
            let basic = targets[targets.length - 1] + Math.floor((i - targets.length) / targets.length) * sum;
            let mod = i % arr.length;

            for (let j = 0; j < mod + 1; j++) {
              basic += arr[j];
            }

            target = basic;
          } // target = i<targets.length? (targets[i]):(targets[targets.length-1] + (i-(targets.length-1))*5000);


          return target;
        } // getTargetScore_org(level:number){
        //     let i = level;
        //     let target = 0;
        //     let targets:number[] = [1000,3000,6000,8000,10000,13000,15000,17000,20000,24000];
        //     target = i<targets.length? (targets[i]):(targets[targets.length-1] + (i-(targets.length-1))*4000);
        //     return target;
        // }


        getTargetScore2(level) {
          let i = level;
          let target = 0;
          let targets = [1000, 3000, 6000, 8000, 10000, 13000, 15000, 17000, 20000, 24000];

          if (i < targets.length) {
            target = targets[i];
          } else {
            let scale = Math.floor(data.curScore / 1000);
            let min = data.curScore < 20 ? 2 : 3;
            let score = scale * 1000 + randomRangeInt(min, 6) * 1000;
            target = score;
          } // target = i<targets.length? (targets[i]):(targets[targets.length-1] + (i-(targets.length-1))*4000);


          return target;
        }

        getTargetScore_org(level) {
          let i = level; //data.curStage;

          let target = 0;
          let targets = [1000, 3000, 6000, 8000, 10000, 13000, 15000, 17000, 20000, 24000];
          target = i < targets.length ? targets[i] : targets[targets.length - 1] + (i - (targets.length - 1)) * 4000;
          return target;
        }

        getTargetScore2_(level) {
          let targets = [];
          let target = 0;
          let index = level; // for (let j = 15; j < 100; j++) {
          //     index = j;

          for (let i = 0; i < targetInfos.length; i++) {
            const e = targetInfos[i];
            targets[i] = e.target;

            if (i > 0) {
              targets[i] = e.target + targets[i - 1];
            } // if (j == 15) {
            //     log(`level ${i+1},target:${targets[i]}`);
            // }

          }

          if (index < targets.length) {
            target = targets[index];
            targetInfos[index].gemTypeCount;
          } else {
            let arr = [3000, 3500, 4000, 4500, 5000, 4500, 4000, 3500];
            let delta = index - targets.length;
            let iX = delta % arr.length;
            let total = 0;
            arr.forEach(e => {
              total += e;
            });
            let s = Math.floor((index - (targets.length - 1)) / (arr.length + 0.0001));
            target = targets[targets.length - 1] + s * total;

            for (let i2 = 0; i2 < arr.length; i2++) {
              if (iX >= i2) {
                target += arr[i2];
              }
            } // let s = Math.floor((index - (targets.length - 1)) / 3.000001);
            // target = targets[targets.length - 1] + s * (10000 + 4000 + 4000);
            // let r = index % 3;
            // if (r >= 0) { target += 10000; typeCount=3;}
            // if (r >= 1) { target += 4000; typeCount=4;}
            // if (r >= 2) { target += 4000; typeCount=5;}
            // target = targets[targets.length - 1] + (index - (targets.length - 1)) * 5000;

          } //     log(`level ${j+1},target:${target}`);
          // }
          // target = i<targets.length? (targets[i]):(targets[targets.length-1] + (i-(targets.length-1))*5000);
          // let i = data.curStage;
          // let target = 0;
          // let targets:number[] = [2000,3000,4000,5000,6000,7000,8000,9000,10000];
          // target = i<targets.length? (targets[i]):(targets[targets.length-1] + (i-(targets.length-1))*5000);
          // return {typeCount:typeCount, target:target};


          return target;
        }

        getMagicMaxInCurrentStage(stage) {
          let quota = 5;
          let quotaLevels = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 150, 200, 300, 400, 500, 1000, 10000];

          for (let index = 0; index < quotaLevels.length; index++) {
            const e = quotaLevels[index];

            if (stage >= e) {
              quota += 1;
            } else {
              break;
            }
          }

          return quota;
        }

        getMagicInfo(id) {
          log(`${js.getClassName(this)}.getMagicInfo()`);
          let info = magicInfos.find((v, i, arr) => {
            return v.id == id;
          });

          if (!info) {
            console.warn("getMagicInfo(), can't find magic id:", id);
            return;
          }

          let magicUser = data.magics.find((v, i, arr) => {
            return v.id == id;
          });

          if (!magicUser) {
            warn(`!magicUser`);
          }

          info.count = magicUser.count;
          return info;
        }

        getMagicCount(id) {
          let result = 0;
          let dataMagicInfo = data.magics.find((v, i, arr) => {
            return v.id == id;
          });

          if (dataMagicInfo) {
            result = dataMagicInfo.count;
          }

          return result;
        }

        useMagic(magicId) {
          let magicInfo = data.magics.find((v, i, arr) => {
            return v.id == magicId;
          }); // let magicInfo = this.getMagicInfo(magicId);// gPopData.magics[magicId];

          if (magicInfo && magicInfo.count > 0) {
            magicInfo.count--;
            data.magicQuota--;
            this.node.emit(PopDataCtl.EVT_MAGIC_CHANGED);
            return true;
          }

          return false;
        }

        addMagic(magicId, count) {
          let magicInfo = data.magics.find((v, i, arr) => {
            return v.id == magicId;
          }); // let magicInfo = this.getMagicInfo(magicId);// gPopData.magics[magicId];

          if (magicInfo) {
            magicInfo.count += count;
            this.node.emit(PopDataCtl.EVT_MAGIC_CHANGED);
            return true;
          }

          return false;
        }

      }, _class3.EVT_MAGIC_CHANGED = "EVT_MAGIC_CHANGED", _class3)) || _class2));
      let gPopDataCtl = exports('gPopDataCtl', null);

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/PopEffect.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Pop.ts', './AppAudioSounds.ts', './App.ts', './gAppConstant.ts'], function (exports) {
  var _applyDecoratedDescriptor, _initializerDefineProperty, cclegacy, Node, Label, Prefab, _decorator, Component, v3, instantiate, ParticleSystem2D, tween, UIOpacity, log, UITransform, easing, find, sys, view, gPopGame, gPopRes, gPopGrid, SND, gAppAudio, LAYER_FG3;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      Node = module.Node;
      Label = module.Label;
      Prefab = module.Prefab;
      _decorator = module._decorator;
      Component = module.Component;
      v3 = module.v3;
      instantiate = module.instantiate;
      ParticleSystem2D = module.ParticleSystem2D;
      tween = module.tween;
      UIOpacity = module.UIOpacity;
      log = module.log;
      UITransform = module.UITransform;
      easing = module.easing;
      find = module.find;
      sys = module.sys;
      view = module.view;
    }, function (module) {
      gPopGame = module.gPopGame;
      gPopRes = module.gPopRes;
      gPopGrid = module.gPopGrid;
    }, function (module) {
      SND = module.SND;
    }, function (module) {
      gAppAudio = module.gAppAudio;
    }, function (module) {
      LAYER_FG3 = module.LAYER_FG3;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9;

      cclegacy._RF.push({}, "76b38yImcJD0KXNWpjHw0Ay", "PopEffect", undefined);

      const {
        ccclass,
        property
      } = _decorator;
      let PopEffect = exports('PopEffect', (_dec = ccclass('PopEffect'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Label), _dec5 = property(Label), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(Node), _dec9 = property(Prefab), _dec10 = property(Prefab), _dec(_class = (_class2 = class PopEffect extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "nodeParticleEraseGem", _descriptor, this);

          _initializerDefineProperty(this, "nodeParticleColorSwitch", _descriptor2, this);

          _initializerDefineProperty(this, "labelSingleScore", _descriptor3, this);

          _initializerDefineProperty(this, "labelSumScore", _descriptor4, this);

          _initializerDefineProperty(this, "nodeGoodJobSamples", _descriptor5, this);

          _initializerDefineProperty(this, "nodeGoodJobContainer", _descriptor6, this);

          _initializerDefineProperty(this, "nodeComboSample", _descriptor7, this); // @property(Node) nodeNewHighScore:Node = null;


          _initializerDefineProperty(this, "prefabNewHighScore", _descriptor8, this);

          _initializerDefineProperty(this, "prefabTargetCleared", _descriptor9, this);
        }

        onLoad() {
          this.nodeGoodJobSamples.active = false;
        }

        start() {}

        playEraseItemEffect(worldPos, itemColor) {
          let posWorld = v3(worldPos);
          let clone = instantiate(this.nodeParticleEraseGem);
          clone.parent = this.node;
          clone.active = true;
          clone.worldPosition = posWorld;
          let particle = clone.getComponent(ParticleSystem2D);

          if (particle) {
            particle.startColor = itemColor;
            particle.endColor = itemColor;
            particle.autoRemoveOnFinish = true;
            particle.resetSystem();
          }
        }

        playItemScoreEffect(worldPos, score) {
          let posWorld = v3(worldPos);
          this.labelSingleScore.string = score.toString();
          let clone = instantiate(this.labelSingleScore.node);
          clone.parent = this.node;
          clone.active = true;
          clone.worldPosition = posWorld;
          let posWorldEnd = gPopGame.labelCurScore.node.worldPosition; // let posWorldEnd = gPopProgressInfo.node.worldPosition;

          tween(clone).by(0.3, {
            worldPosition: v3(0, 10, 0)
          }).to(0.38, {
            worldPosition: posWorldEnd,
            scale: v3(0.5, 0.5, 1)
          }).call(() => {
            gPopGame.addScore(score); // gPopProgressInfo.playBeingHitEffect();

            clone.destroy();
          }).start();
        }

        playSumScoreEffect(worldPos, score) {
          let posWorld = v3(worldPos);
          this.labelSumScore.string = score.toString();
          let clone = instantiate(this.labelSumScore.node);
          clone.parent = this.node;
          clone.active = true;
          posWorld.y += 50;
          clone.setWorldPosition(posWorld);
          let pos = v3(clone.position);
          if (pos.x < -260) pos.x = -260;else if (pos.x > 260) pos.x = 260;
          clone.setPosition(pos);
          tween(clone).set({
            scale: v3(0.001, 0.001)
          }).to(0.2, {
            scale: v3(1.0, 1.0)
          }).by(1.5, {
            position: v3(0, 60, 0)
          }).call(() => {
            tween(clone.getComponent(UIOpacity)).to(0.2, {
              opacity: 0
            }).start();
          }).to(0.3, {
            scale: v3(0.001, 0.001)
          }).removeSelf().start();
        }

        playGoodJobEffect(combo) {
          let arr = [7, 10, 15, 25, 30];

          if (combo >= arr[0]) {
            let i = arr.length - 1;

            for (; i >= 0; i--) {
              if (combo >= arr[i]) break;
            }

            let clone = instantiate(this.nodeGoodJobSamples.getChildByName(`GoodJob${i + 1}`));
            clone.parent = this.nodeGoodJobContainer;
            clone.setScale(3, 3);
            tween(clone).to(0.2, {
              scale: v3(1, 1)
            }, {
              easing: 'backIn'
            }).call(() => {
              tween(clone.getComponent(UIOpacity)).to(0.05, {
                opacity: 0
              }).to(0.05, {
                opacity: 255
              }).union().repeat(i * 3).delay(1.5).to(i < 4 ? 0.5 : 2.0, {
                opacity: 0
              }).start();
            }).delay(i < 4 ? 2.6 : 5).removeSelf().start();

            if (SND.GoodJobs.length > 0 && i < SND.GoodJobs.length) {
              gAppAudio.playSound(SND.GoodJobs[i]);

              if (i == 4) {
                this.scheduleOnce(() => {
                  gAppAudio.playSound(SND.GoodJobs[3]);
                }, 0.5);
              }
            }
          }
        }

        playComboEffect(worldPos, combo) {
          const edge = 200;
          let posWorld = v3(worldPos);
          let clone = instantiate(this.nodeComboSample);
          let labelComboValue = clone.getChildByName("LabelComboValue").getComponent(Label);
          labelComboValue.string = "7";
          clone.parent = this.node;
          clone.active = true; // posWorld.y += 50;

          clone.setWorldPosition(posWorld);
          let pos = v3(clone.position);
          if (pos.x < -edge) pos.x = -edge;else if (pos.x > edge) pos.x = edge;
          clone.setPosition(pos);

          for (let i = 0; i < combo; i++) {
            this.scheduleOnce(() => {
              labelComboValue.string = `${i + 1}`;
              tween(labelComboValue.node).to(0.1, {
                scale: v3(1.2, 1.2, 1.2)
              }).to(0.1, {
                scale: v3(1, 1, 1)
              }).start();
            }, i * 0.1);
          }

          tween(clone).set({
            scale: v3(0.001, 0.001)
          }).to(0.2, {
            scale: v3(1.0, 1.0)
          }).delay(combo * 0.1 + 2.0).removeSelf().start();
        }

        playExposeGemEffect(worldPos) {
          let posWorld = v3(worldPos);
          let clone = instantiate(gPopRes.ParticleExposeGem);
          clone.parent = this.node;
          clone.active = true;
          clone.worldPosition = posWorld;
          clone.getComponent(ParticleSystem2D).autoRemoveOnFinish = true;
          gAppAudio.playSound(SND.Bomb);
        }

        playColorSwitcherEffect(worldPos) {
          let posWorld = v3(worldPos);
          let clone = instantiate(this.nodeParticleColorSwitch);
          clone.parent = this.node;
          clone.active = true;
          clone.worldPosition = posWorld;
          clone.getComponent(ParticleSystem2D).autoRemoveOnFinish = true;
          gAppAudio.playSound(SND.ReplaceGem);
        }

        playTargetClearEffect() {
          gPopGame.targetCleared.active = true;
          let posOrg = v3(gPopGame.targetCleared.worldPosition);
          let scaleOrg = v3(gPopGame.targetCleared.scale);
          log(`scaleOrg:${scaleOrg.toString()}`);
          let targetCleared = gPopGame.targetCleared;
          targetCleared.getComponent(UIOpacity).opacity = 0;
          let clone = instantiate(this.prefabTargetCleared);
          clone.getComponent(UIOpacity).opacity = 255;
          clone.parent = this.node;
          let x = gPopGrid.node.worldPosition.x;
          let y = gPopGrid.node.worldPosition.y + (320 - clone.getComponent(UITransform).height * 1.5);
          clone.worldPosition = v3(x, y, this.node.worldPosition.z); // gPopGame.targetCleared.worldPosition;

          clone.setScale(3 * scaleOrg.x, 3 * scaleOrg.y);
          tween(clone).to(0.2, {
            scale: v3(1.5 * scaleOrg.x, 1.5 * scaleOrg.y)
          }, {
            easing: 'backIn'
          }).call(() => {
            tween(clone.getComponent(UIOpacity)).to(0.1, {
              opacity: 0
            }).to(0.1, {
              opacity: 255
            }).union().repeat(3).delay(1.5).start();
          }).delay(1.5).to(0.5, {
            worldPosition: posOrg,
            scale: scaleOrg
          }, {
            easing: easing.circOut
          }).call(() => {
            targetCleared.getComponent(UIOpacity).opacity = 255;
            targetCleared.setScale(scaleOrg);
            clone.destroy();
          }).start();
          gAppAudio.playSound(SND.TargetClear);
        }

        playNewHighScoreEffect() {
          let clone = instantiate(this.prefabNewHighScore);
          let layer3 = find(LAYER_FG3);
          clone.parent = layer3 ? layer3 : this.node;
          let safeArea = sys.getSafeAreaRect();
          let viewSize = view.getVisibleSize();
          let nodeSize = clone.getComponent(UITransform).contentSize;
          let y = viewSize.height / 2 + nodeSize.height / 2;
          clone.position = v3(0, y, 1);
          tween(clone).by(0.3, {
            position: v3(0, -(nodeSize.height + safeArea.y))
          }).delay(2.0).by(0.3, {
            position: v3(0, nodeSize.height + safeArea.y)
          }).call(() => {
            clone.destroy();
            let tw = tween(gPopGame.labelHighScoreValue.node).hide().delay(0.2).show().delay(0.1);
            tw.union().repeat(3).start();
          }).start();
          gAppAudio.playSound(SND.NewHighScore);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "nodeParticleEraseGem", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "nodeParticleColorSwitch", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "labelSingleScore", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "labelSumScore", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "nodeGoodJobSamples", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "nodeGoodJobContainer", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "nodeComboSample", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "prefabNewHighScore", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "prefabTargetCleared", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/PopGame.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './PopData.ts', './Pop.ts', './PopCommon.ts', './App.ts', './AppLayout1.ts', './gAppConstant.ts', './AppCoinInfo.ts'], function (exports) {
  var _applyDecoratedDescriptor, _initializerDefineProperty, cclegacy, Label, Node, _decorator, Component, log, tween, UIOpacity, v3, gPopDataCtl, gPopData, gPopGrid, gPopUI, gPopEffect, PopStatus, gAppNative, gAppDirector, AppLayout1, SCENE_HOME, SCENE_POP, AppCoinInfo;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      Label = module.Label;
      Node = module.Node;
      _decorator = module._decorator;
      Component = module.Component;
      log = module.log;
      tween = module.tween;
      UIOpacity = module.UIOpacity;
      v3 = module.v3;
    }, function (module) {
      gPopDataCtl = module.gPopDataCtl;
      gPopData = module.gPopData;
    }, function (module) {
      gPopGrid = module.gPopGrid;
      gPopUI = module.gPopUI;
      gPopEffect = module.gPopEffect;
    }, function (module) {
      PopStatus = module.PopStatus;
    }, function (module) {
      gAppNative = module.gAppNative;
      gAppDirector = module.gAppDirector;
    }, function (module) {
      AppLayout1 = module.AppLayout1;
    }, function (module) {
      SCENE_HOME = module.SCENE_HOME;
      SCENE_POP = module.SCENE_POP;
    }, function (module) {
      AppCoinInfo = module.AppCoinInfo;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _class3;

      cclegacy._RF.push({}, "33ccdPGSHlEMYjmtcS0ijQ3", "PopGame", undefined);

      const {
        ccclass,
        property
      } = _decorator;
      let PopGame = exports('PopGame', (_dec = ccclass('PopGame'), _dec2 = property(AppLayout1), _dec3 = property(Label), _dec4 = property(Label), _dec5 = property(Label), _dec6 = property(Label), _dec7 = property(Node), _dec8 = property(Node), _dec9 = property(Node), _dec10 = property(Node), _dec11 = property([Node]), _dec12 = property([Node]), _dec(_class = (_class2 = (_class3 = class PopGame extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "layout", _descriptor, this);

          _initializerDefineProperty(this, "labelCurScore", _descriptor2, this);

          _initializerDefineProperty(this, "labelHighScoreValue", _descriptor3, this);

          _initializerDefineProperty(this, "labelStageValue", _descriptor4, this);

          _initializerDefineProperty(this, "labelTargetValue", _descriptor5, this);

          _initializerDefineProperty(this, "targetCleared", _descriptor6, this);

          _initializerDefineProperty(this, "stageBg", _descriptor7, this);

          _initializerDefineProperty(this, "fg", _descriptor8, this);

          _initializerDefineProperty(this, "eventBlocker", _descriptor9, this);

          _initializerDefineProperty(this, "arrUINodes", _descriptor10, this);

          _initializerDefineProperty(this, "arrDecorateNodes", _descriptor11, this);

          this.curScoreForDisplay = 0;
        }

        start() {
          log(`PopGame.start()`);
          gPopDataCtl.prepare();
          this.labelCurScore.string = `${gPopData.curScore}`;
          this.curScoreForDisplay = gPopData.curScore;
          this.labelStageValue.string = `${gPopData.curStage + 1}`; // tween(this.stageBg.getChildByName("Planet").getComponent(UIOpacity)).delay(2.0).to(1.0, {opacity:100}).start();

          AppCoinInfo.instance.node.active = true;
          this.fg.active = true;
          tween(this.fg.getComponent(UIOpacity)).to(2.5, {
            opacity: 0
          }).call(() => {
            this.fg.destroy();
          }).start();
          tween(this.layout.getComponent(UIOpacity)).set({
            opacity: 0
          }).to(0.5, {
            opacity: 255
          }).start(); // find("Canvas/Bg").angle = gPopData.curStage % 2 == 0 ? 0 : 180;

          gPopGrid.node.active = false;

          if (PopStatus.end == gPopData.status) {
            gPopUI.showRetryDialog();
          } else {
            gPopUI.showStageIntro();
          }
        }

        onDestroy() {
          log(`PopGame.destroy()`);
        }

        addScore(deltaScore) {
          if (deltaScore != 0) {
            this.curScoreForDisplay += deltaScore; // parseInt(this.labelCurScore.string);

            this.labelCurScore.string = this.curScoreForDisplay.toString();
            tween(this.labelCurScore.node).to(0.1, {
              scale: v3(1.2, 1.2, 1.2)
            }).to(0.1, {
              scale: v3(1, 1, 1)
            }).start();

            if (!this.targetCleared.active && this.curScoreForDisplay >= gPopData.targetScore) {
              this.targetCleared.active = true;
              gPopEffect.playTargetClearEffect();
            }

            if (PopGame.newHighScoreMade) {
              let curHighScore = parseInt(this.labelHighScoreValue.string);

              if (curHighScore > 0 && this.curScoreForDisplay > curHighScore) {
                gPopEffect.playNewHighScoreEffect();
                gAppNative.reportScore(gPopData.highScore);
                gAppNative.reportMagics(gPopData.bestStage);
                PopGame.newHighScoreMade = false;
              }
            }
          }
        }

        goHome() {
          // gAppViewMgr.loadView(VIEW.HomeView);
          gAppDirector.loadScene(SCENE_HOME);
        }

        reload() {
          // gAppViewMgr.loadView(VIEW.PopView);
          gAppDirector.loadScene(SCENE_POP);
        }

        hideNodes(arr) {
          arr.forEach(e => {
            let op = e.getComponent(UIOpacity);

            if (!op) {
              op = e.addComponent(UIOpacity);
            }

            if (op && op.node.active) {
              let opOrg = op.opacity;
              tween(op).to(0.3, {
                opacity: 0
              }).call(() => {
                op.opacity = opOrg;
                op.node.active = false;
              }).start();
            }
          });
        }

        hideUINodes() {
          this.hideNodes(this.arrUINodes);
        }

        hideDecorateNodes() {
          this.hideNodes(this.arrDecorateNodes);
        }

      }, _class3.newHighScoreMade = false, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "layout", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "labelCurScore", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "labelHighScoreValue", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "labelStageValue", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "labelTargetValue", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "targetCleared", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "stageBg", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "fg", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "eventBlocker", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "arrUINodes", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "arrDecorateNodes", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/PopGameHelpUI.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './App.ts'], function (exports) {
  var _applyDecoratedDescriptor, _initializerDefineProperty, cclegacy, TextAsset, RichText, Node, _decorator, Component, gAppHelper;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      TextAsset = module.TextAsset;
      RichText = module.RichText;
      Node = module.Node;
      _decorator = module._decorator;
      Component = module.Component;
    }, function (module) {
      gAppHelper = module.gAppHelper;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3;

      cclegacy._RF.push({}, "80480uUcINHro7WapgyvvZt", "PopGameHelpUI", undefined);

      const {
        ccclass,
        property
      } = _decorator;
      let PopGameHelpUI = exports('PopGameHelpUI', (_dec = ccclass('PopGameHelpUI'), _dec2 = property(TextAsset), _dec3 = property(RichText), _dec4 = property(Node), _dec(_class = (_class2 = class PopGameHelpUI extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "txtAsset", _descriptor, this);

          _initializerDefineProperty(this, "labelContent", _descriptor2, this);

          _initializerDefineProperty(this, "loading", _descriptor3, this);
        }

        start() {
          gAppHelper.showPanel(this);
          this.scheduleOnce(() => {
            this.labelContent.string = this.txtAsset.text;
            this.loading.active = false;
          }, 0.2);
        }

        onCloseClick() {
          gAppHelper.closePanel(this);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "txtAsset", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "labelContent", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "loading", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/PopGameOverUI.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './App.ts', './AppAudioSounds.ts'], function (exports) {
  var _applyDecoratedDescriptor, _initializerDefineProperty, cclegacy, Node, _decorator, Component, Layout, view, v3, tween, gAppAudio, SND;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      Node = module.Node;
      _decorator = module._decorator;
      Component = module.Component;
      Layout = module.Layout;
      view = module.view;
      v3 = module.v3;
      tween = module.tween;
    }, function (module) {
      gAppAudio = module.gAppAudio;
    }, function (module) {
      SND = module.SND;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor, _class3;

      cclegacy._RF.push({}, "d213fMps+dKHa8huHw2weox", "PopGameOverUI", undefined);

      const {
        ccclass,
        property
      } = _decorator;
      let PopGameOverUI = exports('PopGameOverUI', (_dec = ccclass('PopGameOverUI'), _dec2 = property(Node), _dec(_class = (_class2 = (_class3 = class PopGameOverUI extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "letters", _descriptor, this);

          this.destroyOnClose = false;
        }

        setParams(onComplete) {
          this.node.on(PopGameOverUI.EVT_COMPLETE, () => {
            onComplete && onComplete();
          });
        }

        onLoad() {
          this.letters.getComponent(Layout).enabled = false;
        }

        start() {
          this.show();
        }

        show() {
          let w = view.getVisibleSize().width;
          console.log("view.getVisibleSize():", w);
          let delay = 0;
          let arr = this.letters.children;

          for (let i = 0; i < arr.length; i++) {
            const e = arr[i];
            let i1 = i;
            delay += 0.1;
            let posDst = v3(e.position);
            e.setPosition(posDst.x + w, posDst.y, posDst.z);
            tween(e).delay(delay).to(0.5, {
              position: posDst
            }).delay(1.0).by(0.2, {
              position: v3(0, 100, 0)
            }).to(0.2, {
              position: posDst
            }).call(() => {
              if (i1 == arr.length - 1) {
                this.scheduleOnce(() => {
                  // SceneLoader.loadScene(AppScene.popHome);
                  this.node.emit(PopGameOverUI.EVT_COMPLETE);

                  if (this.destroyOnClose) {
                    this.node.destroy();
                  }
                }, 1.0);
              }
            }).start();
          }

          gAppAudio.playSound(SND.GameOver);
        } // static create(onComplete:Function){
        //     let clone = instantiate(gPopRes.prefabGameOver);
        //     let comp = clone.getComponent(PopGameOver);
        //     // if(comp){
        //     //     // comp.destroyOnClose = true;
        //     //     clone.parent = find("Canvas");
        //     // }
        //     clone.on(PopGameOver.EVT_COMPLETE, ()=>{
        //         onComplete && onComplete();
        //     })
        //     return comp;
        // }


      }, _class3.EVT_COMPLETE = "EVT_COMPLETE", _class3), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "letters", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/PopGem.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Pop.ts', './PopCommon.ts'], function (exports) {
  var _applyDecoratedDescriptor, _initializerDefineProperty, cclegacy, Sprite, _decorator, Component, tween, v3, color, gPop, PopGemType;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      Sprite = module.Sprite;
      _decorator = module._decorator;
      Component = module.Component;
      tween = module.tween;
      v3 = module.v3;
      color = module.color;
    }, function (module) {
      gPop = module.gPop;
    }, function (module) {
      PopGemType = module.PopGemType;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3;

      cclegacy._RF.push({}, "72cbcYmy9FEyrEuM0FFumd2", "PopGem", undefined);

      const {
        ccclass,
        property,
        executeInEditMode
      } = _decorator;
      let PopGem = exports('PopGem', (_dec = ccclass('PopGem'), _dec2 = executeInEditMode(true), _dec3 = property(Sprite), _dec4 = property(Sprite), _dec(_class = _dec2(_class = (_class2 = class PopGem extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "bg", _descriptor, this);

          _initializerDefineProperty(this, "fg", _descriptor2, this);

          _initializerDefineProperty(this, "type", _descriptor3, this);

          this._tweenSelectEffect = null;
          this._tweenHighlightedEffect = null;
        }

        start() {}

        updateType() {
          if (this.type >= 0) {
            this.bg.spriteFrame = gPop.res.gemBgs[this.type];
            this.fg.spriteFrame = gPop.res.gemFgs[this.type];
          }

          this.node.active = this.isEmpty() ? false : true;
        }

        isEmpty() {
          return this.type == PopGemType.Empty;
        }

        setEmpty() {
          this.type = PopGemType.Empty;
        }

        blink() {
          let tw = tween(this.node).hide().delay(0.2).show().delay(0.1);
          tw.union().repeat(3).start();
        }

        setEditing(isEditing) {
          let scl = isEditing ? v3(0.9, 0.9, 1) : v3(1, 1, 1);
          tween(this.bg.node).to(0.1, {
            scale: scl
          }).start(); // let cl = color(this.bg.color);

          let cl = isEditing ? color(180, 180, 180, 255) : color(255, 255, 255, 255);
          this.bg.color = cl;
          this.fg.color = cl;
        }

        setHighlighted(isHighlighted) {
          this.bg.node.scale = isHighlighted ? v3(1, 1, 1) : v3(0.9, 0.9, 1);
          this.bg.color = isHighlighted ? color(255, 255, 255, 255) : color(180, 180, 180, 255);
          this.fg.color = isHighlighted ? color(255, 255, 255, 255) : color(180, 180, 180, 255);

          if (isHighlighted) {
            if (this._tweenHighlightedEffect) {
              this._tweenHighlightedEffect.stop();

              this._tweenHighlightedEffect = null;
            }

            this._tweenHighlightedEffect = tween(this.fg.node).to(0.3, {
              scale: v3(1.2, 1.2, 1.0)
            }).to(0.3, {
              scale: v3(1.0, 1.0, 1.0)
            }).union().repeatForever().start();
          } else {
            if (this._tweenHighlightedEffect) {
              this._tweenHighlightedEffect.stop();

              this._tweenHighlightedEffect = null;
            }

            this.fg.node.scale = v3(1.0, 1.0, 1.0);
          }
        }

        move(deltaX, deltaY) {
          let duration = 0.3;
          let nodeTarget = this.node;
          let pos = v3(nodeTarget.position);
          let prevPos = v3(pos);
          let dX = 0;
          let dY = 0;
          tween(pos).by(duration, {
            x: deltaX,
            y: deltaY
          }, {
            easing: 'backIn',
            onUpdate: (target, ratio) => {
              if (!nodeTarget || !nodeTarget.position) {
                return;
              }

              dX += nodeTarget.position.x - prevPos.x;
              dY += nodeTarget.position.y - prevPos.y;
              nodeTarget.setPosition(target.x + dX, target.y + dY, pos.z);
              prevPos = v3(nodeTarget.position);
            }
          }).start();
        }

        playSelectEffect() {
          // this.bg.node.stopAllActions();
          // this.bg.node.opacity = 128;
          // this.fg.node.runAction(cc.repeatForever(cc.rotateBy(1.2, 360)));
          let cl = color(this.bg.color);
          cl.a = 100;
          this.bg.color = cl;
          this._tweenSelectEffect = tween(this.fg.node).to(1.0, {
            angle: 360
          }).set({
            angle: 0
          }).union().repeatForever().start();
        }

        stopSelectEffect() {
          // this.bg.node.opacity = 255;
          // this.fg.node.rotation = 0;
          // this.fg.node.stopAllActions();
          if (this._tweenSelectEffect) {
            this._tweenSelectEffect.stop();

            this._tweenSelectEffect = null;
          }

          let cl = color(this.bg.color);
          cl.a = 255;
          this.bg.color = cl;
          tween(this.fg.node).set({
            angle: 0
          }).start();
        }

        onClick() {
          return;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "bg", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "fg", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "type", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return PopGemType.Empty;
        }
      })), _class2)) || _class) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/PopGlobal.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "824a0DTsh9Fvqp9l82eoVh3", "PopGlobal", undefined);

      class PopGlobal {}

      exports('PopGlobal', PopGlobal);
      PopGlobal.newBestScoreShowed = false;
      PopGlobal.adClickTime = 0;

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/PopGrid.ts", ['cc', './PopGem.ts', './TapAndHold.ts', './Pop.ts', './PopData.ts', './PopCommon.ts', './App.ts', './AppAudioSounds.ts', './PopGame.ts'], function (exports) {
  var cclegacy, _decorator, Component, v3, Node, log, color, view, tween, randomRangeInt, js, easing, PopGem, TapAndHold, gPop, gPopMagic, gPopEffect, gPopGame, gPopUI, gPopData, PopMagicId, PopGemColors, PopStatus, PopGemType, gAppAudio, SND, PopGame;

  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
      v3 = module.v3;
      Node = module.Node;
      log = module.log;
      color = module.color;
      view = module.view;
      tween = module.tween;
      randomRangeInt = module.randomRangeInt;
      js = module.js;
      easing = module.easing;
    }, function (module) {
      PopGem = module.PopGem;
    }, function (module) {
      TapAndHold = module.default;
    }, function (module) {
      gPop = module.gPop;
      gPopMagic = module.gPopMagic;
      gPopEffect = module.gPopEffect;
      gPopGame = module.gPopGame;
      gPopUI = module.gPopUI;
    }, function (module) {
      gPopData = module.gPopData;
    }, function (module) {
      PopMagicId = module.PopMagicId;
      PopGemColors = module.PopGemColors;
      PopStatus = module.PopStatus;
      PopGemType = module.PopGemType;
    }, function (module) {
      gAppAudio = module.gAppAudio;
    }, function (module) {
      SND = module.SND;
    }, function (module) {
      PopGame = module.PopGame;
    }],
    execute: function () {
      var _dec, _class, _class2;

      cclegacy._RF.push({}, "400de14GE5PR4BrXkgR/lEl", "PopGrid", undefined);

      const {
        ccclass,
        property
      } = _decorator;
      const ROWS = 10;
      const COLS = 10;
      let PopGrid = exports('PopGrid', (_dec = ccclass('PopGrid'), _dec(_class = (_class2 = class PopGrid extends Component {
        constructor(...args) {
          super(...args);
          this.arrPositions = [];
          this.arrItems = [];
          this.arrSelectedItems = [];
          this.isEditing = false;
          this.interactable = false;
        }

        start() {
          for (let i = 0; i < this.node.children.length; i++) {
            this.arrPositions[i] = v3(this.node.children[i].position);
            let gem = this.node.children[i].getComponent(PopGem); // gem.type = arrTypes[randomRangeInt(0, arrTypes.length)];// randomRangeInt(PopGemType.Min, PopGemType.Max/* + 1*/);

            gem.node.active = false;
            this.arrItems[i] = gem;
          }

          this.scheduleOnce(() => {
            this.fromData(gPopData.arrGems);
            let delay = this.showUp();
            this.scheduleOnce(() => {
              if (!this.isConnectable()) {
                this.handleGameEnd(delay);
              } else {
                this.arrItems.forEach(e => {
                  e.node.on(Node.EventType.TOUCH_START, this.onItemTouchStart, this);
                  e.node.on(Node.EventType.TOUCH_END, this.onItemTouchEnd, this);
                  e.node.on(TapAndHold.EVT_TAP_AND_HOLD, this.onItemTapAndHold, this);
                });
                this.interactable = true;
              }
            }, delay);
          });
        }

        onItemTouchStart(evt) {
          console.log("onItemTouchStart()");

          if (gPopData.doubleClickModeOn || gPop.helper.isMagicToolBarAvailable()) {
            this.onItemTouch(evt);
          }
        }

        onItemTapAndHold(item, pos) {
          log(`PopGrid.onItemTapAndHold()`);

          if (this.isEditing) {
            return;
          }

          if (item.active) {
            this.deselect();
            gPopMagic.selectMagic(PopMagicId.color);
            gPopMagic.onMagicModeSelectItem(item.getComponent(PopGem));
          }
        }

        onItemTouchEnd(evt) {
          console.log("onItemTouchEnd()");

          if (evt.propagationImmediateStopped) {
            console.log("evt.evt.propagationImmediateStopped");
            return;
          }

          if (gPopData.doubleClickModeOn || gPop.helper.isMagicToolBarAvailable()) {
            return;
          }

          this.onItemTouch(evt);
        }

        onItemTouch(evt) {
          let target = evt.target;
          let item = target.getComponent(PopGem);

          if (item && !item.isEmpty()) {
            if (this.isEditing) {
              this.node.emit(PopGrid.EVT_ITEM_SELECT, item);
            } else {
              this.touchItem(item);
            }
          }
        }

        selectItems(items) {
          // gAppAudio.playSound(SND.SelectGem);
          this.arrSelectedItems = items;
          this.arrSelectedItems.forEach(e => {
            e.playSelectEffect();
          }); // this.node.emit(GameGrid.SELECT_GEMS, gems);
        }

        deselect() {
          this.arrSelectedItems.forEach(e => {
            e.stopSelectEffect();
          });
          this.arrSelectedItems = [];
        }

        touchItem(item) {
          // if(!this.ready || PopStatus.playing != gDataPop.status)
          //     return;
          let index = this.arrItems.indexOf(item);

          if (index >= 0 && index < this.arrItems.length) {
            if (this.arrSelectedItems.length > 0 && this.arrSelectedItems.indexOf(item) >= 0) {
              let arrSelectedCopy = this.arrSelectedItems.slice(0);
              this.eraseItems(arrSelectedCopy);
              this.arrSelectedItems = [];
            } else {
              this.deselect();
              let arrFound = [];
              this.findConnectableAtIndex(index, arrFound);

              if (arrFound.length >= 2) {
                this.selectItems(arrFound);

                if (!gPopData.doubleClickModeOn) {
                  this.touchItem(item);
                }
              }
            }
          }
        }

        eraseItems(arrItems) {
          let singleScore = arrItems.length * 5;
          let sumScore = arrItems.length * singleScore;
          let delay = 0;

          for (let i = 0; i < arrItems.length; i++) {
            const e = arrItems[i];
            let i1 = i;
            let gemColor = color(PopGemColors[e.type]);
            e.setEmpty();
            this.scheduleOnce(() => {
              e.updateType();
              gPop.effect.playEraseItemEffect(e.node.worldPosition, gemColor);

              if (SND.Combos.length > 0) {
                // gAppAudio.playSound(SND.PopStar);//SND.Combos[i1%SND.Combos.length]);
                gAppAudio.playSound(SND.Combos[i1 % SND.Combos.length]);
              }

              gPop.effect.playItemScoreEffect(e.node.worldPosition, singleScore);
            }, delay);

            if (i == arrItems.length - 1) {
              this.scheduleOnce(() => {
                gPopEffect.playSumScoreEffect(e.node.worldPosition, sumScore);
                gPopEffect.playGoodJobEffect(arrItems.length);
              }, delay);
            }

            if (arrItems.length >= 7 && i == 0) {
              this.scheduleOnce(() => {
                gPopEffect.playComboEffect(arrItems[0].node.worldPosition, arrItems.length);
              }, delay);
            }

            delay += 0.1;
          }

          delay += this.arrangeItems(delay);
          let data = gPopData;
          data.curScore += sumScore;
          data.arrGems = this.toData();

          if (!this.isConnectable()) {
            this.handleGameEnd(delay);
          }
        }

        replaceItem(itemTarget, newType) {
          if (itemTarget) {
            itemTarget.type = newType;
            gPopData.arrGems = this.toData();
            let posDst = v3(itemTarget.node.worldPosition);
            gPopEffect.playColorSwitcherEffect(posDst);
            this.scheduleOnce(() => {
              itemTarget.updateType();
            }, 0.38);
          }
        }

        index2Pos(idx) {
          return this.arrPositions[idx];
        }

        fromData(arr) {
          if (arr.length != this.arrItems.length) {
            console.warn("arr.length != this.arrItems.length");
            return;
          }

          for (let i = 0; i < this.arrItems.length; i++) {
            const e = this.arrItems[i];
            e.type = arr[i]; // e.updateType();
          }
        }

        toData() {
          let arr = [];

          for (let i = 0; i < this.arrItems.length; i++) {
            arr[i] = this.arrItems[i].type;
          }

          return arr;
        }

        showUp() {
          let duration = 0;
          this.arrItems.forEach(e => {
            e.node.active = true;
            e.updateType();
          });
          {
            //PopStatus.ready == gDataPop.status){
            let delayMax = 0;
            let delay = 0;

            for (let i = 0; i < this.arrItems.length; i++) {
              const e = this.arrItems[i];
              let r = Math.floor(i / COLS);
              let c = i % COLS;
              let posOrg = v3(e.node.position);
              let posStart = v3(posOrg);
              posStart.y += view.getVisibleSize().height;
              delay = (ROWS - r - 1) * 0.1 + 0.5 * Math.random();
              delayMax = Math.max(delay, delayMax);
              let func = r == c && e.type > 0 ? () => {
                gAppAudio.playSound(SND.MoveDown);
              } : () => {};
              e.node.setPosition(posStart);
              tween(e.node).delay(delay).to(0.5, {
                position: posOrg
              }, {
                easing: 'sineIn'
              }).call(func).start();
            }

            duration = delayMax + 0.5;
          }
          return duration;
        }

        findConnectableAtIndex(index, arrFound) {
          let r = Math.floor(index / COLS);
          let c = index % COLS;
          let arrItems = this.arrItems;

          if (index >= 0 && index < arrItems.length) {
            let item = arrItems[index];

            if (item && item.type > 0) {
              arrFound.length == 0 && arrFound.push(item);
              let idxUp = r - 1 < 0 ? -1 : (r - 1) * COLS + c;
              let idxDown = r + 1 >= ROWS ? -1 : (r + 1) * COLS + c;
              let idxLeft = c - 1 < 0 ? -1 : r * COLS + (c - 1);
              let idxRight = c + 1 >= COLS ? -1 : r * COLS + c + 1;
              let directs = [idxUp, idxDown, idxLeft, idxRight];

              for (let idx = 0; idx < directs.length; idx++) {
                let index1 = directs[idx];

                if (index1 >= 0 && index1 < arrItems.length) {
                  let item1 = arrItems[index1];

                  if (item.type == item1.type && arrFound.indexOf(item1) < 0) {
                    arrFound.push(item1);
                    this.findConnectableAtIndex(index1, arrFound);
                  }
                }
              }
            }
          }
        }

        isConnectable() {
          let bResult = false;

          for (let index = this.arrItems.length - 1; index >= 0; index--) {
            let arrFound = [];
            this.findConnectableAtIndex(index, arrFound);

            if (arrFound.length > 1) {
              bResult = true;
              break;
            }
          }

          return bResult;
        }

        moveItem(item, idxFrom, idxTo) {
          let posFrom = this.index2Pos(idxFrom);
          let posTo = this.index2Pos(idxTo);
          item.move(posTo.x - posFrom.x, posTo.y - posFrom.y);
        }

        arrangeItems(delay) {
          let duration = 0;
          let arrItems = this.arrItems;
          let bMoveDown = false;

          for (let c = 0; c < ROWS; c++) {
            for (let r = ROWS - 1; r >= 0; r--) {
              let index = r * COLS + c;
              let item = arrItems[index];

              if (item && item.type == 0) {
                for (let r1 = r - 1; r1 >= 0; r1--) {
                  let index1 = r1 * COLS + c;
                  let item1 = arrItems[index1];

                  if (item1 && item1.type > 0) {
                    arrItems[index1] = item;
                    arrItems[index] = item1;
                    this.scheduleOnce(() => {
                      item.node.active = false;
                      this.moveItem(item1, index1, index);
                    }, delay + duration);
                    bMoveDown = true;
                    break;
                  }
                }
              }
            }
          }

          duration = bMoveDown ? duration + 0.3 : duration;

          if (bMoveDown) {
            this.scheduleOnce(() => {
              gAppAudio.playSound(SND.MoveDown);
            }, delay + duration);
          }

          let bMoveLeft = false;

          for (let c = 0; c < COLS; c++) {
            let bottomIndex = (ROWS - 1) * COLS + c;
            let bottomItem = arrItems[bottomIndex];

            if (bottomItem && bottomItem.type == 0) {
              for (let c1 = c + 1; c1 < COLS; c1++) {
                let bottomIndex1 = (ROWS - 1) * COLS + c1;
                let bottomItem1 = arrItems[bottomIndex1];

                if (bottomItem1 && bottomItem1.type > 0) {
                  for (let r = ROWS - 1; r >= 0; r--) {
                    let index = r * COLS + c;
                    let index1 = r * COLS + c1;
                    let item = arrItems[index];
                    let item1 = arrItems[index1];
                    arrItems[index1] = item;
                    arrItems[index] = item1;
                    this.scheduleOnce(() => {
                      item.node.active = false;
                      this.moveItem(item1, index1, index);
                    }, delay + duration);
                    bMoveLeft = true;
                  }

                  break;
                }
              }
            }
          }

          duration = bMoveLeft ? duration + 0.3 : duration;

          if (bMoveLeft) {
            this.scheduleOnce(() => {
              gAppAudio.playSound(SND.MoveDown2);
            }, delay + duration);
          }

          return duration;
        }

        calcBonus() {
          let bonus = 2000;
          let remain = this.getRemainingGems().length;
          bonus = bonus - remain * 200;
          bonus = bonus >= 0 ? bonus : 0;
          return bonus;
        }

        handleGameEnd(delay) {
          gPopGame.hideUINodes();
          delay += this.blink(delay);
          delay += this.showResult(delay); // gAppUI.scheduleOnce(()=>{gAppUI.hideBlocker();}, delay);

          let data = gPopData;
          data.curScore += this.calcBonus();

          if (data.curScore >= data.targetScore) {
            data.status = PopStatus.passed;
            data.consecutiveWins++;
            data.consecutiveFails = 0;
          } else {
            data.status = PopStatus.end;
            data.consecutiveWins = 0;
            data.consecutiveFails++;

            if (data.curScore > data.highScore) {
              data.highScore = data.curScore;
              PopGame.newHighScoreMade = true;
            }
          } // gAppUserStats.reportUserStats();

        }

        blink(delay) {
          let duration = 1.0;
          this.scheduleOnce(() => {
            for (let i = 0; i < this.arrItems.length; i++) {
              const e = this.arrItems[i];
              e.blink();
            }

            gAppAudio.playSound(SND.LevelEnd);
          }, delay);
          return duration;
        }

        showResult(delay) {
          let duration = 1.0;
          this.scheduleOnce(() => {
            gPopUI.showResult();
          }, delay);
          return duration;
        }

        eraseRemainingItems(delay, callback) {
          let duration = 0;
          let arr = this.getRemainingGems();

          for (let i = 0; i < arr.length; i++) {
            const e = arr[i];
            let i1 = i;
            let gemColor = color(PopGemColors[e.type]);
            e.setEmpty();
            this.scheduleOnce(() => {
              e.updateType();
              gPopEffect.playEraseItemEffect(e.node.worldPosition, gemColor);
              if (i1 < 10) gAppAudio.playSound(SND.CalcRemaining);else if (i == 10) gAppAudio.playSound(SND.CalcRemainingEnd);
              callback(e, arr);
            }, delay + duration);
            duration = i < 9 ? duration + 0.2 : duration;
            duration = i == 9 ? duration + 0.8 : duration;
          }

          return duration;
        }

        getRemainingGems() {
          let arr = [];

          for (let i = 0; i < this.arrItems.length; i++) {
            const e = this.arrItems[i];

            if (e.type != PopGemType.Empty) {
              arr.push(e);
            }
          }

          return arr;
        }

        autoErase() {
          if (!this.interactable) {
            return;
          }

          let randIdx = randomRangeInt(0, this.arrItems.length);
          let i = randIdx;

          do {
            let arrFound = [];
            this.findConnectableAtIndex(i, arrFound);

            if (arrFound.length > 1) {
              this.eraseItems(arrFound);
              this.scheduleOnce(() => {
                this.autoErase();
              }, 0.1 * arrFound.length);
              break;
            }

            i = (i + 1) % this.arrItems.length;
          } while (i != randIdx);
        }

        exposeGem(index) {
          let arrItems = this.arrItems; // let index = this.arrItems.indexOf(itemTarget);

          let item = arrItems[index];
          let colCount = COLS;
          let rowCount = ROWS;
          let r = Math.floor(index / colCount);
          let c = index % colCount;
          let gemUpIndex = r - 1 < 0 ? -1 : (r - 1) * colCount + c;
          let gemDownIndex = r + 1 >= rowCount ? -1 : (r + 1) * colCount + c;
          let gemLeftIndex = c - 1 < 0 ? -1 : r * colCount + (c - 1);
          let gemRightIndex = c + 1 >= colCount ? -1 : r * colCount + c + 1;
          let directs = [gemUpIndex, gemDownIndex, gemLeftIndex, gemRightIndex];
          let arrRefItems = [item];

          for (let idx = 0; idx < directs.length; idx++) {
            let index1 = directs[idx];

            if (index1 >= 0 && index1 < arrItems.length) {
              let item1 = arrItems[index1];
              if (item1.type != PopGemType.Empty) arrRefItems.push(item1);
            }
          }

          gPopEffect.playExposeGemEffect(item.node.worldPosition);
          this.eraseItems(arrRefItems);
        }

        setEditing(isEditing) {
          this.isEditing = isEditing;

          for (let i = 0; i < this.arrItems.length; i++) {
            const e = this.arrItems[i];
            e.setEditing(isEditing);
          }
        }

        shuffle() {
          console.log(`${js.getClassName(this)} shuffle()`); // export type TweenEasing = "linear" | "smooth" | "fade" | "constant" | "quadIn" | "quadOut" | "quadInOut" | "quadOutIn" | "cubicIn" | "cubicOut" | "cubicInOut" | "cubicOutIn" | "quartIn" | "quartOut" | "quartInOut" | "quartOutIn" | "quintIn" | "quintOut" | "quintInOut" | "quintOutIn" | "sineIn" | "sineOut" | "sineInOut" | "sineOutIn" | "expoIn" | "expoOut" | "expoInOut" | "expoOutIn" | "circIn" | "circOut" | "circInOut" | "circOutIn" | "elasticIn" | "elasticOut" | "elasticInOut" | "elasticOutIn" | "backIn" | "backOut" | "backInOut" | "backOutIn" | "bounceIn" | "bounceOut" | "bounceInOut" | "bounceOutIn";
          // let arrEases = [easing.linear , easing.smooth , easing.fade , easing.constant , easing.quadIn , easing.quadOut , easing.quadInOut , easing.quadOutIn , easing.cubicIn , easing.cubicOut , easing.cubicInOut , easing.cubicOutIn , easing.quartIn , easing.quartOut , easing.quartInOut , easing.quartOutIn , easing.quintIn , easing.quintOut , easing.quintInOut , easing.quintOutIn , easing.sineIn , easing.sineOut , easing.sineInOut , easing.sineOutIn , easing.expoIn , easing.expoOut , easing.expoInOut , easing.expoOutIn , easing.circIn , easing.circOut , easing.circInOut , easing.circOutIn , easing.elasticIn , easing.elasticOut , easing.elasticInOut , easing.elasticOutIn , easing.backIn , easing.backOut , easing.backInOut , easing.backOutIn , easing.bounceIn , easing.bounceOut , easing.bounceInOut , easing.bounceOutIn]; 

          let easeType = easing.smooth; // arrEases[PopGrid.iRandIndex++%arrEases.length];

          log(`easing:${easeType.toString()}`);
          let ret = false;
          let arrItems = this.arrItems;
          let arrJ = this.getRemainingGems();

          while (arrJ.length >= 2) {
            let j1 = randomRangeInt(0, arrJ.length);
            let item1 = arrJ.splice(j1, 1)[0];
            let j2 = randomRangeInt(0, arrJ.length);
            let item2 = arrJ.splice(j2, 1)[0];
            let i1 = arrItems.indexOf(item1);
            let i2 = arrItems.indexOf(item2);
            arrItems[i1] = item2;
            arrItems[i2] = item1;
            let pos1 = this.index2Pos(i1);
            let pos2 = this.index2Pos(i2); // let randX = randomRangeInt(-100,100);
            // let randY = randomRangeInt(-100,100);

            tween(item1.node).to(0.5, {
              position: pos2
            }, {
              easing: easeType
            }).start();
            tween(item2.node).to(0.5, {
              position: pos1
            }, {
              easing: easeType
            }).start();
            if (!ret) ret = true;
          }

          gPopData.arrGems = this.toData();
          gAppAudio.playSound(SND.Shuffle);
          return ret;
        }

      }, _class2.EVT_ITEM_SELECT = "EVT_ITEM_SELECT", _class2.iRandIndex = 0, _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/PopHelper.ts", ['cc'], function (exports) {
  var cclegacy, Component, _decorator;

  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      Component = module.Component;
      _decorator = module._decorator;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "f40bbfLtyRCgqHPnf5PYoW/", "PopHelper", undefined);

      const {
        ccclass,
        property
      } = _decorator;
      let PopHelper = exports('PopHelper', (_dec = ccclass('PopHelper'), _dec(_class = class PopHelper extends Component {
        start() {}

        isMagicToolBarAvailable() {
          return true;
        }

      }) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/PopInterstitialUI.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Pop.ts', './App.ts'], function (exports) {
  var _applyDecoratedDescriptor, _initializerDefineProperty, cclegacy, Node, _decorator, Component, warn, log, js, find, Camera, UIOpacity, tween, v3, ParticleSystem2D, UITransform, easing, game, gPop, gPopGame, gAppAdHelper;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      Node = module.Node;
      _decorator = module._decorator;
      Component = module.Component;
      warn = module.warn;
      log = module.log;
      js = module.js;
      find = module.find;
      Camera = module.Camera;
      UIOpacity = module.UIOpacity;
      tween = module.tween;
      v3 = module.v3;
      ParticleSystem2D = module.ParticleSystem2D;
      UITransform = module.UITransform;
      easing = module.easing;
      game = module.game;
    }, function (module) {
      gPop = module.gPop;
      gPopGame = module.gPopGame;
    }, function (module) {
      gAppAdHelper = module.gAppAdHelper;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _class3;

      cclegacy._RF.push({}, "61b3alC5KJFZr4FMC/fe0MG", "PopInterstitialUI", undefined);

      const {
        ccclass,
        property
      } = _decorator;
      let PopInterstitialUI = exports('PopInterstitialUI', (_dec = ccclass('PopInterstitialUI'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(Node), _dec9 = property(Node), _dec10 = property(Node), _dec(_class = (_class2 = (_class3 = class PopInterstitialUI extends Component {
        constructor(...args) {
          super(...args);
          this.levelDelta = 1; // 1: upgrade, -1:downgrade

          this.bFinished = false;
          this.orthoHeightOrg = 480;
          this.camera = null;

          _initializerDefineProperty(this, "container", _descriptor, this);

          _initializerDefineProperty(this, "containerBg", _descriptor2, this);

          _initializerDefineProperty(this, "bgUp", _descriptor3, this);

          _initializerDefineProperty(this, "bgDown", _descriptor4, this);

          _initializerDefineProperty(this, "rocket", _descriptor5, this);

          _initializerDefineProperty(this, "prevTarget", _descriptor6, this);

          _initializerDefineProperty(this, "curTarget", _descriptor7, this);

          _initializerDefineProperty(this, "nextTarget", _descriptor8, this);

          _initializerDefineProperty(this, "fg", _descriptor9, this);
        }

        onLoad() {
          if (PopInterstitialUI.loadCount > PopInterstitialUI.destroyCount) {
            warn(`PopInterstitialUI.loadCount > PopInterstitialUI.destroyCount, memory may leaks.`);
          }

          PopInterstitialUI.loadCount++;
          log(`${js.getClassName(this)}.onLoad(), loadCount:${PopInterstitialUI.loadCount}`);
        }

        onDestroy() {
          PopInterstitialUI.destroyCount++;
          log(`${js.getClassName(this)}.onDestroy(), destroyCount:${PopInterstitialUI.destroyCount}`);
        }

        start() {
          this.camera = find("Canvas/Camera").getComponent(Camera);
          this.orthoHeightOrg = this.camera.orthoHeight;

          if (this.levelDelta < 0) {
            let stones = find("Stones", gPop.node);
            stones && (stones.active = false);
          } // gPopGame.labelCurStarNumber.string = `${gPopData.curStage+1}`;
          // tween(gPopGame.labelCurStarNumber.getComponent(UIOpacity)).to(0.1, {opacity:255}).start();
          // gPopGame.labelCurStarNumber.node.parent.getComponent(UIOpacity).opacity = this.levelDelta > 0 ? 255 : 128;


          this.container.getComponent(UIOpacity).opacity = 0;
          tween(this.rocket).set({
            scale: v3(0.1, 0.1, 1)
          }).to(1.0, {
            scale: v3(1, 1, 1)
          }).start();
          tween(this.rocket.getComponent(UIOpacity)).set({
            opacity: 0
          }).to(1.0, {
            opacity: 255
          }).start();
          tween(find("Rocket/Particle", this.rocket).getComponent(ParticleSystem2D)).set({
            emissionRate: 1
          }).to(2.5, {
            emissionRate: 100
          }).start();
          tween(this.curTarget.getComponent(UIOpacity)).set({
            opacity: 0
          }).to(2.0, {
            opacity: 255
          }).start();
          this.scheduleOnce(() => {
            let transContainer = this.node.getComponent(UITransform);
            let transContainerBg = this.containerBg.getComponent(UITransform);
            this.containerBg.children.forEach(e => {
              e.getComponent(UITransform).height = transContainer.height;
            });
            this.scheduleOnce(() => {
              let transFg = this.fg.getComponent(UITransform);
              transFg.height = transContainerBg.height;
              this.show();
            });
          });
        }

        update(deltaTime) {
          if (this.bFinished) {
            return;
          } // if(this.container.active){


          this.camera.node.position = v3(this.rocket.position.x, this.rocket.position.y, this.camera.node.position.z); // }
        }

        show() {
          tween(this.container.getComponent(UIOpacity)).to(0.1, {
            opacity: 255
          }).start();
          tween(gPopGame.layout.getComponent(UIOpacity)).to(0.5, {
            opacity: 0
          }).start();
          let posRocket = v3(this.rocket.position);
          let target = this.levelDelta > 0 ? this.nextTarget : this.prevTarget;
          this.rocket.position = v3(posRocket.x, 0, posRocket.z);
          let rocketrocket = find("Rocket", this.rocket); // this.rocket.getChildByName("Rocket");

          let rocketfire = find("Particle", rocketrocket); // tween(rocketrocket).by(1.0, {position:v3(0, 20, 0)},{easing:easing.smooth}).start();

          tween(this.rocket).delay(0.5).to(1.0, {
            worldPosition: v3(target.worldPosition)
          }, {
            easing: easing.expoInOut
          }).call(() => {
            // this.containerBg.on(Node.EventType.TOUCH_START, ()=>{this.onFinished();}, this);
            tween(target.getComponent(UIOpacity)).delay(1.2).to(0.2, {
              opacity: 0
            }).start();
            tween(rocketrocket).to(1.2, {
              scale: v3(0.5, 0.5, 1)
            }).start();
            tween(rocketfire.getComponent(ParticleSystem2D)).to(1.2, {
              emissionRate: 0
            }).start();
            tween(this.fg.getComponent(UIOpacity)).delay(1.0).to(0.3, {
              opacity: 255
            }).call(() => {}).start();
            tween(this.rocket.getComponent(UIOpacity)).to(1.3, {
              opacity: 0
            }).call(() => {
              this.onFinished();
            }).start();
          }).start();
        }

        onFinished() {
          this.camera.node.position = v3(0, 0, this.camera.node.position.z);
          this.camera.orthoHeight = this.orthoHeightOrg;

          if (!this.bFinished) {
            this.bFinished = true;
            gPopGame.reload();

            if (this.levelDelta != 0 && game.totalTime > 1000 * 2 * 60) {
              gAppAdHelper.showInterstitialAd();
            }
          }
        }

      }, _class3.loadCount = 0, _class3.destroyCount = 0, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "container", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "containerBg", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "bgUp", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "bgDown", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "rocket", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "prevTarget", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "curTarget", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "nextTarget", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "fg", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/PopMagic.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './PopCommon.ts', './Pop.ts', './PopGrid.ts', './PopData.ts', './App.ts', './gAppConstant.ts', './AppResolution.ts'], function (exports) {
  var _applyDecoratedDescriptor, _initializerDefineProperty, cclegacy, Node, _decorator, Component, director, log, js, input, Input, KeyCode, instantiate, Button, tween, v3, easing, PopMagicId, PopGemType, gPopGrid, gPopEffect, PopGrid, gPopDataCtl, gAppResolution, EVT_VIEW_SIZE_CHANGE, AppResolutionPolicy;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      Node = module.Node;
      _decorator = module._decorator;
      Component = module.Component;
      director = module.director;
      log = module.log;
      js = module.js;
      input = module.input;
      Input = module.Input;
      KeyCode = module.KeyCode;
      instantiate = module.instantiate;
      Button = module.Button;
      tween = module.tween;
      v3 = module.v3;
      easing = module.easing;
    }, function (module) {
      PopMagicId = module.PopMagicId;
      PopGemType = module.PopGemType;
    }, function (module) {
      gPopGrid = module.gPopGrid;
      gPopEffect = module.gPopEffect;
    }, function (module) {
      PopGrid = module.PopGrid;
    }, function (module) {
      gPopDataCtl = module.gPopDataCtl;
    }, function (module) {
      gAppResolution = module.gAppResolution;
    }, function (module) {
      EVT_VIEW_SIZE_CHANGE = module.EVT_VIEW_SIZE_CHANGE;
    }, function (module) {
      AppResolutionPolicy = module.AppResolutionPolicy;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;

      cclegacy._RF.push({}, "8b435OtZexET7c1+170Cd6i", "PopMagic", undefined);

      const {
        ccclass,
        property
      } = _decorator;
      let PopMagic = exports('PopMagic', (_dec = ccclass('PopMagic'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec(_class = (_class2 = class PopMagic extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "mask", _descriptor, this);

          _initializerDefineProperty(this, "maskGridFrame", _descriptor2, this);

          _initializerDefineProperty(this, "colorSwitcher", _descriptor3, this);

          _initializerDefineProperty(this, "iconBomb", _descriptor4, this);

          _initializerDefineProperty(this, "iconColor", _descriptor5, this);

          this.colorSwitcherPanel = null;
          this.colorSwitcherPanelColors = null;
          this.curSelectedItem = null;
          this.gridFrameOrg = null;
          this.curMagicId = "";
          this.curMagicIcon = null;
        }

        onLoad() {
          this.colorSwitcherPanel = this.colorSwitcher.getChildByName("Panel");
          this.colorSwitcherPanelColors = this.colorSwitcherPanel.getChildByName("Colors");
          this.mask.active = false;
          this.colorSwitcher.active = false;
          this.gridFrameOrg = gPopGrid.node.parent;
        }

        start() {
          this.mask.on(Node.EventType.TOUCH_START, this.onMaskTouchStart, this);
          director.on(EVT_VIEW_SIZE_CHANGE, (layout, szCanvas, safeArea) => {
            log(`${js.getClassName(this)}.${EVT_VIEW_SIZE_CHANGE}`);

            if (this.mask.active) {
              this.exitEditMode();
            }
          }, this);
          input.on(Input.EventType.KEY_UP, this.onKeyUp, this);
        }

        onKeyUp(event) {
          console.log(`Release ${event.keyCode} key`);

          switch (event.keyCode) {
            case KeyCode.KEY_J:
              this.selectMagic(PopMagicId.color);
              break;

            case KeyCode.KEY_K:
              this.selectMagic(PopMagicId.bomb);
              break;

            case KeyCode.KEY_L:
              this.selectMagic(PopMagicId.shuffle);
              break;
          }
        }

        selectMagic(magicId) {
          if (!gPopGrid.interactable) {
            return;
          }

          if (this.mask.active) {
            this.exitEditMode();
          }

          this.curMagicId = magicId;

          if (magicId == PopMagicId.bomb || magicId == PopMagicId.color) {
            this.enterEditMode();
          } else {
            if (magicId == PopMagicId.shuffle) {
              this.useShuffle();
            }
          }
        }

        enterEditMode() {
          gPopGrid.setEditing(true);
          this.mask.active = true;
          this.scheduleOnce(() => {
            this.maskGridFrame.worldPosition = gPopGrid.node.worldPosition;
            gPopGrid.node.parent = this.maskGridFrame;
          });
          let target = this.curMagicId == PopMagicId.bomb ? this.iconBomb : this.iconColor;
          this.curMagicIcon = instantiate(target);
          this.curMagicIcon.getComponent(Button).destroy();
          this.curMagicIcon.parent = this.node;
          tween(this.curMagicIcon).to(0.3, {
            scale: v3(1.2, 1.2, 1.0)
          }).to(0.3, {
            scale: v3(1, 1, 1)
          }).union().repeatForever().start();
          this.curMagicIcon.worldPosition = target.worldPosition;
          gPopGrid.node.on(PopGrid.EVT_ITEM_SELECT, this.onMagicModeSelectItem, this);
        }

        exitEditMode() {
          gPopGrid.node.parent = this.gridFrameOrg;
          this.hideColorSwitcher();
          gPopGrid.setEditing(false);
          this.mask.active = false;

          if (this.curMagicIcon) {
            this.curMagicIcon.destroy();
            this.curMagicIcon = null;
          }

          this.curMagicId = "";
          gPopGrid.node.off(PopGrid.EVT_ITEM_SELECT, this.onMagicModeSelectItem, this);
        }

        onMaskTouchStart(evt) {
          this.exitEditMode();
        }

        onMagicModeSelectItem(item) {
          console.log("PopMagic::onGridItemSelect()");
          let magicId = this.curMagicId;

          if (magicId == PopMagicId.color) {
            this.showColorSwitcher(item);
          } else if (this.curMagicId == PopMagicId.bomb) {
            this.useBomb(item);
          } else {
            console.log("something might be wrong...");
          }
        }

        showColorSwitcher(item) {
          // let posDst = v3(item.node.worldPosition);
          if (this.curSelectedItem) {
            this.hideColorSwitcher();
          }

          this.curSelectedItem = item;
          this.curSelectedItem.setHighlighted(true);
          this.colorSwitcher.active = true;
          this.colorSwitcher.worldPosition = v3(item.node.worldPosition);
          this.colorSwitcher.angle = gAppResolution.policy == AppResolutionPolicy.fixedHeightLandscape && gPopGrid.arrItems.indexOf(item) < 20 ? 180 : 0;
          let delta = gPopGrid.node.worldPosition.x - 320;
          let posPanel = v3(this.colorSwitcherPanel.worldPosition);
          if (posPanel.x < 190 + delta) posPanel.x = 190 + delta;else if (posPanel.x > 450 + delta) posPanel.x = 450 + delta;
          this.colorSwitcherPanel.setWorldPosition(posPanel);
          let arr = this.colorSwitcherPanelColors.children;

          for (let i = 0; i < arr.length; i++) {
            const e = arr[i];
            e.active = e.name == item.type.toString() ? false : true;
          }
        }

        hideColorSwitcher() {
          this.colorSwitcher.active = false;

          if (this.curSelectedItem) {
            this.curSelectedItem.setHighlighted(false);
            this.curSelectedItem = null;
          }
        }

        onColorSwitchItemClick(evt) {
          console.log("onColorTypeClick(),evt:", evt);
          let n = evt.target;
          console.log("type:", n.name);

          if (!this.curSelectedItem) {
            console.warn("this.curSelectedItem is null");
            return;
          }

          let t = parseInt(n.name);

          if (t <= 0 || t > PopGemType.Max) {
            console.warn("parseInt(), type error:", t);
            return;
          }

          this.useColorSwitcher(this.curSelectedItem, t, n);
        }

        useColorSwitcher(item, newType, effectClone) {
          gPopGrid.replaceItem(item, newType);
          this.spendMagic(PopMagicId.color);

          if (effectClone) {
            let posDst = v3(item.node.worldPosition);
            let clone = instantiate(effectClone);
            clone.parent = gPopEffect.node; // clone.worldPosition = v3(n.worldPosition);
            // tween(clone).to(0.5, {worldPosition:posDst, scale:v3(0.1,0.1,1)},{easing:'fade'}).removeSelf().start();

            clone.worldPosition = posDst;
            tween(clone).set({
              scale: v3(2.5, 2.5, 1)
            }).to(0.45, {
              angle: 180,
              worldPosition: posDst,
              scale: v3(1, 1, 1)
            }, {
              easing: easing.linear
            }).removeSelf().start();
          }

          this.exitEditMode();
        }

        useBomb(item) {
          let posDst = v3(item.node.worldPosition);
          let clone = instantiate(this.iconBomb);
          clone.parent = gPopEffect.node; // clone.worldPosition = v3(this.iconBomb.worldPosition);

          clone.worldPosition = item.node.worldPosition;
          clone.setScale(2, 2, 1); // AppBlockerUI.show();

          tween(clone).to(0.5, {
            worldPosition: posDst,
            scale: v3(0.5, 0.5, 1)
          }, {
            easing: 'fade'
          }).call(() => {
            // AppBlockerUI.hide();
            gPopGrid.exposeGem(gPopGrid.arrItems.indexOf(item));
            this.spendMagic(PopMagicId.bomb);
          }).removeSelf().start();
          this.exitEditMode();
        }

        useShuffle() {
          let ret = gPopGrid.shuffle();

          if (ret) {
            this.spendMagic(PopMagicId.shuffle);
          }
        }

        spendMagic(magicId) {
          gPopDataCtl.useMagic(magicId); // let info = gPopDataCtl.getMagicInfo(magicId);// gPopData.magics[magicId];
          // if(info && info.price > 0){
          //     gAppUser.addCoin(-info.price);
          // }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "mask", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "maskGridFrame", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "colorSwitcher", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "iconBomb", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "iconColor", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/PopMagicButton.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './PopData.ts', './Pop.ts', './App.ts', './gAppConstant.ts', './gAppConfig.ts'], function (exports) {
  var _applyDecoratedDescriptor, _initializerDefineProperty, cclegacy, Label, Node, _decorator, Component, size, UITransform, log, js, director, v3, UIOpacity, gPopDataCtl, PopDataCtl, gPopData, gPopMagic, gPopUI, gAppUI, EVT_VIEW_SIZE_CHANGE, gAppConfig;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      Label = module.Label;
      Node = module.Node;
      _decorator = module._decorator;
      Component = module.Component;
      size = module.size;
      UITransform = module.UITransform;
      log = module.log;
      js = module.js;
      director = module.director;
      v3 = module.v3;
      UIOpacity = module.UIOpacity;
    }, function (module) {
      gPopDataCtl = module.gPopDataCtl;
      PopDataCtl = module.PopDataCtl;
      gPopData = module.gPopData;
    }, function (module) {
      gPopMagic = module.gPopMagic;
      gPopUI = module.gPopUI;
    }, function (module) {
      gAppUI = module.gAppUI;
    }, function (module) {
      EVT_VIEW_SIZE_CHANGE = module.EVT_VIEW_SIZE_CHANGE;
    }, function (module) {
      gAppConfig = module.gAppConfig;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;

      cclegacy._RF.push({}, "b7fb2XK0uBO5LUIch5QDmJ0", "PopMagicButton", undefined);

      const {
        ccclass,
        property
      } = _decorator;
      let PopMagicButton = exports('PopMagicButton', (_dec = ccclass('PopMagicButton'), _dec2 = property(Label), _dec3 = property(Node), _dec4 = property(Node), _dec(_class = (_class2 = class PopMagicButton extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "labelCount", _descriptor, this);

          _initializerDefineProperty(this, "iconAdd", _descriptor2, this);

          _initializerDefineProperty(this, "iconMagic", _descriptor3, this);

          _initializerDefineProperty(this, "magicId", _descriptor4, this);

          this.parentOriginSize = size(100, 100);
        }

        onLoad() {
          // this.labelCount = this.node.getChildByName("LabelCount").getComponent(Label);
          // this.iconAdd = this.node.getChildByName("IconAdd");
          this.parentOriginSize = size(this.node.parent.getComponent(UITransform).width, this.node.parent.getComponent(UITransform).height);
          log(`parentOriginSize:${this.parentOriginSize.toString()}`);
        }

        start() {
          log(`${js.getClassName(this)}.start`); // this.updateLayout();

          director.on(EVT_VIEW_SIZE_CHANGE, layout => {
            log(`${js.getClassName(this)}.VIEW_SIZE_CHANGE`);
            this.scheduleOnce(() => {
              let szParentNew = size(this.node.parent.getComponent(UITransform).width, this.node.parent.getComponent(UITransform).height);
              log(`szParentNew:${szParentNew.toString()}`);
              this.node.scale = v3(szParentNew.width / this.parentOriginSize.width, szParentNew.width / this.parentOriginSize.width, 1.0);
              log(`${js.getClassName(this)},node.scale:${this.node.scale.toString()}`);
            });
          }, this);
          this.updateButton();
          gPopDataCtl.node.on(PopDataCtl.EVT_MAGIC_CHANGED, () => {
            this.updateButton();
          }, this);
        }

        updateButton() {
          let magicInfo = gPopDataCtl.getMagicInfo(this.magicId); // gPopData.magics[this.magicId];

          if (magicInfo) {
            this.getComponent(UIOpacity).opacity = gPopData.magicQuota > 0 ? 225 : 100;
            this.labelCount.string = `${magicInfo.count}`;
            this.labelCount.node.active = magicInfo.count > 0;
            this.iconAdd.active = magicInfo.count <= 0;
          }
        }

        onButtonClick() {
          let magicInfo = gPopDataCtl.getMagicInfo(this.magicId); // gPopData.magics[this.magicId];

          if (magicInfo) {
            if (gPopData.magicQuota <= 0 && !gAppConfig.testing) {
              let max = gPopDataCtl.getMagicMaxInCurrentStage(gPopData.curStage);
              gAppUI.showTips(`Magic quota(${max}) had been run out.`);
              return;
            }

            if (magicInfo.count > 0) {
              gPopMagic.selectMagic(this.magicId); // gPopGame.useMagic(this.magicId);
            } else {
              gAppUI.antiDoubleClicks();
              gPopUI.showMagicStoreUI(this.magicId, 1, this.node); // let comp = PopMagicStoreUI.create(this.magicId, 1, this.node);
              // comp.node.parent = find("Canvas");
            }
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "labelCount", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "iconAdd", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "iconMagic", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "magicId", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return "";
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/PopMagicCollectUI.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './PopData.ts', './App.ts'], function (exports) {
  var _applyDecoratedDescriptor, _initializerDefineProperty, cclegacy, Node, Label, _decorator, Component, tween, warn, v3, bezier, gPopDataCtl, gAppHelper;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      Node = module.Node;
      Label = module.Label;
      _decorator = module._decorator;
      Component = module.Component;
      tween = module.tween;
      warn = module.warn;
      v3 = module.v3;
      bezier = module.bezier;
    }, function (module) {
      gPopDataCtl = module.gPopDataCtl;
    }, function (module) {
      gAppHelper = module.gAppHelper;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3;

      cclegacy._RF.push({}, "6e819ZKmP9HNbsymjIBSYJL", "PopMagicCollectUI", undefined);

      const {
        ccclass,
        property
      } = _decorator;
      let PopMagicCollectUI = exports('PopMagicCollectUI', (_dec = ccclass('PopMagicCollectUI'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Label), _dec(_class = (_class2 = class PopMagicCollectUI extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "lighting", _descriptor, this);

          _initializerDefineProperty(this, "icons", _descriptor2, this);

          _initializerDefineProperty(this, "labelCount", _descriptor3, this);

          this.magicId = "";
          this.count = 3;
          this.invoker = null;
          this.onComplete = null;
          this.bCollected = false;
        }

        setParams(magicId, count, invoker, onComplete) {
          this.magicId = magicId;
          this.count = count;
          this.invoker = invoker;
          this.onComplete = onComplete;
        }

        start() {
          this.show();
        }

        show() {
          tween(this.lighting).by(5, {
            angle: 360
          }).union().repeatForever().start();
          this.labelCount.string = `${this.count}`;
          let info = gPopDataCtl.getMagicInfo(this.magicId); // gPopData.magics[this.magicId];

          if (info) {
            this.icons.children.forEach(e => {
              e.active = e.name == info.id;
            });
          }

          gAppHelper.showPanel(this);
          this.scheduleOnce(() => {
            this.onClick();
          });
        }

        close() {
          gAppHelper.closePanel(this);
        }

        onClick() {
          if (this.bCollected) return;
          let info = gPopDataCtl.getMagicInfo(this.magicId); // gPopData.magics[this.magicId];

          if (!info) {
            warn(`!info`);
            this.close();
            return;
          }

          this.bCollected = true; // gPopDataCtl.addMagic(this.magicId, this.count);

          let icon = this.icons.children.find((v, i, o) => {
            return v.active;
          });

          if (icon && this.invoker) {
            let nodeTarget = icon;
            let posTarget = nodeTarget.worldPosition;
            let posDest = this.invoker.worldPosition;
            tween(icon).to(0.1, {
              scale: v3(1.5, 1.5)
            }).to(0.5, {
              scale: v3(0.01, 0.01, 1)
            }, {
              onUpdate: (arg, ratio) => {
                let bezierNum = 20;
                let x = bezier(nodeTarget.worldPosition.x, nodeTarget.worldPosition.x + bezierNum, posDest.x + bezierNum, posDest.x, ratio);
                let y = bezier(nodeTarget.worldPosition.y, nodeTarget.worldPosition.y + bezierNum, posDest.y + bezierNum, posDest.y, ratio);
                nodeTarget.worldPosition = v3(x, y, nodeTarget.worldPosition.z);
              }
            }) // .to(0.5, {scale:v3(0.01,0.01,1), worldPosition:this.invoker.worldPosition})
            .call(() => {
              this.onComplete && this.onComplete();
              this.close();
            }).start();
          } else {
            this.close();
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "lighting", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "icons", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "labelCount", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/PopMagicStoreUI.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './AppUser.ts', './PopData.ts', './Pop.ts', './App.ts'], function (exports) {
  var _applyDecoratedDescriptor, _initializerDefineProperty, cclegacy, Label, Node, _decorator, Component, v3, tween, gUserData, gAppUser, gPopDataCtl, gPopUI, gAppUI;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      Label = module.Label;
      Node = module.Node;
      _decorator = module._decorator;
      Component = module.Component;
      v3 = module.v3;
      tween = module.tween;
    }, function (module) {
      gUserData = module.gUserData;
      gAppUser = module.gAppUser;
    }, function (module) {
      gPopDataCtl = module.gPopDataCtl;
    }, function (module) {
      gPopUI = module.gPopUI;
    }, function (module) {
      gAppUI = module.gAppUI;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;

      cclegacy._RF.push({}, "05814TERKlCOZpT71Ik3VM5", "PopMagicStoreUI", undefined);

      const {
        ccclass,
        property
      } = _decorator;
      let PopMagicStoreUI = exports('PopMagicStoreUI', (_dec = ccclass('PopMagicStoreUI'), _dec2 = property(Label), _dec3 = property(Label), _dec4 = property(Label), _dec5 = property(Node), _dec(_class = (_class2 = class PopMagicStoreUI extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "labelExchangeCount", _descriptor, this);

          _initializerDefineProperty(this, "labelPrice", _descriptor2, this);

          _initializerDefineProperty(this, "labelTitle", _descriptor3, this);

          _initializerDefineProperty(this, "magicIcons", _descriptor4, this);

          this.magicId = "";
          this.exchangeCount = 3;
          this.invoker = null;
        }

        setParams(magicId, exchangeCount, invoker) {
          this.magicId = magicId;
          this.exchangeCount = exchangeCount;
          this.invoker = invoker;
        }

        start() {
          this.show();
        }

        onBgClick() {
          this.close();
        }

        onExchangeClick() {
          // gAppUI.antiDoubleClicks();
          let info = gPopDataCtl.getMagicInfo(this.magicId); // gPopData.magics[this.magicId];

          if (info) {
            let totalPrice = info.price * this.exchangeCount;

            if (gUserData.coin >= totalPrice) {
              // let ret = gPopDataCtl.addMagic(this.magicId, this.exchangeCount);
              // if(ret){
              let magicId = this.magicId;
              let count = this.exchangeCount;
              gPopUI.showMagicCollect(magicId, count, this.invoker, () => {
                if (gUserData.coin >= totalPrice) {
                  gAppUser.addCoin(-totalPrice);
                  gPopDataCtl.addMagic(magicId, count);
                }
              }); // this.close();
              // }
            } else {
              gAppUI.showStore();
              gAppUI.showTips("No enough coins, please exchange coins first.");
            }
          }
        }

        onCloseClick() {
          this.close();
        }

        show() {
          this.labelExchangeCount.string = `${this.exchangeCount}`;
          let info = gPopDataCtl.getMagicInfo(this.magicId); // gPopData.magics[this.magicId];

          if (info) {
            let totalPrice = info.price * this.exchangeCount;
            this.labelPrice.string = `${totalPrice}`;
            this.labelTitle.string = info.name;
            this.magicIcons.children.forEach(e => {
              e.active = e.name == info.id;
            });
          }

          let panel = this.node.getChildByName("Panel");
          panel.setScale(v3(0, 0, 1));
          tween(panel).to(0.1, {
            scale: v3(1.0, 1.0, 1)
          }).start(); // this.bannerShowing = gAppAdHelper.isBannerAdShowing();
          // gAppAdHelper.hideBannerAd();
        }

        close() {
          gAppUI.antiDoubleClicks();
          let panel = this.node.getChildByName("Panel");
          tween(panel).to(0.1, {
            scale: v3(0, 0, 1)
          }).call(() => {
            this.node.destroy();
          }).start(); // if(this.bannerShowing){
          //     gAppAdHelper.showBannerAd();
          // }
        } // static create(magicId:string, exchangeCount:number, invoker?:Node){
        //     let clone = instantiate(gPopRes.prefabPopMagicStoreUI);
        //     let comp = clone.getComponent(PopMagicStoreUI);
        //     if(comp){
        //         comp.magicId = magicId;
        //         comp.exchangeCount = exchangeCount;
        //         comp.invoker = invoker;
        //         // clone.parent = find("Canvas");
        //     }
        //     // clone.on(PopGameOver.EVT_COMPLETE, ()=>{
        //     //     onComplete && onComplete();
        //     // })
        //     return comp;
        // }


      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "labelExchangeCount", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "labelPrice", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "labelTitle", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "magicIcons", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/PopNewHighScoreUI.ts", ['cc', './App.ts', './AppAudioSounds.ts'], function (exports) {
  var cclegacy, Component, sys, view, UITransform, v3, tween, _decorator, gAppAudio, SND;

  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      Component = module.Component;
      sys = module.sys;
      view = module.view;
      UITransform = module.UITransform;
      v3 = module.v3;
      tween = module.tween;
      _decorator = module._decorator;
    }, function (module) {
      gAppAudio = module.gAppAudio;
    }, function (module) {
      SND = module.SND;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "7444c5k0o1MVoVK9+AaKka/", "PopNewHighScoreUI", undefined);

      const {
        ccclass,
        property
      } = _decorator;
      let PopNewHighScoreUI = exports('PopNewHighScoreUI', (_dec = ccclass('PopNewHighScoreUI'), _dec(_class = class PopNewHighScoreUI extends Component {
        constructor(...args) {
          super(...args);
          this.funcComplete = null;
        }

        setParams(funcComplete) {
          this.funcComplete = funcComplete;
        }

        start() {
          let safeArea = sys.getSafeAreaRect();
          let viewSize = view.getVisibleSize();
          let nodeSize = this.node.getComponent(UITransform).contentSize;
          let y = viewSize.height / 2 + nodeSize.height / 2;
          this.node.position = v3(0, y, 1);
          tween(this.node).by(0.3, {
            position: v3(0, -(nodeSize.height + safeArea.y))
          }).delay(2.0).by(0.3, {
            position: v3(0, nodeSize.height + safeArea.y)
          }).call(() => {
            this.node.destroy();
            this.funcComplete && this.funcComplete();
          }).start();
          gAppAudio.playSound(SND.NewHighScore);
        }

      }) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/PopRes.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _initializerDefineProperty, cclegacy, SpriteFrame, Prefab, _decorator, Component;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      SpriteFrame = module.SpriteFrame;
      Prefab = module.Prefab;
      _decorator = module._decorator;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16;

      cclegacy._RF.push({}, "b00e1vr56RCfJvSrnv0d092", "PopRes", undefined);

      const {
        ccclass,
        property
      } = _decorator;
      let PopRes = exports('PopRes', (_dec = ccclass('PopRes'), _dec2 = property([SpriteFrame]), _dec3 = property([SpriteFrame]), _dec4 = property([SpriteFrame]), _dec5 = property(Prefab), _dec6 = property(Prefab), _dec7 = property(Prefab), _dec8 = property(Prefab), _dec9 = property(Prefab), _dec10 = property(Prefab), _dec11 = property(Prefab), _dec12 = property(Prefab), _dec13 = property(Prefab), _dec14 = property(Prefab), _dec15 = property(Prefab), _dec16 = property(Prefab), _dec17 = property(Prefab), _dec(_class = (_class2 = class PopRes extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "gemBgs", _descriptor, this);

          _initializerDefineProperty(this, "gemFgs", _descriptor2, this);

          _initializerDefineProperty(this, "starIcons", _descriptor3, this);

          _initializerDefineProperty(this, "PopResultUI", _descriptor4, this);

          _initializerDefineProperty(this, "PopRetryDialogUI", _descriptor5, this);

          _initializerDefineProperty(this, "PopConfirmDialogUI", _descriptor6, this);

          _initializerDefineProperty(this, "PopStageIntroUI", _descriptor7, this);

          _initializerDefineProperty(this, "PopGameOverUI", _descriptor8, this);

          _initializerDefineProperty(this, "ParticleExposeGem", _descriptor9, this);

          _initializerDefineProperty(this, "PopMagicStoreUI", _descriptor10, this);

          _initializerDefineProperty(this, "PopMagicCollectUI", _descriptor11, this);

          _initializerDefineProperty(this, "PopSettingUI", _descriptor12, this);

          _initializerDefineProperty(this, "PopInterstitialUI", _descriptor13, this);

          _initializerDefineProperty(this, "PopGameHelpUI", _descriptor14, this);

          _initializerDefineProperty(this, "PopNewHighScoreUI", _descriptor15, this);

          _initializerDefineProperty(this, "PopTargetCleared", _descriptor16, this);
        }

        start() {}

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "gemBgs", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "gemFgs", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "starIcons", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "PopResultUI", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "PopRetryDialogUI", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "PopConfirmDialogUI", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "PopStageIntroUI", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "PopGameOverUI", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "ParticleExposeGem", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "PopMagicStoreUI", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "PopMagicCollectUI", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "PopSettingUI", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "PopInterstitialUI", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "PopGameHelpUI", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "PopNewHighScoreUI", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "PopTargetCleared", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/PopResultUI.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './PopCommon.ts', './PopData.ts', './Pop.ts', './App.ts', './AppAudioSounds.ts', './AppUser.ts', './AppCoinInfo.ts'], function (exports) {
  var _applyDecoratedDescriptor, _initializerDefineProperty, cclegacy, Label, Node, _decorator, Component, v3, tween, bezier, UIOpacity, PopStatus, gPopData, gPopGrid, gPopUI, gPopGame, gAppAudio, SND, gAppUser, AppCoinInfo;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      Label = module.Label;
      Node = module.Node;
      _decorator = module._decorator;
      Component = module.Component;
      v3 = module.v3;
      tween = module.tween;
      bezier = module.bezier;
      UIOpacity = module.UIOpacity;
    }, function (module) {
      PopStatus = module.PopStatus;
    }, function (module) {
      gPopData = module.gPopData;
    }, function (module) {
      gPopGrid = module.gPopGrid;
      gPopUI = module.gPopUI;
      gPopGame = module.gPopGame;
    }, function (module) {
      gAppAudio = module.gAppAudio;
    }, function (module) {
      SND = module.SND;
    }, function (module) {
      gAppUser = module.gAppUser;
    }, function (module) {
      AppCoinInfo = module.AppCoinInfo;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6;

      cclegacy._RF.push({}, "f4a1dUBTbRAkKYFk0Cggj2F", "PopResultUI", undefined);

      const {
        ccclass,
        property
      } = _decorator;
      let PopResultUI = exports('PopResultUI', (_dec = ccclass('PopResultUI'), _dec2 = property(Label), _dec3 = property(Label), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Node), _dec(_class = (_class2 = class PopResultUI extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "labelBonusValue", _descriptor, this);

          _initializerDefineProperty(this, "labelRemainingValue", _descriptor2, this);

          _initializerDefineProperty(this, "bonusPanel", _descriptor3, this);

          _initializerDefineProperty(this, "remainingPanel", _descriptor4, this);

          _initializerDefineProperty(this, "allClearPanel", _descriptor5, this);

          _initializerDefineProperty(this, "nodeBonusCoin", _descriptor6, this);

          this.bonus = 2000;
        }

        start() {
          this.calc();
        }

        calc() {
          let arr = gPopGrid.getRemainingGems();
          this.setRemainingCount(arr.length);
          this.allClearPanel.active = arr.length == 0;
          this.remainingPanel.active = arr.length > 0;

          if (this.allClearPanel.active) {
            this.allClearPanel.scale = v3(0.001, 0.001, 1);
            tween(this.allClearPanel).to(0.1, {
              scale: v3(1.0, 1.0, 1.0)
            }).call(() => {}).start();
            let posCoin = v3(AppCoinInfo.instance.labelCoinValue.node.worldPosition);
            this.nodeBonusCoin.active = true;
            let clone = this.nodeBonusCoin;
            let posCur = this.nodeBonusCoin.worldPosition;
            tween(this.nodeBonusCoin).set({
              scale: v3(0.001, 0.001, 0.001)
            }).to(0.2, {
              scale: v3(1.0, 1.0, 1.0)
            }).delay(0.5).to(0.5, {
              scale: v3(0.1, 0.1, 1)
            }, {
              onUpdate: (arg, ratio) => {
                let bezierNum = 20;
                let x = bezier(clone.worldPosition.x, clone.worldPosition.x + bezierNum, posCoin.x + bezierNum, posCoin.x, ratio);
                let y = bezier(clone.worldPosition.y, clone.worldPosition.y + bezierNum, posCoin.y + bezierNum, posCoin.y, ratio);
                clone.worldPosition = v3(x, y, clone.worldPosition.z);
              }
            }) // .to(0.5, { worldPosition: posCoin, scale: v3(0.5, 0.5, 1) })
            .call(() => {
              gAppUser.addCoin(1);
              gAppAudio.playSound(SND.AddGold);
              tween(this.allClearPanel.getComponent(UIOpacity)).to(1.0, {
                opacity: 0
              }).start();
            }).hide().start();
          }

          let delay = 1.0;
          delay += gPopGrid.eraseRemainingItems(delay, () => {
            this.subtractBonus();
          });
          delay += 1.0;
          delay += this.collectFinalBonus(delay);
        }

        onComplete() {
          if (PopStatus.end == gPopData.status) {
            gPopUI.showRetryDialog();
            this.node.active = false;
          } else {
            let func = () => {
              // gAppHelper.loadScene(SCENE.PopGameScene, true);
              gPopUI.showInterstitial();
            };

            {
              func();
            }
          }
        }

        setRemainingCount(remainingCount) {
          this.labelRemainingValue.string = remainingCount.toString();
        }

        subtractBonus() {
          this.bonus = this.bonus >= 200 ? this.bonus - 200 : 0;
          this.updateBonus();
        }

        collectFinalBonus(delay) {
          let duration = 0.5;
          this.scheduleOnce(() => {
            let coinDuration = this.allClearPanel.active ? 0.3 : 0;
            if (this.allClearPanel.active) ;
            let pos = v3(gPopGame.labelCurScore.node.worldPosition);
            tween(this.labelBonusValue.node).delay(coinDuration).to(0.5, {
              worldPosition: pos,
              scale: v3(0.5, 0.5, 1)
            }).call(() => {
              gPopGame.addScore(this.bonus);

              if (this.bonus > 0) {
                gAppAudio.playSound(SND.GainBonus);
              }

              tween(this.node.getChildByName("Panel").getComponent(UIOpacity)).to(1.0, {
                opacity: 0
              }).start();
              this.scheduleOnce(() => {
                this.onComplete();
              }, 1.0);
            }).hide().start();
          }, delay);
          return duration;
        }

        updateBonus() {
          this.labelBonusValue.string = this.bonus.toString();
          tween(this.labelBonusValue.node).to(0.1, {
            scale: v3(1.2, 1.2, 1.2)
          }).to(0.1, {
            scale: v3(1, 1, 1)
          }).start();
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "labelBonusValue", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "labelRemainingValue", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "bonusPanel", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "remainingPanel", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "allClearPanel", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "nodeBonusCoin", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/PopRetryDialogUI.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './PopData.ts', './PopCommon.ts', './App.ts', './Pop.ts', './AppUser.ts', './AppVideoAdButton.ts', './gAppConfig.ts'], function (exports) {
  var _applyDecoratedDescriptor, _initializerDefineProperty, cclegacy, Label, _decorator, Component, macro, gPopData, PopStatus, gAppHelper, gAppUI, gPopGame, gPopUI, gUserData, gAppUser, AppVideoAdButton, gAppConfig;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      Label = module.Label;
      _decorator = module._decorator;
      Component = module.Component;
      macro = module.macro;
    }, function (module) {
      gPopData = module.gPopData;
    }, function (module) {
      PopStatus = module.PopStatus;
    }, function (module) {
      gAppHelper = module.gAppHelper;
      gAppUI = module.gAppUI;
    }, function (module) {
      gPopGame = module.gPopGame;
      gPopUI = module.gPopUI;
    }, function (module) {
      gUserData = module.gUserData;
      gAppUser = module.gAppUser;
    }, function (module) {
      AppVideoAdButton = module.AppVideoAdButton;
    }, function (module) {
      gAppConfig = module.gAppConfig;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;

      cclegacy._RF.push({}, "32051j1LdxFQ4Tmivh+2bIG", "PopRetryDialogUI", undefined);

      const {
        ccclass,
        property
      } = _decorator;
      let PopRetryDialogUI = exports('PopRetryDialogUI', (_dec = ccclass('PopRetryDialogUI'), _dec2 = property(Label), _dec3 = property(AppVideoAdButton), _dec(_class = (_class2 = class PopRetryDialogUI extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "labelStage", _descriptor, this);

          _initializerDefineProperty(this, "buttonVideoAd", _descriptor2, this);
        }

        start() {
          this.show();
          this.schedule(() => {
            this.buttonVideoAd.updateButton();
          }, 30, macro.REPEAT_FOREVER, 30);
        }

        show() {
          this.labelStage.string = `${gPopData.curStage + 1}`;
          gAppHelper.showPanel(this); // this.bannerShowing = gAppAdHelper.isBannerAdShowing();
          // gAppAdHelper.hideBannerAd();
        }

        close() {
          gAppHelper.closePanel(this, () => {}); // if(this.bannerShowing){
          //     gAppAdHelper.showBannerAd();
          // }
        }

        onRetryClick() {
          gAppUI.antiDoubleClicks();

          if (gUserData.coin >= 5) {
            gAppUser.addCoin(-5);
            gPopData.status = PopStatus.retry; // AppSceneLoaderUI.loadScene(Res.Scene.PopScene);

            gAppHelper.closePanel(this, () => {
              // gPopData.status = PopStatus.retry;
              gPopGame.reload();
            });
          } else {
            if (gAppConfig.storeEnabled) {
              gAppUI.showStore(); // AppDialogUI.create(i18nT.noEnoughCoins, ()=>{
              //     gAppStoreHelper.showUI(()=>{this.onRetryClick()}, true);
              // });
            }

            gAppUI.showTips("No enough coins.");
          }
        }

        onGiveUpClick() {
          // gAppHelper.loadScene(SCENE.PopStarMenuScene);
          let funcGoHome = () => {
            gPopData.status = PopStatus.failed;
            this.node.active = false;

            if (gPopData.curStage > 0) {
              gPopUI.showInterstitial(-1);
            } else {
              gPopUI.showGameOver();
            }
          };

          {
            funcGoHome();
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "labelStage", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "buttonVideoAd", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/PopSettingUI.ts", ['cc', './App.ts', './Pop.ts'], function (exports) {
  var cclegacy, Component, _decorator, gAppHelper, gAppUI, gPopGame, gPopUI;

  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      Component = module.Component;
      _decorator = module._decorator;
    }, function (module) {
      gAppHelper = module.gAppHelper;
      gAppUI = module.gAppUI;
    }, function (module) {
      gPopGame = module.gPopGame;
      gPopUI = module.gPopUI;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "2acc0JfI5BFVbYjjhRiKLis", "PopSettingUI", undefined);

      const {
        ccclass,
        property
      } = _decorator;
      let PopSettingUI = exports('PopSettingUI', (_dec = ccclass('PopSettingUI'), _dec(_class = class PopSettingUI extends Component {
        start() {
          gAppHelper.showPanel(this);
        }

        onBgClick() {
          this.close();
        }

        onCloseClick() {
          this.close();
        }

        close() {
          gAppUI.antiDoubleClicks();
          gAppHelper.closePanel(this);
        }

        onHomeClick() {
          gPopGame.goHome();
        } // onSoundClick(){
        // }


        onHelpClick() {
          // PopGameHelpUI.create();
          gPopUI.showGameHelp();
        }

      }) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/PopStageBg.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './PopData.ts', './Pop.ts'], function (exports) {
  var _applyDecoratedDescriptor, _initializerDefineProperty, cclegacy, _decorator, Component, find, Sprite, Label, gPopData, gPopRes;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
      find = module.find;
      Sprite = module.Sprite;
      Label = module.Label;
    }, function (module) {
      gPopData = module.gPopData;
    }, function (module) {
      gPopRes = module.gPopRes;
    }],
    execute: function () {
      var _dec, _class, _class2, _descriptor;

      cclegacy._RF.push({}, "abf58xpWn1KjbGDc2KykOo0", "PopStageBg", undefined);

      const {
        ccclass,
        property
      } = _decorator;
      let PopStageBg = exports('PopStageBg', (_dec = ccclass('PopStageBg'), _dec(_class = (_class2 = class PopStageBg extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "stageDelta", _descriptor, this);

          this.stage = 0;
        }

        start() {
          this.stage = gPopData.curStage + this.stageDelta;
          this.updatePlanet();
        }

        updatePlanet() {
          let spPlanetIcon = find("Planet/Icon", this.node).getComponent(Sprite);
          let labelPlanet = find("Planet/Label", this.node).getComponent(Label);
          spPlanetIcon.spriteFrame = gPopRes.starIcons[this.stage % gPopRes.starIcons.length]; // let i = this.stage;// Math.floor(this.stage/gPopRes.starIcons.length);
          // let strColor = colors[i%colors.length];
          // let colorNew = color(strColor);
          // // colorNew.a = this.bNextStage ? 255 : 95;
          // // spPlanetIcon.color = colorNew;

          labelPlanet.string = `${this.stage + 1}`;
        }

      }, _descriptor = _applyDecoratedDescriptor(_class2.prototype, "stageDelta", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/PopStageIntroUI.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './PopData.ts', './PopCommon.ts', './App.ts', './Pop.ts', './AppAudioSounds.ts'], function (exports) {
  var _applyDecoratedDescriptor, _initializerDefineProperty, cclegacy, Node, Label, _decorator, Component, view, v3, tween, easing, log, gPopData, PopStatus, gAppAudio, gPopGame, SND;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      Node = module.Node;
      Label = module.Label;
      _decorator = module._decorator;
      Component = module.Component;
      view = module.view;
      v3 = module.v3;
      tween = module.tween;
      easing = module.easing;
      log = module.log;
    }, function (module) {
      gPopData = module.gPopData;
    }, function (module) {
      PopStatus = module.PopStatus;
    }, function (module) {
      gAppAudio = module.gAppAudio;
    }, function (module) {
      gPopGame = module.gPopGame;
    }, function (module) {
      SND = module.SND;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;

      cclegacy._RF.push({}, "5d4d0FY6z1KyIYZBXrnNpM7", "PopStageIntroUI", undefined);

      const {
        ccclass,
        property
      } = _decorator;
      let PopStageIntroUI = exports('PopStageIntroUI', (_dec = ccclass('PopStageIntroUI'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Label), _dec6 = property(Label), _dec(_class = (_class2 = class PopStageIntroUI extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "panelStage", _descriptor, this);

          _initializerDefineProperty(this, "panelTarget", _descriptor2, this);

          _initializerDefineProperty(this, "panelContinue", _descriptor3, this);

          _initializerDefineProperty(this, "labelStageValue", _descriptor4, this);

          _initializerDefineProperty(this, "labelTargetValue", _descriptor5, this);

          this.readyCalled = false;
          this.funcReady = null;
        }

        setParams(funcReady) {
          this.funcReady = funcReady;
        }

        start() {
          this.labelStageValue.string = (gPopData.curStage + 1).toString();
          this.labelTargetValue.string = gPopData.targetScore.toString();
          this.show();
        }

        onTouch() {}

        show() {
          let callReadyFunc = () => {
            if (!this.readyCalled) {
              this.funcReady && this.funcReady();
              this.readyCalled = true;
            }
          };

          let funcComplete = () => {
            gAppAudio.playSound(SND.StageIntroOut);

            if (gAppAudio.curPlayingMusic != SND.GamePlayBg) {
              gPopGame.scheduleOnce(() => {
                gAppAudio.pauseMusic();
              }, 0.3);
            }

            gPopGame.scheduleOnce(() => {
              log(`PopStageIntroUI, playMusic()`);
              gAppAudio.playMusic(SND.GamePlayBg);
            }, 2.0); // gAppHelper.closePanel(this);

            this.scheduleOnce(() => {
              this.node.destroy();
            }, 0.3);
          }; // gAppHelper.showPanel(this);


          this.panelContinue.active = PopStatus.playing == gPopData.status;
          this.panelTarget.active = !this.panelContinue.active;
          let canvasW = view.getVisibleSize().width;
          let canvasH = view.getVisibleSize().height;
          let panel = this.node.getChildByName("Panel");
          panel.getChildByName("Bg").scale = v3(1, 0, 1);
          let posFrom = v3(canvasW, 0);
          let posTo = v3(0, 0);
          let posDst = v3(-canvasW, 0);
          tween(panel).set({
            position: posFrom
          }).call(() => {
            gAppAudio.playSound(SND.StageIntroIn); // tween(panel.getChildByName("Bg").getComponent(UIOpacity)).set({opacity:0}).delay(0.3).to(0.2, {opacity:255}).start();

            tween(panel.getChildByName("Bg")).delay(0.5).to(0.2, {
              scale: v3(1, 1, 1)
            }).start();
          }).to(0.5, {
            position: posTo
          }, {
            easing: easing.backOut
          }).delay(1.0).call(() => {
            this.blinkTarget();
          }).delay(1.5).delay(0.5) // .to(0.5, {position:posDst}, {easing:easing.backIn})
          .call(() => {
            // tween(panel.getChildByName("Bg").getComponent(UIOpacity)).to(0.3, {opacity:0}).start();
            tween(panel.getChildByName("Bg")).to(0.2, {
              scale: v3(1, 0, 1)
            }).start();
            funcComplete();
          }).start(); // return;

          let arr = this.panelTarget.active ? [this.panelStage, this.panelTarget] : [this.panelStage, this.panelContinue];

          for (let i = 0; i < arr.length; i++) {
            let i1 = i;
            let posY = arr[i].position.y;
            tween(arr[i]).set({
              position: v3(canvasW, posY)
            }).delay(i * 0.5).call(() => {// if(i1==0)
              //     gAppAudio.playSound(SND.StageIntroIn);
            }).to(0.5, {
              position: v3(0, posY)
            }, {
              easing: 'backOut'
            }).delay(0.5).call(() => {
              if (1 == i1) {
                // this.blinkTarget();
                this.node.once(Node.EventType.TOUCH_END, callReadyFunc, this);
              }
            }).delay(1.5).to(0.5, {
              position: v3(-canvasW, posY)
            }, {
              easing: 'backIn'
            }).call(() => {
              if (i1 == 0) {
                callReadyFunc();
              } // if(i1==1){
              // }

            }).start();
          }

          this.node.once(Node.EventType.TOUCH_END, () => {
            // tween(panel.getChildByName("Bg").getComponent(UIOpacity)).to(0.1, { opacity: 0 }).start();
            tween(panel.getChildByName("Bg")).to(0.2, {
              scale: v3(1, 0, 1)
            }).start();
          }, this);
        }

        blinkTarget() {
          let targets = [this.labelTargetValue.node, gPopGame.labelTargetValue.node];
          targets.forEach(e => {
            tween(e).hide().delay(0.2).show().delay(0.2).union().repeat(2).start();
          });
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "panelStage", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "panelTarget", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "panelContinue", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "labelStageValue", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "labelTargetValue", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/PopStageStar.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Pop.ts', './PopData.ts'], function (exports) {
  var _applyDecoratedDescriptor, _initializerDefineProperty, cclegacy, _decorator, Component, Sprite, color, gPopRes, gPopData;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
      Sprite = module.Sprite;
      color = module.color;
    }, function (module) {
      gPopRes = module.gPopRes;
    }, function (module) {
      gPopData = module.gPopData;
    }],
    execute: function () {
      var _dec, _class, _class2, _descriptor;

      cclegacy._RF.push({}, "25ee0xXR3xGvIzg6VlXhoey", "PopStageStar", undefined);

      const {
        ccclass,
        property
      } = _decorator; // "#FF0000", "#FF00FF", "#0000FF", "#00FFFF", "#00FF00", "#FFFF00", "#89A8FA"
      //"#FA8989", "#F189FA", "#8E89FA", "#89ECFA", "#89FA97", "#DFFA89", 

      const colors = ["#FFFFFF", "#00FF00", "#A000FF"];
      let PopStageStar = exports('PopStageStar', (_dec = ccclass('PopStageStar'), _dec(_class = (_class2 = class PopStageStar extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "stageDelta", _descriptor, this);

          this.stage = 0;
        }

        start() {
          this.stage = gPopData.curStage + this.stageDelta;
          this.updateStar();
        }

        updateStar() {
          let sp = this.getComponent(Sprite);
          sp.spriteFrame = gPopRes.starIcons[this.stage % gPopRes.starIcons.length];
          let i = Math.floor(this.stage / gPopRes.starIcons.length);
          let strColor = colors[i % colors.length];
          let colorNew = color(strColor); // colorNew.a = this.bNextStage ? 255 : 95;

          sp.color = colorNew;
        }

      }, _descriptor = _applyDecoratedDescriptor(_class2.prototype, "stageDelta", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/PopStarTest.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Pop.ts', './App.ts', './gAppCommon.ts', './gAppConfig.ts', './gAppUtils.ts'], function (exports) {
  var _applyDecoratedDescriptor, _initializerDefineProperty, cclegacy, Node, _decorator, Component, instantiate, Label, log, randomRangeInt, gPopGrid, gPopUI, gPopEffect, gAppUI, setObjKeysAsValues, gAppConfig, gAppUtils;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      Node = module.Node;
      _decorator = module._decorator;
      Component = module.Component;
      instantiate = module.instantiate;
      Label = module.Label;
      log = module.log;
      randomRangeInt = module.randomRangeInt;
    }, function (module) {
      gPopGrid = module.gPopGrid;
      gPopUI = module.gPopUI;
      gPopEffect = module.gPopEffect;
    }, function (module) {
      gAppUI = module.gAppUI;
    }, function (module) {
      setObjKeysAsValues = module.setObjKeysAsValues;
    }, function (module) {
      gAppConfig = module.gAppConfig;
    }, function (module) {
      gAppUtils = module.gAppUtils;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;

      cclegacy._RF.push({}, "2abe12o77RBSbukLCLLQGlA", "PopStarTest", undefined);

      const {
        ccclass,
        property
      } = _decorator;

      var tests = /*#__PURE__*/function (tests) {
        tests["autoPlay"] = "";
        tests["showRetryDialog"] = "";
        tests["showGoodJobs"] = "";
        tests["showTargetClear"] = "";
        tests["showHighScore"] = "";
        tests["showTips"] = "";
        tests["showIntertitial"] = "";
        tests["showIntro"] = "";
        return tests;
      }(tests || {});

      setObjKeysAsValues(tests);
      let bShowing = false;
      let PopStarTest = exports('PopStarTest', (_dec = ccclass('PopStarTest'), _dec2 = property(Node), _dec(_class = (_class2 = class PopStarTest extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "content", _descriptor, this);
        }

        start() {
          if (!gAppConfig.testing) {
            this.node.destroy();
            return;
          }

          let arrTests = Object.getOwnPropertyNames(tests);

          for (let i = 0; i < arrTests.length; i++) {
            const e = arrTests[i];
            let item = i < this.content.children.length ? this.content.children[i] : instantiate(this.content.children[0]);
            item.parent = this.content;
            item.getComponent(Label).string = e;
            gAppUtils.bindClick(item, this.onItemClick, this, e);
          }

          this.content.active = bShowing;
        }

        update(deltaTime) {}

        onToggleClick() {
          bShowing = !bShowing;
          this.content.active = bShowing;
        }

        onItemClick(strItem) {
          log(`onItemClick(${strItem})`);

          if (strItem == tests.autoPlay) {
            gPopGrid.autoErase();
          } else if (strItem == tests.showRetryDialog) {
            gPopUI.showRetryDialog();
          } else if (strItem == tests.showGoodJobs) {
            gPopEffect.playGoodJobEffect(randomRangeInt(7, 40));
          } else if (strItem == tests.showTargetClear) {
            gPopEffect.playTargetClearEffect(); // gPopGame.targetCleared.active = true;
          } else if (strItem == tests.showHighScore) {
            gPopEffect.playNewHighScoreEffect(); // gPopGame.targetCleared.active = true;
          } else if (strItem == tests.showTips) {
            gAppUI.showTips("Hello");
          } else if (strItem == tests.showIntertitial) {
            gPopUI.showInterstitial();
          } else if (strItem == tests.showIntro) {
            gPopUI.showStageIntro();
          }
        }

      }, _descriptor = _applyDecoratedDescriptor(_class2.prototype, "content", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/PopUI.ts", ['cc', './App.ts', './Pop.ts', './PopGameHelpUI.ts', './PopMagicCollectUI.ts', './PopSettingUI.ts', './PopConfirmDialogUI.ts', './PopResultUI.ts', './PopRetryDialogUI.ts', './PopStageIntroUI.ts', './PopGameOverUI.ts', './PopMagicStoreUI.ts', './PopInterstitialUI.ts', './gAppConstant.ts', './AppCoinInfo.ts'], function (exports) {
  var cclegacy, Component, log, js, error, _decorator, gAppHelper, gAppDirector, gPopRes, gPop, gPopGrid, gPopGame, PopGameHelpUI, PopMagicCollectUI, PopSettingUI, PopConfirmDialogUI, PopResultUI, PopRetryDialogUI, PopStageIntroUI, PopGameOverUI, PopMagicStoreUI, PopInterstitialUI, SCENE_HOME, AppCoinInfo;

  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      Component = module.Component;
      log = module.log;
      js = module.js;
      error = module.error;
      _decorator = module._decorator;
    }, function (module) {
      gAppHelper = module.gAppHelper;
      gAppDirector = module.gAppDirector;
    }, function (module) {
      gPopRes = module.gPopRes;
      gPop = module.gPop;
      gPopGrid = module.gPopGrid;
      gPopGame = module.gPopGame;
    }, function (module) {
      PopGameHelpUI = module.PopGameHelpUI;
    }, function (module) {
      PopMagicCollectUI = module.PopMagicCollectUI;
    }, function (module) {
      PopSettingUI = module.PopSettingUI;
    }, function (module) {
      PopConfirmDialogUI = module.PopConfirmDialogUI;
    }, function (module) {
      PopResultUI = module.PopResultUI;
    }, function (module) {
      PopRetryDialogUI = module.PopRetryDialogUI;
    }, function (module) {
      PopStageIntroUI = module.PopStageIntroUI;
    }, function (module) {
      PopGameOverUI = module.PopGameOverUI;
    }, function (module) {
      PopMagicStoreUI = module.PopMagicStoreUI;
    }, function (module) {
      PopInterstitialUI = module.PopInterstitialUI;
    }, function (module) {
      SCENE_HOME = module.SCENE_HOME;
    }, function (module) {
      AppCoinInfo = module.AppCoinInfo;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "66c97hvWZtHjbLia8Zt2m0Z", "PopUI", undefined);

      const {
        ccclass,
        property
      } = _decorator;
      let PopUI = exports('PopUI', (_dec = ccclass('PopUI'), _dec(_class = class PopUI extends Component {
        instantiateComponent(classConstructor) {
          log(`AppUI.instantiateComponent()`);
          let prefabName = js.getClassName(classConstructor);
          let prefab = gPopRes[prefabName];

          if (!prefab) {
            error(`!prefab!!!${js.getClassName(this)}:${prefabName}`);
            return;
          }

          return gAppHelper.instantiateComponent(prefab, classConstructor);
        }

        showResult() {
          let comp = this.instantiateComponent(PopResultUI);
          comp.node.parent = gPop.node;
        }

        showRetryDialog() {
          let comp = this.instantiateComponent(PopRetryDialogUI);
          comp.node.parent = gPop.node;
        }

        showConfirmDialog(funcConfirm, funcClose) {
          let comp = this.instantiateComponent(PopConfirmDialogUI);
          comp.setParams(funcConfirm, funcClose);
          comp.node.parent = gPop.node;
        }

        showStageIntro(funcReady) {
          // gPopGrid.node.active = true;
          // return;
          this.scheduleOnce(() => {
            // let nodeNew = instantiate(gPopRes.prefabStageIntro);
            // let comp = nodeNew.getComponent(PopStageIntro);
            // comp.show(() => {
            //     // gPopGrid.node.active = true;
            //     // this.showBannerAd();
            // });
            // nodeNew.parent = gPop.node;
            let comp = this.instantiateComponent(PopStageIntroUI);
            comp.setParams(() => {
              gPopGrid.node.active = true;
            });
            comp.node.parent = gPop.node;
          }, 0.5);
        }

        showGameHelp() {
          let comp = this.instantiateComponent(PopGameHelpUI);
          comp.node.parent = gPop.node;
        }

        showGameOver() {
          let funcComplete = () => {
            // gAppViewMgr.loadView(VIEW.HomeView); 
            gAppDirector.loadScene(SCENE_HOME);
          };

          let comp = this.instantiateComponent(PopGameOverUI);
          comp.setParams(funcComplete);
          comp.node.parent = gPop.node;
        }

        showMagicStoreUI(magicId, count, invoker) {
          let comp = this.instantiateComponent(PopMagicStoreUI);
          comp.setParams(magicId, count, invoker);
          comp.node.parent = gPop.node;
        }

        showInterstitial(levelDelta) {
          // gPopGame.hideUINodes();
          gPopGame.hideDecorateNodes();
          AppCoinInfo.instance.node.active = false;
          let comp = this.instantiateComponent(PopInterstitialUI);
          levelDelta && (comp.levelDelta = levelDelta);
          comp.node.parent = gPop.node;
        }

        showMagicCollect(magicId, count, invoker, funcComplete) {
          let comp = this.instantiateComponent(PopMagicCollectUI);
          comp.setParams(magicId, count, invoker, funcComplete);
          comp.node.parent = gPop.node;
        }

        showSetting() {
          let comp = this.instantiateComponent(PopSettingUI);
          comp.node.parent = gPop.node;
        }

      }) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/PopView.ts", ['cc', './Pop.ts'], function (exports) {
  var cclegacy, Component, _decorator, gPopUI, gPopGame;

  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      Component = module.Component;
      _decorator = module._decorator;
    }, function (module) {
      gPopUI = module.gPopUI;
      gPopGame = module.gPopGame;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "88971rvEX9Krr8Bm4oawd6p", "PopView", undefined);

      const {
        ccclass,
        property
      } = _decorator;
      let PopView = exports('PopView', (_dec = ccclass('PopView'), _dec(_class = class PopView extends Component {
        // static instance:PopView = null;
        // static bundle:AssetManager.Bundle = null;
        // static readonly bundleName = "popstar";
        // static readonly bundlePrefabPath = "prefab/PopView";
        start() {}

        onPauseClick() {
          // PopSettingUI.create();
          gPopUI.showSetting();
        }

        onHomeClick() {
          gPopGame.goHome();
        }

        onGameHelpClick() {
          // PopGameHelpUI.create();
          gPopUI.showGameHelp();
        } // protected static _loadView(onComplete?:Function){
        //     let func = ()=>{
        //         PopView.bundle.load(PopView.bundlePrefabPath, (err: Error, data: Prefab) => {
        //             if(err){
        //                 warn(`PopView.bundle.load(${PopView.bundlePrefabPath}) error!`);
        //                 return;
        //             }
        //             onComplete && onComplete(data);
        //         })
        //     }
        //     if(PopView.bundle){
        //         func();
        //     }else{
        //         assetManager.loadBundle(PopView.bundleName, (err: Error, data: AssetManager.Bundle) => {
        //             if (err) {
        //                 warn(`loadBundle(${PopView.bundleName}), error!`);
        //                 return;
        //             }
        //             PopView.bundle = data;
        //             func();
        //         })
        //     }
        // }
        // static preloadView(onComplete?:Function){
        //     PopView._loadView(onComplete);
        // }
        // static loadView(onComplete?:Function){
        //     PopView._loadView((data:Prefab)=>{
        //         if(PopView.instance && PopView.instance.isValid){
        //             PopView.instance.node.destroy();
        //             PopView.instance = null;
        //         }
        //         let clone = instantiate(data);
        //         clone.parent = find("Canvas");
        //         onComplete && onComplete();
        //     })
        // }


      }) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/RotateForever.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _initializerDefineProperty, cclegacy, _decorator, Component, tween;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
      tween = module.tween;
    }],
    execute: function () {
      var _dec, _class, _class2, _descriptor;

      cclegacy._RF.push({}, "c27b3N4TSNEDoRiM+2lMWPq", "RotateForever", undefined);

      const {
        ccclass,
        property
      } = _decorator;
      let RotateForever = exports('RotateForever', (_dec = ccclass('RotateForever'), _dec(_class = (_class2 = class RotateForever extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "rotateAnglePerSecond", _descriptor, this);
        }

        start() {
          this.scheduleOnce(() => {
            tween(this.node).by(1, {
              angle: this.rotateAnglePerSecond
            }).repeatForever().start();
          });
        }

        update(deltaTime) {}

      }, _descriptor = _applyDecoratedDescriptor(_class2.prototype, "rotateAnglePerSecond", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 30;
        }
      }), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/StringFormat.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "3389exqH/lN1qME6YDtEF+x", "StringFormat", undefined);
      /**
       * 数值格式化函数, 通过语义解析自动设置值的范围
       *     //整数
       * 1:def(0)//显示一个默认值
       */


      class StringFormat {
        deal(value, format) {
          if (format === '') return value;
          format = format.toLowerCase().trim(); //不区分大小

          let match_func = format.match(/^[a-z|A-Z]+/gi); //匹配到 format 中的 函数名

          let match_num = format.match(/\d+$/gi); //匹配到 format 中的参数

          let func = '';
          let num = 0;
          let res = '';
          if (match_func) func = match_func[0];
          if (match_num) num = parseInt(match_num[0]);

          if (typeof value == 'number') {
            switch (func) {
              case 'int':
                res = this.int(value);
                break;

              case 'fix':
                res = this.fix(value, num);
                break;

              case 'kmbt':
                res = this.KMBT(value);
                break;

              case 'per':
                res = this.per(value, num);
                break;

              case 'sep':
                res = this.sep(value);
                break;
            }
          } else {
            switch (func) {
              case 'limit':
                res = this.limit(value, num);
                break;
            }

            res = value;
          }

          return res;
        } //将数字按分号显示


        sep(value) {
          let num = Math.round(value).toString();
          return num.replace(new RegExp('(\\d)(?=(\\d{3})+$)', 'ig'), "$1,");
        } //将数字按分显示 00:00 显示 （ms制）


        time_m(value) {//todo
        } //将数字按秒显示 00:00:00 显示 （ms制）


        time_s(value) {//todo
        } //将数字按 0:00:00:000 显示 （ms制）


        time_ms(value) {//todo
        } //将时间戳显示为详细的内容


        timeStamp(value) {
          //todo
          return new Date(value).toString();
        }
        /** [value:int] 将取值0~1 变成 1~100,可以指定修饰的小数位数 */


        per(value, fd) {
          return Math.round(value * 100).toFixed(fd);
        }
        /** [value:int] 将取值变成整数 */


        int(value) {
          return Math.round(value);
        }
        /** [value:fix2]数值转换为小数*/


        fix(value, fd) {
          return value.toFixed(fd);
        }
        /** [value:limit3]字符串长度限制 */


        limit(value, count) {
          return value.substring(0, count);
        }
        /** 将数字缩短显示为KMBT单位 大写,目前只支持英文 */


        KMBT(value, lang = 'en') {
          //10^4=万, 10^8=亿,10^12=兆,10^16=京，
          let counts = [1000, 1000000, 1000000000, 1000000000000];
          let units = ['', 'K', 'M', 'B', 'T'];
          return this.compressUnit(value, counts, units, 2);
        } //压缩任意单位的数字，后缀加上单位文字


        compressUnit(value, valueArr, unitArr, fixNum = 2) {
          let counts = valueArr;
          let units = unitArr;
          let res = "";
          let index;

          for (index = 0; index < counts.length; index++) {
            const e = counts[index];

            if (value < e) {
              if (index > 0) {
                res = (value / counts[index - 1]).toFixed(fixNum);
              } else {
                res = value.toFixed(0);
              }

              break;
            }
          }

          return res + units[index];
        }

      }
      /**格式化处理函数 */


      let StringFormatFunction = exports('StringFormatFunction', new StringFormat());

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/TapAndHold.ts", ['cc'], function (exports) {
  var cclegacy, _decorator, Component, v2, Node, sys;

  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
      v2 = module.v2;
      Node = module.Node;
      sys = module.sys;
    }],
    execute: function () {
      var _dec, _class, _class2;

      cclegacy._RF.push({}, "bb8efNpmZVGypnnP+75rWiT", "TapAndHold", undefined);

      const {
        ccclass,
        property
      } = _decorator;
      let TapAndHold = exports('default', (_dec = ccclass('TapAndHold'), _dec(_class = (_class2 = class TapAndHold extends Component {
        constructor(...args) {
          super(...args);
          this.touchingIndex = -1;
          this.touchingPos = v2();
          this.touchingTime = 0;
        } // LIFE-CYCLE CALLBACKS:
        // onLoad () {}


        start() {
          this.node.on(Node.EventType.TOUCH_START, this.onTouchStart, this);
          this.node.on(Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
          this.node.on(Node.EventType.TOUCH_END, this.onTouchEnd, this);
          this.node.on(Node.EventType.TOUCH_CANCEL, this.onTouchCancel, this);
        }

        checkTapAndHold() {
          console.log("checkTapAndHold:touchIndex:" + this.touchingIndex);

          if (this.touchingIndex == -1) {
            this.unschedule(this.checkTapAndHold);
          } else {
            let now = sys.now();

            if (now - this.touchingTime > 600) {
              console.log("onTapAndHoldOnGem:touchIndex:" + this.touchingIndex);
              this.node.emit(TapAndHold.EVT_TAP_AND_HOLD, this.node, this.touchingPos);
              this.exitCheckTapAndHold();
            }
          }
        }

        startCheckTapAndHold() {
          this.touchingIndex = 1;
          this.touchingTime = sys.now();
          this.schedule(this.checkTapAndHold, 0.1);
        }

        exitCheckTapAndHold() {
          console.log("exitTapAndHold");
          this.touchingIndex = -1;
          this.touchingPos = v2();
        }

        onTouchStart(e) {
          //let loc = e.getLocation();
          let pos = e.getUILocation(); //this.node.convertToNodeSpaceAR(loc);

          this.touchingPos = pos;
          this.startCheckTapAndHold();
        }

        onTouchMove(e) {
          let pos = e.getUILocation(); // this.node.convertToNodeSpaceAR(e.touch.getLocation());

          let delta = pos.subtract(this.touchingPos);

          if (Math.abs(delta.x) > 20 || Math.abs(delta.y) > 20) {
            this.exitCheckTapAndHold();
          }
        }

        onTouchEnd(e) {
          if (this.touchingIndex == -1) {
            //e.stopPropagationImmediate();
            e.propagationImmediateStopped = true;
            console.log("onTouchEnd():e.stopPropagationImmediate();");
          }

          this.exitCheckTapAndHold();
        }

        onTouchCancel(e) {
          this.exitCheckTapAndHold();
        }

      }, _class2.EVT_TAP_AND_HOLD = "EVT_TAP_AND_HOLD", _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ViewModel.ts", ['cc', './JsonOb.ts'], function (exports) {
  var cclegacy, director, JsonOb;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      director = module.director;
    }, function (module) {
      JsonOb = module.JsonOb;
    }],
    execute: function () {
      cclegacy._RF.push({}, "e6c35Yz+BpGIJU5OOuSNZ0y", "ViewModel", undefined);

      const VM_EMIT_HEAD = 'VC:'; //通过 .  路径 设置值

      function setValueFromPath(obj, path, value, tag = '') {
        let props = path.split('.');

        for (let i = 0; i < props.length; i++) {
          const propName = props[i];

          if (propName in obj === false) {
            console.error('[' + propName + '] not find in ' + tag + '.' + path);
            break;
          }

          if (i == props.length - 1) {
            obj[propName] = value;
          } else {
            obj = obj[propName];
          }
        }
      } //通过 . 路径 获取值


      function getValueFromPath(obj, path, def, tag = '') {
        let props = path.split('.');

        for (let i = 0; i < props.length; i++) {
          const propName = props[i];

          if (propName in obj === false) {
            console.error('[' + propName + '] not find in ' + tag + '.' + path);
            return def;
          }

          obj = obj[propName];
        }

        if (obj === null || typeof obj === "undefined") obj = def; //如果g == null 则返回一个默认值

        return obj;
      }
      /**
       * ModelViewer 类
       */


      class ViewModel {
        constructor(data, tag) {
          this.$data = void 0; //索引值用的标签

          this._tag = "";
          /**激活状态, 将会通过 cc.director.emit 发送值变动的信号, 适合需要屏蔽的情况 */

          this.active = true;
          /**是否激活根路径回调通知, 不激活的情况下 只能监听末端路径值来判断是否变化 */

          this.emitToRootPath = false;
          new JsonOb(data, this._callback.bind(this));
          this.$data = data;
          this._tag = tag;
        } //回调函数 请注意 回调的 path 数组是 引用类型，禁止修改


        _callback(n, o, path) {
          if (this.active == true) {
            let name = VM_EMIT_HEAD + this._tag + '.' + path.join('.');
            director.emit(name, n, o, [this._tag].concat(path)); //通知末端路径

            if (this.emitToRootPath) director.emit(VM_EMIT_HEAD + this._tag, n, o, path); //通知主路径

            if (path.length >= 2) {
              for (let i = 0; i < path.length - 1; i++) {
                const e = path[i]; //cc.log('中端路径');
              }
            }
          }
        } //通过路径设置数据的方法


        setValue(path, value) {
          setValueFromPath(this.$data, path, value, this._tag);
        } //获取路径的值


        getValue(path, def) {
          return getValueFromPath(this.$data, path, def, this._tag);
        }

      }
      /**
       * VM 对象管理器(工厂)
       */


      class VMManager {
        constructor() {
          /**静态数组，保存创建的 mv 组件 */
          this._mvs = [];
          this.EMIT_HEAD = VM_EMIT_HEAD;
          this.setObjValue = setValueFromPath;
          this.getObjValue = getValueFromPath;
        }
        /**
         * 绑定一个数据，并且可以由VM所管理
         * @param data 需要绑定的数据
         * @param tag 对应该数据的标签(用于识别为哪个VM，不允许重复)
         * @param activeRootObject 激活主路径通知，可能会有性能影响，一般不使用
         */


        add(data, tag = 'global', activeRootObject = false) {
          console.log("VM.add() start,tag:", tag, ";data:", data);
          let vm = new ViewModel(data, tag);

          let has = this._mvs.find(v => v.tag === tag);

          if (tag.includes('.')) {
            console.error('cant write . in tag:', tag);
            return;
          }

          if (has) {
            console.error('already set VM tag:' + tag);
            return;
          }

          vm.emitToRootPath = activeRootObject;

          this._mvs.push({
            tag: tag,
            vm: vm
          });

          console.log("VM.add() end;");
        }
        /**
         * 移除并且销毁 VM 对象
         * @param tag 
         */


        remove(tag) {
          let index = this._mvs.findIndex(v => v.tag === tag);

          if (index >= 0) this._mvs.splice(index, 1);
        }
        /**
         * 获取绑定的数据
         * @param tag 数据tag
         */


        get(tag) {
          let res = this._mvs.find(v => v.tag === tag);

          if (res == null) {
            console.error('cant find VM from:', tag);
          } else {
            return res.vm;
          }
        }
        /**
         * 通过全局路径,而不是 VM 对象来 设置值
         * @param path - 全局取值路径
         * @param value - 需要增加的值
         */


        addValue(path, value) {
          path = path.trim(); //防止空格,自动剔除

          let rs = path.split('.');

          if (rs.length < 2) {
            console.error('Cant find path:' + path);
          }

          let vm = this.get(rs[0]);

          if (!vm) {
            console.error('Cant Set VM:' + rs[0]);
            return;
          }

          let resPath = rs.slice(1).join('.');
          vm.setValue(resPath, vm.getValue(resPath) + value);
        }
        /**
         * 通过全局路径,而不是 VM 对象来 获取值
         * @param path - 全局取值路径
         * @param def - 如果取不到值的返回的默认值
         */


        getValue(path, def) {
          path = path.trim(); //防止空格,自动剔除

          let rs = path.split('.');

          if (rs.length < 2) {
            console.error('Get Value Cant find path:' + path);
            return;
          }

          let vm = this.get(rs[0]);

          if (!vm) {
            console.error('Cant Get VM:' + rs[0]);
            return;
          }

          return vm.getValue(rs.slice(1).join('.'), def);
        }
        /**
         * 通过全局路径,而不是 VM 对象来 设置值
         * @param path - 全局取值路径
         * @param value - 需要设置的值
         */


        setValue(path, value) {
          path = path.trim(); //防止空格,自动剔除

          let rs = path.split('.');

          if (rs.length < 2) {
            console.error('Set Value Cant find path:' + path);
            return;
          }

          let vm = this.get(rs[0]);

          if (!vm) {
            console.error('Cant Set VM:' + rs[0]);
            return;
          }

          vm.setValue(rs.slice(1).join('.'), value);
        }
        /**等同于 cc.director.on */


        bindPath(path, callback, target, useCapture) {
          path = path.trim(); //防止空格,自动剔除

          if (path == '') {
            console.error(target.node.name, '节点绑定的路径为空');
            return;
          }

          if (path.split('.')[0] === '*') {
            console.error(path, '路径不合法,可能错误覆盖了 VMParent 的onLoad 方法, 或者父节点并未挂载 VMParent 相关的组件脚本');
            return;
          }

          director.on(VM_EMIT_HEAD + path, callback, target, useCapture);
        }
        /**等同于 cc.director.off */


        unbindPath(path, callback, target) {
          path = path.trim(); //防止空格,自动剔除

          if (path.split('.')[0] === '*') {
            console.error(path, '路径不合法,可能错误覆盖了 VMParent 的onLoad 方法, 或者父节点并未挂载 VMParent 相关的组件脚本');
            return;
          }

          director.off(VM_EMIT_HEAD + path, callback, target);
        }
        /**冻结所有标签的 VM，视图将不会受到任何信息 */


        inactive() {
          this._mvs.forEach(mv => {
            mv.vm.active = false;
          });
        }
        /**激活所有标签的 VM*/


        active() {
          this._mvs.forEach(mv => {
            mv.vm.active = true;
          });
        }

      } //   整数、小数、时间、缩写

      /**
       * VM管理对象,使用文档: 
       *  https://github.com/wsssheep/cocos_creator_mvvm_tools/blob/master/docs/ViewModelScript.md
       */


      let VM = exports('VM', new VMManager());

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/VMBase.ts", ['cc', './ViewModel.ts'], function (exports) {
  var cclegacy, Component, _decorator, VM;

  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      Component = module.Component;
      _decorator = module._decorator;
    }, function (module) {
      VM = module.VM;
    }],
    execute: function () {
      var _class;

      cclegacy._RF.push({}, "20cb9U+EBlFFaM7zMLMEEl6", "VMBase", undefined);

      const {
        ccclass,
        property
      } = _decorator;
      /**
       * watchPath 的基础，只提供绑定功能 和 对应的数据更新函数
       */

      let VMBase = exports('default', ccclass(_class = class VMBase extends Component {
        constructor(...args) {
          super(...args);
          /** watch 单路径  */

          this.watchPath = '';
          /** watch 多路径 */

          this.watchPathArr = [];
          /**是否启用模板多路径模式 */

          this.templateMode = false;
          /**储存模板多路径的值 */

          this.templateValueArr = [];
          /**VM管理 */

          this.VM = VM;
        }
        /**
         * 如果需要重写onLoad 方法，请根据顺序调用 super.onLoad()，执行默认方法
         */


        onLoad() {
          //提前拆分、并且解析路径
          let paths = this.watchPath.split('.');

          for (let i = 1; i < paths.length; i++) {
            const p = paths[i]; //如果发现了路径使用了 * ，则自动去自己的父节点查找自己所在 index 值

            if (p == '*') {
              let index = this.node.getParent().children.findIndex(n => n === this.node);
              if (index <= 0) index = 0;
              paths[i] = index.toString();
              break;
            }
          } //替换掉原路径


          this.watchPath = paths.join('.'); //提前进行路径数组 的 解析

          let pathArr = this.watchPathArr;

          if (pathArr.length >= 1) {
            for (let i = 0; i < pathArr.length; i++) {
              const path = pathArr[i];
              let paths = path.split('.');

              for (let i = 1; i < paths.length; i++) {
                const p = paths[i];

                if (p == '*') {
                  let index = this.node.getParent().children.findIndex(n => n === this.node);
                  if (index <= 0) index = 0;
                  paths[i] = index.toString();
                  break;
                }
              }

              this.watchPathArr[i] = paths.join('.');
            }
          }

          if (this.watchPath == '' && this.watchPathArr.join('') == '') {
            console.log('可能未设置路径的节点:', this.node.getParent().name + '.' + this.node.name);
          }
        }

        onEnable() {
          if (this.templateMode) {
            this.setMultPathEvent(true);
          } else if (this.watchPath != '') {
            this.VM.bindPath(this.watchPath, this.onValueChanged, this);
          }

          this.onValueInit(); //激活时,调用值初始化
        }

        onDisable() {
          if (this.templateMode) {
            this.setMultPathEvent(false);
          } else if (this.watchPath != '') {
            this.VM.unbindPath(this.watchPath, this.onValueChanged, this);
          }
        } //多路径监听方式


        setMultPathEvent(enabled = true) {
          let arr = this.watchPathArr;

          for (let i = 0; i < arr.length; i++) {
            const path = arr[i];

            if (enabled) {
              this.VM.bindPath(path, this.onValueChanged, this);
            } else {
              this.VM.unbindPath(path, this.onValueChanged, this);
            }
          }
        }

        onValueInit() {//虚方法
        }

        onValueChanged(n, o, pathArr) {}

      }) || _class);

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/VMLabel.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './VMBase.ts', './StringFormat.ts'], function (exports) {
  var _applyDecoratedDescriptor, _initializerDefineProperty, cclegacy, CCString, _decorator, Label, VMBase, StringFormatFunction;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      CCString = module.CCString;
      _decorator = module._decorator;
      Label = module.Label;
    }, function (module) {
      VMBase = module.default;
    }, function (module) {
      StringFormatFunction = module.StringFormatFunction;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;

      cclegacy._RF.push({}, "b6c61mwNepBdJLfuUvnLdcN", "VMLabel", undefined);

      const {
        ccclass,
        property,
        menu,
        executeInEditMode,
        help
      } = _decorator;
      const LABEL_TYPE = {
        CC_LABEL: 'cc.Label',
        CC_RICH_TEXT: 'cc.RichText',
        CC_EDIT_BOX: 'cc.EditBox'
      };
      /**
       *  [VM-Label]
       *  专门处理 Label 相关 的组件，如 ccLabel,ccRichText,ccEditBox
       *  可以使用模板化的方式将数据写入,可以处理字符串格式等
       *  todo 加入stringFormat 可以解析转换常见的字符串格式
       */

      let VMLabel = exports('default', (_dec = menu('ModelViewer/VM-Label(文本VM)'), _dec2 = help('https://github.com/wsssheep/cocos_creator_mvvm_tools/blob/master/docs/VMLabel.md'), _dec3 = property({
        visible: function () {
          return true;
        }
      }), _dec4 = property({
        //type:cc.Enum(LABEL_TYPE),
        readonly: true
      }), _dec5 = property({
        tooltip: '是否启用模板代码,只能在运行时之前设置,\n将会动态解析模板语法 {{0}},并且自动设置监听的路径'
      }), _dec6 = property({
        type: [CCString] // visible: function () { return this.templateMode === true }

      }), ccclass(_class = executeInEditMode(_class = _dec(_class = _dec2(_class = (_class2 = class VMLabel extends VMBase {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "watchPath", _descriptor, this);

          _initializerDefineProperty(this, "labelType", _descriptor2, this);

          _initializerDefineProperty(this, "templateMode", _descriptor3, this); //按照匹配参数顺序保存的 path 数组 （固定）


          _initializerDefineProperty(this, "watchPathArr", _descriptor4, this); //按照路径参数顺序保存的 值的数组（固定）


          this.templateValueArr = []; //保存着字符模板格式的数组 (只会影响显示参数)

          this.templateFormatArr = [];
          this.originText = "";
        } // LIFE-CYCLE CALLBACKS:


        onRestore() {
          this.checkLabel();
        }

        onLoad() {
          super.onLoad();
          this.checkLabel();
          {
            if (this.templateMode) {
              this.originText = this.getLabelValue();
              this.parseTemplate();
            }
          }
        }

        start() {
          this.onValueInit();
        } //解析模板 获取初始格式化字符串格式 的信息


        parseTemplate() {
          let regexAll = /\{\{(.+?)\}\}/g; //匹配： 所有的{{value}}

          let regex = /\{\{(.+?)\}\}/; //匹配： {{value}} 中的 value

          let res = this.originText.match(regexAll); //匹配结果数组

          if (res == null) return;

          for (let i = 0; i < res.length; i++) {
            const e = res[i];
            let arr = e.match(regex);
            let matchName = arr[1]; //let paramIndex = parseInt(matchName)||0;

            let matchInfo = matchName.split(':')[1] || '';
            this.templateFormatArr[i] = matchInfo;
          } //监听对应的数值变化
          //this.setMultPathEvent(true);

        }
        /**获取解析字符串模板后得到的值 */


        getReplaceText() {
          if (!this.originText) return "";
          let regexAll = /\{\{(.+?)\}\}/g; //匹配： 所有的{{value}}

          let regex = /\{\{(.+?)\}\}/; //匹配： {{value}} 中的 value

          let res = this.originText.match(regexAll); //匹配结果数组 [{{value}}，{{value}}，{{value}}]

          if (res == null) return ''; //未匹配到文本

          let str = this.originText; //原始字符串模板 "name:{{0}} 或 name:{{0:fix2}}"

          for (let i = 0; i < res.length; i++) {
            const e = res[i];
            let getValue;
            let arr = e.match(regex); //匹配到的数组 [{{value}}, value]

            let indexNum = parseInt(arr[1] || '0') || 0; //取出数组的 value 元素 转换成整数

            let format = this.templateFormatArr[i]; //格式化字符 的 配置参数

            getValue = this.templateValueArr[indexNum];
            str = str.replace(e, this.getValueFromFormat(getValue, format)); //从路径缓存值获取数据
          }

          return str;
        }
        /** 格式化字符串 */


        getValueFromFormat(value, format) {
          return StringFormatFunction.deal(value, format);
        }
        /**初始化获取数据 */


        onValueInit() {
          //更新信息
          if (this.templateMode === false) {
            this.setLabelValue(this.VM.getValue(this.watchPath)); //
          } else {
            let max = this.watchPathArr.length;

            for (let i = 0; i < max; i++) {
              this.templateValueArr[i] = this.VM.getValue(this.watchPathArr[i], '?');
            }

            this.setLabelValue(this.getReplaceText()); // 重新解析
          }
        }
        /**监听数据发生了变动的情况 */


        onValueChanged(n, o, pathArr) {
          if (this.templateMode === false) {
            this.setLabelValue(n);
          } else {
            let path = pathArr.join('.'); //寻找缓存位置

            let index = this.watchPathArr.findIndex(v => v === path);

            if (index >= 0) {
              //如果是所属的路径，就可以替换文本了
              this.templateValueArr[index] = n; //缓存值

              this.setLabelValue(this.getReplaceText()); // 重新解析文本
            }
          }
        }

        setLabelValue(value) {
          this.getComponent(Label).string = value + '';
        }

        getLabelValue() {
          return this.getComponent(Label).string;
        }

        checkLabel() {
          let checkArray = ['cc.Label', 'cc.RichText', 'cc.EditBox'];

          for (let i = 0; i < checkArray.length; i++) {
            const e = checkArray[i];
            let comp = this.node.getComponent(e);

            if (comp) {
              this.labelType = e;
              return true;
            }
          }

          console.error('没有挂载任何label组件');
          return false;
        } // update (dt) {}


      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "watchPath", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return "";
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "labelType", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return LABEL_TYPE.CC_LABEL;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "templateMode", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "watchPathArr", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      })), _class2)) || _class) || _class) || _class) || _class));

      cclegacy._RF.pop();
    }
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});