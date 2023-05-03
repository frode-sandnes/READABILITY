// By Frode Eika Sandnes, Oslo Metropolitan University, Oslo, Norway, July 2022

// This javascript file is included in the source of the page to be analyzed
// The code that is called before page load to connect things


// dictionaries

const SATwords = ["abject","aberration","abjure","abnegation","abrogate","abscond","abstruse","accede","accost","accretion","acumen","adamant","admonish","adumbrate","adverse","advocate","affluent",
	"aggrandize","alacrity","alias","ambivalent","amenable","amorphous","anachronistic","anathema","annex","antediluvian","antiseptic","apathetic","antithesis","apocryphal","approbation",
	"arbitrary","arboreal","arcane","archetypal","arrogate","ascetic","aspersion","assiduous","atrophy","bane","bashful","beguile",
	"bereft","blandishment","bilk","bombastic","cajole","callous","calumny","camaraderie","candor","capitulate","carouse","carp","caucus","cavort","circumlocution","circumscribe",
	"circumvent","clamor","cleave","cobbler","cogent","cognizant","commensurate","complement","compunction","concomitant","conduit","conflagration","congruity","connive","consign",
	"constituent","construe","contusion","contrite","contentious","contravene","convivial","corpulence","covet","cupidity","dearth","debacle","debauch","debunk","defunct","demagogue",
	"denigrate","derivative","despot","diaphanous","didactic","dirge","disaffected","discomfit","disparate","dispel","disrepute","divisive","dogmatic","dour","duplicity","duress",
	"eclectic","edict","ebullient","egregious","elegy","elicit","embezzlement","emend","emollient","empirical","emulate","enervate","enfranchise","engender","ephemeral","epistolary",
	"equanimity","equivocal","espouse","evanescent","evince","exacerbate","exhort","execrable","exigent","expedient","expiate","expunge","extraneous","extol","extant","expurgate",
	"fallacious","fatuous","fetter","flagrant","foil","forbearance","fortuitous","fractious","garrulous","gourmand","grandiloquent","gratuitous","hapless","hegemony","heterogenous",
	"iconoclast","idiosyncratic","impecunious","impetuous","impinge","impute","inane","inchoate","incontrovertible","incumbent","inexorable","inimical","injunction","inoculate","insidious",
	"instigate","insurgent","interlocutor","intimation","inure","invective","intransigent","inveterate","irreverence","knell","laconic","largesse","legerdemain","libertarian","licentious",
	"linchpin","litigant","maelstrom","maudlin","maverick","mawkish","maxim","mendacious","modicum","morass","mores","munificent","multifarious","nadir","negligent","neophyte","noisome","noxious",
	"obdurate","obfuscate","obstreperous","officious","onerous","ostensible","ostracism","palliate","panacea","paradigm","pariah","partisan","paucity","pejorative","pellucid","penchant","penurious",
	"pert","pernicious","pertinacious","phlegmatic","philanthropic","pithy","platitude","plaudit","plenitude","plethora","portent","potentate","preclude","predilection","preponderance","presage",
	"probity","proclivity","profligate","promulgate","proscribe","protean","prurient","puerile","pugnacious","pulchritude","punctilious","quaint","quixotic","quandary","recalcitrant","redoubtable",
	"relegate","remiss","reprieve","reprobate","rescind","requisition","rife","sanctimonious","sanguine","scurrilous","semaphore","serendipity","sobriety","solicitous","solipsism","spurious","staid",
	"stolid","subjugate","surfeit","surreptitious","swarthy","tangential","tome","toady","torpid","travesty","trenchant","trite","truculent","turpitude","ubiquitous","umbrage","upbraid","utilitarian",
	"veracity","vestige","vicissitude","vilify","virtuoso","vitriolic","vituperate","vociferous","wanton","winsome","yoke","zephyr","wily","tirade"];

const frequent3000Words = ["a","abandon","ability","able","abortion","about","above","abroad","absence","absolute","absolutely","absorb","abuse","academic","accept","access","accident","accompany","accomplish","according","account","accurate","accuse","achieve","achievement","acid","acknowledge","acquire","across","act","action","active","activist","activity","actor","actress","actual","actually","ad","adapt","add","addition","additional","address","adequate","adjust","adjustment","administration","administrator","admire","admission","admit","adolescent","adopt","adult","advance","advanced","advantage","adventure","advertising","advice","advise","adviser","advocate","affair","affect","afford","afraid","African","African-American","after","afternoon","again","against","age","agency","agenda","agent","aggressive","ago","agree","agreement","agricultural","ah","ahead","aid","aide","AIDS","aim","air","aircraft","airline","airport","album","alcohol","alive","all","alliance","allow","ally","almost","alone","along","already","also","alter","alternative","although","always","AM","amazing","American","among","amount","analysis","analyst","analyze","ancient","and","anger","angle","angry","animal","anniversary","announce","annual","another","answer","anticipate","anxiety","any","anybody","anymore","anyone","anything","anyway","anywhere","apart","apartment","apparent","apparently","appeal","appear","appearance","apple","application","apply","appoint","appointment","appreciate","approach","appropriate","approval","approve","approximately","Arab","architect","area","argue","argument","arise","arm","armed","army","around","arrange","arrangement","arrest","arrival","arrive","art","article","artist",
	"artistic","as","Asian","aside","ask","asleep","aspect","assault","assert","assess","assessment","asset","assign","assignment","assist","assistance","assistant","associate","association","assume","assumption","assure","at","athlete","athletic","atmosphere","attach","attack","attempt","attend","attention","attitude","attorney","attract","attractive","attribute","audience","author","authority","auto","available","average","avoid","award","aware","awareness","away","awful","baby","back","background","bad","badly","bag","bake","balance","ball","ban","band","bank","bar","barely","barrel","barrier","base","baseball","basic","basically","basis","basket","basketball","bathroom","battery","battle","be","beach","bean","bear","beat","beautiful","beauty","because","become","bed","bedroom","beer","before","begin","beginning","behavior","behind","being","belief","believe","bell","belong","below","belt","bench","bend","beneath","benefit","beside","besides","best","bet","better","between","beyond","Bible","big","bike","bill","billion","bind","biological","bird","birth","birthday","bit","bite","black","blade","blame","blanket","blind","block","blood","blow","blue","board","boat","body","bomb","bombing","bond","bone","book","boom","boot","border","born","borrow","boss","both","bother","bottle","bottom","boundary","bowl","box","boy","boyfriend","brain","branch","brand","bread","break","breakfast","breast","breath","breathe","brick","bridge","brief","briefly","bright","brilliant","bring","British","broad","broken","brother","brown","brush","buck","budget","build","building","bullet","bunch","burden","burn","bury","bus","business","busy","but","butter","button","buy","buyer",
	"by","cabin","cabinet","cable","cake","calculate","call","camera","camp","campaign","campus","can","Canadian","cancer","candidate","cap","capability","capable","capacity","capital","captain","capture","car","carbon","card","care","career","careful","carefully","carrier","carry","case","cash","cast","cat","catch","category","Catholic",
	"cause","ceiling","celebrate","celebration","celebrity","cell","center","central","century","CEO","ceremony","certain","certainly","chain","chair","chairman","challenge","chamber","champion","championship","chance","change","changing","channel","chapter","character","characteristic","characterize","charge","charity","chart","chase","cheap","check","cheek","cheese","chef","chemical","chest","chicken","chief","child","childhood","Chinese","chip","chocolate","choice","cholesterol","choose","Christian","Christmas","church","cigarette","circle","circumstance","cite","citizen","city","civil","civilian","claim","class","classic","classroom","clean","clear","clearly","client","climate","climb","clinic","clinical","clock","close","closely","closer","clothes","clothing","cloud","club","clue","cluster","coach","coal","coalition","coast","coat","code","coffee","cognitive","cold","collapse","colleague","collect","collection","collective","college","colonial","color","column","combination","combine","come","comedy","comfort","comfortable","command","commander","comment","commercial","commission","commit","commitment","committee","common","communicate","communication","community","company","compare","comparison","compete","competition","competitive","competitor","complain","complaint","complete","completely","complex","complicated","component","compose","composition","comprehensive","computer","concentrate","concentration","concept","concern","concerned","concert","conclude","conclusion","concrete","condition","conduct","conference","confidence","confident","confirm","conflict","confront","confusion","Congress","congressional","connect","connection","consciousness",
	"consensus","consequence","conservative","consider","considerable","consideration","consist","consistent","constant","constantly","constitute","constitutional","construct","construction","consultant","consume","consumer","consumption","contact","contain","container","contemporary","content","contest","context","continue","continued","contract","contrast","contribute","contribution","control","controversial","controversy","convention","conventional","conversation","convert","conviction","convince","cook","cookie","cooking","cool","cooperation","cop","cope","copy","core","corn","corner","corporate","corporation","correct","correspondent","cost","cotton","couch","could","council","counselor","count","counter","country","county","couple","courage","course","court","cousin","cover","coverage","cow","crack","craft","crash","crazy","cream","create","creation","creative","creature","credit","crew","crime","criminal","crisis","criteria","critic","critical","criticism","criticize","crop","cross","crowd","crucial","cry","cultural","culture","cup","curious","current","currently","curriculum","custom","customer","cut","cycle","dad","daily","damage","dance","danger","dangerous","dare","dark","darkness","data","date","daughter","day","dead","deal","dealer","dear","death","debate","debt","decade","decide","decision","deck","declare","decline","decrease","deep","deeply","deer","defeat","defend","defendant","defense","defensive","deficit","define","definitely","definition","degree","delay","deliver","delivery","demand","democracy","Democrat","democratic","demonstrate","demonstration","deny","department","depend","dependent","depending","depict","depression","depth",
	"deputy","derive","describe","description","desert","deserve","design","designer","desire","desk","desperate","despite","destroy","destruction","detail","detailed","detect","determine","develop","developing","development","device","devote","dialogue","die","diet","differ","difference","different","differently","difficult","difficulty","dig",
	"digital","dimension","dining","dinner","direct","direction","directly","director","dirt","dirty","disability","disagree","disappear","disaster","discipline","discourse","discover","discovery","discrimination","discuss","discussion","disease","dish","dismiss","disorder","display","dispute","distance","distant","distinct","distinction","distinguish","distribute","distribution","district","diverse","diversity","divide","division","divorce","DNA","do","doctor","document","dog","domestic","dominant","dominate","door","double","doubt","down","downtown","dozen","draft","drag","drama","dramatic","dramatically","draw","drawing","dream","dress","drink","drive","driver","drop","drug","dry","due","during","dust","duty","each","eager","ear","early","earn","earnings","earth","ease","easily","east","eastern","easy","eat","economic","economics","economist","economy","edge","edition","editor","educate","education","educational","educator","effect","effective","effectively","efficiency","efficient","effort","egg","eight","either","elderly","elect","election","electric","electricity","electronic","element","elementary","eliminate","elite","else","elsewhere","e-mail","embrace","emerge","emergency","emission","emotion","emotional","emphasis","emphasize","employ","employee","employer","employment","empty","enable","encounter","encourage","end","enemy","energy","enforcement","engage","engine","engineer","engineering","English","enhance","enjoy","enormous","enough","ensure","enter","enterprise","entertainment","entire","entirely","entrance","entry","environment","environmental","episode","equal","equally","equipment","era","error","escape","especially","essay","essential",
	"essentially","establish","establishment","estate","estimate","etc","ethics","ethnic","European","evaluate","evaluation","even","evening","event","eventually","ever","every","everybody","everyday","everyone","everything","everywhere","evidence","evolution","evolve","exact","exactly","examination","examine","example","exceed","excellent","except","exception","exchange","exciting","executive","exercise","exhibit","exhibition","exist","existence","existing","expand","expansion","expect","expectation","expense","expensive","experience","experiment","expert","explain","explanation","explode","explore","explosion","expose","exposure","express","expression","extend","extension","extensive","extent","external","extra","extraordinary","extreme","extremely","eye","fabric","face","facility","fact","factor","factory","faculty","fade","fail","failure","fair","fairly","faith","fall","false",
	"familiar","family","famous","fan","fantasy","far","farm","farmer","fashion","fast","fat","fate","father","fault","favor","favorite","fear","feature","federal","fee","feed","feel","feeling","fellow","female","fence","few","fewer","fiber","fiction","field","fifteen","fifth","fifty","fight","fighter","fighting","figure","file","fill","film","final","finally","finance","financial","find","finding","fine","finger","finish","fire","firm","first","fish","fishing","fit","fitness","five","fix","flag","flame","flat","flavor","flee","flesh","flight","float","floor","flow","flower","fly","focus","folk","follow","following","food","foot","football","for","force","foreign","forest","forever","forget","form","formal","formation","former","formula","forth","fortune","forward","found","foundation","founder","four","fourth","frame","framework","free","freedom","freeze","French","frequency","frequent","frequently","fresh","friend","friendly","friendship","from","front","fruit","frustration","fuel","full","fully","fun","function","fund","fundamental","funding","funeral","funny","furniture","furthermore","future","gain","galaxy","gallery","game","gang","gap","garage","garden","garlic","gas","gate","gather","gay","gaze","gear","gender","gene","general","generally","generate","generation","genetic","gentleman","gently","German","gesture","get","ghost","giant","gift","gifted","girl","girlfriend","give","given","glad","glance","glass","global","glove","go","goal","God","gold","golden","golf","good","government","governor","grab","grade","gradually","graduate","grain","grand","grandfather","grandmother","grant","grass","grave","gray","great","greatest","green","grocery",
	"ground","group","grow","growing","growth","guarantee","guard","guess","guest","guide","guideline","guilty","gun","guy","habit","habitat","hair","half","hall","hand","handful","handle","hang","happen","happy","hard","hardly","hat","hate","have","he","head","headline","headquarters","health","healthy","hear","hearing","heart","heat","heaven","heavily","heavy","heel","height","helicopter","hell","hello","help","helpful","her","here","heritage","hero","herself","hey","hi","hide","high","highlight","highly","highway","hill","him","himself","hip","hire","his","historian","historic","historical","history","hit","hold","hole","holiday","holy","home","homeless","honest","honey","honor","hope","horizon","horror","horse","hospital","host","hot","hotel","hour","house","household","housing","how","however","huge","human","humor","hundred","hungry","hunter","hunting","hurt","husband","hypothesis","I","ice","idea","ideal","identification","identify","identity","ie","if","ignore","ill","illegal","illness","illustrate","image","imagination","imagine","immediate","immediately","immigrant","immigration","impact","implement","implication","imply","importance","important","impose","impossible","impress","impression","impressive","improve","improvement","in","incentive","incident","include","including","income","incorporate","increase","increased","increasing","increasingly","incredible","indeed","independence","independent","index","Indian","indicate","indication","individual","industrial","industry","infant","infection","inflation","influence","inform","information","ingredient","initial","initially","initiative","injury","inner","innocent","inquiry","inside",
	"insight","insist","inspire","install","instance","instead","institution","institutional","instruction","instructor","instrument","insurance","intellectual","intelligence","intend","intense","intensity","intention","interaction","interest","interested","interesting","internal","international","Internet","interpret","interpretation","intervention",
	"interview","into","introduce","introduction","invasion","invest","investigate","investigation","investigator","investment","investor","invite","involve","involved","involvement","Iraqi","Irish","iron","Islamic","island","Israeli","issue","it","Italian","item","its","itself","jacket","jail","Japanese","jet","Jew","Jewish","job","join","joint","joke","journal","journalist","journey","joy","judge","judgment","juice","jump","junior","jury","just","justice","justify","keep","key","kick","kid","kill","killer","killing","kind","king","kiss","kitchen","knee","knife","knock","know","knowledge","lab","label","labor","laboratory","lack","lady","lake","land","landscape","language","lap","large","largely","last","late","later","Latin","latter","laugh","launch","law","lawn","lawsuit","lawyer","lay","layer","lead","leader","leadership","leading","leaf","league","lean","learn","learning","least","leather","leave","left","leg","legacy","legal","legend","legislation","legitimate","lemon","length","less","lesson","let","letter","level","liberal","library","license","lie","life","lifestyle","lifetime","lift","light","like","likely","limit","limitation","limited","line","link","lip","list","listen","literally","literary","literature","little","live","living","load","loan","local","locate","location","lock","long","long-term","look","loose","lose","loss","lost","lot","lots","loud","love","lovely","lover","low","lower","luck","lucky","lunch","lung","machine","mad","magazine","mail","main","mainly","maintain","maintenance","major","majority","make","maker","makeup","male","mall","man","manage","management","manager","manner","manufacturer","manufacturing","many","map",
	"margin","mark","market","marketing","marriage","married","marry","mask","mass","massive","master","match","material","math","matter","may","maybe","mayor","me","meal","mean","meaning","meanwhile","measure","measurement","meat","mechanism","media","medical","medication","medicine","medium","meet","meeting","member","membership","memory","mental","mention","menu","mere","merely","mess","message","metal","meter","method","Mexican","middle","might","military","milk","million","mind","mine","minister","minor","minority","minute","miracle","mirror","miss","missile","mission","mistake","mix","mixture","mm-hmm","mode","model","moderate","modern","modest","mom","moment","money","monitor","month","mood","moon","moral","more","moreover","morning","mortgage","most","mostly","mother","motion","motivation","motor","mount","mountain","mouse","mouth","move","movement","movie","Mr","Mrs","Ms","much","multiple","murder","muscle","museum","music","musical","musician","Muslim","must","mutual","my","myself","mystery","myth","naked","name","narrative","narrow","nation","national","native","natural","naturally","nature","near","nearby","nearly","necessarily","necessary","neck","need","negative","negotiate","negotiation","neighbor","neighborhood","neither","nerve","nervous","net","network","never","nevertheless","new","newly","news","newspaper","next","nice","night","nine","no","nobody","nod","noise","nomination","none","nonetheless","nor","normal","normally","north","northern","nose","not","note","nothing","notice","notion","novel","now","nowhere","n't","nuclear","number","numerous","nurse","nut","object","objective","obligation","observation","observe","observer",
	"obtain","obvious","obviously","occasion","occasionally","occupation","occupy","occur","ocean","odd","odds","of","off","offense","offensive","offer","office","officer","official","often","oh","oil","ok","okay","old","Olympic","on","once","one","ongoing","onion","online","only","onto","open","opening","operate","operating","operation","operator",
	"opinion","opponent","opportunity","oppose","opposite","opposition","option","or","orange","order","ordinary","organic","organization","organize","orientation","origin","original","originally","other","others","otherwise","ought","our","ourselves","out","outcome","outside","oven","over","overall","overcome","overlook","owe","own","owner","pace","pack","package","page","pain","painful","paint","painter","painting","pair","pale","Palestinian","palm","pan","panel","pant","paper","parent","park","parking","part","participant","participate","participation","particular","particularly","partly","partner","partnership","party","pass","passage","passenger","passion","past","patch","path","patient","pattern","pause","pay","payment","PC","peace","peak","peer","penalty","people","pepper","per","perceive","percentage","perception","perfect","perfectly","perform","performance","perhaps","period","permanent","permission","permit","person","personal","personality","personally","personnel","perspective","persuade","pet","phase","phenomenon","philosophy","phone","photo","photograph","photographer","phrase","physical","physically","physician","piano","pick","picture","pie","piece","pile","pilot","pine","pink","pipe","pitch","place","plan","plane","planet","planning","plant","plastic","plate","platform","play","player","please","pleasure","plenty","plot","plus","PM","pocket","poem","poet","poetry","point","pole","police","policy","political","politically","politician","politics","poll","pollution","pool","poor","pop","popular","population","porch","port","portion","portrait","portray","pose","position","positive","possess","possibility","possible","possibly",
	"post","pot","potato","potential","potentially","pound","pour","poverty","powder","power","powerful","practical","practice","pray","prayer","precisely","predict","prefer","preference","pregnancy","pregnant","preparation","prepare","prescription","presence","present","presentation","preserve","president","presidential","press","pressure","pretend","pretty","prevent","previous","previously","price","pride","priest","primarily","primary","prime","principal","principle","print","prior","priority","prison","prisoner","privacy","private","probably","problem","procedure","proceed","process","produce","producer","product","production","profession","professional","professor","profile","profit","program","progress","project","prominent","promise","promote","prompt","proof","proper","properly","property","proportion","proposal","propose","proposed","prosecutor","prospect","protect","protection","protein","protest","proud","prove","provide",
	"provider","province","provision","psychological","psychologist","psychology","public","publication","publicly","publish","publisher","pull","punishment","purchase","pure","purpose","pursue","push","put","qualify","quality","quarter","quarterback","question","quick","quickly","quiet","quietly","quit","quite","quote","race","racial","radical","radio","rail","rain","raise","range","rank","rapid","rapidly","rare","rarely","rate","rather","rating","ratio","raw","reach","react","reaction","read","reader","reading","ready","real","reality","realize","really","reason","reasonable","recall","receive","recent","recently","recipe","recognition","recognize","recommend","recommendation","record","recording","recover","recovery","recruit","red","reduce","reduction","refer","reference","reflect","reflection","reform","refugee","refuse","regard","regarding","regardless","regime","region","regional","register","regular","regularly","regulate","regulation","reinforce","reject","relate","relation","relationship","relative","relatively","relax","release","relevant","relief","religion","religious","rely","remain","remaining","remarkable","remember","remind","remote","remove","repeat","repeatedly","replace","reply","report","reporter","represent","representation","representative","Republican","reputation","request","require","requirement","research","researcher","resemble","reservation","resident","resist","resistance","resolution","resolve","resort","resource","respect","respond","respondent","response","responsibility","responsible","rest","restaurant","restore","restriction","result","retain","retire","retirement","return","reveal","revenue","review",
	"revolution","rhythm","rice","rich","rid","ride","rifle","right","ring","rise","risk","river","road","rock","role","roll","romantic","roof","room","root","rope","rose","rough","roughly","round","route","routine","row","rub","rule","run","running","rural","rush","Russian","sacred","sad","safe","safety","sake","salad","salary","sale","sales","salt","same","sample","sanction","sand","satellite","satisfaction","satisfy","sauce","save","saving","say","scale","scandal","scared","scenario","scene","schedule","scheme","scholar","scholarship","school","science","scientific","scientist","scope","score","scream","screen","script","sea","search","season","seat","second","secret","secretary","section","sector","secure","security","see","seed","seek","seem","segment","seize","select","selection","self","sell","Senate","senator","send","senior","sense","sensitive","sentence","separate","sequence","series","serious","seriously","serve","service","session","set","setting","settle","settlement","seven","several","severe","sex","sexual","shade","shadow","shake","shall","shape","share","sharp","she","sheet","shelf","shell","shelter","shift","shine","ship","shirt","shit","shock","shoe","shoot","shooting","shop","shopping","shore","short","shortly","shot","should","shoulder","shout","show","shower","shrug","shut","sick","side","sigh","sight","sign","signal","significance","significant","significantly","silence","silent","silver","similar","similarly","simple","simply","sin","since","sing","singer","single","sink","sir","sister","sit","site","situation","six","size","ski","skill","skin","sky","slave","sleep","slice","slide","slight","slightly","slip","slow",
	"slowly","small","smart","smell","smile","smoke","smooth","snap","snow","so","so-called","soccer","social","society","soft","software","soil","solar","soldier","solid","solution","solve","some","somebody","somehow","someone","something","sometimes","somewhat","somewhere","son","song","soon","sophisticated","sorry","sort","soul","sound","soup","source","south",
	"southern","Soviet","space","Spanish","speak","speaker","special","specialist","species","specific","specifically","speech","speed","spend","spending","spin","spirit","spiritual","split","spokesman","sport","spot","spread","spring","square","squeeze","stability","stable","staff","stage","stair","stake","stand","standard","standing","star","stare","start","state","statement","station","statistics","status","stay","steady","steal","steel","step","stick","still","stir","stock","stomach","stone","stop","storage","store","storm","story","straight","strange","stranger","strategic","strategy","stream","street","strength","strengthen","stress","stretch","strike","string","strip","stroke","strong","strongly","structure","struggle","student","studio","study","stuff","stupid","style","subject","submit","subsequent","substance","substantial","succeed","success","successful","successfully","such","sudden","suddenly","sue","suffer","sufficient","sugar","suggest","suggestion","suicide","suit","summer","summit","sun","super","supply","support","supporter","suppose","supposed","Supreme","sure","surely","surface","surgery","surprise","surprised","surprising","surprisingly","surround","survey","survival","survive","survivor","suspect","sustain","swear","sweep","sweet","swim","swing","switch","symbol","symptom","system","table","tablespoon","tactic","tail","take","tale","talent","talk","tall","tank","tap","tape","target","task","taste","tax","taxpayer","tea","teach","teacher","teaching","team","tear","teaspoon","technical","technique","technology","teen","teenager","telephone","telescope","television","tell","temperature","temporary","ten","tend",
	"tendency","tennis","tension","tent","term","terms","terrible","territory","terror","terrorism","terrorist","test","testify","testimony","testing","text","than","thank","thanks","that","the","theater","their","them","theme","themselves","then","theory","therapy","there","therefore","these","they","thick","thin","thing","think","thinking","third","thirty","this","those","though","thought","thousand","threat","threaten","three","throat","through","throughout","throw","thus","ticket","tie","tight","time","tiny","tip","tire","tired","tissue","title","to","tobacco","today","toe","together","tomato","tomorrow","tone","tongue","tonight","too","tool","tooth","top","topic","toss","total","totally","touch","tough","tour","tourist","tournament","toward","towards","tower","town","toy","trace","track","trade","tradition","traditional","traffic","tragedy","trail","train","training","transfer","transform","transformation","transition","translate","transportation","travel","treat","treatment","treaty","tree","tremendous","trend","trial","tribe","trick","trip","troop","trouble","truck","true","truly","trust","truth","try","tube","tunnel","turn","TV","twelve","twenty","twice","twin","two","type","typical","typically","ugly","ultimate","ultimately","unable","uncle","under","undergo","understand","understanding","unfortunately","uniform","union","unique","unit","United","universal","universe","university","unknown","unless","unlike","unlikely","until","unusual","up","upon","upper","urban","urge","us","use","used","useful","user","usual","usually","utility","vacation","valley","valuable","value","variable","variation","variety","various","vary","vast",
	"vegetable","vehicle","venture","version","versus","very","vessel","veteran","via","victim","victory","video","view","viewer","village","violate","violation","violence","violent","virtually","virtue","virus","visible","vision","visit","visitor","visual","vital","voice","volume","volunteer","vote","voter","vs","vulnerable","wage","wait","wake","walk","wall","wander",
	"want","war","warm","warn","warning","wash","waste","watch","water","wave","way","we","weak","wealth","wealthy","weapon","wear","weather","wedding","week","weekend","weekly","weigh","weight","welcome","welfare","well","west","western","wet","what","whatever","wheel","when","whenever","where","whereas","whether","which","while","whisper","white","who","whole","whom","whose","why","wide","widely","widespread","wife","wild","will","willing","win","wind","window","wine","wing","winner","winter","wipe","wire","wisdom","wise","wish","with","withdraw","within","without","witness","woman","wonder","wonderful","wood","wooden","word","work","worker","working","works","workshop","world","worried","worry","worth","would","wound","wrap","write","writer","writing","wrong","yard","yeah","year","yell","yellow","yes","yesterday","yet","yield","you","young","your","yours","yourself","youth","zone"];

// stemming variables
const step2list = {
	"ational" : "ate",
	"tional" : "tion",
	"enci" : "ence",
	"anci" : "ance",
	"izer" : "ize",
	"bli" : "ble",
	"alli" : "al",
	"entli" : "ent",
	"eli" : "e",
	"ousli" : "ous",
	"ization" : "ize",
	"ation" : "ate",
	"ator" : "ate",
	"alism" : "al",
	"iveness" : "ive",
	"fulness" : "ful",
	"ousness" : "ous",
	"aliti" : "al",
	"iviti" : "ive",
	"biliti" : "ble",
	"logi" : "log"
  };

const step3list = {
	"icate" : "ic",
	"ative" : "",
	"alize" : "al",
	"iciti" : "ic",
	"ical" : "ic",
	"ful" : "",
	"ness" : ""
  };

const c = "[^aeiou]";          // consonant
const v = "[aeiouy]";          // vowel
const C = c + "[^aeiouy]*";    // consonant sequence
const V = v + "[aeiou]*";      // vowel sequence

const mgr0 = "^(" + C + ")?" + V + C,               // [C]VC... is m>0
  meq1 = "^(" + C + ")?" + V + C + "(" + V + ")?$",  // [C]VC[V] is m=1
  mgr1 = "^(" + C + ")?" + V + C + V + C,       // [C]VCVC... is m>1
  s_v = "^(" + C + ")?" + v;                   // vowel in stem


	
// Starting point: event handler to ensure DOM is loaded before start is called..
// Connect the framework to the code - 
window.addEventListener('DOMContentLoaded', (event) => start());

// setup data-structures and conduct analyses
async function start()
	{
	// do the text level analysis
	console.log("%cREADABILITY" + "%cFrode Eika Sandnes" + "%cOslo Metropolitan University, Aug 2022", "font-size:xx-large; color: cyan; background: black;","font-size:large; color: magenta; background: black;","color: yellow; background: black;");
	const injectedSpans = injectTextWithSpan();
	analyseTextSpan(injectedSpans);
	}
	
// insert span in all words in all tags so that rendering can be analyzed in detail.		
function injectTextWithSpan()
	{
	let injectedRootSpans = [];	// keeping track of the root spans for text segments
	let textCounter = 1;
	// Traverse all elements
	for (const e of document.querySelectorAll("*")) 
		{
		if (isStopTag(e))		// skip stop tag elmements (html, script, etc.)
			{
			continue;
			}
		// check each child
		for (var child of e.childNodes)
			{
			if (child.nodeType == 3)	// text type
				{
				let content = child.nodeValue;
					content = content.replace(/\n/g,"").replace(/\t/g,"").trim();	// clean up whitespace thml formatting
				if (content.length > 0)		// ignore white space texts
					{			
					let newContent = "";
					let words = content.split(" ");		// split content into words
					let wordCounter = 0;
					for (const word of words)	// attach a span tag for each word
						{
						newContent += "<span id=\"q"+textCounter+"."+wordCounter+"\">"+word+"</span> ";
						wordCounter++;
						}
					// create sorrounding span
					const span = document.createElement("span");
					// give id to span
					span.id = "e"+textCounter;
					// update the text counter
					textCounter++;
					// set the innertext of span
					span.innerHTML = newContent;
					// attach the new span to the DOM	
					e.insertBefore(span,child);
					// delete child
					child.remove();

					injectedRootSpans.push(span); 					
					}				
				}
			}
		}		
	let injectedWordSpans = builtSpanStructure(injectedRootSpans);	
	return {passages:injectedRootSpans,words:injectedWordSpans};
	}

// insert span in all words in all tags so that rendering can be analyzed in detail.		
function injectTextWithSpanOld()
	{
	let injectedRootSpans = [];	// keeping track of the root spans for text segments
	let textCounter = 1;
	// Traverse all elements
	for (const e of document.querySelectorAll("*")) 
		{
		if (isStopTag(e))		// skip stop tag elmements (html, script, etc.)
			{
			continue;
			}
		// check each child
		let content = "";
		for (var child of e.childNodes)
			{
			if (child.nodeType == 3)	// text type
				{
				content += child.nodeValue;
				}
			}
		content = content.replace(/\n/g,"").replace(/\t/g,"").trim();	// clean up whitespace thml formatting
		if (content.length > 0)		// ignore white space texts
			{			
			let newContent = "";
			let words = content.split(" ");		// split content into words
			let wordCounter = 0;
			for (const word of words)	// attach a span tag for each word
				{
				newContent += "<span id=\"q"+textCounter+"."+wordCounter+"\">"+word+"</span> ";
				wordCounter++;
				}
			// delete child
			child.remove();
			// create sorrounding span
			const span = document.createElement("span");
			// give id to span
			span.id = "e"+textCounter;
			// update the text counter
			textCounter++;
			// set the innertext of span
			span.innerHTML = newContent;
			// attach the new span to the DOM	
			e.appendChild(span);	
			injectedRootSpans.push(span); 					
			}
		}		
	let injectedWordSpans = builtSpanStructure(injectedRootSpans);	
	return {passages:injectedRootSpans,words:injectedWordSpans};
	}

function builtSpanStructure(injectedRootSpans)
	{
	// build up structre for easy access - array for arrays (array of span texts, with span words)
	let injectedSpans = [];
	for (const root of injectedRootSpans)
		{
		let textSegment = Array.from(root.querySelectorAll("span"));	// spans for an entire text segment
		textSegment = textSegment	
					.filter(val => val.id.charAt(0) === "q");			// remove non-inserted spans originally present
		injectedSpans.push(textSegment);
		}	
	return injectedSpans;
	}


function insertTooltip(e,txt)
	{
	e.title = txt;
	}

function analyseTextSpan(injectedSpans)
	{
	// highlight passages
	for (const e of injectedSpans.passages)
		{
		const s = getScores(e.textContent);
		insertTooltip(e,JSON.stringify(s,null,2));	
		let readability = s.medianGrade;
		readability = (readability > 0 )? readability: 0;
		let hue = (120 - 10*readability).toFixed(0);
		const colour = "hsl("+hue+",100%,75%)";
		highlightPassage(e,"red",colour);
		}
	// highlight words	
	for (const passages of injectedSpans.words)
		{
		for (const e of passages)
			{
			let word = e.textContent.toLowerCase()
				    .replace('.', '')
					    .replace(',', '')
					    .replace('!', '')
					    .replace('?', '')
					    .replace(' ', '')
					    .replace('/[^a-z]/gi', '');
			let stemmedWord = stemmer(word);
			if (frequent3000Words.includes(word) || frequent3000Words.includes(stemmedWord))
				{
				highlightWord(e,"green");					
				}
			else if (SATwords.includes(word) || SATwords.includes(stemmedWord))
				{
				highlightWord(e,"red");					
				}
			else	
				{
				highlightWord(e,"black");							
				}
			}
		}
	}

function highlightWord(e,fg)
	{
	e.style.color = fg;
	}
function highlightPassage(e,fg,bg)
	{
	e.style.color = fg;
	e.style.background = bg;
	}


// Utility function browser: return true if the tag is in the set of stop-tags, i.e. tags that are not to be be considered
// extremely important that style is included here otherwise the internal styles become corrupted by span tags
// Noscript causes problems
function isStopTag(e)
	{
	return ["html","head","script","link","title","style","meta","link","noscript"].includes(e.tagName.toLowerCase());
	}


// BORROWED CODE - readability
// changed function declaration to allow hoisting 
function getScores(text) 
	{
		/* 
		 * To speed the script up, you can set a sampling rate in words. For example, if you set
		 * sampleLimit to 1000, only the first 1000 words will be parsed from the input text.
		 * Set to 0 to never sample.
		 */     
		var sampleLimit = 1000;
	  
		// Manual rewrite of the textstat Python library (https://github.com/shivam5992/textstat/)
	  
		/* 
		 * Regular expression to identify a sentence. No, it's not perfect. 
		 * Fails e.g. with abbreviations and similar constructs mid-sentence.
		 */
		var sentenceRegex = new RegExp('[.?!]\\s[^a-z]', 'g');
	  
		/*
		 * Regular expression to identify a syllable. No, it's not perfect either.
		 * It's based on English, so other languages with different vowel / consonant distributions
		 * and syllable definitions need a rewrite.
		 * Inspired by https://bit.ly/2VK9dz1
		 */
		var syllableRegex = new RegExp('[aiouy]+e*|e(?!d$|ly).|[td]ed|le$', 'g');
	  
		// Baseline for FRE - English only
		var freBase = {
		  base: 206.835,
		  sentenceLength: 1.015,
		  syllablesPerWord: 84.6,
		  syllableThreshold: 3
		};
	  
		var cache = {};
	  
		var punctuation = ['!','"','#','$','%','&','\'','(',')','*','+',',','-','.','/',':',';','<','=','>','?','@','[',']','^','_','`','{','|','}','~'];
	  
		function legacyRound(number, precision) 
		{
		  var k = Math.pow(10, (precision || 0));
		  return Math.floor((number * k) + 0.5 * Math.sign(number)) / k;
		};
	  
		function charCount(text) 
			{
		  if (cache.charCount) return cache.charCount;
		  if (sampleLimit > 0) text = text.split(' ').slice(0, sampleLimit).join(' ');
		  text = text.replace(/\s/g, '');
		  return cache.charCount = text.length;
		};
	  
		function removePunctuation(text) 
		{
		  return text.split('').filter(function(c) {
			return punctuation.indexOf(c) === -1;
		  }).join('');
		};
	  
		function letterCount(text) 
		{
		  if (sampleLimit > 0) text = text.split(' ').slice(0, sampleLimit).join(' ');
		  text = text.replace(/\s/g, '');
		  return removePunctuation(text).length;
		};
	  
		function lexiconCount(text, useCache, ignoreSample) 
		{
		  if (useCache && cache.lexiconCount) return cache.lexiconCount;
		  if (ignoreSample !== true && sampleLimit > 0) text = text.split(' ').slice(0, sampleLimit).join(' ');
		  text = removePunctuation(text);
		  var lexicon = text.split(' ').length;
		  return useCache ? cache.lexiconCount = lexicon : lexicon;
		};
	  
		function getWords(text, useCache) 
		{
		  if (useCache && cache.getWords) return cache.getWords;
		  if (sampleLimit > 0) text = text.split(' ').slice(0, sampleLimit).join(' ');
		  text = text.toLowerCase();
		  text = removePunctuation(text);
		  var words = text.split(' ');
		  return useCache ? cache.getWords = words : words;
		}
	  
		function syllableCount (text, useCache) 
		{
		  if (useCache && cache.syllableCount) return cache.syllableCount;
		  var count = 0;
		  var syllables = getWords(text, useCache).reduce(function(a, c) {  
			return a + (c.match(syllableRegex) || [1]).length;
		  }, 0);
		  return useCache ? cache.syllableCount = syllables : syllables;
		};
	  
		function polySyllableCount (text, useCache) 
		{
		  var count = 0;
		  getWords(text, useCache).forEach(function(word) {
			var syllables = syllableCount(word);
			if (syllables >= 3) {
			  count += 1;
			}
		  });
		  return count;
		};
	  
		function sentenceCount (text, useCache) 
		{
		  if (useCache && cache.sentenceCount) return cache.sentenceCount;
		  if (sampleLimit > 0) text = text.split(' ').slice(0, sampleLimit).join(' ');
		  var ignoreCount = 0;
		  var sentences = text.split(sentenceRegex);
		  sentences.forEach(function(s) {
			if (lexiconCount(s, true, false) <= 2) { ignoreCount += 1; }
		  });
		  var count = Math.max(1, sentences.length - ignoreCount);
		  return useCache ? cache.sentenceCount = count : count;
		};
	  
		function avgSentenceLength(text) 
		{
		  var avg = lexiconCount(text, true) / sentenceCount(text, true);
		  return legacyRound(avg, 2);
		};
	  
		function avgSyllablesPerWord(text) 
		{
		  var avg = syllableCount(text, true) / lexiconCount(text, true);
		  return legacyRound(avg, 2);
		};
	  
		function avgCharactersPerWord(text) 
		{
		  var avg = charCount(text) / lexiconCount(text, true);
		  return legacyRound(avg, 2);
		};
	  
		function avgLettersPerWord(text) 
		{
		  var avg = letterCount(text, true) / lexiconCount(text, true);
		  return legacyRound(avg, 2);
		};
	  
		function avgSentencesPerWord(text) 
		{
		  var avg = sentenceCount(text, true) / lexiconCount(text, true);
		  return legacyRound(avg, 2);
		};
	  
		function fleschReadingEase(text) 
		{
		  var sentenceLength = avgSentenceLength(text);
		  var syllablesPerWord = avgSyllablesPerWord(text);
		  return legacyRound(
			freBase.base - 
			freBase.sentenceLength * sentenceLength - 
			freBase.syllablesPerWord * syllablesPerWord,
			2
		  );
		};
	  
		function fleschKincaidGrade(text) 
		{
		  var sentenceLength = avgSentenceLength(text);
		  var syllablesPerWord = avgSyllablesPerWord(text);
		  return legacyRound(
			0.39 * sentenceLength +
			11.8 * syllablesPerWord -
			15.59,
			2
		  );
		};
	  
		function smogIndex(text) 
		{
		  var sentences = sentenceCount(text, true);
		  if (sentences >= 3) {
			var polySyllables = polySyllableCount(text, true);
			var smog = 1.043 * (Math.pow(polySyllables * (30 / sentences), 0.5)) + 3.1291;
			return legacyRound(smog, 2);
		  }
		  return 0.0;
		};
	  
		function colemanLiauIndex(text) 
		{
		  var letters = legacyRound(avgLettersPerWord(text) * 100, 2);
		  var sentences = legacyRound(avgSentencesPerWord(text) * 100, 2);
		  var coleman = 0.0588 * letters - 0.296 * sentences - 15.8;
		  return legacyRound(coleman, 2);
		};
	  
		function automatedReadabilityIndex(text) 
		{
		  var chars = charCount(text);
		  var words = lexiconCount(text, true);
		  var sentences = sentenceCount(text, true);
		  var a = chars / words;
		  var b = words / sentences;
		  var readability = (
			4.71 * legacyRound(a, 2) +
			0.5 * legacyRound(b, 2) -
			21.43
		  );
		  return legacyRound(readability, 2); 
		};
	  
		function linsearWriteFormula(text) 
		{
		  var easyWord = 0;
		  var difficultWord = 0;
		  var roughTextFirst100 = text.split(' ').slice(0,100).join(' ');
		  var plainTextListFirst100 = getWords(text, true).slice(0,100);
		  plainTextListFirst100.forEach(function(word) {
			if (syllableCount(word) < 3) {
			  easyWord += 1;
			} else {
			  difficultWord += 1;
			}
		  });
		  var number = (easyWord + difficultWord * 3) / sentenceCount(roughTextFirst100);
		  if (number <= 20) {
			number -= 2;
		  }
		  return legacyRound(number / 2, 2);
		};
	  
		function rix(text) 
		{
		  var words = getWords(text, true);
		  var longCount = words.filter(function(word) {
			return word.length > 6;
		  }).length;
		  var sentencesCount = sentenceCount(text, true);
		  return legacyRound(longCount / sentencesCount, 2);
		};
	  
		function readingTime(text) 
		{
		  var wordsPerSecond = 4.17;
		  // To get full reading time, ignore cache and sample
		  return legacyRound(lexiconCount(text, false, true) / wordsPerSecond, 2);
		};
	  
		// Build textStandard
		var grade = [];
		var obj = {};
		(function() {
	  
		  // FRE
		  var fre = obj.fleschReadingEase = fleschReadingEase(text);
		  if (fre < 100 && fre >= 90) {
			grade.push(5);
		  } else if (fre < 90 && fre >= 80) {
			grade.push(6);
		  } else if (fre < 80 && fre >= 70) {
			grade.push(7);
		  } else if (fre < 70 && fre >= 60) {
			grade.push(8);
			grade.push(9);
		  } else if (fre < 60 && fre >= 50) {
			grade.push(10);
		  } else if (fre < 50 && fre >= 40) {
			grade.push(11);
		  } else if (fre < 40 && fre >= 30) {
			grade.push(12);
		  } else {
			grade.push(13);
		  }
	  
		  // FK
		  var fk = obj.fleschKincaidGrade = fleschKincaidGrade(text);
		  grade.push(Math.floor(fk));
		  grade.push(Math.ceil(fk));
	  
		  // SMOG
		  var smog = obj.smogIndex = smogIndex(text);
		  grade.push(Math.floor(smog));
		  grade.push(Math.ceil(smog));
	  
		  // CL
		  var cl = obj.colemanLiauIndex = colemanLiauIndex(text);
		  grade.push(Math.floor(cl));
		  grade.push(Math.ceil(cl));
	  
		  // ARI
		  var ari = obj.automatedReadabilityIndex = automatedReadabilityIndex(text);
		  grade.push(Math.floor(ari));
		  grade.push(Math.ceil(ari));
	  
		  // LWF
		  var lwf = obj.linsearWriteFormula = linsearWriteFormula(text);
		  grade.push(Math.floor(lwf));
		  grade.push(Math.ceil(lwf));
	  
		  // RIX
		  var rixScore = obj.rix = rix(text);
		  if (rixScore >= 7.2) {
			grade.push(13);
		  } else if (rixScore < 7.2 && rixScore >= 6.2) {
			grade.push(12);
		  } else if (rixScore < 6.2 && rixScore >= 5.3) {
			grade.push(11);
		  } else if (rixScore < 5.3 && rixScore >= 4.5) {
			grade.push(10);
		  } else if (rixScore < 4.5 && rixScore >= 3.7) {
			grade.push(9);
		  } else if (rixScore < 3.7 && rixScore >= 3.0) {
			grade.push(8);
		  } else if (rixScore < 3.0 && rixScore >= 2.4) {
			grade.push(7);
		  } else if (rixScore < 2.4 && rixScore >= 1.8) {
			grade.push(6);
		  } else if (rixScore < 1.8 && rixScore >= 1.3) {
			grade.push(5);
		  } else if (rixScore < 1.3 && rixScore >= 0.8) {
			grade.push(4);
		  } else if (rixScore < 0.8 && rixScore >= 0.5) {
			grade.push(3);
		  } else if (rixScore < 0.5 && rixScore >= 0.2) {
			grade.push(2);
		  } else {
			grade.push(1);
		  }
	  
		  // Find median grade
		  grade = grade.sort(function(a, b) { return a - b; });
		  var midPoint = Math.floor(grade.length / 2);
		  var medianGrade = legacyRound(
			grade.length % 2 ? 
			grade[midPoint] : 
			(grade[midPoint-1] + grade[midPoint]) / 2.0
		  );
		  obj.medianGrade = medianGrade;
	  
		})();
	  
		obj.readingTime = readingTime(text);
	  
		return obj;
	  };

// Reference Javascript Porter Stemmer. This code corresponds to the original
// 1980 paper available here: http://tartarus.org/martin/PorterStemmer/def.txt
// The latest version of this code is available at https://github.com/kristopolous/Porter-Stemmer
//
// Original comment:
// Porter stemmer in Javascript. Few comments, but it's easy to follow against the rules in the original
// paper, in
//
//  Porter, 1980, An algorithm for suffix stripping, Program, Vol. 14,
//  no. 3, pp 130-137,
//
// see also http://www.tartarus.org/~martin/PorterStemmer


function stemmer(w)
	{
	  var
		stem,
		suffix,
		firstch,
		re,
		re2,
		re3,
		re4,
		debugFunction,
		origword = w;
  
  
	  if (w.length < 3) { return w; }
  
	  firstch = w.substr(0,1);
	  if (firstch == "y") {
		w = firstch.toUpperCase() + w.substr(1);
	  }
  
	  // Step 1a
	  re = /^(.+?)(ss|i)es$/;
	  re2 = /^(.+?)([^s])s$/;
  
	  if (re.test(w)) { 
		w = w.replace(re,"$1$2"); 
  
	  } else if (re2.test(w)) {
		w = w.replace(re2,"$1$2"); 
	  }
  
	  // Step 1b
	  re = /^(.+?)eed$/;
	  re2 = /^(.+?)(ed|ing)$/;
	  if (re.test(w)) {
		var fp = re.exec(w);
		re = new RegExp(mgr0);
		if (re.test(fp[1])) {
		  re = /.$/;
		  w = w.replace(re,"");
		}
	  } else if (re2.test(w)) {
		var fp = re2.exec(w);
		stem = fp[1];
		re2 = new RegExp(s_v);
		if (re2.test(stem)) {
		  w = stem;
  
		  re2 = /(at|bl|iz)$/;
		  re3 = new RegExp("([^aeiouylsz])\\1$");
		  re4 = new RegExp("^" + C + v + "[^aeiouwxy]$");
  
		  if (re2.test(w)) { 
			w = w + "e"; 
	  
		  } else if (re3.test(w)) { 
			re = /.$/; 
			w = w.replace(re,""); 
  
		  } else if (re4.test(w)) { 
			w = w + "e"; 
		  }
		}
	  }
  
	  // Step 1c
	  re = new RegExp("^(.*" + v + ".*)y$");
	  if (re.test(w)) {
		var fp = re.exec(w);
		stem = fp[1];
		w = stem + "i";
	  }
  
	  // Step 2
	  re = /^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$/;
	  if (re.test(w)) {
		var fp = re.exec(w);
		stem = fp[1];
		suffix = fp[2];
		re = new RegExp(mgr0);
		if (re.test(stem)) {
		  w = stem + step2list[suffix];
		}
	  }
  
	  // Step 3
	  re = /^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/;
	  if (re.test(w)) {
		var fp = re.exec(w);
		stem = fp[1];
		suffix = fp[2];
		re = new RegExp(mgr0);
		if (re.test(stem)) {
		  w = stem + step3list[suffix];
			}
	  }
  
	  // Step 4
	  re = /^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$/;
	  re2 = /^(.+?)(s|t)(ion)$/;
	  if (re.test(w)) {
		var fp = re.exec(w);
		stem = fp[1];
		re = new RegExp(mgr1);
		if (re.test(stem)) {
		  w = stem;
		}
	  } else if (re2.test(w)) {
		var fp = re2.exec(w);
		stem = fp[1] + fp[2];
		re2 = new RegExp(mgr1);
		if (re2.test(stem)) {
		  w = stem;
			}
	  }
  
	  // Step 5
	  re = /^(.+?)e$/;
	  if (re.test(w)) {
		var fp = re.exec(w);
		stem = fp[1];
		re = new RegExp(mgr1);
		re2 = new RegExp(meq1);
		re3 = new RegExp("^" + C + v + "[^aeiouwxy]$");
		if (re.test(stem) || (re2.test(stem) && !(re3.test(stem)))) {
		  w = stem;
		}
	  }
  
	  re = /ll$/;
	  re2 = new RegExp(mgr1);
	  if (re.test(w) && re2.test(w)) {
		re = /.$/;
		w = w.replace(re,"");
	  }
  
	  // and turn initial Y back to y
	  if (firstch == "y") {
		w = firstch.toLowerCase() + w.substr(1);
	  }
  
	  return w;
	}

