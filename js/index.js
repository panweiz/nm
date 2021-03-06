var vm = new Vue({
  el: "#intd",
  data: {
    novels:[
      {name:"飛劍問道",img:"https://i.imgur.com/rhaCNnf.jpg",content:"在這個世界，有狐仙、河神、水怪、大妖，也有求長生的修行者。 修行者們， 開法眼，可看妖魔鬼怪。煉一口飛劍，可千里殺敵。 千里眼、順風耳，更可探查四方。 秦府二公子‘秦云’，便是一位修行者……"},
      {name:"全職高手",img:"https://i.imgur.com/ckaj0Dr.jpg",content:"網游榮耀中被譽為教科書級別的頂尖高手，因為種種原因遭到俱樂部的驅逐，離開職業圈的他寄身于一家網吧成了一個小小的網管，但是，擁有十年游戲經驗的他，在榮耀新開的第十區重新投入了游戲，帶著對往昔的回憶，和一把未完成的自制武器，開始了重返巔峰之路。"},
      {name:"長生界",img:"https://i.imgur.com/v8sW6qx.jpg",content:"世上誰人能不死？ 任你風華絕代，豔冠天下，到頭來也是紅粉骷髏；任你一代天驕，坐擁萬裏江山，到頭來也終將化成一抔黃土。"},
      {name:"元尊",img:"https://i.imgur.com/QU5E01o.jpg",content:"天地為爐，萬物為銅，陰陽為炭，造化為工。 氣運之爭，蟒雀吞龍。 究竟是蟒雀為尊，還是圣龍崛起，凌駕眾生？這是氣掌乾坤的世界，磅礴宏偉，一氣可搬山，可倒海，可翻天，可掌陰陽乾坤。 世間源氣分九品，三品稱玄，六品成天，九品號圣。吾有一口玄黃氣，可吞天地日月…"},
      {name:"斗破蒼穹",img:"https://i.imgur.com/G6MoPOf.jpg",content:"這裡是屬于斗氣的世界，沒有花俏艷麗的魔法，有的，僅僅是繁衍到巔峰的斗氣！"},
      {name:"大主宰",img:"https://i.imgur.com/syX1QHu.jpg",content:"大千世界，位面交匯，萬族林立，群雄薈萃，一位位來自下位面的天之至尊，在這無盡世界，演繹著令人向往的傳奇，追求著那主宰之路。無盡火域，炎帝執掌，萬火焚蒼穹。武境之內，武祖之威，震懾乾坤。西天之殿，百戰之皇，戰威無可敵。北荒之丘，萬墓之地，不死之主鎮天地。"},
      {name:"萬古劍神",img:"https://i.imgur.com/PhzZK5L.jpg",content:"天下最風流的劍客，名曰沈三公子。天下最有名的劍法，喚作萬藏劍經。天下最強大最神秘的地方，是為棄劍山莊。"}
    ],
    movies:[
      {name:"移動世界",img:"https://i.imgur.com/DBeNj9s.jpg",content:"戴維在一次與同學爭執時，意外發現穿梭空間的方法，他可以洞穿空間、瞬間移動，手法漸漸任意自如的他，藉此尋找害死母親的兇手。不過，戴維在地球穿梭移動的行蹤招致國安局監控，也引來另一名同樣擁有這種能力的少年現身，雖然揭露了能力的來源，也引來另一股撲殺戴維的勢力……"},
      {name:"全面啟動",img:"https://i.imgur.com/3s5PXHK.jpg",content:"唐姆·柯柏是一名「盜夢者」，與搭檔亞瑟利用潛意識進入別人夢境竊取商業機密。於一次任務中，柯柏與亞瑟入侵日本國際企業老闆齊藤的夢境意識，但柯柏的已故妻子茉兒於夢中出現使任務失敗。齊藤事後透露自己是有意讓他們潛入以考驗二人技術，並安排了一個任務予他們……"},
      {name:"門徒",img:"https://i.imgur.com/qFNVf3f.jpg",content:"昆哥表面上是個小小的電器行老闆，實際上卻是香港最大的海洛因毒梟。香港警隊毒品調查科探員阿力花了近七年時間臥底，終於成為昆哥的左右手，務求搗破這個販毒集團。可是這位行事謹慎的毒梟，只讓阿力管理送貨，無涉其他販毒事項。直至昆哥臥病醫院時，遇上毒品製煉出現問題，不得已要阿力連夜帶他到煉毒工廠，阿力才得知工廠所在，並進一步取得昆哥信任……"},
      {name:"鐘點戰",img:"https://i.imgur.com/BKoS99Z.jpg",content:"在未來的2169年，人類因基因工程的關係，出生時前臂上會有一個數位手錶。當每個人25歲後就不再老化，而數位手錶便會從當天起倒數一年，而倒數至零的時候，那人便會因「超時」死亡。在那裡，時間成為了貨幣，它用於支付日常開支，並能在人類之間或以膠囊轉移……"},
      {name:"白日夢冒險王",img:"https://i.imgur.com/OoGYcTT.jpg",content:"華特•米堤是一位《生活雜誌》的員工，但常常有各式各樣的白日夢。知名攝影師尚恩•歐康諾有一天送了一捲特別的底片作品，並特別說明希望有一張相片能夠成為「生活雜誌」最後一期的封面。華特在底片影像部門工作，而過去十六年來從未弄丟過一張相片，然而這次卻找不到這張所謂的25號底片，因此從未真正出去冒險過的華特，決定出門尋找尚恩，找回失蹤的25號底片……"},
      {name:"全民公敵",img:"https://i.imgur.com/P2FZkpW.jpg",content:"家庭幸福、前途光明的律師威爾史密斯，正當他為太太選購聖誕禮物時，與久未謀面的喬治城大學同學巧遇。這位同學深知性命危在旦夕，央求史密斯救他，在倉惶中拿了史密斯的名片後，便行色匆忙地逃跑了。就在他橫越馬路時，卻意外的發生車禍死亡。強沃特手下在其口袋中找出史密斯律師名片，乃鎖定史密斯並展開天羅地網的追緝，藉以奪回磁碟片，並殺人滅口……"},
      {name:"玩命關頭7",img:"https://i.imgur.com/JgbwcJX.jpg",content:"在唐老大和布萊恩重獲自由一年多後，他們擺脫暗無天日的亡命生活，卻發現這個家脫離現實。唐老大忙著和莉蒂重新培養感情，布萊恩則努力跟蜜雅和兒子適應郊區生活，泰吉和羅曼倒是實現花花公子的夢想，大肆慶祝得來不易的自由。可怕的是，他們都沒發現危機伺伏。英國特種部隊殺手戴克蕭，正準備為弟弟歐文蕭報仇。東京的韓哥先遭到謀殺，洛杉磯的哈柏緊接遭暗算。戴克蕭炸了唐老大的家……"},
      {name:"鋼鐵人3",img:"https://i.imgur.com/mMaPsu2.jpg",content:"這一次東尼•史塔克-鋼鐵人即將面臨的宿敵，掌控著無邊的法力。當史塔克的生活被敵人摧毀得支離破碎，他強忍悲痛開始搜尋幕後主使。這場峰迴路轉的旅程將測試史塔克真正的勇氣，他必須依靠才智及本能才能保護那些他最愛的人。隨著戰火的升級，史塔克也逐漸發現那個一直秘密困擾著他的問題的答案：到底是他塑造了鋼鐵人盔甲，還是鋼鐵人盔甲塑造了他？"}
    ],
    mix1: [
      {name:"99.9刑事律師",img:"https://i.imgur.com/apJD1En.jpg",content:"總是為賺不到錢的刑事案件辯護的貧窮律師深山大介，某日被國內數一數二的大型律師事務所‧斑目律師事務所挖角，成為公司中為了社會貢獻而成立的刑事事件部門的成員之一。部門主管佐田雖是民事的菁英律師，卻對刑事案件完全不感興趣。這三位性格各異的律師將一起挑戰99.9的高牆，為事實真相奔走奮鬥。"},
      {name:"王牌大律師",img:"https://i.imgur.com/v5Ogf8Y.jpg",content:"黛真知子是一個充滿著正義感、憑著大無畏的精神，一股腦兒向前衝的熱血新進律師。因為一次訴訟而認識法律界神話 — 古美門研介，一位毒舌、傲慢、自大，為了勝訴不擇手段，穿梭在法律灰色地帶但擁有著不敗紀錄的知名律師，此後並開始到古美門律師事務所工作。性格與想法完全地南轅北轍的兩人，在一次又一次的訴訟中不斷發生衝突，但同時又在法庭上攜手戰鬥。一對冤家拍擋緊守各自的信念，衝擊著日本司法界，要在公平與正義之間，還司法制度一個真面目。"},
      {name:"朝5晚9",img:"https://i.imgur.com/1Xrzmta.png",content:"對於海外連續劇相當憧憬的英語會話講師櫻庭潤子，在29歲生日將至之時，被爸爸媽媽出賣而去相親，但對方竟是位和尚。其後，為了讓男主角認清自己非寺廟新娘而搬去寺廟居住一個禮拜進行新娘修煉，但對於嫁給寺廟住持一事，與自己海外工作夢想和生活規劃差異太大，潤子因而抱持著否定態度，但星川卻對她展開了追求……"},
      {name:"詐欺遊戲",img:"https://i.imgur.com/40seajr.jpg",content:"大學生神崎直突然被牽扯進了一個1對1的一億日圓爭奪遊戲之中。若無法贏得這個依靠欺騙對手來獲取勝利的遊戲，她將會背負一大筆債務。為此事倍感頭疼的神崎直遇到了詐欺師秋山深一，並向他尋求幫助。"},
      {name:"空中急診英雄",img:"https://i.imgur.com/7T6VtzY.jpg",content:"按照翔陽大學附屬醫院急救中心的專門研修制度的要求，4名希望成為飛行醫生的年輕醫生到這裡實習。他們是對自己的醫療技術非常自信，而且敢於執著的向新醫療技術發起挑戰的藍澤；父親是有名醫大的教授，想把在航空醫療搶救中學到的知識帶回家鄉急救中心去的白石惠；還有學習態度積極不服輸的緋山美帆子；和小心謹慎卻有點愛慕虛榮的藤川一男。他們是在指導醫黑田等前輩的教導下，為了實現自己的夢想而努力乘著醫療直升機，在載送患者的途中實行急救的“flight doctor”。"}
    ],
    mix2: [
      {name:"孝利家民宿",img:"https://i.imgur.com/6bqMkVA.jpg",content:"李孝利與音樂家丈夫李尚順在韓國濟州島開設的民宿，並邀請IU擔任民宿職員。第二季由潤娥擔綱。節目事前透過官網發布，開放所有人申請，並由製作單位通知成功住宿者，節目每集將記錄民宿一方與入住房客所有發生的互動點滴與故事。"},
      {name:"Running Man",img:"https://i.imgur.com/sZIJMB0.jpg",content:"初期的遊戲設定是嘉賓與主持們被鎖於韓國著名地標進行遊戲，並需於其開始營業前逃出，經過幾輪遊戲後輸掉的成員，會被安排在人來人往的地點中接受尷尬的懲罰。之後取消輸家的懲罰，不定期給予勝者獎品，並且遊戲方式更改為先於各地進行任務，由勝出的成員或隊伍獲得對最終任務的有利提示或權力，而節目遊戲中最著名的環節就是緊張刺激的撕名牌戰。"}
    ]
  }
})

$(function(){
  // 預設顯示第一個 Tab
  var _showTab = 0;
  var $defaultLi = $('ul.tabs li').eq(_showTab).addClass('active');
  $($defaultLi.find('a').attr('href')).siblings().hide();
  
  // 當 li 頁籤被點擊時...
	// 若要改成滑鼠移到 li 頁籤就切換時, 把 click 改成 mouseover
  $('ul.tabs li').click(function(){
    // 找出 li 中的超連結 href(#id)
    var $this = $(this),
      _clickTab = $this.find('a').attr('href');
    // 把目前點擊到的 li 頁籤加上 .active
		// 並把兄弟元素中有 .active 的都移除 class
    $this.addClass('active').siblings('.active').removeClass('active');
    
    $(_clickTab).stop(false, true).fadeIn().siblings().hide();
    
    return false;
  }).find('a').focus(function(){
    this.blur();
  });
});